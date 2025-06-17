
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
    slug: "buckingham",
    name: "Buckingham",
    county: "Bucks County",
    zipCodes: ["18912", "18925"],
    description: "Buckingham is a township in Bucks County, Pennsylvania, known for its rural charm, historic properties, and scenic countryside.",
    services: [
      "Rural property cleaning",
      "Historic home exterior washing",
      "Barn and outbuilding cleaning",
      "Driveway and walkway pressure washing",
      "Deck and fence restoration"
    ],
    landmarks: [
      "Buckingham Valley Vineyards",
      "Thompson-Neely Gristmill",
      "Lahaska Station",
      "Peddler's Village"
    ],
    metaDescription: "Professional pressure washing services in Buckingham, PA. Rural property and historic home cleaning throughout Bucks County."
  },
  {
    slug: "carversville",
    name: "Carversville",
    county: "Bucks County",
    zipCodes: ["18913"],
    description: "Carversville is a small unincorporated community in Bucks County, known for its historic charm and scenic Delaware River location.",
    services: [
      "Historic building cleaning",
      "Residential pressure washing",
      "Stone and brick restoration cleaning",
      "Walkway and patio cleaning",
      "Soft washing for delicate surfaces"
    ],
    landmarks: [
      "Carversville Inn",
      "Delaware River",
      "Historic Mill Buildings",
      "Carversville General Store"
    ],
    metaDescription: "Expert pressure washing in Carversville, PA. Historic building and residential cleaning services in scenic Bucks County."
  },
  {
    slug: "chalfont",
    name: "Chalfont",
    county: "Bucks County",
    zipCodes: ["18914"],
    description: "Chalfont is a borough in Bucks County, Pennsylvania, featuring a mix of residential neighborhoods and small-town charm.",
    services: [
      "Residential home washing",
      "Commercial building cleaning",
      "Sidewalk and driveway cleaning",
      "Roof soft washing",
      "Gutter cleaning and maintenance"
    ],
    landmarks: [
      "Chalfont Borough Hall",
      "North Penn High School",
      "Tamanend Park",
      "Butler Pike Shopping"
    ],
    metaDescription: "Professional pressure washing services in Chalfont, PA. Residential and commercial cleaning for Bucks County properties."
  },
  {
    slug: "doylestown",
    name: "Doylestown",
    county: "Bucks County",
    zipCodes: ["18901", "18902"],
    description: "Doylestown is the county seat of Bucks County, Pennsylvania, known for its historic charm, vibrant downtown area, and cultural attractions.",
    services: [
      "Historic downtown building cleaning",
      "Residential pressure washing",
      "Commercial storefront washing", 
      "Courthouse and municipal building cleaning",
      "Driveway and sidewalk restoration",
      "Roof soft washing"
    ],
    landmarks: [
      "Doylestown Hospital",
      "Central Bucks High School",
      "Mercer Museum",
      "Fonthill Castle",
      "Moravian Pottery & Tile Works",
      "Bucks County Courthouse"
    ],
    metaDescription: "Professional pressure washing services in Doylestown, PA. Historic downtown and residential cleaning for the Bucks County seat."
  },
  {
    slug: "dublin",
    name: "Dublin",
    county: "Bucks County",
    zipCodes: ["18917"],
    description: "Dublin is a small borough in Bucks County, Pennsylvania, known for its quiet residential atmosphere and historic character.",
    services: [
      "Residential home cleaning",
      "Historic property washing",
      "Driveway and walkway cleaning",
      "Deck and patio restoration",
      "Small commercial building cleaning"
    ],
    landmarks: [
      "Dublin Borough Park",
      "Historic Dublin Inn",
      "Pine Run Creek",
      "Dublin Elementary School"
    ],
    metaDescription: "Quality pressure washing services in Dublin, PA. Residential and historic property cleaning in quiet Bucks County borough."
  },
  {
    slug: "fountainville",
    name: "Fountainville",
    county: "Bucks County",
    zipCodes: ["18923"],
    description: "Fountainville is an unincorporated community in Bucks County, known for its rural setting and family-friendly atmosphere.",
    services: [
      "Rural home cleaning",
      "Farm building washing",
      "Residential driveway cleaning",
      "Deck and fence maintenance",
      "Barn and outbuilding restoration"
    ],
    landmarks: [
      "Fountainville Elementary School",
      "Local Farms and Orchards",
      "Rural Roads and Countryside",
      "Community Parks"
    ],
    metaDescription: "Professional pressure washing in Fountainville, PA. Rural property and farm building cleaning services in Bucks County."
  },
  {
    slug: "furlong",
    name: "Furlong",
    county: "Bucks County",
    zipCodes: ["18925"],
    description: "Furlong is an unincorporated community in Bucks County, featuring suburban neighborhoods and easy access to shopping and dining.",
    services: [
      "Suburban home washing",
      "Commercial plaza cleaning",
      "Parking lot maintenance",
      "Sidewalk and entrance cleaning",
      "Retail storefront washing"
    ],
    landmarks: [
      "Village at Furlong Shopping Center",
      "Furlong Park",
      "Local Shopping Plazas",
      "Residential Developments"
    ],
    metaDescription: "Expert pressure washing services in Furlong, PA. Suburban residential and commercial cleaning throughout Bucks County."
  },
  {
    slug: "holland",
    name: "Holland",
    county: "Bucks County",
    zipCodes: ["18966"],
    description: "Holland is an unincorporated community in Bucks County, known for its residential developments and proximity to major highways.",
    services: [
      "Residential subdivision cleaning",
      "Townhome and condo washing",
      "Commercial facility cleaning",
      "Parking area maintenance",
      "Building exterior restoration"
    ],
    landmarks: [
      "Holland Middle School",
      "Shopping Centers",
      "Residential Communities",
      "Local Business Districts"
    ],
    metaDescription: "Professional pressure washing in Holland, PA. Residential and commercial cleaning services for Bucks County communities."
  },
  {
    slug: "ivyland",
    name: "Ivyland",
    county: "Bucks County",
    zipCodes: ["18974"],
    description: "Ivyland is a small borough in Bucks County, Pennsylvania, known for its historic railroad heritage and charming downtown area.",
    services: [
      "Historic building restoration cleaning",
      "Small-town commercial washing",
      "Residential home cleaning",
      "Railroad-adjacent property cleaning",
      "Municipal building maintenance"
    ],
    landmarks: [
      "Historic Ivyland Train Station",
      "Ivyland Borough Hall",
      "Warminster Township Park",
      "Local Historic District"
    ],
    metaDescription: "Quality pressure washing services in Ivyland, PA. Historic building and small-town commercial cleaning in Bucks County."
  },
  {
    slug: "jamison",
    name: "Jamison",
    county: "Bucks County",
    zipCodes: ["18929"],
    description: "Jamison is an unincorporated community in Bucks County, featuring upscale residential neighborhoods and excellent schools.",
    services: [
      "Upscale residential cleaning",
      "Large home exterior washing",
      "Driveway and walkway restoration",
      "Deck and patio maintenance",
      "Luxury property cleaning"
    ],
    landmarks: [
      "Warrington Township",
      "Local Golf Courses",
      "Upscale Shopping Areas",
      "Premium Residential Developments"
    ],
    metaDescription: "Premium pressure washing services in Jamison, PA. Upscale residential and luxury property cleaning in Bucks County."
  },
  {
    slug: "lahaska",
    name: "Lahaska",
    county: "Bucks County",
    zipCodes: ["18931"],
    description: "Lahaska is known for its outlet shopping and tourist attractions, making it a popular destination in Bucks County.",
    services: [
      "Retail outlet cleaning",
      "Tourist facility maintenance",
      "Restaurant exterior washing",
      "Parking area cleaning",
      "Large commercial facility washing"
    ],
    landmarks: [
      "Peddler's Village",
      "Lahaska Outlets",
      "Buckingham Valley Vineyards",
      "Tourist Attractions"
    ],
    metaDescription: "Commercial pressure washing in Lahaska, PA. Retail and tourist facility cleaning services in popular Bucks County destination."
  },
  {
    slug: "morrisville",
    name: "Morrisville",
    county: "Bucks County",
    zipCodes: ["19067"],
    description: "Morrisville is a borough along the Delaware River, known for its historic significance and riverfront location.",
    services: [
      "Riverfront property cleaning",
      "Historic building restoration",
      "Municipal facility washing",
      "Commercial district cleaning",
      "Waterfront dock maintenance"
    ],
    landmarks: [
      "Delaware River Waterfront",
      "Morrisville Borough Hall",
      "Historic District",
      "Riverside Parks"
    ],
    metaDescription: "Professional pressure washing in Morrisville, PA. Riverfront and historic property cleaning along the Delaware River."
  },
  {
    slug: "new-hope",
    name: "New Hope",
    county: "Bucks County",
    zipCodes: ["18938"],
    description: "New Hope is a charming riverfront borough known for its arts scene, historic architecture, and tourist attractions along the Delaware River.",
    services: [
      "Historic inn and hotel cleaning",
      "Art gallery and shop washing",
      "Restaurant exterior cleaning",
      "Riverfront property maintenance",
      "Tourist facility cleaning"
    ],
    landmarks: [
      "New Hope & Ivyland Railroad",
      "Delaware River",
      "Bucks County Playhouse",
      "Historic New Hope District",
      "Bowman's Hill Wildflower Preserve"
    ],
    metaDescription: "Expert pressure washing in New Hope, PA. Historic building and tourist facility cleaning in charming Delaware River town."
  },
  {
    slug: "newtown",
    name: "Newtown",
    county: "Bucks County", 
    zipCodes: ["18940"],
    description: "Newtown is a historic borough in Bucks County, Pennsylvania, featuring well-preserved colonial architecture and a vibrant downtown district.",
    services: [
      "Historic colonial home cleaning",
      "Downtown commercial washing",
      "Municipal building maintenance", 
      "Sidewalk and walkway cleaning",
      "Heritage building restoration cleaning"
    ],
    landmarks: [
      "Newtown Historic District",
      "Court Inn",
      "Newtown Theatre",
      "Tyler State Park",
      "Newtown Borough Hall"
    ],
    metaDescription: "Expert pressure washing services in Newtown, PA. Historic colonial and downtown commercial cleaning in Bucks County."
  },
  {
    slug: "ottsville",
    name: "Ottsville",
    county: "Bucks County",
    zipCodes: ["18942"],
    description: "Ottsville is a small unincorporated community in Bucks County, known for its rural character and peaceful residential areas.",
    services: [
      "Rural residential cleaning",
      "Country home washing",
      "Farm building maintenance",
      "Private road cleaning",
      "Barn and outbuilding restoration"
    ],
    landmarks: [
      "Local Farms",
      "Rural Countryside",
      "Tohickon Creek",
      "Country Roads"
    ],
    metaDescription: "Rural pressure washing services in Ottsville, PA. Country home and farm building cleaning in peaceful Bucks County."
  },
  {
    slug: "perkasie",
    name: "Perkasie",
    county: "Bucks County",
    zipCodes: ["18944"],
    description: "Perkasie is a borough in Bucks County, known for its small-town atmosphere, local businesses, and community events.",
    services: [
      "Small-town commercial cleaning",
      "Residential neighborhood washing",
      "Municipal building maintenance",
      "Main street storefront cleaning",
      "Community facility washing"
    ],
    landmarks: [
      "Perkasie Borough Hall",
      "Lenape Park",
      "downtown Perkasie",
      "Local Shopping District"
    ],
    metaDescription: "Professional pressure washing in Perkasie, PA. Small-town commercial and residential cleaning services in Bucks County."
  },
  {
    slug: "pipersville",
    name: "Pipersville",
    county: "Bucks County",
    zipCodes: ["18947"],
    description: "Pipersville is a small unincorporated community in Bucks County, featuring rural landscapes and historic properties.",
    services: [
      "Historic rural home cleaning",
      "Country property washing",
      "Stone building restoration",
      "Farm facility cleaning",
      "Rural driveway maintenance"
    ],
    landmarks: [
      "Historic Properties",
      "Rural Landscapes",
      "Local Farms",
      "Country Roads"
    ],
    metaDescription: "Rural pressure washing in Pipersville, PA. Historic property and country home cleaning in scenic Bucks County."
  },
  {
    slug: "point-pleasant",
    name: "Point Pleasant",
    county: "Bucks County",
    zipCodes: ["18950"],
    description: "Point Pleasant is an unincorporated community along the Delaware River, known for its scenic location and outdoor recreation.",
    services: [
      "Riverfront home cleaning",
      "Vacation property washing",
      "Dock and pier maintenance",
      "Outdoor recreation facility cleaning",
      "Seasonal property maintenance"
    ],
    landmarks: [
      "Delaware River",
      "Point Pleasant Community",
      "River Access Points",
      "Recreational Areas"
    ],
    metaDescription: "Waterfront pressure washing in Point Pleasant, PA. Riverfront property and recreation facility cleaning along Delaware River."
  },
  {
    slug: "richboro",
    name: "Richboro",
    county: "Bucks County",
    zipCodes: ["18954"],
    description: "Richboro is an unincorporated community in Bucks County, featuring suburban neighborhoods and family-friendly amenities.",
    services: [
      "Suburban residential cleaning",
      "Family home washing",
      "Driveway and sidewalk cleaning",
      "Deck and patio maintenance",
      "Neighborhood commercial cleaning"
    ],
    landmarks: [
      "Richboro Shopping Centers",
      "Local Schools",
      "Residential Developments",
      "Community Parks"
    ],
    metaDescription: "Suburban pressure washing in Richboro, PA. Family home and residential community cleaning services in Bucks County."
  },
  {
    slug: "southampton",
    name: "Southampton",
    county: "Bucks County",
    zipCodes: ["18966"],
    description: "Southampton is a township in Bucks County, known for its mix of residential neighborhoods, shopping centers, and business districts.",
    services: [
      "Township residential cleaning",
      "Shopping center maintenance",
      "Business district washing",
      "Municipal facility cleaning",
      "Large property maintenance"
    ],
    landmarks: [
      "Southampton Township Building",
      "Street Road Shopping",
      "Local Business Parks",
      "Residential Communities"
    ],
    metaDescription: "Comprehensive pressure washing in Southampton, PA. Township residential and commercial cleaning throughout Bucks County."
  },
  {
    slug: "trevose",
    name: "Trevose",
    county: "Bucks County",
    zipCodes: ["19053", "19047"],
    description: "Trevose is an unincorporated community in Bucks County, featuring diverse residential areas and commercial developments.",
    services: [
      "Diverse residential cleaning",
      "Commercial complex washing",
      "Multi-family building cleaning",
      "Business park maintenance",
      "Parking area cleaning"
    ],
    landmarks: [
      "Trevose Shopping Areas",
      "Business Complexes",
      "Residential Neighborhoods",
      "Local Commercial Districts"
    ],
    metaDescription: "Professional pressure washing in Trevose, PA. Residential and commercial complex cleaning services in Bucks County."
  },
  {
    slug: "warminster",
    name: "Warminster",
    county: "Bucks County",
    zipCodes: ["18974"],
    description: "Warminster is a township in Bucks County, known for its suburban communities, shopping centers, and proximity to major highways.",
    services: [
      "Township residential cleaning",
      "Shopping center washing",
      "Commercial building maintenance",
      "Municipal facility cleaning",
      "Large-scale property washing"
    ],
    landmarks: [
      "Warminster Township Building",
      "Warminster Community Park",
      "Local Shopping Centers",
      "Business Districts"
    ],
    metaDescription: "Township pressure washing in Warminster, PA. Comprehensive residential and commercial cleaning services in Bucks County."
  },
  {
    slug: "warrington",
    name: "Warrington",
    county: "Bucks County",
    zipCodes: ["18976"],
    description: "Warrington is a township in Bucks County, featuring upscale residential communities, excellent schools, and modern amenities.",
    services: [
      "Upscale residential cleaning",
      "School facility washing",
      "Township building maintenance",
      "Premium property cleaning",
      "Commercial plaza washing"
    ],
    landmarks: [
      "Warrington Township",
      "Central Bucks Schools",
      "Shopping Plazas",
      "Residential Communities"
    ],
    metaDescription: "Premium pressure washing in Warrington, PA. Upscale residential and school facility cleaning in Bucks County township."
  },
  {
    slug: "washington-crossing",
    name: "Washington Crossing",
    county: "Bucks County",
    zipCodes: ["18977"],
    description: "Washington Crossing is a historic unincorporated community along the Delaware River, famous for its Revolutionary War significance.",
    services: [
      "Historic site cleaning",
      "Riverfront property washing",
      "Memorial and monument maintenance",
      "Park facility cleaning",
      "Tourist attraction washing"
    ],
    landmarks: [
      "Washington Crossing Historic Park",
      "Delaware River",
      "Revolutionary War Sites",
      "Historic Buildings and Monuments"
    ],
    metaDescription: "Historic pressure washing in Washington Crossing, PA. Revolutionary War site and riverfront property cleaning in Bucks County."
  },
  {
    slug: "yardley",
    name: "Yardley", 
    county: "Bucks County",
    zipCodes: ["19067"],
    description: "Yardley is a charming borough along the Delaware River, known for its historic buildings, beautiful riverfront properties, and quaint downtown.",
    services: [
      "Historic riverfront home cleaning",
      "Downtown commercial washing",
      "Delaware Canal maintenance cleaning",
      "Municipal building washing",
      "Deck and dock pressure washing",
      "Heritage building restoration"
    ],
    landmarks: [
      "Delaware Canal",
      "Lake Afton",
      "Yardley Historic District", 
      "Continental Tavern",
      "Delaware River Waterfront"
    ],
    metaDescription: "Professional pressure washing in Yardley, PA. Historic riverfront and downtown commercial cleaning along the Delaware River."
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
