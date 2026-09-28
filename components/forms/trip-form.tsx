"use client";

import { FormEvent, useState } from "react";

export function TripForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          Your name
        </label>

        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="destination"
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          Destination
        </label>

        <input
          id="destination"
          name="destination"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
          placeholder="e.g. Koshi Province, Everest, Ilam"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="startDate"
            className="mb-2 block text-sm font-medium text-slate-800"
          >
            Start date
          </label>

          <input
            id="startDate"
            name="startDate"
            type="date"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600"
          />
        </div>

        <div>
          <label
            htmlFor="travelers"
            className="mb-2 block text-sm font-medium text-slate-800"
          >
            Travelers
          </label>

          <input
            id="travelers"
            name="travelers"
            type="number"
            min="1"
            defaultValue="2"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          Tell us about your trip
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
          placeholder="Tell us where you want to go, your interests, budget, preferred pace..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
      >
        Request my trip
      </button>

      {submitted && (
        <p className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
          Thanks! Your trip request has been received.
        </p>
      )}
    </form>
  );
}