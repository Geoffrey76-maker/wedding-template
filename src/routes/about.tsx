import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Flux Academy" },
      { name: "description", content: "Our story, mission, and the educators behind Flux Academy." },
      { property: "og:title", content: "About Flux Academy" },
      { property: "og:description", content: "Our story, mission, and the educators behind Flux Academy." },
    ],
  }),
});

const values = [
  { t: "Curiosity is a discipline", d: "We teach students to ask better questions, not just collect answers." },
  { t: "Rigor with warmth", d: "High expectations live alongside genuine relationships in every classroom." },
  { t: "Make to understand", d: "Studios, labs, and fieldwork are core to how we learn — not extras." },
  { t: "A school in the city", d: "Brooklyn is our campus. Our students learn from it and contribute to it." },
];

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-16">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">About</p>
      <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
        A small school with a long memory and a strong opinion about learning.
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-ink-soft">
        Founded in 1998 in a converted printing house on Meridian Avenue, Flux Academy began as
        a single combined K–2 classroom of eleven children and three teachers. Today we serve
        612 students across thirteen grades, on a single connected campus, with the same belief
        we started with: schools should be places where children become themselves.
      </p>

      <div className="mt-16 overflow-hidden rounded-2xl border border-border">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=80"
          alt="The Flux Academy campus exterior"
          className="h-[420px] w-full object-cover"
        />
      </div>

      <section className="mt-20 grid gap-8 md:grid-cols-2">
        {values.map((v) => (
          <div key={v.t} className="rounded-2xl border border-border bg-surface/60 p-8">
            <h3 className="font-display text-xl font-semibold">{v.t}</h3>
            <p className="mt-3 text-ink-soft">{v.d}</p>
          </div>
        ))}
      </section>

      <section className="mt-20 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl font-semibold">Leadership</h2>
          <p className="mt-3 text-ink-soft">Educators who have spent their careers thinking about what schools should be.</p>
        </div>
        <div className="space-y-6 md:col-span-2">
          {[
            { n: "Dr. Helena Park", r: "Head of School" },
            { n: "Marcus Whitfield", r: "Head of Lower School" },
            { n: "Sasha Renaud", r: "Head of Middle School" },
            { n: "Dr. Jamal Odell", r: "Head of Upper School" },
          ].map((p) => (
            <div key={p.n} className="flex items-baseline justify-between border-b border-border/60 pb-4">
              <span className="font-display text-lg">{p.n}</span>
              <span className="text-sm text-ink-soft">{p.r}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
