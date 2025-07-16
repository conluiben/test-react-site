import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageSlider({
  children,
  autoSlide = false,
  autoSlideInterval = 4000,
  loop = true,
  fullWidth = false, // 🔧 NEW PROP
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop });

  useEffect(() => {
    if (!emblaApi || !autoSlide) return;

    let rafId;
    let lastTime = Date.now();

    const autoplay = () => {
      const now = Date.now();
      if (now - lastTime > autoSlideInterval) {
        emblaApi.scrollNext();
        lastTime = now;
      }
      rafId = requestAnimationFrame(autoplay);
    };

    rafId = requestAnimationFrame(autoplay);
    return () => cancelAnimationFrame(rafId);
  }, [emblaApi, autoSlide, autoSlideInterval]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 z-10 shadow"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 z-10 shadow"
      >
        <FaChevronRight />
      </button>

      {/* Embla container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-x">
          {Array.isArray(children)
            ? children.map((child, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-2 snap-center ${
                    fullWidth
                      ? "w-full"
                      : "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  }`}
                >
                  {child}
                </div>
              ))
            : children}
        </div>
      </div>
    </div>
  );
}
