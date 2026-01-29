import type { Testimonial, TestimonialsCopy } from '../content/siteContent';

type TestimonialsProps = {
  testimonials: Testimonial[];
  copy: TestimonialsCopy;
};

export function Testimonials({ testimonials, copy }: TestimonialsProps) {
  return (
    <section id="testimonials" className="bg-graphite py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="badge">{copy.badge}</p>
            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
          </div>
          <p className="text-lg text-muted lg:max-w-xl">{copy.subheading}</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card">
              <p className="text-base text-mist break-words">{testimonial.quote}</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="font-semibold text-mist">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
