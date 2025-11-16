'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-[#F9F7F5]" ref={ref}>
      <div className="relative overflow-hidden py-20 p-4">
        {/* CARDS */}
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-2xl lg:text-4xl font-semibold text-[#4a3b39]">
            Tratamentos, <span className="text-foregroundText">que atendem seus desejos.</span>
          </p>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ url, category, title, description }: ItemType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-linear-to-b from-[#4a3b39] via-[#7A6458]/50 to-[#7A6458]/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-xs font-semibold uppercase text-[#C28C7C]">
          {category}
        </span>
        <p className="my-2 text-3xl font-bold">{title}</p>
        <p className="text-lg text-white">{description}</p>
      </div>
    </div>
  );
};

export default CardCarousel;

type ItemType = {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
};

const items: ItemType[] = [
  {
    id: 1,
    url: "/images/cards/skin-treatment.jpg",
    category: "Tratamentos Faciais",
    title: "Limpeza de Pele",
    description:
      "A limpeza de pele é um procedimento estético que remove impurezas, cravos, células mortas e excesso de oleosidade da pele.",
  },
  {
    id: 2,
    url: "/imgs/computer/keyboard.png",
    category: "Keyboards",
    title: "Type in style",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    url: "/imgs/computer/monitor.png",
    category: "Monitors",
    title: "Looks like a win",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    url: "/imgs/computer/chair.png",
    category: "Chairs",
    title: "Back feels great",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    url: "/imgs/computer/lights.png",
    category: "Lights",
    title: "It's lit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    url: "/imgs/computer/desk.png",
    category: "Desks",
    title: "Stand up straight",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    url: "/imgs/computer/headphones.png",
    category: "Headphones",
    title: "Sounds good",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];