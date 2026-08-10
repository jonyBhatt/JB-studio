export default function SmokeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="animate-drift-a absolute -left-1/4 top-0 h-[140%] w-[90%] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(255,255,255,0.06), rgba(255,255,255,0.22), rgba(255,255,255,0.02), rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
        }}
      />
      <div
        className="animate-drift-b absolute -right-1/4 top-1/4 h-[120%] w-[80%] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, rgba(255,255,255,0.03), rgba(255,255,255,0.18), rgba(255,255,255,0.01), rgba(255,255,255,0.12))",
        }}
      />
      <div
        className="animate-drift-c absolute left-1/3 -bottom-1/4 h-[100%] w-[70%] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "conic-gradient(from 40deg at 50% 50%, rgba(255,255,255,0.02), rgba(255,255,255,0.14), rgba(255,255,255,0.01))",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
    </div>
  )
}
