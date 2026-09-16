"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera,
  CameraOff,
  Mic,
  MicOff,
  PhoneOff,
  Sparkles,
} from "lucide-react";
import { AvatarStage } from "./AvatarStage";
import { Logo } from "./Logo";
import { useSimulatedAmplitude } from "@/hooks/useSpeechAmplitude";
import {
  INTERVIEWER,
  elevenLabsAgentId,
  getInterviewRole,
  interviewRoles,
  type InterviewRoleId,
} from "@/lib/interview";
import { speakAsMaya } from "@/lib/speech";

export function InterviewRoom() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [roleId, setRoleId] = useState<InterviewRoleId>("frontend");
  const [muted, setMuted] = useState(true);
  const [cameraOn, setCameraOn] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [caption, setCaption] = useState("");
  const [lines, setLines] = useState<{ who: string; text: string }[]>([]);
  const role = getInterviewRole(roleId);
  const amplitude = useSimulatedAmplitude(speaking);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
  }, []);

  const speak = useCallback((text: string) => {
    setCaption(text);
    setLines((prev) => [...prev, { who: INTERVIEWER.name, text }]);
    void speakAsMaya(text, {
      onStart: () => setSpeaking(true),
      onEnd: () => setSpeaking(false),
    });
  }, []);

  useEffect(() => {
    setLines([]);
    speak(role.question);
    return () => {
      window.speechSynthesis?.cancel();
    };
    // Restart the scripted interviewer when the track changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleId]);

  useEffect(() => {
    return () => {
      stopCamera();
      window.speechSynthesis?.cancel();
    };
  }, [stopCamera]);

  useEffect(() => {
    if (!cameraOn || !videoRef.current || !streamRef.current) return;
    videoRef.current.srcObject = streamRef.current;
    void videoRef.current.play();
  }, [cameraOn]);

  async function toggleCamera() {
    if (cameraOn) {
      stopCamera();
      setCameraOn(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      streamRef.current = stream;
      setCameraError("");
      setCameraOn(true);
    } catch {
      setCameraError("Camera permission is optional in this sample.");
      setCameraOn(false);
    }
  }

  function askFollowUp() {
    speak(role.followUp);
  }

  function addCandidateLine() {
    setLines((prev) => [
      ...prev,
      { who: "You", text: role.candidateReply },
    ]);
  }

  return (
    <div
      className="flex min-h-dvh flex-col bg-neutral-950 text-white"
      data-elevenlabs-agent={elevenLabsAgentId || undefined}
    >
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
        <Logo inverted href="/" />
        <div className="flex items-center gap-3 text-xs text-white/55">
          <span className="hidden sm:inline">{role.label}</span>
          <span className="rounded-full border border-white/10 px-2.5 py-1">
            Optional avatar
          </span>
        </div>
      </header>

      <div className="grid flex-1 lg:grid-cols-[1fr_320px]">
        <section className="relative flex flex-col items-center justify-center px-4 py-8">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {interviewRoles.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setRoleId(item.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  roleId === item.id
                    ? "bg-white text-neutral-950"
                    : "border border-white/10 text-white/70 hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <AvatarStage
            speaking={speaking}
            amplitude={amplitude}
            label={INTERVIEWER.label}
            size="lg"
          />

          <p className="mt-6 max-w-xl text-center text-sm leading-7 text-white/80">
            {caption || role.question}
          </p>

          <div className="absolute bottom-24 right-4 w-36 overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 sm:bottom-28 sm:right-8">
            <video
              ref={videoRef}
              muted
              playsInline
              className={`h-28 w-full object-cover ${cameraOn ? "block" : "hidden"}`}
            />
            {cameraOn ? null : (
              <div className="flex h-28 flex-col items-center justify-center gap-2 bg-white/5">
                <CameraOff className="h-4 w-4 text-white/40" />
                <span className="text-[11px] text-white/45">Camera off</span>
              </div>
            )}
            <p className="px-2 py-1.5 text-center text-[11px] text-white/55">You</p>
          </div>
        </section>

        <aside className="flex flex-col border-t border-white/10 bg-white/[0.03] lg:border-l lg:border-t-0">
          <div className="border-b border-white/10 px-4 py-3">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-amber-300" />
              Live transcript
            </p>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {lines.map((line, index) => (
              <div
                key={`${line.who}-${index}`}
                className={`rounded-xl px-3 py-2 text-sm leading-6 ${
                  line.who === "You"
                    ? "ml-6 bg-white text-neutral-950"
                    : "mr-4 bg-white/10 text-white/90"
                }`}
              >
                <p className="mb-1 text-[10px] uppercase tracking-wide opacity-60">
                  {line.who}
                </p>
                {line.text}
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 px-4 py-4">
            <p className="mb-3 text-xs uppercase tracking-wide text-white/40">
              Rubric
            </p>
            {[
              ["Problem decomposition", 94],
              ["Technical depth", role.score],
              ["Communication", 91],
            ].map(([label, value]) => (
              <div key={String(label)} className="mb-3">
                <div className="mb-1 flex justify-between text-xs text-white/70">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"
                    animate={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={addCandidateLine}
                className="flex-1 rounded-full border border-white/15 px-3 py-2 text-xs font-medium hover:bg-white/10"
              >
                Log a sample answer
              </button>
              <button
                type="button"
                onClick={askFollowUp}
                className="flex-1 rounded-full bg-white px-3 py-2 text-xs font-medium text-neutral-950"
              >
                Ask follow-up
              </button>
            </div>
          </div>
        </aside>
      </div>

      <footer className="flex flex-col items-center gap-3 border-t border-white/10 px-4 py-4">
        {cameraError ? (
          <p className="text-xs text-white/45">{cameraError}</p>
        ) : (
          <p className="text-xs text-white/45">
            Optional avatar mode. Scripted voice preview—same Fit/Trust record as a
            human-led loop.
          </p>
        )}
        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={() => setMuted((v) => !v)}
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${
              muted ? "bg-white/10" : "bg-white text-neutral-950"
            }`}
            aria-label={muted ? "Unmute microphone" : "Mute microphone"}
          >
            {muted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={toggleCamera}
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${
              cameraOn ? "bg-white text-neutral-950" : "bg-white/10"
            }`}
            aria-label={cameraOn ? "Turn camera off" : "Turn camera on"}
          >
            {cameraOn ? <Camera className="h-5 w-5" /> : <CameraOff className="h-5 w-5" />}
          </motion.button>
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-red-500 px-5 text-sm font-medium text-white"
          >
            <PhoneOff className="h-4 w-4" />
            Leave
          </Link>
        </div>
      </footer>
    </div>
  );
}
