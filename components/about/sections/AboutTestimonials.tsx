import { testimonials, testimonialsCopy } from "@/lib/about/people";
import { SectionHeading } from "../shared/SectionHeading";
import { DevPlaceholder } from "./DevPlaceholder";
import { TestimonialSlider } from "./TestimonialSlider";
import "./about-testimonials.css";

export function AboutTestimonials() {
  const isEmpty = testimonials.length === 0;
  if (isEmpty && process.env.NODE_ENV === "production") return null;

  return (
    <section className="ab-section ab-stories ab-on-dark" aria-labelledby="about-stories-title">
      <div className="ab-container">
        <SectionHeading
          id="about-stories-title"
          eyebrow={testimonialsCopy.eyebrow}
          title={testimonialsCopy.title}
          tone="dark"
        />
        {isEmpty ? (
          <DevPlaceholder what="traveler testimonials" file="lib/about/people.ts" />
        ) : (
          <TestimonialSlider items={testimonials} />
        )}
      </div>
    </section>
  );
}
