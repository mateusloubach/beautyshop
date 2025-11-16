'use client';
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CarouselItem } from "@/types/carousel";
import { carouselItems } from "@/data/carousel";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [offset, setOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Observe container width changes
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Calculate visible cards based on container width
  const getCardBuffer = () => {
    if (containerWidth > BREAKPOINTS.lg) return 3;
    if (containerWidth > BREAKPOINTS.sm) return 2;
    return 1;
  };

  const CARD_BUFFER = getCardBuffer();
  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div
        ref={containerRef}
        className="relative overflow-hidden px-4 lg:px-8"
      >
        {/* CARDS */}
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Tratamentos
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Descubra nossos tratamentos
            </p>
          </div>
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </div>
        </div>

        {/* BUTTONS */}
        <button
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-background/80 backdrop-blur-md p-3 text-white transition-all duration-300 hover:bg-background/90 ${
            CAN_SHIFT_LEFT ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={shiftLeft}
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-background/80 backdrop-blur-md p-3 text-white transition-all duration-300 hover:bg-background/90 ${
            CAN_SHIFT_RIGHT ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={shiftRight}
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

const Card = ({ url, category, title, description }: CarouselItem) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
      <div className="absolute inset-0 z-10 border border-background/45 rounded-2xl pointer-events-none" />
      <div className="absolute inset-0 z-20 rounded-2xl bg-linear-to-b from-black/90 via-black/50 to-black/0 p-6 text-white transition-all duration-300 hover:from-black/95">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
          {category}
        </span>
        <p className="my-2 text-2xl md:text-3xl font-bold">{title}</p>
        {/* <p className="text-sm md:text-base text-white/80">{description}</p> */}
      </div>
    </div>
  );
};

export default Carousel;

const items: CarouselItem[] = carouselItems;