import { PRACTICES } from "@/lib/config";

export function Practices() {
  return (
    <section id="praticas" className="border-b border-rule/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="mono text-[11px] uppercase tracking-[0.22em] text-terracotta">
          Cinco práticas
        </p>
        <h2 className="display mt-3 max-w-2xl text-3xl leading-tight text-paper sm:text-4xl">
          Uma agência, cinco frentes. O mesmo critério: o que sobe, fica.
        </h2>
        <ol className="mt-14 divide-y divide-rule/40 border-y border-rule/40">
          {PRACTICES.map((practice, index) => (
            <li key={practice.id} className="grid gap-4 py-10 sm:grid-cols-[7rem_1fr]">
              <span className="mono text-sm text-terracotta">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="display text-2xl text-paper">{practice.title}</h3>
                <p className="mt-2 text-paper-muted">{practice.lead}</p>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                  {practice.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
