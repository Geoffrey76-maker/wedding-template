import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/academics")({
  component: Academics,
  head: () => ({
    meta: [
      { title: "Academics — Flux Academy" },
      { name: "description", content: "Our K–12 academic program: lower, middle, and upper school." },
      { property: "og:title", content: "Academics at Flux Academy" },
      { property: "og:description", content: "Our K–12 academic program: lower, middle, and upper school." },
    ],
  }),
});

const divisions = [
  {
    name: "Lower School",
    grades: "Grades K–4",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    body: "A play-rich, literacy-first foundation. Children learn to read closely, count carefully, and care for one another in mixed-age morning meetings.",
    points: ["Daily reading workshop", "Project-based science", "Spanish from grade 1", "Studio art twice a week"],
  },
  {
    name: "Middle School",
    grades: "Grades 5–8",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80",
    body: "The years for big questions. Students dig into history through primary sources, build models in math, and write essays they actually mean.",
    points: ["Humanities seminars", "Algebra by grade 8", "Field science trips", "Two electives per term"],
  },
  {
    name: "Upper School",
    grades: "Grades 9–12",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    body: "A college-style program rooted in close mentorship. Seniors complete a year-long capstone — a research paper, an exhibition, or an original work — defended before faculty.",
    points: ["28 advanced courses", "Senior capstone", "Wednesday internships", "Two languages required"],
  },
];

function Academics() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-16">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">Academics</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
        One continuous K–12 program, designed grade by grade.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink-soft">
        Students who arrive in kindergarten and graduate from our twelfth grade follow a single
        coherent journey — taught by teachers who know each child's history and trajectory.
      </p>

      <div className="mt-16 space-y-20">
        {divisions.map((d, i) => (
          <section key={d.name} className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className={`overflow-hidden rounded-2xl border border-border lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={d.img} alt={`${d.name} students`} className="h-[420px] w-full object-cover" />
            </div>
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
              <p className="font-display text-xs uppercase tracking-[0.25em] text-primary">{d.grades}</p>
              <h2 className="mt-2 font-display text-4xl font-semibold">{d.name}</h2>
              <p className="mt-4 text-ink-soft">{d.body}</p>
              <ul className="mt-6 space-y-2">
                {d.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
