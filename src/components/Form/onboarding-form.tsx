import React, { useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Send } from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DATA / TYPES
 * ---------------------------------------------------------------------------
 */

interface ProjectFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  features: string;
}

const INITIAL_DATA: ProjectFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  description: "",
  budget: "",
  timeline: "",
  features: "",
};

const PROJECT_TYPES = [
  "Website",
  "Mobile App",
  "Custom Software",
  "UI/UX Design",
  "Other",
];

const BUDGET_RANGES = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
];

const TIMELINES = ["ASAP", "1–2 months", "3–6 months", "Flexible"];

const STEP_LABELS = ["Contact", "Project", "Scope", "Review"];
const TOTAL_STEPS = STEP_LABELS.length;

type FormErrors = Partial<Record<keyof ProjectFormData, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validates only the fields relevant to a given step; returns error map. */
function validateStep(step: number, data: ProjectFormData): FormErrors {
  const errors: FormErrors = {};

  if (step === 0) {
    if (!data.fullName.trim()) errors.fullName = "Enter your name.";
    if (!data.email.trim()) errors.email = "Enter your email.";
    else if (!EMAIL_PATTERN.test(data.email))
      errors.email = "Enter a valid email address.";
  }

  if (step === 1) {
    if (!data.projectType) errors.projectType = "Choose a project type.";
    if (!data.description.trim())
      errors.description = "Tell us briefly what you're building.";
  }

  if (step === 2) {
    if (!data.budget) errors.budget = "Select a budget range.";
    if (!data.timeline) errors.timeline = "Select a timeline.";
  }

  return errors;
}

/**
 * ---------------------------------------------------------------------------
 * REUSABLE FIELDS
 * ---------------------------------------------------------------------------
 */

interface FieldShellProps {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}

const FieldShell: FC<FieldShellProps> = ({
  label,
  htmlFor,
  error,
  optional,
  children,
}) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={htmlFor} className="text-sm font-medium text-gray-200">
      {label}
      {optional && (
        <span className="ml-1.5 text-xs font-normal text-gray-500">
          (optional)
        </span>
      )}
    </label>
    {children}
    {error && (
      <p id={`${htmlFor}-error`} className="text-xs text-red-400" role="alert">
        {error}
      </p>
    )}
  </div>
);

const inputClasses =
  "w-full rounded-lg border border-gray-800 bg-[#0b1329]/60 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors focus:border-[#f59e0b]/60 focus:ring-1 focus:ring-[#f59e0b]/40";

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  optional?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  optional,
}) => (
  <FieldShell label={label} htmlFor={id} error={error} optional={optional}>
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={[
        inputClasses,
        error ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/30" : "",
      ].join(" ")}
    />
  </FieldShell>
);

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  optional?: boolean;
  rows?: number;
}

const TextAreaField: FC<TextAreaFieldProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  optional,
  rows = 4,
}) => (
  <FieldShell label={label} htmlFor={id} error={error} optional={optional}>
    <textarea
      id={id}
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={[
        inputClasses,
        "resize-none",
        error ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/30" : "",
      ].join(" ")}
    />
  </FieldShell>
);

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  error?: string;
}

const SelectField: FC<SelectFieldProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Select…",
  error,
}) => (
  <FieldShell label={label} htmlFor={id} error={error}>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={[
        inputClasses,
        "appearance-none",
        error ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/30" : "",
      ].join(" ")}
    >
      <option value="" disabled className="text-gray-500">
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-[#0b1329] text-white">
          {opt}
        </option>
      ))}
    </select>
  </FieldShell>
);

/**
 * ---------------------------------------------------------------------------
 * STEP INDICATOR — reuses the trace-line motif from the process section:
 * numbered nodes connected by a line that fills amber as the user progresses.
 * ---------------------------------------------------------------------------
 */

const StepIndicator: FC<{ currentStep: number }> = ({ currentStep }) => (
  <div className="mb-10">
    <ol className="flex items-center">
      {STEP_LABELS.map((label, index) => {
        const isComplete = index < currentStep;
        const isCurrent = index === currentStep;
        const isLast = index === STEP_LABELS.length - 1;

        return (
          <li key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-300",
                  isComplete
                    ? "border-[#f59e0b] bg-[#f59e0b] text-[#030712]"
                    : isCurrent
                    ? "border-[#f59e0b] bg-[#0b1329] text-[#f59e0b]"
                    : "border-gray-800 bg-[#0b1329] text-gray-600",
                ].join(" ")}
                aria-current={isCurrent ? "step" : undefined}
              >
                {isComplete ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              <span
                className={[
                  "hidden text-[11px] font-medium tracking-wide sm:block",
                  isCurrent || isComplete ? "text-gray-200" : "text-gray-600",
                ].join(" ")}
              >
                {label}
              </span>
            </div>

            {!isLast && (
              <div className="mx-2 h-0.5 flex-1 bg-gray-800 sm:mx-3">
                <motion.div
                  className="h-full bg-[#f59e0b]"
                  initial={false}
                  animate={{ width: isComplete ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  </div>
);

/**
 * ---------------------------------------------------------------------------
 * STEPS
 * ---------------------------------------------------------------------------
 */

interface StepProps {
  data: ProjectFormData;
  errors: FormErrors;
  update: (field: keyof ProjectFormData, value: string) => void;
}

const StepContact: FC<StepProps> = ({ data, errors, update }) => (
  <div className="flex flex-col gap-5">
    <div>
      <h3 className="text-lg font-semibold text-white">Let's start with you</h3>
      <p className="mt-1 text-sm text-gray-500">
        How should we reach you about this project?
      </p>
    </div>
    <TextField
      id="fullName"
      label="Full name"
      value={data.fullName}
      onChange={(v) => update("fullName", v)}
      placeholder="Jane Doe"
      error={errors.fullName}
    />
    <TextField
      id="email"
      label="Email"
      type="email"
      value={data.email}
      onChange={(v) => update("email", v)}
      placeholder="jane@company.com"
      error={errors.email}
    />
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <TextField
        id="phone"
        label="Phone"
        type="tel"
        value={data.phone}
        onChange={(v) => update("phone", v)}
        placeholder="+1 (555) 000-0000"
        optional
      />
      <TextField
        id="company"
        label="Company"
        value={data.company}
        onChange={(v) => update("company", v)}
        placeholder="Acme Inc."
        optional
      />
    </div>
  </div>
);

const StepProject: FC<StepProps> = ({ data, errors, update }) => (
  <div className="flex flex-col gap-5">
    <div>
      <h3 className="text-lg font-semibold text-white">
        What are you building?
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        A short description is enough — we'll ask deeper questions on the call.
      </p>
    </div>
    <SelectField
      id="projectType"
      label="Project type"
      value={data.projectType}
      onChange={(v) => update("projectType", v)}
      options={PROJECT_TYPES}
      error={errors.projectType}
    />
    <TextAreaField
      id="description"
      label="Project description"
      value={data.description}
      onChange={(v) => update("description", v)}
      placeholder="What problem is this solving, and for who?"
      error={errors.description}
    />
  </div>
);

const StepScope: FC<StepProps> = ({ data, errors, update }) => (
  <div className="flex flex-col gap-5">
    <div>
      <h3 className="text-lg font-semibold text-white">Scope & budget</h3>
      <p className="mt-1 text-sm text-gray-500">
        Rough numbers are fine — this just helps us scope accurately.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <SelectField
        id="budget"
        label="Budget range"
        value={data.budget}
        onChange={(v) => update("budget", v)}
        options={BUDGET_RANGES}
        error={errors.budget}
      />
      <SelectField
        id="timeline"
        label="Timeline"
        value={data.timeline}
        onChange={(v) => update("timeline", v)}
        options={TIMELINES}
        error={errors.timeline}
      />
    </div>
    <TextAreaField
      id="features"
      label="Key features (if you know them)"
      value={data.features}
      onChange={(v) => update("features", v)}
      placeholder="e.g. user login, payments, admin dashboard"
      optional
      rows={3}
    />
  </div>
);

const ReviewRow: FC<{ label: string; value: string }> = ({ label, value }) =>
  value ? (
    <div className="flex flex-col gap-0.5 border-b border-gray-800/60 py-3 first:pt-0 last:border-none">
      <span className="text-xs uppercase tracking-wide text-gray-500">
        {label}
      </span>
      <span className="text-sm text-gray-200">{value}</span>
    </div>
  ) : null;

const StepReview: FC<{ data: ProjectFormData }> = ({ data }) => (
  <div className="flex flex-col gap-5">
    <div>
      <h3 className="text-lg font-semibold text-white">Review & send</h3>
      <p className="mt-1 text-sm text-gray-500">
        Double-check the details below before submitting.
      </p>
    </div>
    <div className="rounded-xl border border-gray-800 bg-[#0b1329]/60 px-4">
      <ReviewRow label="Name" value={data.fullName} />
      <ReviewRow label="Email" value={data.email} />
      <ReviewRow label="Phone" value={data.phone} />
      <ReviewRow label="Company" value={data.company} />
      <ReviewRow label="Project type" value={data.projectType} />
      <ReviewRow label="Description" value={data.description} />
      <ReviewRow label="Budget" value={data.budget} />
      <ReviewRow label="Timeline" value={data.timeline} />
      <ReviewRow label="Key features" value={data.features} />
    </div>
  </div>
);

/**
 * ---------------------------------------------------------------------------
 * SUCCESS SCREEN
 * ---------------------------------------------------------------------------
 */

const SuccessScreen: FC<{ name: string; onReset: () => void }> = ({
  name,
  onReset,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col items-center gap-4 py-10 text-center"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f59e0b] bg-[#f59e0b]/10 text-[#f59e0b]">
      <Check className="h-7 w-7" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">
        Thanks{name ? `, ${name.split(" ")[0]}` : ""} — we've got it.
      </h3>
      <p className="mt-1 max-w-sm text-sm text-gray-500">
        We'll review your project details and get back to you within one
        business day.
      </p>
    </div>
    <button
      type="button"
      onClick={onReset}
      className="mt-2 text-sm font-medium text-[#f59e0b] hover:text-[#f59e0b]/80"
    >
      Submit another project
    </button>
  </motion.div>
);

/**
 * ---------------------------------------------------------------------------
 * MAIN FORM
 * ---------------------------------------------------------------------------
 */

const stepVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 32 : -32 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -32 : 32 }),
};

export interface MultiStepProjectFormProps {
  /** Called with the collected data on final submit. Defaults to a console log. */
  onSubmit?: (data: ProjectFormData) => void | Promise<void>;
}

const MultiStepProjectForm: FC<MultiStepProjectFormProps> = ({
  onSubmit,
}) => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<ProjectFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const update = (field: keyof ProjectFormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const goToStep = (nextStep: number, dir: number) => {
    setDirection(dir);
    setStep(nextStep);
  };

  const handleBack = () => {
    if (step === 0) return;
    goToStep(step - 1, -1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});

    if (step < TOTAL_STEPS - 1) {
      goToStep(step + 1, 1);
      return;
    }

    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // eslint-disable-next-line no-console
        console.log("Project submission:", data);
      }
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setData(INITIAL_DATA);
    setErrors({});
    setStep(0);
    setDirection(1);
    setIsSubmitted(false);
  };
//inar subt dexo glsz
  const stepProps: StepProps = { data, errors, update };

  return (
    <section className="w-full bg-[#030712] px-6 py-20 text-white md:px-16">
      <div className="mx-auto w-full max-w-xl">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
            Start a project
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tell us what you're building
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-800/60 bg-[#0b1329]/40 p-6 shadow-2xl backdrop-blur-md sm:p-8">
          {!isSubmitted && <StepIndicator currentStep={step} />}

          <AnimatePresence mode="wait" custom={direction}>
            {isSubmitted ? (
              <SuccessScreen
                key="success"
                name={data.fullName}
                onReset={handleReset}
              />
            ) : (
              <motion.form
                key={step}
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit}
                noValidate
              >
                {step === 0 && <StepContact {...stepProps} />}
                {step === 1 && <StepProject {...stepProps} />}
                {step === 2 && <StepScope {...stepProps} />}
                {step === 3 && <StepReview data={data} />}

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0}
                    className="flex items-center gap-1 text-sm font-medium text-gray-400 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </button>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-lg bg-[#f59e0b] px-5 py-3 text-sm font-semibold text-[#030712] shadow-lg shadow-[#f59e0b]/20 transition-opacity hover:bg-[#f59e0b]/90 disabled:opacity-60"
                  >
                    {step === TOTAL_STEPS - 1 ? (
                      <>
                        {isSubmitting ? "Sending…" : "Submit project"}
                        <Send className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MultiStepProjectForm;