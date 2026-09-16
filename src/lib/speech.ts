const FEMALE_NAME =
  /female|samantha|karen|moira|tessa|zira|susan|fiona|victoria|allison|ava|kathy|serena|jenny|aria|nicky|siri|linda|hazel|kate|heather|paulina|google uk english female|microsoft zira|microsoft jenny/i;
const MALE_NAME =
  /male|david|daniel|fred|tom|ralph|bruce|george|ravi|google us english$|microsoft david|alex$/i;

export function pickFemaleVoice(
  voices: SpeechSynthesisVoice[],
): SpeechSynthesisVoice | null {
  const english = voices.filter((voice) => /^en(-|_|$)/i.test(voice.lang));
  const pool = english.length ? english : voices;
  return (
    pool.find((voice) => FEMALE_NAME.test(voice.name)) ??
    pool.find((voice) => !MALE_NAME.test(voice.name) && /en-GB|en-AU|en-IN/i.test(voice.lang)) ??
    pool.find((voice) => !MALE_NAME.test(voice.name)) ??
    null
  );
}

export function loadSpeechVoices(): Promise<SpeechSynthesisVoice[]> {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return Promise.resolve([]);
  }
  const current = window.speechSynthesis.getVoices();
  if (current.length) return Promise.resolve(current);
  return new Promise((resolve) => {
    const done = () => resolve(window.speechSynthesis.getVoices());
    window.speechSynthesis.addEventListener("voiceschanged", done, { once: true });
    window.setTimeout(done, 700);
  });
}

export async function speakAsMaya(text: string, handlers: {
  onStart?: () => void;
  onEnd?: () => void;
}) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    handlers.onStart?.();
    window.setTimeout(() => handlers.onEnd?.(), 4200);
    return;
  }

  window.speechSynthesis.cancel();
  const voices = await loadSpeechVoices();
  const utterance = new SpeechSynthesisUtterance(text);
  const female = pickFemaleVoice(voices);
  if (female) {
    utterance.voice = female;
    utterance.lang = female.lang;
  } else {
    utterance.lang = "en-GB";
    utterance.pitch = 1.35;
  }
  utterance.rate = 0.96;
  if (female) utterance.pitch = 1;
  utterance.onstart = () => handlers.onStart?.();
  utterance.onend = () => handlers.onEnd?.();
  utterance.onerror = () => handlers.onEnd?.();
  window.speechSynthesis.speak(utterance);
}
