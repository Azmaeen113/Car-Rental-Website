export interface Car {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  image: string;
  gallery: string[];
  specs: {
    horsepower: string;
    acceleration: string;
    topSpeed: string;
    engine: string;
    transmission: string;
  };
  features: string[];
  available: boolean;
  category: string;
}

export const carInventory: Car[] = [
  {
    id: 1,
    name: "McLaren 750S",
    brand: "McLaren",
    model: "750S",
    year: 2024,
    image: "MCLAREN 750S.jpg",
    gallery: ["MCLAREN 750S.jpg"],
    specs: {
      horsepower: "740 HP",
      acceleration: "2.7s 0-60",
      topSpeed: "206 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "7-Speed Dual-Clutch"
    },
    features: ["Carbon Fiber", "Active Aero", "Carbon Ceramic Brakes", "Alcantara Interior"],
    available: true,
    category: "Supercar"
  },
  {
    id: 2,
    name: "Porsche GT3 RS",
    brand: "Porsche",
    model: "GT3 RS",
    year: 2023,
    image: "Porsche GT3-RS.jpg",
    gallery: ["Porsche GT3-RS.jpg"],
    specs: {
      horsepower: "518 HP",
      acceleration: "3.0s 0-60",
      topSpeed: "184 mph",
      engine: "4.0L Naturally Aspirated Flat-6",
      transmission: "7-Speed PDK"
    },
    features: ["RWD", "Carbon Fiber", "PASM", "Carbon Ceramic Brakes"],
    available: true,
    category: "Track Car"
  },
  {
    id: 3,
    name: "Ferrari Purosangue",
    brand: "Ferrari",
    model: "Purosangue",
    year: 2023,
    image: "Ferrari Purosangue.jpg",
    gallery: ["Ferrari Purosangue.jpg"],
    specs: {
      horsepower: "715 HP",
      acceleration: "3.3s 0-60",
      topSpeed: "193 mph",
      engine: "6.5L Naturally Aspirated V12",
      transmission: "8-Speed Dual-Clutch"
    },
    features: ["Suicide Doors", "Carbon Fiber", "F1 Technology", "Electronic Stability Control"],
    available: true,
    category: "Luxury SUV"
  },
  {
    id: 4,
    name: "Rolls-Royce Spectre",
    brand: "Rolls-Royce",
    model: "Spectre",
    year: 2023,
    image: "ROLLS-ROYCE SPECTRE.jpg",
    gallery: ["ROLLS-ROYCE SPECTRE.jpg"],
    specs: {
      horsepower: "577 HP",
      acceleration: "4.4s 0-60",
      topSpeed: "155 mph",
      engine: "Dual Electric Motors",
      transmission: "Single-Speed"
    },
    features: ["AWD", "Air Suspension", "Bespoke Audio", "Lambswool Carpet"],
    available: true,
    category: "Ultra Luxury Electric"
  },
  {
    id: 5,
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    model: "SF90 Stradale",
    year: 2023,
    image: "FERRARI SF90 STRADALE.jpg",
    gallery: ["FERRARI SF90 STRADALE.jpg"],
    specs: {
      horsepower: "986 HP",
      acceleration: "2.5s 0-60",
      topSpeed: "211 mph",
      engine: "4.0L Twin-Turbo V8 Hybrid",
      transmission: "8-Speed Dual-Clutch"
    },
    features: ["Hybrid System", "Carbon Fiber", "F1 Technology", "Electronic Stability Control"],
    available: true,
    category: "Supercar"
  },
  {
    id: 6,
    name: "Lamborghini Urus Performante",
    brand: "Lamborghini",
    model: "Urus Performante",
    year: 2023,
    image: "LAMBORGHINI URUS PERF.jpg",
    gallery: ["LAMBORGHINI URUS PERF.jpg"],
    specs: {
      horsepower: "666 HP",
      acceleration: "3.3s 0-60",
      topSpeed: "190 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "8-Speed Automatic"
    },
    features: ["All-Wheel Drive", "Air Suspension", "Carbon Ceramic Brakes", "Alcantara Interior"],
    available: true,
    category: "Super SUV"
  },
  {
    id: 7,
    name: "Rolls-Royce Cullinan Series 2",
    brand: "Rolls-Royce",
    model: "Cullinan Series 2",
    year: 2023,
    image: "ROLLS-ROYCE CULLINAN SERIES 2.jpg",
    gallery: ["ROLLS-ROYCE CULLINAN SERIES 2.jpg"],
    specs: {
      horsepower: "563 HP",
      acceleration: "5.0s 0-60",
      topSpeed: "155 mph",
      engine: "6.75L Twin-Turbo V12",
      transmission: "8-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Bespoke Audio", "Lambswool Carpet"],
    available: true,
    category: "Ultra Luxury SUV"
  },
  {
    id: 8,
    name: "Ferrari F8 Spider",
    brand: "Ferrari",
    model: "F8 Spider",
    year: 2019,
    image: "FERRARI F8 SPIDER.jpg",
    gallery: [
      "FERRARI F8 SPIDER.jpg"
    ],
    specs: {
      horsepower: "661 HP",
      acceleration: "3.0s 0-60",
      topSpeed: "203 mph",
      engine: "3.9L Twin-Turbo V8",
      transmission: "7-Speed Dual-Clutch"
    },
    features: ["Retractable Hardtop", "Carbon Fiber", "F1 Technology", "Electronic Stability Control"],
    available: true,
    category: "Convertible Supercar"
  },
  {
    id: 9,
    name: "Bentley Flying Spur",
    brand: "Bentley",
    model: "Flying Spur",
    year: 2023,
    image: "_ BENTLEY FLYING SPUR.jpg",
    gallery: ["_ BENTLEY FLYING SPUR.jpg"],
    specs: {
      horsepower: "626 HP",
      acceleration: "3.7s 0-60",
      topSpeed: "207 mph",
      engine: "6.0L Twin-Turbo W12",
      transmission: "8-Speed Dual-Clutch"
    },
    features: ["All-Wheel Drive", "Air Suspension", "Naim Audio", "Diamond Quilted Leather"],
    available: true,
    category: "Ultra Luxury Sedan"
  },
  {
    id: 10,
    name: "BMW M8",
    brand: "BMW",
    model: "M8",
    year: 2023,
    image: "BMW M8.jpg",
    gallery: ["BMW M8.jpg"],
    specs: {
      horsepower: "617 HP",
      acceleration: "3.1s 0-60",
      topSpeed: "190 mph",
      engine: "4.4L Twin-Turbo V8",
      transmission: "8-Speed Automatic"
    },
    features: ["M xDrive AWD", "Active M Differential", "Carbon Fiber Roof", "M Track Mode"],
    available: true,
    category: "Performance Coupe"
  },
  {
    id: 11,
    name: "BMW X3",
    brand: "BMW",
    model: "X3",
    year: 2023,
    image: "BMW X3_.jpg",
    gallery: ["BMW X3_.jpg"],
    specs: {
      horsepower: "248 HP",
      acceleration: "6.0s 0-60",
      topSpeed: "130 mph",
      engine: "2.0L Turbo 4-Cylinder",
      transmission: "8-Speed Automatic"
    },
    features: ["xDrive AWD", "Panoramic Sunroof", "iDrive 7.0", "LED Headlights"],
    available: true,
    category: "Compact Luxury SUV"
  },
  {
    id: 12,
    name: "Chevrolet Corvette",
    brand: "Chevrolet",
    model: "Corvette",
    year: 2023,
    image: "CHEVROLET CORVETTE.jpg",
    gallery: ["CHEVROLET CORVETTE.jpg"],
    specs: {
      horsepower: "495 HP",
      acceleration: "2.9s 0-60",
      topSpeed: "194 mph",
      engine: "6.2L V8",
      transmission: "8-Speed Dual-Clutch"
    },
    features: ["Mid-Engine", "Magnetic Ride Control", "Carbon Fiber", "Bose Audio"],
    available: true,
    category: "Sports Car"
  },
  {
    id: 13,
    name: "Chevrolet Corvette C8",
    brand: "Chevrolet",
    model: "Corvette C8",
    year: 2023,
    image: "CHEVROLET CORVETTEC8.jpg",
    gallery: ["CHEVROLET CORVETTEC8.jpg"],
    specs: {
      horsepower: "495 HP",
      acceleration: "2.9s 0-60",
      topSpeed: "194 mph",
      engine: "6.2L V8",
      transmission: "8-Speed Dual-Clutch"
    },
    features: ["Mid-Engine", "Magnetic Ride Control", "Carbon Fiber", "Bose Audio"],
    available: true,
    category: "Sports Car"
  },
  {
    id: 14,
    name: "Dodge Challenger Hellcat",
    brand: "Dodge",
    model: "Challenger Hellcat",
    year: 2023,
    image: "DODGE CHALLENGER HELLCAT.jpg",
    gallery: ["DODGE CHALLENGER HELLCAT.jpg"],
    specs: {
      horsepower: "717 HP",
      acceleration: "3.7s 0-60",
      topSpeed: "199 mph",
      engine: "6.2L Supercharged HEMI V8",
      transmission: "8-Speed Automatic"
    },
    features: ["Line Lock", "Launch Control", "Brembo Brakes", "Suede Interior"],
    available: true,
    category: "Muscle Car"
  },
  {
    id: 15,
    name: "Dodge Charger Hellcat",
    brand: "Dodge",
    model: "Charger Hellcat",
    year: 2023,
    image: "DODGE CHARGER HELLCAT _.jpg",
    gallery: ["DODGE CHARGER HELLCAT _.jpg"],
    specs: {
      horsepower: "717 HP",
      acceleration: "3.6s 0-60",
      topSpeed: "199 mph",
      engine: "6.2L Supercharged HEMI V8",
      transmission: "8-Speed Automatic"
    },
    features: ["Line Lock", "Launch Control", "Brembo Brakes", "Suede Interior"],
    available: true,
    category: "Muscle Car"
  },
  {
    id: 16,
    name: "Dodge Charger Hellcat Jailbreak",
    brand: "Dodge",
    model: "Charger Hellcat Jailbreak",
    year: 2023,
    image: "DODGE CHARGER HELLCAT JAILBREAK.jpg",
    gallery: ["DODGE CHARGER HELLCAT JAILBREAK.jpg"],
    specs: {
      horsepower: "807 HP",
      acceleration: "3.5s 0-60",
      topSpeed: "199 mph",
      engine: "6.2L Supercharged HEMI V8",
      transmission: "8-Speed Automatic"
    },
    features: ["Line Lock", "Launch Control", "Brembo Brakes", "Suede Interior"],
    available: true,
    category: "Muscle Car"
  },
  {
    id: 17,
    name: "Dodge Charger Scat Pack",
    brand: "Dodge",
    model: "Charger Scat Pack",
    year: 2023,
    image: "DODGE CHARGER SCATPACK.jpg",
    gallery: ["DODGE CHARGER SCATPACK.jpg"],
    specs: {
      horsepower: "485 HP",
      acceleration: "4.3s 0-60",
      topSpeed: "175 mph",
      engine: "6.4L HEMI V8",
      transmission: "8-Speed Automatic"
    },
    features: ["Line Lock", "Launch Control", "Brembo Brakes", "Suede Interior"],
    available: true,
    category: "Muscle Car"
  },
  {
    id: 18,
    name: "Dodge Durango SRT",
    brand: "Dodge",
    model: "Durango SRT",
    year: 2023,
    image: "DODGE DURANGO SRT.jpg",
    gallery: ["DODGE DURANGO SRT.jpg"],
    specs: {
      horsepower: "475 HP",
      acceleration: "4.4s 0-60",
      topSpeed: "160 mph",
      engine: "6.4L HEMI V8",
      transmission: "8-Speed Automatic"
    },
    features: ["AWD", "Launch Control", "Brembo Brakes", "Suede Interior"],
    available: true,
    category: "Performance SUV"
  },
  {
    id: 19,
    name: "Ferrari 296 GTB",
    brand: "Ferrari",
    model: "296 GTB",
    year: 2023,
    image: "FERRARI 296 GTB.jpg",
    gallery: ["FERRARI 296 GTB.jpg"],
    specs: {
      horsepower: "830 HP",
      acceleration: "2.9s 0-60",
      topSpeed: "205 mph",
      engine: "3.0L Twin-Turbo V6 Hybrid",
      transmission: "8-Speed Dual-Clutch"
    },
    features: ["Hybrid System", "Carbon Fiber", "F1 Technology", "Electronic Stability Control"],
    available: true,
    category: "Supercar"
  },
  {
    id: 20,
    name: "Ferrari Roma",
    brand: "Ferrari",
    model: "Roma",
    year: 2023,
    image: "FERRARI ROMA.jpg",
    gallery: ["FERRARI ROMA.jpg"],
    specs: {
      horsepower: "612 HP",
      acceleration: "3.4s 0-60",
      topSpeed: "199 mph",
      engine: "3.9L Twin-Turbo V8",
      transmission: "8-Speed Dual-Clutch"
    },
    features: ["Carbon Fiber", "F1 Technology", "Electronic Stability Control", "Manettino"],
    available: true,
    category: "Grand Tourer"
  },
  {
    id: 21,
    name: "Lamborghini Huracán EVO",
    brand: "Lamborghini",
    model: "Huracán EVO",
    year: 2023,
    image: "LAMBORGHINI EVO.jpg",
    gallery: ["LAMBORGHINI EVO.jpg"],
    specs: {
      horsepower: "631 HP",
      acceleration: "3.1s 0-60",
      topSpeed: "202 mph",
      engine: "5.2L Naturally Aspirated V10",
      transmission: "7-Speed Dual-Clutch"
    },
    features: ["All-Wheel Drive", "LDVI System", "Carbon Fiber", "Alcantara Interior"],
    available: true,
    category: "Supercar"
  },
  {
    id: 22,
    name: "Lamborghini Huracán Tecnica",
    brand: "Lamborghini",
    model: "Huracán Tecnica",
    year: 2023,
    image: "LAMBORGHINI HURACAN TECNICA.jpg",
    gallery: ["LAMBORGHINI HURACAN TECNICA.jpg"],
    specs: {
      horsepower: "631 HP",
      acceleration: "3.1s 0-60",
      topSpeed: "202 mph",
      engine: "5.2L Naturally Aspirated V10",
      transmission: "7-Speed Dual-Clutch"
    },
    features: ["All-Wheel Drive", "LDVI System", "Carbon Fiber", "Alcantara Interior"],
    available: true,
    category: "Supercar"
  },
  {
    id: 23,
    name: "Lamborghini Urus",
    brand: "Lamborghini",
    model: "Urus",
    year: 2023,
    image: "LAMBORGHINI URUS.jpg",
    gallery: ["LAMBORGHINI URUS.jpg"],
    specs: {
      horsepower: "641 HP",
      acceleration: "3.6s 0-60",
      topSpeed: "190 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "8-Speed Automatic"
    },
    features: ["All-Wheel Drive", "Air Suspension", "Carbon Ceramic Brakes", "Alcantara Interior"],
    available: true,
    category: "Super SUV"
  },
  {
    id: 24,
    name: "Maybach GLS 600",
    brand: "Mercedes-Maybach",
    model: "GLS 600",
    year: 2023,
    image: "MAYBACH GLS 600.jpg",
    gallery: ["MAYBACH GLS 600.jpg"],
    specs: {
      horsepower: "550 HP",
      acceleration: "4.9s 0-60",
      topSpeed: "155 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "9-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Burmester Audio", "Nappa Leather"],
    available: true,
    category: "Ultra Luxury SUV"
  },
  {
    id: 25,
    name: "Maybach S680",
    brand: "Mercedes-Maybach",
    model: "S680",
    year: 2023,
    image: "/_ MAYBACH S680.jpg",
    gallery: ["/_ MAYBACH S680.jpg"],
    specs: {
      horsepower: "621 HP",
      acceleration: "4.5s 0-60",
      topSpeed: "155 mph",
      engine: "6.0L Twin-Turbo V12",
      transmission: "9-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Burmester Audio", "Nappa Leather"],
    available: true,
    category: "Ultra Luxury Sedan"
  },
  {
    id: 26,
    name: "McLaren 570S",
    brand: "McLaren",
    model: "570S",
    year: 2023,
    image: "McLAREN 570S.jpg",
    gallery: ["McLAREN 570S.jpg"],
    specs: {
      horsepower: "562 HP",
      acceleration: "3.2s 0-60",
      topSpeed: "204 mph",
      engine: "3.8L Twin-Turbo V8",
      transmission: "7-Speed Dual-Clutch"
    },
    features: ["Carbon Fiber", "Active Aero", "Carbon Ceramic Brakes", "Alcantara Interior"],
    available: true,
    category: "Supercar"
  },
  {
    id: 27,
    name: "McLaren 720S Spider",
    brand: "McLaren",
    model: "720S Spider",
    year: 2023,
    image: "MCLAREN 720S SPIDER.jpg",
    gallery: ["MCLAREN 720S SPIDER.jpg"],
    specs: {
      horsepower: "710 HP",
      acceleration: "2.8s 0-60",
      topSpeed: "212 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "7-Speed Dual-Clutch"
    },
    features: ["Retractable Hardtop", "Carbon Fiber", "Active Aero", "Carbon Ceramic Brakes"],
    available: true,
    category: "Supercar"
  },
  {
    id: 28,
    name: "McLaren GT",
    brand: "McLaren",
    model: "GT",
    year: 2023,
    image: "MCLAREN GT.jpg",
    gallery: ["MCLAREN GT.jpg"],
    specs: {
      horsepower: "612 HP",
      acceleration: "3.2s 0-60",
      topSpeed: "203 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "7-Speed Dual-Clutch"
    },
    features: ["Carbon Fiber", "Active Aero", "Carbon Ceramic Brakes", "Nappa Leather"],
    available: true,
    category: "Grand Tourer"
  },
  {
    id: 29,
    name: "Mercedes-AMG GLE 63",
    brand: "Mercedes-AMG",
    model: "GLE 63",
    year: 2023,
    image: "MERCEDES-AMG GLE 63.jpg",
    gallery: ["MERCEDES-AMG GLE 63.jpg"],
    specs: {
      horsepower: "603 HP",
      acceleration: "3.8s 0-60",
      topSpeed: "174 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "9-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Burmester Audio", "AMG Performance Seats"],
    available: true,
    category: "Performance SUV"
  },
  {
    id: 30,
    name: "Mercedes-AMG SL 63",
    brand: "Mercedes-AMG",
    model: "SL 63",
    year: 2023,
    image: "MERCEDES-AMG SL 63.jpg",
    gallery: ["MERCEDES-AMG SL 63.jpg"],
    specs: {
      horsepower: "577 HP",
      acceleration: "3.6s 0-60",
      topSpeed: "196 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "9-Speed Automatic"
    },
    features: ["Retractable Hardtop", "AWD", "Burmester Audio", "AMG Performance Seats"],
    available: true,
    category: "Luxury Convertible"
  },
  {
    id: 31,
    name: "Mercedes G550",
    brand: "Mercedes-Benz",
    model: "G550",
    year: 2023,
    image: "MERCEDES G550.jpg",
    gallery: ["MERCEDES G550.jpg"],
    specs: {
      horsepower: "416 HP",
      acceleration: "5.6s 0-60",
      topSpeed: "149 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "9-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Burmester Audio", "Nappa Leather"],
    available: true,
    category: "Luxury SUV"
  },
  {
    id: 32,
    name: "Mercedes GLE 53",
    brand: "Mercedes-Benz",
    model: "GLE 53",
    year: 2023,
    image: "MERCEDES GLE 53.jpg",
    gallery: ["MERCEDES GLE 53.jpg"],
    specs: {
      horsepower: "429 HP",
      acceleration: "5.3s 0-60",
      topSpeed: "155 mph",
      engine: "3.0L Twin-Turbo Inline-6",
      transmission: "9-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Burmester Audio", "AMG Performance Seats"],
    available: true,
    category: "Performance SUV"
  },
  {
    id: 33,
    name: "Mercedes GLE 53 AMG",
    brand: "Mercedes-AMG",
    model: "GLE 53 AMG",
    year: 2023,
    image: "MERCEDES GLE 53 AMG.jpg",
    gallery: ["MERCEDES GLE 53 AMG.jpg"],
    specs: {
      horsepower: "429 HP",
      acceleration: "5.3s 0-60",
      topSpeed: "155 mph",
      engine: "3.0L Twin-Turbo Inline-6",
      transmission: "9-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Burmester Audio", "AMG Performance Seats"],
    available: true,
    category: "Performance SUV"
  },
  {
    id: 34,
    name: "Mercedes GT 53",
    brand: "Mercedes-AMG",
    model: "GT 53",
    year: 2023,
    image: "MERCEDES GT 53.jpg",
    gallery: ["MERCEDES GT 53.jpg"],
    specs: {
      horsepower: "429 HP",
      acceleration: "4.5s 0-60",
      topSpeed: "174 mph",
      engine: "3.0L Twin-Turbo Inline-6",
      transmission: "9-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Burmester Audio", "AMG Performance Seats"],
    available: true,
    category: "Performance Sedan"
  },
  {
    id: 35,
    name: "Mercedes S580",
    brand: "Mercedes-Benz",
    model: "S580",
    year: 2023,
    image: "MERCEDES S580.jpg",
    gallery: ["MERCEDES S580.jpg"],
    specs: {
      horsepower: "496 HP",
      acceleration: "4.4s 0-60",
      topSpeed: "155 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "9-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Burmester Audio", "Nappa Leather"],
    available: true,
    category: "Luxury Sedan"
  },
  {
    id: 36,
    name: "Porsche 911",
    brand: "Porsche",
    model: "911",
    year: 2023,
    image: "PORSCHE 911.jpg",
    gallery: ["PORSCHE 911.jpg"],
    specs: {
      horsepower: "379 HP",
      acceleration: "4.0s 0-60",
      topSpeed: "182 mph",
      engine: "3.0L Twin-Turbo Flat-6",
      transmission: "8-Speed PDK"
    },
    features: ["AWD", "Sport Chrono", "PASM", "Sport Seats"],
    available: true,
    category: "Sports Car"
  },
  {
    id: 37,
    name: "Porsche Targa 4 GTS",
    brand: "Porsche",
    model: "Targa 4 GTS",
    year: 2023,
    image: "PORSCHE TARGA 4 GTS.jpg",
    gallery: ["PORSCHE TARGA 4 GTS.jpg"],
    specs: {
      horsepower: "473 HP",
      acceleration: "3.5s 0-60",
      topSpeed: "188 mph",
      engine: "3.0L Twin-Turbo Flat-6",
      transmission: "8-Speed PDK"
    },
    features: ["AWD", "Sport Chrono", "PASM", "Sport Seats"],
    available: true,
    category: "Sports Car"
  },
  {
    id: 38,
    name: "Range Rover",
    brand: "Land Rover",
    model: "Range Rover",
    year: 2023,
    image: "RANGE ROVER.jpg",
    gallery: ["RANGE ROVER.jpg"],
    specs: {
      horsepower: "395 HP",
      acceleration: "5.8s 0-60",
      topSpeed: "155 mph",
      engine: "3.0L Twin-Turbo Inline-6",
      transmission: "8-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Meridian Audio", "Windsor Leather"],
    available: true,
    category: "Luxury SUV"
  },
  {
    id: 39,
    name: "Rolls-Royce Cullinan",
    brand: "Rolls-Royce",
    model: "Cullinan",
    year: 2023,
    image: "ROLLS-ROYCE CULLINAN.jpg",
    gallery: ["ROLLS-ROYCE CULLINAN.jpg"],
    specs: {
      horsepower: "563 HP",
      acceleration: "5.0s 0-60",
      topSpeed: "155 mph",
      engine: "6.75L Twin-Turbo V12",
      transmission: "8-Speed Automatic"
    },
    features: ["AWD", "Air Suspension", "Bespoke Audio", "Lambswool Carpet"],
    available: true,
    category: "Ultra Luxury SUV"
  },
  {
    id: 40,
    name: "Rolls-Royce Dawn",
    brand: "Rolls-Royce",
    model: "Dawn",
    year: 2023,
    image: "/_ ROLLS-ROYCE DAWN.jpg",
    gallery: ["/_ ROLLS-ROYCE DAWN.jpg"],
    specs: {
      horsepower: "563 HP",
      acceleration: "4.9s 0-60",
      topSpeed: "155 mph",
      engine: "6.75L Twin-Turbo V12",
      transmission: "8-Speed Automatic"
    },
    features: ["Convertible Top", "RWD", "Bespoke Audio", "Lambswool Carpet"],
    available: true,
    category: "Ultra Luxury Convertible"
  },
  {
    id: 41,
    name: "Rolls-Royce Ghost",
    brand: "Rolls-Royce",
    model: "Ghost",
    year: 2023,
    image: "ROLLS-ROYCE GHOST.jpg",
    gallery: ["ROLLS-ROYCE GHOST.jpg"],
    specs: {
      horsepower: "563 HP",
      acceleration: "4.6s 0-60",
      topSpeed: "155 mph",
      engine: "6.75L Twin-Turbo V12",
      transmission: "8-Speed Automatic"
    },
    features: ["RWD", "Air Suspension", "Bespoke Audio", "Lambswool Carpet"],
    available: true,
    category: "Ultra Luxury Sedan"
  },
  {
    id: 42,
    name: "Rolls-Royce Ghost Black Badge",
    brand: "Rolls-Royce",
    model: "Ghost Black Badge",
    year: 2023,
    image: "ROLLS-ROYCE GHOST BB.jpg",
    gallery: ["ROLLS-ROYCE GHOST BB.jpg"],
    specs: {
      horsepower: "592 HP",
      acceleration: "4.5s 0-60",
      topSpeed: "155 mph",
      engine: "6.75L Twin-Turbo V12",
      transmission: "8-Speed Automatic"
    },
    features: ["RWD", "Air Suspension", "Bespoke Audio", "Lambswool Carpet"],
    available: true,
    category: "Ultra Luxury Sedan"
  }
];
