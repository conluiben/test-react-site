import { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({
  children,
  autoSlide = true,
  autoSlideInterval = 10000,
}) {
  const containerRef = useRef(null);

  // Clone last and first few items
  const slides = [...children];
  const clonesBefore = slides.slice(-3); // number depends on visible items
  const clonesAfter = slides.slice(0, 3);
  const allSlides = [...clonesBefore, ...slides, ...clonesAfter];

  const startIndex = clonesBefore.length; // where the "real" slides begin

  const scrollToIndex = (index, behavior = "smooth") => {
    const container = containerRef.current;
    const child = container?.children[index];
    if (!child) return;

    // If we want no animation (during reset), temporarily disable scroll-smooth
    if (behavior === "auto") {
      container.classList.remove("scroll-smooth");
    }

    container.scrollTo({
      left: child.offsetLeft,
      behavior,
    });

    // Re-add scroll-smooth after 1 frame
    if (behavior === "auto") {
      requestAnimationFrame(() => {
        container.classList.add("scroll-smooth");
      });
    }
  };

  const next = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const childWidth = container.firstChild.offsetWidth;

    scrollToIndex(Math.round(scrollLeft / childWidth) + 1);
  };

  const prev = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const childWidth = container.firstChild.offsetWidth;

    scrollToIndex(Math.round(scrollLeft / childWidth) - 1);
  };

  // Infinite loop scroll handling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Jump to the first "real" slide
    scrollToIndex(startIndex, "auto");

    const handleScroll = () => {
      const children = container.children;
      const childWidth = children[0].offsetWidth;
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / childWidth);

      if (index >= slides.length + startIndex) {
        scrollToIndex(startIndex, "auto"); // jumped to end clones
      } else if (index < startIndex) {
        scrollToIndex(slides.length + startIndex - 1, "auto"); // jumped to start clones
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative no-scrollbar">
      <div
        ref={containerRef}
        className="flex gap-x-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {allSlides.map((child, i) => (
          <div key={i} className="snap-start flex-shrink-0 max-w-full">
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
