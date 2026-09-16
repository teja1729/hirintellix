"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type AvatarStageProps = {
  speaking: boolean;
  amplitude: number;
  label: string;
  size?: "md" | "lg";
  src?: string;
  speakingSrc?: string;
};

export function AvatarStage({
  speaking,
  amplitude,
  label,
  size = "md",
  src = "/avatars/maya.png",
  speakingSrc = "/avatars/maya-speaking.png",
}: AvatarStageProps) {
  const level = Math.min(1, Math.max(0, speaking ? amplitude : 0));
  const wide = size === "lg" ? 280 : 200;
  const tall = size === "lg" ? 360 : 256;

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]"
        style={{ width: wide, height: tall }}
        initial={false}
        animate={{ y: speaking ? [0, -1.5, 0] : [0, -1, 0] }}
        transition={{ duration: speaking ? 1.1 : 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="pointer-events-none absolute -inset-8 rounded-full blur-3xl"
          initial={false}
          animate={{ opacity: speaking ? 0.35 + level * 0.3 : 0.12 }}
          style={{
            background:
              "radial-gradient(circle, rgba(52,211,153,0.45), transparent 70%)",
          }}
        />
        <Image
          src={src}
          alt={label}
          fill
          priority
          sizes={`${wide}px`}
          className="object-cover object-[50%_18%]"
        />
        <Image
          src={speakingSrc}
          alt=""
          fill
          sizes={`${wide}px`}
          className="object-cover object-[50%_18%]"
          style={{ opacity: level }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: level,
            clipPath: "ellipse(34% 16% at 50% 71%)",
          }}
        >
          <Image
            src={speakingSrc}
            alt=""
            fill
            sizes={`${wide}px`}
            className="object-cover object-[50%_18%] brightness-105"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-2 py-0.5 text-[10px] font-medium text-white/85 backdrop-blur-md">
          <span
            className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${
              speaking ? "bg-emerald-400" : "bg-white/40"
            }`}
          />
          {speaking ? "Speaking" : "Listening"}
        </div>
      </motion.div>

      <div className="mt-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-medium text-white/80">
        {label}
      </div>
    </div>
  );
}
