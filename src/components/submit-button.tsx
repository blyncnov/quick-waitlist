"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {text ?? "Join Waitlist"}
    </button>
  );
}
