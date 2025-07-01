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
  category: string;
}

export const beforeAfterImages: BeforeAfterImage[] = [
  {
    id: 1,
    before: {
      src: "/before.jpg",
      alt: "Business before cleaning",
    },
    after: {
      src: "/after.jpg",
      alt: "Business after cleaning",
    },
    description: "Charter School Power Washing",
    category: "commercial",
  },
  {
    id: 2,
    before: {
      src: "/before2.png",
      alt: "House before cleaning",
    },
    after: {
      src: "/after2.png",
      alt: "House after cleaning",
    },
    description: "House deep cleaning",
    category: "houses",
  },
  {
    id: 3,
    before: {
      src: "/before3.png",
      alt: "House before cleaning",
    },
    after: {
      src: "/after3.png",
      alt: "House after cleaning",
    },
    description: "House deep cleaning",
    category: "roofs",
  },
  {
    id: 4,
    before: {
      src: "/before4.png",
      alt: "House before cleaning",
    },
    after: {
      src: "/after4.png",
      alt: "House after cleaning",
    },
    description: "House deep cleaning",
    category: "houses",
  },
  {
    id: 5,
    before: {
      src: "/before5.png",
      alt: "House before cleaning",
    },
    after: {
      src: "/after5.png",
      alt: "House after cleaning",
    },
    description: "House deep cleaning",
    category: "houses",
  },
  {
    id: 6,
    before: {
      src: "/before6.png",
      alt: "Shed before cleaning",
    },
    after: {
      src: "/after6.png",
      alt: "Shed after cleaning",
    },
    description: "Shed deep cleaning",
    category: "equipment",
  },
  {
    id: 7,
    before: {
      src: "/before7.png",
      alt: "Fence before cleaning",
    },
    after: {
      src: "/after7.png",
      alt: "Fence after cleaning",
    },
    description: "Fence deep cleaning",
    category: "fencing",
  },
  {
    id: 8,
    before: {
      src: "/before8.png",
      alt: "Stairs before cleaning",
    },
    after: {
      src: "/after8.png",
      alt: "Stairs after cleaning",
    },
    description: "Stairs deep cleaning",
    category: "houses",
  },
  {
    id: 9,
    before: {
      src: "/before9.png",
      alt: "Office before cleaning",
    },
    after: {
      src: "/after9.png",
      alt: "Office after cleaning",
    },
    description: "Office deep cleaning",
    category: "commercial",
  },
  {
    id: 10,
    before: {
      src: "/before10.jpg",
      alt: "Fountain before cleaning",
    },
    after: {
      src: "/after10.jpg",
      alt: "Fountain after cleaning",
    },
    description: "Fountain deep cleaning",
    category: "commercial",
  },
  {
    id: 11,
    before: {
      src: "/before11.jpg",
      alt: "Wall before cleaning",
    },
    after: {
      src: "/after11.jpg",
      alt: "Wall after cleaning",
    },
    description: "Wall deep cleaning",
    category: "houses",
  },
  {
    id: 12,
    before: {
      src: "/before12.jpg",
      alt: "Walkway before cleaning",
    },
    after: {
      src: "/after12.jpg",
      alt: "Walkway after cleaning",
    },
    description: "Walkway deep cleaning",
    category: "walkways",
  },
  {
    id: 13,
    before: {
      src: "/before13.jpg",
      alt: "Driveway before cleaning",
    },
    after: {
      src: "/after13.jpg",
      alt: "Driveway after cleaning",
    },
    description: "Driveway deep cleaning",
    category: "walkways",
  },
  {
    id: 14,
    before: {
      src: "/before14.jpg",
      alt: "Bricks before cleaning",
    },
    after: {
      src: "/after14.jpg",
      alt: "Bricks after cleaning",
    },
    description: "Brick deep cleaning",
    category: "pavers",
  },
  {
    id: 15,
    before: {
      src: "/before15.jpg",
      alt: "Patio before cleaning",
    },
    after: {
      src: "/after15.jpg",
      alt: "Patio after cleaning",
    },
    description: "Patio deep cleaning",
    category: "patios",
  },
  {
    id: 16,
    before: {
      src: "/before16.jpg",
      alt: "Walkway before cleaning",
    },
    after: {
      src: "/after16.jpg",
      alt: "Walkway after cleaning",
    },
    description: "Walkway deep cleaning",
    category: "walkways",
  },
  {
    id: 17,
    before: {
      src: "/before17.jpg",
      alt: "Pool before cleaning",
    },
    after: {
      src: "/after17.jpg",
      alt: "Pool after cleaning",
    },
    description: "Pool deep cleaning",
    category: "pool aprons",
  },
  {
    id: 18,
    before: {
      src: "/before18.jpg",
      alt: "Deck before cleaning",
    },
    after: {
      src: "/after18.JPG",
      alt: "Deck after cleaning",
    },
    description: "Deck deep cleaning",
    category: "decks",
  },
  {
    id: 19,
    before: {
      src: "/before19.jpg",
      alt: "Fence and walkway before cleaning",
    },
    after: {
      src: "/after19.jpg",
      alt: "Fence and walkway after cleaning",
    },
    description: "Fence and walkway deep cleaning",
    category: "fencing",
  },
  {
    id: 20,
    before: {
      src: "/before20.jpg",
      alt: "Paver before cleaning",
    },
    after: {
      src: "/after20.jpg",
      alt: "Paver after cleaning",
    },
    description: "Paver deep cleaning",
    category: "pavers",
  },
  {
    id: 21,
    before: {
      src: "/before21.jpg",
      alt: "Pool before cleaning",
    },
    after: {
      src: "/after21.jpg",
      alt: "Pool after cleaning",
    },
    description: "Pool deep cleaning",
    category: "pool aprons",
  },
  // Add more image pairs here following the same structure
];

export const categories = [
  "commercial",
  "decks",
  "equipment",
  "fencing",
  "grafitti",
  "gutters",
  "houses",
  "patios",
  "pavers",
  "pool aprons",
  "roofs",
  "walkways",
];