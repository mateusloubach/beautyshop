export interface NavigationLink {
  label: string;
  route: string;
  imgURL: string;
}

export const bottombarLinks: NavigationLink[] = [
  {
    label: "Home",
    route: "/",
    imgURL: "/icons/home.svg",
  },
  {
    label: "About",
    route: "/about",
    imgURL: "/icons/about.svg",
  },
  {
    label: "Services",
    route: "/services",
    imgURL: "/icons/services.svg",
  },
  {
    label: "Contact",
    route: "/contact",
    imgURL: "/icons/contact.svg",
  },
];

