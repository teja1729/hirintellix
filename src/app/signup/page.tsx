import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Sign up · Hirintellix",
};

export default function SignUpPage() {
  return (
    <PageShell>
      <AuthForm mode="signup" />
    </PageShell>
  );
}
