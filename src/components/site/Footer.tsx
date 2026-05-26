export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">F</span>
            Flux Academy
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">
            A K–12 school where curious minds become bold thinkers, makers, and citizens.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-ink-soft">Visit</h4>
          <p className="mt-3 text-sm">220 Meridian Ave<br/>Brooklyn, NY 11217</p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-ink-soft">Contact</h4>
          <p className="mt-3 text-sm">hello@fluxacademy.edu<br/>(718) 555-0142</p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-ink-soft">Hours</h4>
          <p className="mt-3 text-sm">Mon – Fri · 8:00 – 16:00<br/>Tours by appointment</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} Flux Academy. All rights reserved.
      </div>
    </footer>
  );
}
