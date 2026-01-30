import type { CommitmentCopy } from '../content/siteContent';

type CommitmentProps = {
  copy: CommitmentCopy;
};

export function Commitment({ copy }: CommitmentProps) {
  return (
    <section id="commitment" className="bg-ink py-24">
      <div className="container mx-auto px-6">
        <div className="panel-solid p-8">
          <div className="space-y-6">
            <p className="badge">{copy.label}</p>
            <h2 className="text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
            <p className="text-lg text-muted">{copy.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
