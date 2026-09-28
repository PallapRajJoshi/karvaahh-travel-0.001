"use client";

import { useState } from "react";
import { submitEnquiry, type EnquiryKind, type EnquiryResult } from "@/lib/enquiry";

export type SubmitState = "idle" | "sending" | EnquiryResult["status"];

export function useEnquirySubmit(kind: EnquiryKind) {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields: Record<string, string> = {};
    new FormData(form).forEach((v, k) => {
      if (typeof v === "string") fields[k] = v.trim();
    });
    setState("sending");
    const res = await submitEnquiry({ kind, activity: "hot-air-balloon", fields });
    if (res.status === "error") setError(res.message);
    if (res.status === "sent") form.reset();
    setState(res.status);
  }

  return { state, error, onSubmit };
}
