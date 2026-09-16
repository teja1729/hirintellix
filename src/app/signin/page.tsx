import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Sign in · Hirintellix",
};

export default function SignInPage() {
  return (
    <PageShell>
      <AuthForm mode="signin" />
    </PageShell>
  );
}
