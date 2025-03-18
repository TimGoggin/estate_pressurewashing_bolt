
export interface BeforeAfterImage {
  id: number;
  before: {
    src: string;
    alt: string;
  };
  after: {
    src: string;
    alt: string;
  };
  description?: string;
}

export const beforeAfterImages: BeforeAfterImage[] = [
  {
    id: 1,
    before: {
      src: "/before.jpg",
      alt: "House before cleaning"
    },
    after: {
      src: "/after.jpg",
      alt: "House after cleaning"
    },
    description: "Complete house washing transformation"
  },
  {
    id: 2,
    before: {
      src: "/before2.png",
      alt: "Driveway before cleaning"
    },
    after: {
      src: "/after2.png",
      alt: "Driveway after cleaning"
    },
    description: "Driveway deep cleaning"
  }
  // Add more image pairs here following the same structure
];
