
import { InfiniteMovingCardsDemo } from "@/components/ui/InfiniteMovingCardsDemo";
import Image from "next/image";



export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl text-center tracking-tighter font-medium ">Beyond Expectations</h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight mx-auto">
          Our revolutionary AI SEO tools have transformed our clients
          strategy.
        </p>
      <InfiniteMovingCardsDemo/>
      </div>
    </section>
  );
};
