import App from "@/App";
import SweepSpruseCaseStudy from "@/routes/SweepSpruseCaseStudy";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/work/sweep-spruse",
    element: <SweepSpruseCaseStudy />,
  },
]);