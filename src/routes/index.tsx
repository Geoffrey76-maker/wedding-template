import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Flux Academy — A K–12 school for curious minds" },
      { name: "description", content: "Flux Academy is a Brooklyn K–12 school where students explore, build, and grow into bold thinkers." },
    ],
  }),
});

const stories = [
  {
    eyebrow: "Middle School · Science",
    title: "Eighth graders launch a weather balloon to the stratosphere",
    excerpt: "A semester of physics, programming, and patience paid off with 31 km of altitude and a perfect recovery.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  },
  {
    eyebrow: "Lower School · Arts",
    title: "Second grade turns the hallway into a paper rainforest",
    excerpt: "Six weeks, 240 cut-paper creatures, and a lot of questions about leaf-cutter ants.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Upper School · Civics",
    title: "Students argue a mock Supreme Court case",
    excerpt: "Two months of briefs, three judges, and one very real ruling on a fictional First Amendment dispute.",
    img: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Athletics",
    title: "Cross-country team places third at regionals",
    excerpt: "Coach Mendoza's 4 a.m. training sessions, finally vindicated.",
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
  },
];

const stats = [
  { k: "8:1", v: "Student–teacher ratio" },
  { k: "94%", v: "College acceptance rate" },
  { k: "38", v: "Languages spoken at home" },
  { k: "K–12", v: "Continuous program" },
];

function Index() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-10">
      {/* Magazine masthead */}
      <div className="flex items-baseline justify-between border-b border-border/60 pb-4">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-ink-soft">Volume XII · Fall Issue</p>
        <p className="hidden text-xs text-ink-soft md:block">Brooklyn, New York</p>
      </div>

      {/* Featured hero */}
      <section className="grid gap-10 py-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-primary">Featured story</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            A school where students don't just learn the world — they help shape it.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Flux Academy is an independent K–12 community of 612 students in the heart of Brooklyn.
            We pair rigorous academics with studios, fieldwork, and a deep belief that curiosity is a
            civic virtue.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/admissions" className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Begin application
            </Link>
            <Link to="/about" className="rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface">
              About Flux
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1400&q=80"
              alt="Students collaborating in a sunlit classroom"
              className="h-[420px] w-full object-cover"
              loading="eager"
            />
          </div>
          <p className="mt-3 text-xs text-ink-soft">
            Ninth-grade design studio · photo by M. Okafor
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.v} className="bg-background p-6">
            <div className="font-display text-3xl font-semibold text-foreground">{s.k}</div>
            <div className="mt-1 text-sm text-ink-soft">{s.v}</div>
          </div>
        ))}
      </section>

      {/* Magazine grid */}
      <section className="mt-20">
        <div className="flex items-end justify-between border-b border-border/60 pb-4">
          <h2 className="font-display text-3xl font-semibold">From the campus</h2>
          <Link to="/academics" className="text-sm text-ink-soft hover:text-foreground">All stories →</Link>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          {/* Lead story */}
          <article className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <img src={stories[0].img} alt="" className="h-[360px] w-full object-cover" />
            </div>
            <p className="mt-4 font-display text-xs uppercase tracking-[0.2em] text-primary">{stories[0].eyebrow}</p>
            <h3 className="mt-2 font-display text-3xl font-semibold leading-tight">{stories[0].title}</h3>
            <p className="mt-3 text-ink-soft">{stories[0].excerpt}</p>
          </article>
          {/* Side column */}
          <div className="space-y-8 lg:col-span-5">
            {stories.slice(1).map((s) => (
              <article key={s.title} className="grid grid-cols-[140px_1fr] gap-4">
                <div className="overflow-hidden rounded-xl border border-border bg-surface">
                  <img src={s.img} alt="" className="h-[110px] w-full object-cover" />
                </div>
                <div>
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-primary">{s.eyebrow}</p>
                  <h4 className="mt-1 font-display text-base font-semibold leading-snug">{s.title}</h4>
                  <p className="mt-1 text-sm text-ink-soft line-clamp-2">{s.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="mt-24 rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 p-10 md:p-16">
        <p className="font-display text-2xl leading-snug md:text-4xl">
          “Flux taught my daughter that questions are tools. She left here knowing how to use them —
          on a math problem, on a city council, on herself.”
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-ink-soft">
          Adaeze K. · Parent, Class of 2024
        </p>
      </section>
    </div>
  );
}
