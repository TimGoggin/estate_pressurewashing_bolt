
export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export const galleryCategories = [
  "All",
  "Before & After",
  "Residential",
  "Commercial",
  "Driveways & Walkways",
  "Specialty Services"
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/before.jpg",
    alt: "Before cleaning",
    caption: "Before Professional Cleaning",
    category: "Before & After"
  },
  {
    src: "/after.jpg",
    alt: "After cleaning",
    caption: "After Professional Cleaning",
    category: "Before & After"
  },
  {
    src: "/residential.jpeg",
    alt: "Residential cleaning",
    caption: "Residential Property Cleaning",
    category: "Residential"
  },
  {
    src: "/commercial.jpeg",
    alt: "Commercial cleaning",
    caption: "Commercial Property Cleaning",
    category: "Commercial"
  },
  {
    src: "/driveways.jpeg",
    alt: "Driveway cleaning",
    caption: "Driveway & Walkway Cleaning",
    category: "Driveways & Walkways"
  },
  {
    src: "/paver.png",
    alt: "Paver cleaning",
    caption: "Paver Cleaning & Sealing",
    category: "Specialty Services"
  }
];
