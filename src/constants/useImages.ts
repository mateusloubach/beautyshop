// Hero Images
import heroImage from "../../public/images/heroImage.png";

// Profile Images
// import carolImage from "@/public/images/carol.png";

// Card Images
// import facialTreatment from "@/public/images/cards/facial-treatment.jpg";


// Export all images as a named object
export const images = {
  heroImage,
  
  // Profile Images
  // carolImage,
  
  // Card Images
  cards: {
    // facialTreatment,

  },
} as const;

// Also export individual images for convenience
export {

  heroImage,
};
