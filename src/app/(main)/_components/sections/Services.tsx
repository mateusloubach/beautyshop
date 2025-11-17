"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const Example = () => {
  return (
    <section className="flex flex-col pb-8 bg-[#F9F7F5] pt-24 md:pt-5">
      <SwapColumnFeatures />
    </section>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl">
      {mounted && <SlidingFeatureDisplay featureInView={featureInView} />}

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(ref, {
    margin: "-150px",
    once: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView, mounted, setFeatureInView, featureInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          suppressHydrationWarning
        >
          <span className="rounded-full bg-[#7A6458] px-2 py-1.5 text-xs font-medium text-[#F9F7F5]">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold text-[#7A6458]">{featureInView.title}</p>
          <p className="text-zinc-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
          suppressHydrationWarning
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-96 w-full rounded-xl bg-[#F9F7F5] shadow-xl">
      <Image
        src={featureInView.imageUrl}
        alt={featureInView.title}
        fill
        className="object-cover rounded-xl"
      />
    </div>
  );
};

export default Example;

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  imageUrl: string;
  contentPosition: "l" | "r";
  Icon: IconType;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Tratamentos Faciais",
    title: "Revitalize sua pele",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
    imageUrl: "/images/cards/facial-treatment.jpg",
    contentPosition: "r",
    Icon: FiEye,
  },
  {
    id: 2,
    callout: "Tratamentos Corporais",
    title: "Cuidado corporal",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
    imageUrl: "/images/cards/facial-treatment.jpg",
    contentPosition: "l",
    Icon: FiSearch,
  },
  {
    id: 3,
    callout: "Sobrancelhas, Cílios & Maquiagem",
    title: "Cuidados especiais",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
    imageUrl: "/images/cards/sobrancelha-a.png",
    contentPosition: "r",
    Icon: FiPlay,
  },
  {
    id: 4,
    callout: "Cabelo & Estilo",
    title: "Sua melhor forma",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
    imageUrl: "/images/cards/microblading.jpg",
    contentPosition: "l",
    Icon: FiDollarSign,
  },
];
