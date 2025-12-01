"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, HandHelping, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceTypes, getServicesByType } from "@/constants/useServices";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const whatsappLink = "https://wa.me/351930472713";

  // Create URL-friendly slugs from service types
  const getServiceSlug = (type: string) => {
    return type.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
    >
      <section id="services" className="pt-24 pb-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 border border-rose-pink/20">
              <HandHelping className="h-4 w-4 text-rose-pink" />
              <span>Nossos Serviços</span>
            </div>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              A Sua Pele, {" "}
              <span className="text-primary relative">
                o Seu Tratamento
                <span className="absolute bottom-0 left-0 w-full h-1 bg-dark-brown/30 -z-10" />
              </span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Descubra a nossa variedade de tratamentos profissionais 
              desenvolvidos para atender às suas necessidades únicas e realçar a sua beleza natural.
            </p>
          </div>

          {/* Services by Type */}
          {serviceTypes.map((type) => {
            const typeServices = getServicesByType(type);
            const typeSlug = getServiceSlug(type);
            
            return (
              <div key={type} id={typeSlug} className="mb-16 scroll-mt-24">
                <h3 className="font-syne text-3xl md:text-4xl font-bold text-foreground mb-8 pb-4 border-b border-border/50">
                  {type}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {typeServices.map((service, index) => (
                    <div
                      key={index}
                      className="group bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-rose-pink/30 transition-all duration-300 hover:shadow-xl flex flex-col"
                    >
                      {/* Image Container */}
                      <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-[1.07] transition-transform duration-300 ease-out"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Duration Badge */}
                        <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-peach/20">
                          <Clock className="h-4 w-4 text-rose-pink" />
                          <span className="text-sm font-medium text-foreground">
                            {service.duration}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <h3 className="font-syne text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-rose-pink transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6 line-clamp-2">
                          {service.description}
                        </p>

                        {/* CTA Button - Sticks to bottom */}
                        <div className="mt-auto">
                          <Button
                            asChild
                            variant="ghost"
                            className="w-full group/btn justify-between text-primary hover:text-rose-pink hover:bg-rose-pink/10 border border-primary/20 hover:border-rose-pink/40 transition-all"
                          >
                            <a
                              href={whatsappLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="font-semibold">Agendar Consulta</span>
                              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* See More Services Card */}
          <div className="mt-16">

            <Link
              href="/services"
              className="group bg-card rounded-4xl overflow-hidden border-2 border-dashed border-peach/30 hover:border-rose-pink/50 transition-all duration-300 hover:rounded-3xl active:rounded-3xl flex flex-col"
            >
              {/* ContentCardFlex */}
              <div className="p-6 md:p-8 flex flex-col flex-grow items-center justify-center text-center min-h-[400px]">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 group-hover:bg-rose-pink/20 transition-colors duration-300 mb-6 border border-peach/20 group-hover:border-rose-pink/30">
                  <ArrowUpRight className="h-10 w-10 text-rose-pink group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="font-syne text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-rose-pink transition-colors">
                  Veja mais serviços
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm">
                  Explore nossa gama completa de tratamentos e descubra o que mais podemos fazer por você.
                </p>

                {/* CTA Button */}
                <Button
                  variant="ghost"
                  className="group/btn justify-between text-primary hover:text-rose-pink hover:bg-rose-pink/10 border border-primary/20 hover:border-rose-pink/40 transition-all"
                >
                  <span className="font-semibold">Veja Todos os Serviços</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform ml-2" />
                </Button>
              </div>
            </Link>
          </div>

          {/* CTA Section */}
          <div className="relative mt-20 md:mt-24">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-pink/10 via-peach/5 to-rose-pink/10 rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-peach/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
              <h3 className="font-syne text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pronto para transformar sua pele?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Agende a sua consulta hoje e permita que as nossas especialistas criem um plano de tratamento personalizado para você.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agende sua consulta agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesSection;
