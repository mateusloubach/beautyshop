export interface ImageMetadata {
  path: string;
  alt: string;
}

export const heroImages = {
  main: {
    path: "/images/hero-image.jpg",
    alt: "Hero image - Natural beauty and wellness",
  },
  two: {
    path: "/images/hero-image-two.png",
    alt: "Hero image alternative",
  },
  alt: {
    path: "/images/hero_image.png",
    alt: "Hero image alternative",
  },
  alt2: {
    path: "/images/heroImage.png",
    alt: "Hero image alternative",
  },
} as const;


export const cardImages = {
  facialTreatment: {
    path: "/images/cards/facial-treatment.jpg",
    alt: "Facial treatment service",
  },
  facial: {
    path: "/images/cards/facial.png",
    alt: "Facial service",
  },
  locationA: {
    path: "/images/cards/location-a.jpg",
    alt: "Location view",
  },
  microbladingA: {
    path: "/images/cards/microblading-a.jpg",
    alt: "Microblading service",
  },
  microblading: {
    path: "/images/cards/microblading.jpg",
    alt: "Microblading eyebrow treatment",
  },
  relaxationArea: {
    path: "/images/cards/relaxation-area.jpg",
    alt: "Relaxation area",
  },
  salonInterior: {
    path: "/images/cards/salon-interior.jpg",
    alt: "Salon interior",
  },
  skinTherapyA: {
    path: "/images/cards/skin-therapy-a.jpg",
    alt: "Skin therapy treatment",
  },
  skinTherapyB: {
    path: "/images/cards/skin-therapy-b.png",
    alt: "Skin therapy treatment",
  },
  skinTherapy: {
    path: "/images/cards/skin-therapy.jpg",
    alt: "Skin therapy service",
  },
  skinTreatment: {
    path: "/images/cards/skin-treatment.jpg",
    alt: "Skin treatment service",
  },
  skin: {
    path: "/images/cards/skin.jpg",
    alt: "Skin care service",
  },
  skincareService: {
    path: "/images/cards/skincare-service.jpg",
    alt: "Skincare service",
  },
  sobrancelhaA: {
    path: "/images/cards/sobrancelha-a.png",
    alt: "Eyebrow treatment",
  },
} as const;

/**
 * Profile Images - Organized for easy access, but can be used anywhere
 */
export const profileImages = {
  carol: {
    path: "/images/carol.png",
    alt: "Carol Belmonte",
  },
} as const;

/**
 * All images grouped for organization (optional - use any image anywhere)
 */
export const imagesByGroup = {
  hero: heroImages,
  cards: cardImages,
  profile: profileImages,
} as const;

/**
 * Get image by path (useful for dynamic lookups)
 * @param path - The image path (e.g., "/images/cards/microblading.jpg")
 * @returns Image metadata or undefined if not found
 */
export function getImageByPath(path: string): ImageMetadata | undefined {
  const allImages = [
    ...Object.values(heroImages),
    ...Object.values(cardImages),
    ...Object.values(profileImages),
  ];

  return allImages.find((img) => img.path === path);
}

/**
 * Get all images from a specific group (optional helper)
 * @param groupName - The image group name ("hero", "cards", "profile")
 * @returns Array of image metadata
 */
export function getImagesByGroup(
  groupName: keyof typeof imagesByGroup
): ImageMetadata[] {
  const group = imagesByGroup[groupName];
  return group ? Object.values(group) : [];
}

/**
 * Get all available image paths
 * @returns Array of all image paths
 */
export function getAllImagePaths(): string[] {
  const allImages = [
    ...Object.values(heroImages),
    ...Object.values(cardImages),
    ...Object.values(profileImages),
  ];

  return allImages.map((img) => img.path);
}

/**
 * Default export - Main images object with utility functions
 */
const useImages = {
  hero: heroImages,
  cards: cardImages,
  profile: profileImages,
  byGroup: imagesByGroup,
  getByPath: getImageByPath,
  getByGroup: getImagesByGroup,
  getAllPaths: getAllImagePaths,
} as const;

export default useImages;

