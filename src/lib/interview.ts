export const INTERVIEWER = {
  name: "Maya",
  title: "Staff interviewer",
  label: "Maya · Staff interviewer",
} as const;

export const interviewRoles = [
  {
    id: "frontend",
    label: "Frontend Engineer",
    question:
      "Walk me through how you would design a virtualized table that stays under 16ms per frame with 50k rows.",
    followUp:
      "What tradeoffs would you make between windowing and incremental rendering?",
    candidateReply:
      "I’d window the rows, recycle DOM nodes, and keep a paint budget with the profiler.",
    score: 92,
  },
  {
    id: "systems",
    label: "System Design",
    question:
      "Design a globally distributed interview scoring pipeline with p99 latency under 100ms.",
    followUp:
      "How would you isolate model failures without interrupting the candidate?",
    candidateReply:
      "I’d shard scoring, fail over to a cached rubric, and keep the avatar loop on a separate audio path.",
    score: 88,
  },
  {
    id: "behavioral",
    label: "Behavioral",
    question:
      "Tell me about a time you pushed back on a hiring decision. What evidence did you use?",
    followUp: "How did you keep the conversation fair and structured?",
    candidateReply:
      "I brought calibrated scorecards and walked through the same rubric with every interviewer.",
    score: 95,
  },
] as const;

export type InterviewRoleId = (typeof interviewRoles)[number]["id"];

export function getInterviewRole(id: InterviewRoleId) {
  return interviewRoles.find((role) => role.id === id) ?? interviewRoles[0];
}

/** Reserved for ElevenLabs Conversational AI. Unused until an agent is provisioned. */
export const elevenLabsAgentId =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "";
