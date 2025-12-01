"use client";
import Image from "next/image";
import { Heart, Sparkles, Leaf, Award, Users, Clock } from "lucide-react";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const features = [
{
  icon: Heart,
  title: "Cuidado Personalizado",
  description:
    "Cada tratamento é adaptado às necessidades, preocupações e objetivos únicos da sua pele. Dedicamos tempo para compreender o seu histórico e estilo de vida.",
},
{
  icon: Sparkles,
  title: "Especialistas em Estética",
  description:
    "Os nossos profissionais certificados reúnem anos de experiência e formação contínua nas mais avançadas técnicas e tecnologias de skincare.",
},
{
  icon: Leaf,
  title: "Produtos Naturais",
  description:
    "Utilizamos apenas ingredientes premium e orgânicos, provenientes de fornecedores de confiança, para uma pele saudável e radiante, sem químicos agressivos.",
},
{
  icon: Award,
  title: "Serviço Premiado",
  description:
    "Reconhecido como o melhor estúdio de estética da cidade por três anos consecutivos, o nosso compromisso com a excelência está presente em tudo o que fazemos.",
},

];

const stats = [
  { num: 8, suffix: "+", label: "Years Experience", icon: Clock },
  { num: 241, suffix: "+", label: "Happy Clients", icon: Users },
  { num: 7, suffix: "+", label: "Expert Staff", icon: Sparkles },
  { num: 32, suffix: "+", label: "Treatments", icon: Award },
];

interface StatProps {
  num: number;
  suffix: string;
  decimals?: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Stat = ({ num, suffix, decimals = 0, label, icon: Icon }: StatProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(containerRef);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!numberRef.current) return;
        numberRef.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center p-6 md:p-8 rounded-lg bg-cream border border-peach/20 hover:border-rose-pink/30 transition-colors"
      style={{
        boxShadow: `
          -5px -5px 10px rgba(255, 255, 255, 0.8),
          5px 5px 10px rgba(0, 0, 0, 0.25),
          -5px 5px 10px rgba(255, 255, 255, 0.8),
          5px -5px 10px rgba(0, 0, 0, 0.25)
        `,
      }}
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a3b39] mb-2">
        <span ref={numberRef}></span>
        {suffix}
      </div>
      <div className="flex items-center justify-center gap-2 text-sm md:text-base text-muted-foreground">
        <Icon className="h-4 w-4 text-rose-pink" />
        <span>{label}</span>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
    >
      <section id="about" className="pt-24 pb-16 md:py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 border border-rose-pink/20">
              <Users className="h-4 w-4 text-rose-pink" />
              <span className="text-rose-pink">Sobre Nós</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4a3b39] mb-4 md:mb-6 relative">
              Carol{" "}
              <span className="text-[#4a3b39] relative">
                Belmonte
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dark-brown/30"></span>
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Criado para elevar a estética com técnica e precisão, o Carol
              Belmonte Beauty combina tecnologia avançada e um olhar humano.
              Cada protocolo é desenvolvido para realçar o melhor de cada
              cliente. Beleza, aqui, é experiência e confiança.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center mb-12 md:mb-16 lg:mb-20">
            {/* Images */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                <div className="space-y-4 md:space-y-5 lg:space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-card relative h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px]">
                    <Image
                      src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80"
                      alt="Relaxing spa interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-card relative h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px]">
                    <Image
                      src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80"
                      alt="Skincare treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 md:pt-10 lg:pt-12">
                  <div className="rounded-2xl overflow-hidden shadow-card relative h-[440px] md:h-[520px] lg:h-[600px] xl:h-[680px]">
                    <Image
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80"
                      alt="Beauty products"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#4a3b39] mb-4 md:mb-6">
                Our Story & Philosophy
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                No Carol Belmonte Beauty, criamos um refúgio de autocuidado onde
                a estética avançada se une ao acolhimento e à delicadeza. Cada
                detalhe do nosso espaço foi pensado para que se sinta em paz,
                confiante e verdadeiramente cuidada.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4 md:mb-6">
                Tudo começou de forma simples, na antiga Studio Skin, montada na
                zona de arrumos de casa durante a pandemia. O que nasceu como um
                pequeno estúdio de depilação e cuidados de pele transformou-se,
                com muito estudo e dedicação, no atual Carol Belmonte Beauty,
                sem nunca perder a proximidade e o olhar individual para cada
                cliente.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6 md:mb-8">
                Hoje, trabalhamos com métodos estéticos comprovados, formação
                contínua e um padrão elevado de segurança e higiene. Aliamos
                técnicas consagradas à tecnologia de ponta para oferecer
                resultados visíveis e, acima de tudo, uma experiência de
                transformação que respeita a sua história, a sua pele e a sua
                identidade.
              </p>

              {/* Mission Statement */}
              <div className="bg-rose-light/50 border-l-4 border-rose-pink p-5 md:p-6 rounded-r-xl">
                <p className="text-foreground font-medium italic text-base md:text-lg">
                  A nossa missão é elevar a autoestima de cada cliente através
                  de cuidados personalizados, orientação especializada e
                  técnicas estéticas seguras que respeitam a beleza natural de
                  cada mulher.
                </p>
                <span className="text-muted-foreground text-sm mt-3 block">
                  — Carol Belmonte, Fundadora
                </span>
              </div>
            </div>
          </div>

          {/* Minimal Stats Section */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <Stat
                  key={index}
                  num={stat.num}
                  suffix={stat.suffix}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-12 shadow-card">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#4a3b39] text-center mb-8 md:mb-10">
              Por que escolher o Carol Belmonte Beauty?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-rose-light rounded-2xl flex items-center justify-center mx-auto mb-4 border border-peach/30 hover:border-rose-pink/40 transition-colors">
                    <feature.icon className="h-7 w-7 md:h-8 md:w-8 text-rose-pink" />
                  </div>
                  <h4 className="font-semibold text-[#4a3b39] mb-2 md:mb-3 text-base md:text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;

