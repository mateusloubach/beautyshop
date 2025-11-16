import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary/95 text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">CAROLBEAUTY</h3>
            <p className="text-sm opacity-75">
              Premium beauty studio dedicated to enhancing your natural
              radiance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 uppercase">Quick Links</h4>
            <ul className="text-sm flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-1">
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
                  href="#services"
                  className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="opacity-75 hover:opacity-100 hover:text-[#f08080] transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 uppercase">Services</h4>
            <ul className="text-sm flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-1">
              <li className="opacity-75">Facial Treatments</li>
              <li className="opacity-75">Body Treatments</li>
              <li className="opacity-75">Hair Services</li>
              <li className="opacity-75">Skincare</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4 uppercase">Connect</h4>
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
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>
            &copy; {new Date().getFullYear()} Carol Belmonte Beauty. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
