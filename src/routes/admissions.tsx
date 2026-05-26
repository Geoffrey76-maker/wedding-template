import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/admissions")({
  component: Admissions,
  head: () => ({
    meta: [
      { title: "Admissions — Flux Academy" },
      { name: "description", content: "How to apply to Flux Academy: tours, deadlines, financial aid." },
      { property: "og:title", content: "Admissions — Flux Academy" },
      { property: "og:description", content: "How to apply to Flux Academy: tours, deadlines, financial aid." },
    ],
  }),
});

const timeline = [
  { d: "September", t: "Tours open", b: "Visit campus and meet with admissions on weekday mornings." },
  { d: "November 1", t: "Application opens", b: "Submit forms, transcripts, and a short writing sample." },
  { d: "January 12", t: "Application deadline", b: "All materials, including teacher references, due by 5pm." },
  { d: "February", t: "Family visits", b: "Half-day classroom visits for finalist students." },
  { d: "March 10", t: "Decisions released", b: "Acceptance, waitlist, and financial-aid offers sent." },
];

function Admissions() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-16">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">Admissions</p>
      <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
        Joining Flux.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink-soft">
        We welcome applications from families across Brooklyn and the broader city. The process is
        designed to be honest, humane, and revealing for everyone — including us.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { k: "$48,400", v: "Tuition (2025–26)" },
          { k: "36%", v: "Receive financial aid" },
          { k: "1 : 6", v: "Tours to acceptances" },
        ].map((s) => (
          <div key={s.v} className="rounded-2xl border border-border bg-surface/60 p-6">
            <div className="font-display text-3xl font-semibold">{s.k}</div>
            <div className="mt-1 text-sm text-ink-soft">{s.v}</div>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold">Timeline</h2>
        <ol className="mt-8 border-l border-border">
          {timeline.map((t) => (
            <li key={t.t} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary" />
              <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">{t.d}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{t.t}</h3>
              <p className="mt-1 text-ink-soft">{t.b}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-16 flex flex-wrap gap-3 rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-2 p-8">
        <div className="flex-1 min-w-[240px]">
          <h3 className="font-display text-2xl font-semibold">Ready to visit?</h3>
          <p className="mt-2 text-ink-soft">Tours run Tuesdays and Thursdays, October through January.</p>
        </div>
        <Link to="/contact" className="self-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
          Schedule a tour
        </Link>
      </div>
    </div>
  );
}
