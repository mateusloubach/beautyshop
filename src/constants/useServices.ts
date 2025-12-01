// Service type definition
export interface Service {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  type: string;
}

// Service types enum/constant
export type ServiceType =
  | "Facials"
  | "Anti-Aging"
  | "Exfoliation"
  | "Peels"
  | "Spa"
  | "Products"
  | "Treatments"
  | "Results";

// Services data
export const services: Service[] = [
  {
    title: "Facial Hidratante",
    description:
      "Tratamento de hidratação profunda que restaura a umidade e deixa a pele mais preenchida e luminosa.",
    duration: "60 min",
    price: "€95",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    type: "Faciais",
  },
  {
    title: "Tratamento Anti-Idade",
    description:
      "Tratamento avançado que atua em linhas finas, rugas e perda de firmeza.",
    duration: "75 min",
    price: "€145",
    image:
      "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=400&q=80",
    type: "Anti-Aging",
  },
  {
    title: "Limpeza de Pele Profunda",
    description:
      "Limpeza completa com extração para purificar os poros e prevenir imperfeições.",
    duration: "60 min",
    price: "€85",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&q=80",
    type: "Faciais",
  },
  {
    title: "Microdermoabrasão",
    description:
      "Esfoliação suave que revela uma pele mais lisa, luminosa e com textura aprimorada.",
    duration: "45 min",
    price: "€120",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
    type: "Esfoliação",
  },
  {
    title: "Peeling Químico",
    description:
      "Peelings profissionais que tratam pigmentação, cicatrizes de acne e falta de luminosidade.",
    duration: "45 min",
    price: "€130",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    type: "Peelings",
  },
];

// Generate service types dynamically from services
export const useServiceTypes = (): ServiceType[] => {
  const uniqueTypes = Array.from(
    new Set(services.map((service) => service.type))
  ) as ServiceType[];
  return uniqueTypes.sort();
};

// Or as a constant (computed once)
export const serviceTypes: ServiceType[] = Array.from(
  new Set(services.map((service) => service.type))
) as ServiceType[];

// Helper function to get services by type
export const getServicesByType = (type: ServiceType): Service[] => {
  return services.filter((service) => service.type === type);
};
