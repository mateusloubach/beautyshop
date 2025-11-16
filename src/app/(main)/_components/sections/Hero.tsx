import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../../../public/images/heroImage.png";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col pt-24 pb-8">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Natural beauty and wellness"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-tr from-background/95 via-transparent to-transparent" />
      </div>

      {/* Bottom Content - Tagline, Link, and Headline stacked */}
      <div className="container mx-auto px-2 lg:px-8 relative z-10 pb-8 mt-auto">
        <div className="space-y-6">
          {/* Tagline and CTA Link */}
          <div className="max-w-2xl space-y-4">
            <p className="text-sm md:text-base tracking-widest text-white uppercase">
              Cuidar de você é a nossa especialidade
            </p>
            <Link
              href="#appointment"
              className="inline-block text-white uppercase underline underline-offset-4 hover:no-underline transition-all text-sm md:text-2xl font-medium"
            >
              Faça sua reserva agora
            </Link>
          </div>

          {/* Large Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-8xl font-bold text-white uppercase leading-none tracking-tight">
            Carol Belmonte Beauty
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;