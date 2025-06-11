
export interface CityData {
  slug: string;
  name: string;
  county: string;
  zipCodes: string[];
  description: string;
  services: string[];
  landmarks: string[];
  metaDescription: string;
}

export const cities: CityData[] = [
  {
    slug: "doylestown",
    name: "Doylestown",
    county: "Bucks County",
    zipCodes: ["18901", "18902"],
    description: "Doylestown is the county seat of Bucks County, Pennsylvania, known for its historic charm and vibrant downtown area.",
    services: [
      "Residential pressure washing",
      "Commercial building cleaning", 
      "Driveway and sidewalk cleaning",
      "Roof soft washing",
      "Deck and patio restoration"
    ],
    landmarks: [
      "Doylestown Hospital",
      "Central Bucks High School",
      "Mercer Museum",
      "Fonthill Castle"
    ],
    metaDescription: "Professional pressure washing services in Doylestown, PA. Residential and commercial cleaning for homes and businesses in Bucks County."
  },
  {
    slug: "newtown",
    name: "Newtown",
    county: "Bucks County", 
    zipCodes: ["18940"],
    description: "Newtown is a historic borough in Bucks County, Pennsylvania, featuring well-preserved colonial architecture and a charming downtown district.",
    services: [
      "Historic home exterior cleaning",
      "Commercial storefront washing",
      "Sidewalk and walkway cleaning", 
      "Soft washing for delicate surfaces",
      "Paver cleaning and sealing"
    ],
    landmarks: [
      "Newtown Historic District",
      "Court Inn",
      "Newtown Theatre",
      "Tyler State Park"
    ],
    metaDescription: "Expert pressure washing services in Newtown, PA. Specializing in historic home cleaning and commercial services in Bucks County."
  },
  {
    slug: "yardley",
    name: "Yardley", 
    county: "Bucks County",
    zipCodes: ["19067"],
    description: "Yardley is a charming borough along the Delaware River, known for its historic buildings and beautiful riverfront properties.",
    services: [
      "Waterfront property cleaning",
      "Historic building restoration cleaning",
      "Deck and dock pressure washing",
      "Commercial building maintenance",
      "Graffiti removal services"
    ],
    landmarks: [
      "Delaware Canal",
      "Lake Afton",
      "Yardley Historic District", 
      "Continental Tavern"
    ],
    metaDescription: "Professional pressure washing in Yardley, PA. Waterfront and historic property cleaning services along the Delaware River."
  },
  {
    slug: "blue-bell",
    name: "Blue Bell",
    county: "Montgomery County",
    zipCodes: ["19422"],
    description: "Blue Bell is an unincorporated community in Montgomery County, known for its corporate headquarters and suburban neighborhoods.",
    services: [
      "Corporate facility cleaning",
      "Residential community services",
      "Parking lot and garage cleaning",
      "Building exterior maintenance", 
      "Concrete and asphalt cleaning"
    ],
    landmarks: [
      "Blue Bell Country Club",
      "Unisys Corporation Headquarters",
      "Montgomery County Community College",
      "Whitpain Township Building"
    ],
    metaDescription: "Commercial and residential pressure washing in Blue Bell, PA. Professional cleaning services for Montgomery County businesses and homes."
  },
  {
    slug: "king-of-prussia", 
    name: "King of Prussia",
    county: "Montgomery County",
    zipCodes: ["19406", "19460"],
    description: "King of Prussia is a major commercial hub in Montgomery County, home to one of the largest shopping centers on the East Coast.",
    services: [
      "Large commercial facility cleaning",
      "Retail center maintenance",
      "High-rise building washing",
      "Parking structure cleaning",
      "Restaurant exterior cleaning"
    ],
    landmarks: [
      "King of Prussia Mall",
      "Valley Forge National Historical Park",
      "Universal Studios",
      "Lockheed Martin facility"
    ],
    metaDescription: "Expert pressure washing services in King of Prussia, PA. Commercial cleaning for retail centers and businesses in Montgomery County."
  },
  {
    slug: "philadelphia",
    name: "Philadelphia", 
    county: "Philadelphia County",
    zipCodes: ["19101", "19102", "19103", "19104", "19106", "19107", "19123", "19125", "19130"],
    description: "Philadelphia is the largest city in Pennsylvania and a major metropolitan hub with diverse neighborhoods and historic significance.",
    services: [
      "Urban commercial cleaning",
      "Historic building restoration",
      "Graffiti removal and prevention",
      "Multi-story building washing",
      "Restaurant and retail cleaning"
    ],
    landmarks: [
      "Independence Hall",
      "Liberty Bell",
      "Philadelphia Museum of Art",
      "Reading Terminal Market",
      "Citizens Bank Park"
    ],
    metaDescription: "Professional pressure washing services in Philadelphia, PA. Commercial and residential cleaning throughout the city and surrounding areas."
  }
];
