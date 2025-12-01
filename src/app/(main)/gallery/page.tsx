"use client";

import { Star, Quote, X, Image } from "lucide-react";
import Link from "next/link";
import { useState, Dispatch, SetStateAction, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/constants/useServices";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop",
    alt: "Sessão de tratamento facial",
    category: "Faciais",
    title: "Sessão de Tratamento Facial",
    description: "Tratamento facial profissional para uma pele radiante e saudável",
  },
  {
    src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=600&fit=crop",
    alt: "Ambiente relaxante de spa",
    category: "Spa",
    title: "Ambiente Relaxante de Spa",
    description: "Atmosfera serena para o máximo relaxamento",
  },
  {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=600&fit=crop",
    alt: "Produtos de cuidados com a pele",
    category: "Produtos",
    title: "Produtos Premium para a Pele",
    description: "Soluções naturais e orgânicas para cuidados com a pele",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop",
    alt: "Cliente relaxando durante o tratamento",
    category: "Tratamentos",
    title: "Tratamentos Personalizados",
    description: "Cuidado personalizado para suas necessidades únicas",
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=600&fit=crop",
    alt: "Aplicação profissional de cuidados com a pele",
    category: "Faciais",
    title: "Aplicação Especializada de Cuidados com a Pele",
    description: "Técnicas profissionais para resultados ótimos",
  },
  {
    src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=600&fit=crop",
    alt: "Atmosfera serena de spa",
    category: "Spa",
    title: "Experiência Tranquila de Spa",
    description: "Fuja para um mundo de paz e tranquilidade",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    alt: "Cliente feliz após o tratamento",
    category: "Resultados",
    title: "Resultados Transformadores",
    description: "Veja a diferença que nossos tratamentos fazem",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop",
    alt: "Sala de tratamento de luxo",
    category: "Spa",
    title: "Sala de Tratamento de Luxo",
    description: "Instalações premium para seu conforto",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Cliente Regular",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "A Carol Belmonte Beauty transformou completamente minha pele! Depois de lutar contra a acne por anos, seus tratamentos faciais personalizados me deram a pele limpa e radiante que sempre sonhei. A equipe é incrivelmente conhecedora e atenciosa.",
  },
  {
    name: "Jennifer Adams",
    role: "Primeira Visita",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    text: "Desde o momento em que entrei, me senti mimada e relaxada. A atmosfera é tão serena, e minha esteticista teve o cuidado de entender minhas preocupações com a pele. Saí me sentindo uma pessoa nova!",
  },
  {
    name: "Emily Rodriguez",
    role: "Membro Fiel",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    rating: 5,
    text: "Venho à Carol Belmonte Beauty há mais de dois anos agora, e não confiaria em mais ninguém com meus cuidados com a pele. Seus tratamentos antienvelhecimento fizeram uma diferença tão visível. Minhas amigas sempre perguntam qual é meu segredo!",
  },
  {
    name: "Amanda Chen",
    role: "Assinante Mensal",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    rating: 5,
    text: "A assinatura mensal tem um valor excelente! Adoro saber que tenho minha rotina de autocuidado agendada. A equipe lembra das minhas preferências e sempre me faz sentir especial.",
  },
  {
    name: "Rachel Thompson",
    role: "Cliente de Casamento",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 5,
    text: "A Carol Belmonte Beauty me ajudou a me preparar para o dia do meu casamento com um plano de tratamento personalizado. Minha pele estava absolutamente radiante em todas as minhas fotos. Agora sou cliente para a vida toda!",
  },
  {
    name: "Maria Santos",
    role: "Entusiasta de Bem-Estar",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
    rating: 5,
    text: "Como alguém que valoriza o bem-estar holístico, aprecio a abordagem natural da Carol Belmonte Beauty para cuidados com a pele. Seus produtos orgânicos e técnicas suaves se alinham perfeitamente com meu estilo de vida. Altamente recomendado!",
  },
];

const SpringModal = ({
  isOpen,
  setIsOpen,
  category,
  images,
  services,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  category: string | null;
  images: typeof galleryImages;
  services?: typeof import("@/constants/useServices").services;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-background/80 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "3.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card border border-border/50 text-foreground p-6 rounded-lg w-full max-w-4xl max-h-[90vh] shadow-xl cursor-default relative overflow-hidden overflow-y-auto"
          >
            <div className="relative z-10">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-foreground/70 hover:text-rose-pink transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-3xl font-bold text-center mb-2 text-foreground relative">
                Galeria de {category}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-dark-brown/30"></span>
              </h3>
              <p className="text-center mb-6 text-muted-foreground">
                Navegue por todas as imagens de {category?.toLowerCase()} do nosso estúdio
              </p>

              {/* Services Section - Show if services exist for this category */}
              {services && services.length > 0 && (
                <div className="mb-6 p-4 bg-secondary/50 rounded-lg border border-peach/20">
                  <h4 className="text-xl font-semibold mb-3 text-center text-foreground">
                    Serviços Relacionados
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="bg-card border border-peach/15 rounded-lg p-3 hover:border-rose-pink/30 transition-colors"
                      >
                        <h5 className="font-semibold text-sm mb-1 text-foreground">
                          {service.title}
                        </h5>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {service.description}
                        </p>
                        <div className="flex justify-between items-center mt-2 text-xs">
                          <span className="text-muted-foreground">{service.duration}</span>
                          <span className="font-semibold text-rose-pink">{service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl aspect-square bg-secondary/30 border border-peach/10 hover:border-rose-pink/20 transition-colors"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-dark-brown/20 transition-colors" />
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-foreground/80 backdrop-blur-sm rounded-lg p-2 border-l-2 border-rose-pink">
                        <h4 className="text-background text-sm font-semibold">
                          {image.title}
                        </h4>
                        <p className="text-background/80 text-xs mt-1">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get available categories from service types and gallery images
  const galleryCategories = Array.from(new Set(galleryImages.map(img => img.category)));

  // Filter images by selected category
  const filteredImages = selectedCategory
    ? galleryImages.filter((img) => img.category === selectedCategory)
    : [];

  // Get services for the selected category (if it's a service type)
  // Filter services directly by category name to match service types
  // This will work for all categories that match service types and have services defined
  const servicesForCategory = useMemo(() => {
    if (!selectedCategory) return [];
    return services.filter(service => service.type === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section with Gallery Grid */}
        <section className="pt-24 pb-16 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 border border-rose-pink/20">
                <Image className="h-4 w-4 text-rose-pink" />
                <span>Nossa Galeria</span>
              </div>
              <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Galeria &{" "}
                <span className="text-primary relative">
                  Depoimentos
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 -z-10" />
                </span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Descubra as experiências transformadoras na Carol Belmonte Beauty através da nossa
                galeria e ouça o que nossos clientes têm a dizer sobre sua jornada
                conosco.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl aspect-square"
                >
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Light Effect from Bottom Left */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at bottom left, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 30%, transparent 70%)'
                    }}
                  />

                  {/* Category Chip - Clickable */}
                  <div className="absolute bottom-2 left-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(image.category);
                      }}
                      className="inline-block text-white text-xs md:text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full p-2 hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      {image.category}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Histórias de Clientes
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-4">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Experiências reais de pessoas reais que confiaram em nós com sua
                jornada de cuidados com a pele.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elegant transition-shadow duration-300"
                >
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Pronto para Começar Sua Jornada?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Junte-se à nossa comunidade de clientes satisfeitos e descubra a diferença
              da Carol Belmonte Beauty por si mesmo.
            </p>
            <Link
              href="/#contact"
              className="inline-block mt-8 bg-primary hover:bg-rose-dark text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Agende Sua Consulta
            </Link>
          </div>
        </section>

        {/* Category Modal */}
        <SpringModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          category={selectedCategory}
          images={filteredImages}
          services={servicesForCategory}
        />
      </main>
    </div>
  );
};

export default Gallery;
