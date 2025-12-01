import Link from "next/link";
import { serviceTypes } from "@/constants/useServices";

const Footer = () => {
  // Create URL-friendly slugs from service types
  const getServiceSlug = (type: string) => {
    return type.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  };

  return (
    <footer className="bg-primary/95 text-primary-foreground pt-12 pb-5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="font-syne uppercase text-3xl font-bold mb-4">
              <span className="md:hidden">Carol Beauty</span>
              <span className="hidden md:inline">Carol Belmonte Beauty</span>
            </h3>
            <p className="text-sm opacity-75">
              Um estúdio de estética premium comprometido em elevar a sua beleza autêntica.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase">Acessos Rápidos</h4>
            <ul className="font-syne text-sm flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-1">
              <li>
                <Link
                  href="/"
                  className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase">Serviços</h4>
            <ul className="text-sm flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-1">
              {serviceTypes.map((type) => (
                <li key={type}>
                  <Link
                    href={`/services#${getServiceSlug(type)}`}
                    className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4 uppercase">Conectar</h4>
            <ul className="text-sm flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-1">
              <li>
                <a
                  href="#"
                  className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-right text-sm opacity-75">
          <p>
            &copy; {new Date().getFullYear()} Carol Belmonte Beauty. 
            <br className="md:hidden"/> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
