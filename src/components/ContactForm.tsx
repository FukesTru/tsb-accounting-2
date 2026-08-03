"use client";

import { useState } from "react";

/**
 * ⚠️ PLACEHOLDER FORM ENDPOINT — nothing is sent anywhere yet.
 *
 * Set FORM_ENDPOINT to the client's chosen handler (e.g. a Formspree URL
 * like "https://formspree.io/f/XXXXXXXX", a Netlify/Basin endpoint, or a
 * custom API route). Until it's set, the form shows the success state
 * without transmitting data, so the layout can be reviewed safely.
 *
 * CLIENT REQUIREMENT: Victoria wants submissions delivered to her phone as
 * a TEXT MESSAGE, not email (emails get lost in spam). Pick a handler with
 * SMS notifications (e.g. Formspree/Zapier → Twilio SMS, or a form service
 * with built-in SMS alerts) when wiring this up.
 */
const FORM_ENDPOINT = ""; // TODO: replace with the client's form handler URL

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORM_ENDPOINT) {
      // No handler configured — demo success state only, no data leaves the page.
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="flex h-full min-h-72 flex-col items-center justify-center rounded-lg border border-teal-600/30 bg-teal-600/5 p-10 text-center"
        role="status"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7" aria-hidden="true">
            <path d="M5 13l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">Message sent!</h3>
        <p className="mt-2 max-w-sm text-sm text-navy-900/70">
          Thanks for reaching out — we&apos;ll get back to you within one business
          day. Need an answer sooner? Give us a call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">
            Name <span className="text-gold-600">*</span>
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-md border border-navy-900/20 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">
            Phone <span className="text-gold-600">*</span>
          </span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            className="w-full rounded-md border border-navy-900/20 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
            placeholder="(479) 555-0100"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-900">Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          className="w-full rounded-md border border-navy-900/20 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
          placeholder="you@business.com"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-900">Message</span>
        <textarea
          name="message"
          rows={5}
          className="w-full resize-y rounded-md border border-navy-900/20 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
          placeholder="Tell us a little about your business and what you need help with…"
        />
      </label>
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          Something went wrong sending your message — please try again or call us
          directly.
        </p>
      )}
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
