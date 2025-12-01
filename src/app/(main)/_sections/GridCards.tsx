'use client';
import Image from "next/image";
import { Sparkles, Eye, ArrowUpRight } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/cards/facial-treatment.jpg",
    alt: "Facial Treatment",
    category: "Treatments",
  },
  {
    src: "/images/cards/microblading.jpg",
    alt: "Microblading Service",
    category: "Services",
  },
  {
    src: "/images/cards/skin-therapy.jpg",
    alt: "Skin Therapy",
    category: "Treatments",
  },
  {
    src: "/images/cards/skin-therapy-a.jpg",
    alt: "Advanced Skin Therapy",
    category: "Treatments",
  },
  {
    src: "/images/cards/skin-treatment.jpg",
    alt: "Skin Treatment",
    category: "Treatments",
  },
  {
    src: "/images/cards/skincare-service.jpg",
    alt: "Skincare Service",
    category: "Services",
  },
  {
    src: "/images/cards/salon-interior.jpg",
    alt: "Salon Interior",
    category: "Facility",
  },
  {
    src: "/images/cards/relaxation-area.jpg",
    alt: "Relaxation Area",
    category: "Facility",
  },
];

export const GridCards = () => {
  // First row: TitleCard + 2 items
  const firstRow = galleryItems.slice(0, 2);
  // Remaining items split into rows of 3
  const remainingItems = galleryItems.slice(2);
  const otherRows = [];
  for (let i = 0; i < remainingItems.length; i += 3) {
    otherRows.push(remainingItems.slice(i, i + 3));
  }

  return (
    <div className="mt-16 md:mt-24 text-foreground">
      {/* First Row with Title Card */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-border border border-border md:grid-cols-3 md:divide-x md:divide-y-0">
        <TitleCard />
        {firstRow.map((item, itemIndex) => (
          <GalleryCard
            key={`${item.src}-${itemIndex}`}
            item={item}
          />
        ))}
      </div>

      {/* Other Rows */}
      {otherRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-border border-x border-b border-border md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {row.map((item, itemIndex) => (
            <GalleryCard
              key={`${item.src}-${rowIndex}-${itemIndex}`}
              item={item}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const TitleCard = () => {
  return (
    <div className="group relative flex h-56 flex-col justify-between bg-card border-r border-border p-6 md:h-80 md:p-9">
      <h2 className="text-3xl md:text-4xl uppercase leading-tight font-syne">
        <span className="text-muted-foreground transition-colors duration-500 group-hover:text-primary">
          Explore Our
        </span>
        <br />
        <span className="text-foreground">Gallery</span>
      </h2>
      <div className="flex items-center gap-1.5 text-xs uppercase text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
        <Sparkles className="text-base" />
        <span>beautyshop.com</span>
      </div>
      <ArrowUpRight className="absolute right-3 top-4 text-2xl text-muted-foreground transition-colors duration-500 group-hover:text-primary" />
    </div>
  );
};

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard = ({ item }: GalleryCardProps) => {
  return (
    <div className="group relative flex h-56 flex-col justify-end overflow-hidden p-6 transition-colors hover:bg-card/50 md:h-80 md:p-9">
      <div className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
        <Sparkles className="text-base" />
        <span>{item.category}</span>
      </div>
      <h3 className="relative z-10 text-2xl md:text-3xl leading-tight font-semibold transition-transform duration-500 group-hover:-translate-y-3">
        {item.alt}
      </h3>
      <Eye className="absolute right-3 top-4 z-10 text-2xl text-muted-foreground transition-colors group-hover:text-primary" />
      
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 right-0 top-0 opacity-0 blur-sm grayscale transition-all group-hover:opacity-10 group-active:scale-105 group-active:opacity-30 group-active:blur-0 group-active:grayscale-0">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <Corners />
    </div>
  );
};

const Corners = () => (
  <>
    <span className="absolute left-px top-px z-10 h-3 w-px origin-top scale-0 bg-primary transition-all duration-500 group-hover:scale-100" />
    <span className="absolute left-px top-px z-10 h-px w-3 origin-left scale-0 bg-primary transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-px right-px z-10 h-3 w-px origin-bottom scale-0 bg-primary transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-px right-px z-10 h-px w-3 origin-right scale-0 bg-primary transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-px left-px z-10 h-3 w-px origin-bottom scale-0 bg-primary transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-px left-px z-10 h-px w-3 origin-left scale-0 bg-primary transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-px top-px z-10 h-3 w-px origin-top scale-0 bg-primary transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-px top-px z-10 h-px w-3 origin-right scale-0 bg-primary transition-all duration-500 group-hover:scale-100" />
  </>
);
