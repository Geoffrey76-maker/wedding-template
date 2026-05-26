import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Flux Academy" },
      { name: "description", content: "Get in touch with Flux Academy admissions and administration." },
      { property: "og:title", content: "Contact Flux Academy" },
      { property: "og:description", content: "Get in touch with Flux Academy admissions and administration." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-16">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
      <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">Say hello.</h1>
      <p className="mt-6 max-w-2xl text-lg text-ink-soft">
        Questions about admissions, tours, employment, or partnerships? Send a note and the right
        person on our team will get back to you within two business days.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          {[
            { h: "Admissions", l1: "admissions@fluxacademy.edu", l2: "(718) 555-0142" },
            { h: "General", l1: "hello@fluxacademy.edu", l2: "(718) 555-0100" },
            { h: "Visit", l1: "220 Meridian Avenue", l2: "Brooklyn, NY 11217" },
          ].map((b) => (
            <div key={b.h} className="rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-ink-soft">{b.h}</h3>
              <p className="mt-3 font-display text-lg">{b.l1}</p>
              <p className="text-ink-soft">{b.l2}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-surface/60 p-8"
        >
          {sent ? (
            <div className="py-10 text-center">
              <h3 className="font-display text-2xl font-semibold">Thank you.</h3>
              <p className="mt-2 text-ink-soft">We'll be in touch shortly.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Subject" name="subject" />
              <div>
                <label className="block text-sm text-ink-soft">Message</label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
              <button className="w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
                Send message
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-ink-soft">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
