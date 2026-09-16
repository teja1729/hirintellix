import type { Metadata } from "next";
import { InterviewRoom } from "@/components/InterviewRoom";

export const metadata: Metadata = {
  title: "Optional avatar interview · Hirintellix",
  description:
    "Try Hirintellix avatar mode—an optional speaking interviewer on the same Fit, Trust, and Security record.",
};

export default function InterviewPage() {
  return <InterviewRoom />;
}
