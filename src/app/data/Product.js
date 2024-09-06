import img1 from "../../../public/images/product/lubxen.jpeg";
import calcium_sulfonate_grease from "../../../public/images/product//calcium.jpeg";
import fuel_system_cleaner from "../../../public/images/product/lubxen.jpeg";
import radiator_coolant from "../../../public/images/lubxen_hero.jpeg";
import transmission_treatment from "../../../public/images/lubxen_hero.jpeg";
import turbine_oil from "../../../public/images/lubxen_hero.jpeg";
import heat_transfer_oil from "../../../public/images/lubxen_hero.jpeg";
import fire_resistant_hydraulic_fluid from "../../../public/images/lubxen_hero.jpeg";
import drivemax_cvt from "../../../public/images/product/drivemax_cvt.jpeg";
import dune_pro_mx_race from "../../../public/images/product/dune_pro_mx_race.jpeg";
import velocity_nano from "../../../public/images/product/velocity_nano.jpeg";
import torque_hvlp from "../../../public/images/product/torque_hvlp.jpeg";
import vector_hd from "../../../public/images/product/vector_hd.jpeg";
import comprol from "../../../public/images/product/comprol.jpeg";
import moly_ep_grease from "../../../public/images/product/moly_ep_grease.jpeg";
import bentonite_grease from "../../../public/images/product/bentonite_grease.jpeg";
import marine_gear_oil from "../../../public/images/product/marine_gear_oil.jpeg";
import marine_engine_oil from "../../../public/images/product/marine_engine_oil.jpeg";
import marine_2t_oil from "../../../public/images/product/marine_2t_oil.jpeg";
import engine from "../../../public/images/product/engine.jpg";
import speciality from "../../../public/images/product/speciality.jpg";
import base_oil from "../../../public/images/product/base_oil.jpeg";

const products = [
  {
    id: 0,
    productcategory: "AUTOMOTIVE LUBRICANTS",
    categorySlug: "automotive-lubricants",
    catContent:
      "LUBXEN's automotive lubricants are engineered to ensure optimal performance, enhanced fuel efficiency, and extended engine life. Manufactured in the UAE, our products meet global standards, offering superior protection for all vehicle types.",
    catImage: drivemax_cvt,
    items: [
      {
        id: 0,
        name: "DRIVEMAX CVT",
        slug: "drivemax-cvt",
        producttype:
          "Continuously Variable Transmission (CVT) Fluid (Synthetic)",
        viscosityGrade: "Viscosity Grade : N/A",
        classification: "CVT",
        image: drivemax_cvt,
        productDescription:
          "DRIVEMAX CVT is formulated to provide smooth and consistent performance in Continuously Variable Transmissions (CVT). This fluid is engineered to prevent belt slippage, reduce wear, and ensure a long transmission life, especially in electric and hybrid vehicles.",
        performanceLevels: [
          {
            id: 0,
            content: "API GL-5",
          },
          {
            id: 1,
            content: "ACEA C3",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Honda HCF-2",
          },
          {
            id: 1,
            content: "Nissan NS-2",
          },
          {
            id: 2,
            content: "Toyota TC",
          },
        ],
        highlight: [
          {
            id: 0,
            content: "Designed for belt and chain CVTs",
          },
          {
            id: 1,
            content: "Provides superior wear protection",
          },
          {
            id: 2,
            content: "Enhances transmission longevity",
          },
        ],
        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 1,
        name: "DUNE PRO MX RACE",
        slug: "dune-pro-mx-race",
        producttype: "Four-Stroke Motorcycle Oil (Synthetic)",
        viscosityGrade: "Viscosity Grade : 10W-60",
        classification: "API SN",
        image: dune_pro_mx_race,
        productDescription:
          "DUNE PRO MX RACE is engineered for motocross and high-performance motorbikes. It offers superior protection against wear, high heat, and harsh conditions, making it the ideal choice for racing environments. This oil provides excellent lubrication for both air and liquid-cooled engines.",
        performanceLevels: [
          {
            id: 0,
            content: "API SN",
          },
          {
            id: 1,
            content: "JASO MA2",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Yamaha",
          },
          {
            id: 1,
            content: "Honda",
          },
          {
            id: 2,
            content: "KTM",
          },
        ],
        highlight: [
          {
            id: 0,
            content: "High-performance 4-stroke motorcycle oil",
          },
          {
            id: 1,
            content: "Provides excellent wear protection",
          },
          {
            id: 2,
            content: "Ensures smooth clutch operation",
          },
        ],
        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 2,
        name: "VELOCITY NANO",
        slug: "velocity-nano",
        producttype: "Diesel Engine Oil (Fully Synthetic)",
        viscosityGrade: "Viscosity Grade : 10W-40",
        classification: "API CI-4 Plus/SL",
        image: velocity_nano,
        productDescription:
          "VELOCITY NANO is designed for modern high-performance passenger cars and light trucks. Its fully synthetic formulation provides exceptional protection in high temperatures and under extreme driving conditions, offering enhanced fuel efficiency and superior wear protection.",
        performanceLevels: [
          {
            id: 0,
            content: "API SN",
          },
          {
            id: 1,
            content: "ACEA A3/B4",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "MB 229.3",
          },
          {
            id: 1,
            content: "VW 502 00/505 00",
          },
          {
            id: 2,
            content: "BMW Longlife-01",
          },
        ],
        highlight: [
          {
            id: 0,
            content: "Fully Synthetic Heavy-Duty Engine Oil",
          },
          {
            id: 1,
            content: "Excellent Lubrication in Severe Conditions",
          },
          {
            id: 2,
            content: "Designed for Both Diesel and Gasoline Engines",
          },
        ],
        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
    ],
  },
  {
    id: 1,
    productcategory: "INDUSTRIAL LUBRICANTS",
    categorySlug: "industrial-lubricants",
    catContent:
      "Designed to withstand the toughest industrial environments, LUBXEN's industrial lubricants deliver exceptional reliability and performance. Our advanced formulations reduce downtime and enhance equipment longevity for various industries worldwide.",
    catImage: torque_hvlp,
    items: [
      {
        id: 0,
        name: "TORQUE HVLP",
        slug: "torque-hvlp",
        producttype: "Hydraulic Oil (Synthetic)",
        viscosityGrade: "Viscosity Grade : ISO VG 32, 46, 68",
        classification: "HVLP",
        image: torque_hvlp,
        productDescription:
          "TORQUE HVLP is a premium synthetic hydraulic oil designed to handle high loads in industrial hydraulic systems. With exceptional thermal stability and long-lasting oxidation resistance, it helps optimize the performance of hydraulic machinery while reducing maintenance costs.",
        performanceLevels: [
          {
            id: 0,
            content: "DIN 51524 Part 3 HVLP",
          },
          {
            id: 1,
            content: "ISO 6743-4 HV",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Bosch Rexroth",
          },
          {
            id: 1,
            content: "Parker Denison",
          },
        ],
        highlight: [
          {
            id: 0,
            content: "Superior high-temperature performance",
          },
          {
            id: 1,
            content: "Excellent oxidation stability",
          },
          {
            id: 2,
            content: "Long service life",
          },
        ],
        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 1,
        name: "VECTOR HD",
        slug: "vector-hd",
        producttype: "Industrial Gear Oil (Synthetic)",
        viscosityGrade: "Viscosity Grade : ISO VG 68",
        classification: "EP/PAO",
        image: vector_hd,
        productDescription:
          "VECTOR HD is a high-performance synthetic gear oil designed for industrial gearboxes. Its advanced formulation provides exceptional protection against wear and micro-pitting fatigue, ensuring reliable performance in high-load industrial applications.",
        performanceLevels: [
          {
            id: 0,
            content: "DIN 51517 Part 3 CLP",
          },
          {
            id: 1,
            content: "ISO 12925-1 CKD",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Flender",
          },
          {
            id: 1,
            content: "SEW-Eurodrive",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "Outstanding protection for gear systems",
          },
          {
            id: 1,
            content: "High resistance to wear and micro-pitting",
          },
        ],
        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 2,
        name: "COMPROL",
        slug: "comprol",
        producttype: "Compressor Oil (Synthetic)",
        viscosityGrade: "Viscosity Grade : ISO VG 32, 46, 68",
        classification: "Compressor Oil",
        image: comprol,
        productDescription:
          "COMPROL is a high-quality synthetic compressor oil designed for industrial air compressors. It offers excellent thermal and oxidation stability, minimizing wear and helping to extend the service life of compressors operating under heavy loads.",
        performanceLevels: [
          {
            id: 0,
            content: "DIN 51506 VDL",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Atlas Copco",
          },
          {
            id: 1,
            content: "Ingersoll Rand",
          },
        ],
        highlight: [
          {
            id: 0,
            content: "Optimized for rotary screw compressors",
          },
          {
            id: 1,
            content: "Reduces wear and extends service life",
          },
        ],
        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    productcategory: "GREASES",
    categorySlug: "greases",
    catContent:
      "LUBXEN provides high-performance greases that ensure smooth operation and protection against wear and corrosion. Suitable for a wide range of applications, our greases are crafted for durability and optimal performance in extreme conditions.",
    catImage: bentonite_grease,
    items: [
      {
        id: 0,
        name: "CALCIUM SULFONATE GREASE",
        slug: "calcium-sulfonate-grease",
        producttype: "Grease (Synthetic)",
        viscosityGrade: "NLGI Grade : 2",
        classification: "Calcium Sulfonate",
        image: calcium_sulfonate_grease,
        productDescription:
          "CALCIUM SULFONATE GREASE is specially formulated for heavy-duty industrial and marine applications. It provides excellent protection in high-load environments, with superior rust and corrosion resistance, making it ideal for equipment operating in harsh conditions.",

        highlight: [
          {
            id: 0,
            content: "High load-carrying capacity",
          },
          {
            id: 1,
            content: "Excellent rust and corrosion protection",
          },
        ],
        performanceLevels: [
          {
            id: 0,
            content: "DIN 51825 KP2K-30",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Caterpillar",
          },
          {
            id: 1,
            content: "John Deere",
          },
        ],
        nlgiGrades: [
          {
            id: 0,
            content: "NLGI 2",
          },
          {
            id: 1,
            content: "NLGI 3",
          },
        ],
        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 0,
        name: "BENTONITE GREASE",
        slug: "bentonite-grease",
        producttype: "Grease (Synthetic)",
        viscosityGrade: "NLGI Grade : 2",
        classification: "BENTONITE",
        image: bentonite_grease,
        productDescription:
          "BENTONITE GREASE is formulated for industrial applications where high temperatures are encountered. Its non-melting, high-temperature stable formulation makes it ideal for lubricating bearings and other critical components in extreme environments.",

        highlight: [
          {
            id: 0,
            content: "High-temperature stability",
          },
          {
            id: 1,
            content: "Non-melting formula",
          },
        ],
        performanceLevels: [
          {
            id: 0,
            content: "DIN 51502 K2N-20",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "SKF",
          },
          {
            id: 1,
            content: "NSK",
          },
        ],
        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 1,
        name: "MOLY EP GREASE",
        slug: "moly-ep-grease",
        producttype: "Molybdenum Disulfide Grease (Synthetic)",
        viscosityGrade: "NLGI Grade : 2",
        classification: "EP Grease",
        image: moly_ep_grease,
        productDescription:
          "MOLY EP GREASE provides long-lasting protection for high-load applications. It contains molybdenum disulfide to ensure superior performance under extreme pressure and high-temperature conditions, making it suitable for industrial and mining equipment.",

        highlight: [
          {
            id: 0,
            content: "Extreme pressure protection",
          },
          {
            id: 1,
            content: "Excellent mechanical stability",
          },
        ],
        performanceLevels: [
          {
            id: 0,
            content: "DIN 51502 KPF2N-30",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Komatsu",
          },
          {
            id: 1,
            content: "Volvo",
          },
        ],
        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    productcategory: "MARINE LUBRICANTS",
    categorySlug: "marine-lubricants",
    catContent:
      "Our marine lubricants offer exceptional protection for engines and machinery, even in the most demanding marine environments. LUBXEN products are formulated to maintain efficiency and reliability, ensuring smooth sailing globally.",
    catImage: marine_gear_oil,
    items: [
      {
        id: 0,
        name: "MARINE GEAR OIL",
        slug: "marine-gear-oil",
        producttype: "Marine Gear Oil (Synthetic)",
        viscosityGrade: "Viscosity Grade : SAE 75W-90",
        classification: "API GL-5",
        image: marine_gear_oil,
        productDescription:
          "MARINE GEAR OIL is designed for marine gearboxes, offering superior protection against corrosion in saltwater environments. Its high load-carrying capabilities and wear resistance ensure reliable performance in marine applications.",
        performanceLevels: [
          {
            id: 0,
            content: "API GL-5",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Mercury Marine",
          },
          {
            id: 1,
            content: "Yamaha",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "Premium Performance Two-Stroke Oil",
          },
          {
            id: 1,
            content: "Ashless Additive System",
          },
          {
            id: 2,
            content: "Pre-Diluted for Easy Mixing with Petrol",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 1,
        name: "MARINE ENGINE OIL",
        slug: "marine-engine-oil",
        producttype: "Marine Engine Oil (Synthetic)",
        viscosityGrade: "Viscosity Grade : SAE 15W-40",
        classification: "API CI-4",
        image: marine_engine_oil,
        productDescription:
          "MARINE ENGINE OIL is specifically designed for high-speed marine engines. Its synthetic formulation ensures protection against wear, oxidation, and corrosion, delivering outstanding performance in extreme marine environments.",
        performanceLevels: [
          {
            id: 0,
            content: "API CI-4",
          },
          {
            id: 1,
            content: "ACEA E7",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Caterpillar",
          },
          {
            id: 1,
            content: "MAN",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "High-Performance Four-Stroke Engine Oil",
          },
          {
            id: 1,
            content: "Outstanding Wear and Corrosion Protection",
          },
          {
            id: 2,
            content: "Extends Engine Life by Reducing Oil Consumption",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 2,
        name: "MARINE 2T OIL",
        slug: "marine-2t-oil",
        producttype: "Two-Stroke Marine Engine Oil (Synthetic)",
        viscosityGrade: "Viscosity Grade: N/A",
        classification: "NMMA TC-W3",
        image: marine_2t_oil,
        productDescription:
          "Lubrex Marine 2030 and 2040 are high-performance trunk piston engine oils designed for medium-speed marine and industrial-type trunk piston engines operating on low sulfur distillate fuel. These oils are blended using solvent-refined, high viscosity index paraffinic mineral base oils, with chemical additives providing effective alkalinity, wear resistance, detergency, and dispersancy.",
        performanceLevels: [
          {
            id: 0,
            content: "NMMA TC-W3",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Evinrude",
          },
          {
            id: 1,
            content: "Johnson",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "Ashless formulation for clean engine operation",
          },
          {
            id: 1,
            content: "Reduces engine deposits and wear",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
    ],
  },
  {
    id: 4,
    productcategory: "SPECIALTY LUBRICANTS",
    categorySlug: "specialty-lubricants",
    catContent:
      "LUBXEN's specialty lubricants are tailored for unique applications, offering advanced solutions for specific industrial needs. Our innovative formulations provide long-lasting protection and performance across specialized machinery.",
    catImage: speciality,
    items: [
      {
        id: 0,
        name: "TURBINE OIL",
        slug: "turbine-oil",
        producttype: "Turbine Oil (Synthetic)",
        viscosityGrade: "Viscosity Grade : ISO VG 32, 46",
        classification: "Turbine Oil",
        image: turbine_oil,
        productDescription:
          "TURBINE OIL is designed for steam and gas turbines. It provides excellent thermal stability and long-term protection against oxidation, rust, and corrosion, ensuring the reliability and efficiency of turbine systems.",
        performanceLevels: [
          {
            id: 0,
            content: "DIN 51515 L-TD/L-TG",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Siemens",
          },
          {
            id: 1,
            content: "GE",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "Excellent oxidation stability",
          },
          {
            id: 1,
            content:
              "Excellent Oxidation Stability and Corrosion ProtectioProtects against rust and corrosion",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 1,
        name: "HEAT TRANSFER OIL",
        slug: "heat-transfer-oil",
        producttype: "Heat Transfer Oil (Synthetic)",
        viscosityGrade: "Viscosity Grade : ISO VG 32",
        classification: "Heat Transfer Oil",
        image: heat_transfer_oil,
        productDescription:
          "HEAT TRANSFER OIL is formulated for industrial heat transfer systems. Its high thermal stability ensures efficient heat transfer and reliable performance, even in high-temperature applications, preventing system breakdowns and reducing maintenance.",
        performanceLevels: [
          {
            id: 0,
            content: "ISO 6743-12 L-QB-32",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Duratherm",
          },
          {
            id: 1,
            content: "Paratherm",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "High thermal stability",
          },
          {
            id: 1,
            content: "Resists thermal cracking and oxidation",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 2,
        name: "FIRE-RESISTANT HYDRAULIC FLUID",
        slug: "fire-resistant-hydraulic-fluid",
        producttype: "Fire-Resistant Hydraulic Fluid (Synthetic)",
        viscosityGrade: "Viscosity Grade : ISO VG 46, 68",
        classification: "Fire-Resistant",
        image: fire_resistant_hydraulic_fluid,
        productDescription:
          "FIRE-RESISTANT HYDRAULIC FLUID is engineered for high-risk environments where fire resistance is essential. Its synthetic formula provides superior protection and performance under extreme conditions, ensuring the safety and longevity of hydraulic systems.",
        performanceLevels: [
          {
            id: 0,
            content: "ISO L-HFC (ISO/DIS 12922)",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Bosch Rexroth",
          },
          {
            id: 0,
            content: "Eaton",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "Excellent fire resistance",
          },
          {
            id: 1,
            content: "Enhanced corrosion protection",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
    ],
  },
  {
    id: 5,
    productcategory: "ENGINE CARE & FUEL ADDITIVES",
    categorySlug: "engine-care-%26-fuel-additives",
    catContent:
      "Ensure peak engine performance with LUBXEN's premium engine care and fuel additives. Designed to clean, protect, and optimize fuel systems, our products enhance efficiency and reduce emissions for a smoother ride.",
    catImage: engine,
    items: [
      {
        id: 0,
        name: "FUEL SYSTEM CLEANER",
        slug: "fuel-system-cleaner",
        producttype: "Fuel Additive (Synthetic)",
        image: fuel_system_cleaner,
        productDescription:
          "FUEL SYSTEM CLEANER is a high-performance synthetic additive designed to clean and protect the fuel system. It removes deposits from fuel injectors and intake valves, improving combustion efficiency and fuel economy. It helps reduce engine knock and hesitation, ensuring smoother operation for gasoline engines.",
        performanceLevels: [
          {
            id: 0,
            content: "Suitable for all gasoline engines",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Toyota",
          },
          {
            id: 1,
            content: "Ford",
          },
          {
            id: 2,
            content: "General Motors",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "Cleans fuel injectors and intake valves",
          },
          {
            id: 1,
            content: "Improves fuel economy and engine performance",
          },
          {
            id: 2,
            content: "Reduces engine knock and hesitation",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 1,
        name: "RADIATOR COOLANT",
        slug: "radiator-coolant",
        producttype: "Radiator Coolant (Synthetic)",
        image: radiator_coolant,
        productDescription:
          "RADIATOR COOLANT is a synthetic coolant designed to provide long-lasting protection for the cooling system. It prevents overheating, protects against rust and corrosion, and helps maintain optimal engine temperature. This coolant is compatible with all types of antifreeze and is suitable for use in all vehicle cooling systems.",
        performanceLevels: [
          {
            id: 0,
            content: "ASTM D3306",
          },
          {
            id: 1,
            content: "ASTM D4985",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Chrysler MS-9769",
          },
          {
            id: 1,
            content: "GM 6277M",
          },
          {
            id: 2,
            content: "Ford WSS-M97B44-D",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "Prevents overheating and maintains engine temperature",
          },
          {
            id: 1,
            content: "Protects against rust, corrosion, and scale deposits",
          },
          {
            id: 2,
            content: "Compatible with all types of antifreeze",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 1,
        name: "TRANSMISSION TREATMENT",
        slug: "transmission-treatment",
        producttype: "Coolant System Leak Sealant",
        image: transmission_treatment,
        productDescription:
          "TRANSMISSION TREATMENT is a specially formulated synthetic additive designed to enhance the performance of automatic and manual transmissions. It reduces wear, prevents fluid breakdown, and helps prevent leaks by conditioning seals. This additive improves shifting performance, ensuring smooth and reliable transmission operation.",
        performanceLevels: [
          {
            id: 0,
            content: "Suitable for most automatic and manual transmissions",
          },
          {
            id: 1,
            content: "Not recommended for CVT transmissions",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "Ford MERCON V",
          },
          {
            id: 1,
            content: "GM DEXRON III",
          },
          {
            id: 2,
            content: "Chrysler ATF+4",
          },
        ],
        // application: [
        //   {
        //     id: 0,
        //     content: "Safe for use in engine systems using antifreeze.",
        //   },
        // ],

        highlight: [
          {
            id: 0,
            content: "Enhances transmission fluid performance",
          },
          {
            id: 1,
            content: "Reduces wear and prevents leaks",
          },
          {
            id: 2,
            content: "Improves shifting and transmission longevity",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
    ],
  },
  {
    id: 6,
    productcategory: "Base Oils",
    categorySlug: "base-oils",
    catContent:
      "LUBXEN's base oils are crafted to provide the essential foundation for high-quality lubricants. Produced with precision in the UAE, our base oils ensure stability, purity, and performance, forming the backbone of superior lubrication solutions worldwide.",
    catImage: base_oil,
    items: [
      {
        id: 0,
        name: "Group I Base Oil",
        slug: "group_i_base_oil",
        producttype: "Solvent-Refined Base Oil",
        classification: "General Purpose Industrial Lubricant Base",
        image: base_oil,
        productDescription:
          "Group I Base Oil is a solvent-refined oil ideal for formulating general-purpose lubricants. Commonly used in applications where high-performance characteristics like oxidation resistance and low volatility are not critical, Group I Base Oils are perfect for older engines and less demanding industrial equipment. They offer excellent value for cost-sensitive operations while ensuring adequate lubrication.",
        performanceLevels: [
          {
            id: 0,
            content: "Reliable lubrication for moderate temperatures.",
          },
          {
            id: 1,
            content: "Cost-effective for general-purpose use.",
          },
          {
            id: 2,
            content:
              "Suitable for use in industrial machinery and older vehicles.",
          },
          {
            id: 3,
            content: "Provides adequate protection against wear and oxidation.",
          },
        ],

        highlight: [
          {
            id: 0,
            content:
              "Suitable for a wide range of industrial and automotive lubricants.",
          },
          {
            id: 1,
            content: "Ideal for less demanding applications.",
          },
          {
            id: 2,
            content:
              "Provides reliable performance for older engines and equipment.",
          },
          {
            id: 3,
            content: "High viscosity index for moderate temperature stability.",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 1,
        name: "Group II Base Oil",
        slug: "group_ii_base_oil",
        producttype: "Hydrocracked Base Oil",
        classification: "High-Performance Industrial Lubricant Base",
        image: base_oil,
        productDescription:
          "Group II Base Oil is a high-performance, hydrocracked oil that provides superior oxidation stability and performance compared to conventional base oils. This oil is used in a variety of applications, including automotive and industrial lubricants, where high operating temperatures and extended oil life are required. It improves the efficiency and durability of lubricants in heavy-duty equipment and demanding environments.",
        performanceLevels: [
          {
            id: 0,
            content:
              "Improved oxidation resistance for long-lasting protection.",
          },
          {
            id: 1,
            content:
              "Enhanced thermal stability for better high-temperature performance.",
          },
          {
            id: 2,
            content:
              "Reduced volatility, ensuring lower oil consumption and longer service life.",
          },
          {
            id: 3,
            content:
              "Suitable for formulating advanced automotive and industrial lubricants.",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "High oxidation stability.",
          },
          {
            id: 1,
            content:
              "Suitable for a wide range of lubricants, including automotive and industrial oils.",
          },
          {
            id: 2,
            content:
              "Provides better performance in high-temperature conditions.",
          },
          {
            id: 3,
            content:
              "Suitable for heavy-duty applications requiring higher efficiency.",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
      {
        id: 2,
        name: "Group III Base Oil",
        slug: "group-iii-base-oil",
        producttype: "Hydroisomerized Base Oil",
        classification: "Synthetic-Like Industrial Lubricant Base",
        image: base_oil,
        productDescription:
          "Group III Base Oil offers near-synthetic performance due to its hydroisomerization process, making it ideal for high-performance lubricants. This oil provides enhanced oxidation stability, superior low volatility, and excellent viscosity characteristics at extreme temperatures. It is a cost-effective alternative to full synthetics for modern high-output engines and industrial machinery operating under demanding conditions.",
        performanceLevels: [
          {
            id: 0,
            content: "Synthetic-like performance for extended drain intervals.",
          },
          {
            id: 1,
            content:
              "Superior thermal and oxidation stability for high-performance applications.",
          },
          {
            id: 2,
            content: "Reduces oil consumption and extends equipment life.",
          },
          {
            id: 3,
            content:
              "Ideal for use in automotive engine oils, industrial gear oils, and other high-performance lubricants.",
          },
        ],

        highlight: [
          {
            id: 0,
            content: "Provides synthetic-like performance at a lower cost.",
          },
          {
            id: 1,
            content:
              "Excellent oxidation stability for high-temperature operations.",
          },
          {
            id: 2,
            content:
              "Enhanced viscosity stability across a wide range of temperatures.",
          },
          {
            id: 3,
            content:
              "Ideal for use in high-performance automotive and industrial lubricants.",
          },
        ],

        contact: {
          location:
            "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
          email: "contact@lubxen.com",
          contactNumber: [
            {
              id: 0,
              number: "+971544997141",
            },
          ],
        },
      },
    ],
  },

  // Add more products as needed
];

export default products;
// {
//   id: 1,
//   productcategory: "INDUSTRIAL LUBRICANTS",
//   categorySlug: "industrial-lubricants",
//   items: [
//     {
//       id: 0,
//       name: "VECTOR EP",
//       slug: "vector-ep",
//       producttype: "Industrial Gear Oil (Mineral)",
//       viscosityGrade: "Viscosity Grade : ISO VG 68",
//       classification: "EP",
//       image: img1,
//       productDescription:
//         "Vector EP gear lubricants are high-performance, multipurpose mineral oil-based lubricants designed for the lubrication of various industrial gear systems, including spur, helical, straight, and spiral bevel types. These oils operate effectively under severe conditions and across a wide range of speeds, loads, and temperatures. They provide outstanding wear protection and excellent thermal stability.",
//       performanceLevels: [
//         {
//           id: 0,
//           content: "DIN 51517 Part 3 CLP",
//         },
//         {
//           id: 1,
//           content: "ISO 12925-1:1996 CKD",
//         },
//         {
//           id: 2,
//           content: "AIST 224/US STEEL 224",
//         },
//         {
//           id: 3,
//           content: "ANSI/AGMA 9004-D95/9005-E02",
//         },
//         {
//           id: 4,
//           content: "DAVID BROWN S1.53.101",
//         },
//         {
//           id: 5,
//           content: "GM LS 2 EP GEAR OIL",
//         },
//         {
//           id: 6,
//           content: "FIVES CINCINNATI MACHINE GEAR",
//         },
//         {
//           id: 7,
//           content: "FLENDER",
//         },
//       ],

//       highlight: [
//         {
//           id: 0,
//           content: "High-Performance Multipurpose Gear Lubricant",
//         },
//         {
//           id: 1,
//           content: "Designed for Industrial Gear Systems",
//         },
//         {
//           id: 2,
//           content:
//             "Suitable for Spur, Helical, Straight, and Spiral Bevel Gears",
//         },
//       ],
//       contact: {
//         location: "Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
//         email: "contact@lubxen.com",
//         contactNumber: [
//           {
//             id: 0,
//             number: "+971544997141",
//           },
//           {
//             id: 1,
//             number: "+971544997141",
//           },
//         ],
//       },
//     },
//   ],
// },
