import type { CommitmentCopy } from '../content/siteContent';

type CommitmentProps = {
  copy: CommitmentCopy;
};

export function Commitment({ copy }: CommitmentProps) {
  return (
    <section id="commitment" className="section section-plain">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-slate/60 bg-white p-8 shadow-soft">
          <span
            className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-signal/15 blur-3xl"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-signal-strong/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative space-y-6">
            <p className="badge">{copy.label}</p>
            <h2 className="section-title font-display">{copy.heading}</h2>
            <p className="section-lead">{copy.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
