"use client";

import Link from "next/link";
import { useState } from "react";

export function AuthForm({
  mode,
}: {
  mode: "signin" | "signup";
}) {
  const [submitted, setSubmitted] = useState(false);
  const isSignUp = mode === "signup";

  return (
    <div className="mx-auto w-full max-w-md px-4 py-16">
      <h1 className="font-display text-3xl font-bold tracking-tight">
        {isSignUp ? "Create your account" : "Sign in"}
      </h1>
      <p className="mt-2 text-sm text-neutral-600">
        {isSignUp
          ? "Start with Fit, Trust, and Security scoring for your next role."
          : "Welcome back to Hirintellix."}
      </p>

      {submitted ? (
        <p className="mt-8 rounded-2xl border border-black/10 bg-white p-5 text-sm leading-6 text-neutral-600">
          Auth is a preview in this demo. No account was created.{" "}
          <Link href="/product" className="font-medium text-neutral-950 underline">
            See the product
          </Link>
          .
        </p>
      ) : (
        <form
          className="mt-8 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          {isSignUp ? (
            <label className="block text-sm font-medium">
              Name
              <input
                required
                name="name"
                className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm outline-none ring-neutral-950/10 focus:ring-2"
              />
            </label>
          ) : null}
          <label className="block text-sm font-medium">
            Work email
            <input
              required
              type="email"
              name="email"
              className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm outline-none ring-neutral-950/10 focus:ring-2"
            />
          </label>
          <label className="block text-sm font-medium">
            Password
            <input
              required
              type="password"
              name="password"
              minLength={8}
              className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm outline-none ring-neutral-950/10 focus:ring-2"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white"
          >
            {isSignUp ? "Sign up" : "Sign in"}
          </button>
        </form>
      )}

      <p className="mt-6 text-sm text-neutral-500">
        {isSignUp ? (
          <>
            Already have an account?{" "}
            <Link href="/signin" className="font-medium text-neutral-950">
              Sign in
            </Link>
          </>
        ) : (
          <>
            New here?{" "}
            <Link href="/signup" className="font-medium text-neutral-950">
              Sign up
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
