import img1 from "../../../public/images/1.jpg";

const products = [
  {
    id: 0,
    productcategory: "AUTOMOTIVE LUBRICANTS",
    categorySlug: "automotive-lubricants",
    items: [
      {
        id: 0,
        name: "MOMENTA PLATINUM",
        slug: "momenta-platinum",
        producttype: "Automotive Diesel Engine Oil (Synthetic)",
        viscosityGrade: "Viscosity Grade : 0W-30",
        classification: "API CK-4/SN2",
        image: img1,
        productDescription:
          "Momenta Platinum is a low SAPS heavy-duty engine oil designed to extend engine life in severe on and off-highway applications. It delivers outstanding performance in modern high-output, low-emission engines, and is particularly effective in vehicles fitted with EGR, DPF, DOC, and SCR-AdBlue NOx reduction systems. The oil's exceptional low-temperature fluidity ensures maximum engine protection and longevity. Suitable for on-road vehicles meeting Euro VI and off-road vehicles meeting Euro IV stage emission norms.",
        performanceLevels: [
          {
            id: 0,
            content: "API CK-4/SN",
          },
          {
            id: 1,
            content: "ACEA E6/E7/E9-16",
          },
          {
            id: 2,
            content: "Mack EOS-4.5",
          },
          {
            id: 3,
            content: "Caterpillar ECF-3",
          },
          {
            id: 4,
            content: "Deutz DQC IV-18 LA",
          },
          {
            id: 5,
            content: "MAN M3677/M3777",
          },
          {
            id: 6,
            content: "Volvo VDS-4.5",
          },
          {
            id: 7,
            content: "Renault RLD-4",
          },
          {
            id: 8,
            content: "DDC 93K222",
          },
          {
            id: 9,
            content: "Cummins CES 20086",
          },
          {
            id: 10,
            content: "Scania Low Ash / LDF-4",
          },
          {
            id: 11,
            content: "MTU Type 3.1",
          },
        ],
        oemApprovals: [
          {
            id: 0,
            content: "MB-Approval 228.51 (SAE 10W-40)",
          },
        ],
        Highlight: [
          {
            id: 0,
            content: "Low SAPS Heavy-Duty Oil",
          },
          {
            id: 1,
            content: "Supports Modern High-Output, Low-Emission Engines",
          },
          {
            id: 2,
            content: "Suitable for EGR, DPF, DOC, SCR-AdBlue Systems",
          },
        ],
        contact: {
          location: "3111 West",
          email: "support@financ.com",
          contactNumber: [
            {
              id: 0,
              number: "1-982-782-5297",
            },
            {
              id: 1,
              number: "1-982-782-5297",
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
    items: [
      {
        id: 0,
        name: "VECTOR EP",
        slug: "vector-ep",
        producttype: "Industrial Gear Oil (Mineral)",
        viscosityGrade: "Viscosity Grade : ISO VG 68",
        classification: "EP",
        image: img1,
        productDescription:
          "Vector EP gear lubricants are high-performance, multipurpose mineral oil-based lubricants designed for the lubrication of various industrial gear systems, including spur, helical, straight, and spiral bevel types. These oils operate effectively under severe conditions and across a wide range of speeds, loads, and temperatures. They provide outstanding wear protection and excellent thermal stability.",
        performanceLevels: [
          {
            id: 0,
            content: "DIN 51517 Part 3 CLP",
          },
          {
            id: 1,
            content: "ISO 12925-1:1996 CKD",
          },
          {
            id: 2,
            content: "AIST 224/US STEEL 224",
          },
          {
            id: 3,
            content: "ANSI/AGMA 9004-D95/9005-E02",
          },
          {
            id: 4,
            content: "DAVID BROWN S1.53.101",
          },
          {
            id: 5,
            content: "GM LS 2 EP GEAR OIL",
          },
          {
            id: 6,
            content: "FIVES CINCINNATI MACHINE GEAR",
          },
          {
            id: 7,
            content: "FLENDER",
          },
        ],

        Highlight: [
          {
            id: 0,
            content: "High-Performance Multipurpose Gear Lubricant",
          },
          {
            id: 1,
            content: "Designed for Industrial Gear Systems",
          },
          {
            id: 2,
            content:
              "Suitable for Spur, Helical, Straight, and Spiral Bevel Gears",
          },
        ],
        contact: {
          location: "3111 West",
          email: "support@financ.com",
          contactNumber: [
            {
              id: 0,
              number: "1-982-782-5297",
            },
            {
              id: 1,
              number: "1-982-782-5297",
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
    items: [
      {
        id: 0,
        name: "FRICTO CALCIUM",
        slug: "fricto-calcium",
        producttype: "Calcium Grease (Mineral)",
        viscosityGrade: "NLGI Grade: 2",
        classification: "CALCIUM GREASE",
        image: img1,
        productDescription:
          "Fricto Calcium grease consists of refined paraffinic base stock, calcium-based thickener, and a special additive package. It offers excellent water resistance and is suitable for lubricating machine elements operating in conditions where water ingress cannot be avoided. This grease provides protection against rust, corrosion, wear, and has an outstanding ability to resist water washout.",

        Highlight: [
          {
            id: 0,
            content: "Good Water Resistance",
          },
          {
            id: 1,
            content: "Protects Against Rust and Corrosion",
          },
          {
            id: 2,
            content: "Resistant to Water Washout",
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
          location: "3111 West",
          email: "support@financ.com",
          contactNumber: [
            {
              id: 0,
              number: "1-982-782-5297",
            },
            {
              id: 1,
              number: "1-982-782-5297",
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
    items: [
      {
        id: 0,
        name: "MARINE 2T PLUS",
        slug: "marine-2t-plus",
        producttype: "Marine Outboard Engine Oil (Mineral)",
        viscosityGrade: "SAE Grade : SAE 20",
        classification: "NMMA TC-W3",
        image: img1,
        productDescription:
          "Marine 2T Plus is a premium performance, two-stroke marine outboard engine oil formulated with a special ashless additive system. It is pre-diluted with a high flash point solvent to facilitate mixing with petrol at all temperatures. Designed for engines requiring NMMA TC-W3 performance lubricants, it operates effectively in all service conditions and may be used at manufacturer-recommended fuel/oil ratios from 11:1 to 100:1.",
        performanceLevels: [
          {
            id: 0,
            content: "NMMA TC-W3",
          },
          {
            id: 1,
            content: "API TC",
          },
          {
            id: 2,
            content: "JASO FB",
          },
        ],
        industryApproval: [
          {
            id: 0,
            content: "NMMA TC-W3",
          },
        ],

        Highlight: [
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
          location: "3111 West",
          email: "support@financ.com",
          contactNumber: [
            {
              id: 0,
              number: "1-982-782-5297",
            },
            {
              id: 1,
              number: "1-982-782-5297",
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
    items: [
      {
        id: 0,
        name: "OPTIMUS TURBINE OIL",
        slug: "optimus-turbine-oil",
        producttype: "Turbine Oil (Mineral)",
        viscosityGrade: "ISO VG Grade : 32",
        classification: "Turbine Oil",
        image: img1,
        productDescription:
          "Optimus Turbine Oil is a lubricant specifically designed for use in steam and gas turbine applications. Formulated with high-quality base oil and a selected additive package, it offers excellent oxidation stability and corrosion protection along with good demulsibility, anti-foaming, and air release properties",
        performanceLevels: [
          {
            id: 0,
            content: "DIN 51515, part 1 (L-TD)",
          },
          {
            id: 1,
            content: "DIN 51515, part 2 (L-TG)",
          },
          {
            id: 2,
            content: "DIN 51506 (VBL, VCL, VDL)",
          },
          {
            id: 3,
            content: "BS 489",
          },
          {
            id: 4,
            content: "ISO 8068",
          },
          {
            id: 5,
            content: "Siemens TLV 9013 04/01",
          },
          {
            id: 6,
            content: "GEK 32568 A/C",
          },
          {
            id: 7,
            content: "MIL-L-17672 D",
          },
          {
            id: 8,
            content: "CEGB 207001",
          },
          {
            id: 9,
            content: "Brown Boveri HTGD 90117",
          },
          {
            id: 10,
            content: "US STEEL 120 & 126",
          },
          {
            id: 11,
            content: "ISO / DP 6521 (DAA, DAB, DAH, DAG)",
          },
        ],

        Highlight: [
          {
            id: 0,
            content: "Specifically Designed for Steam and Gas Turbines",
          },
          {
            id: 1,
            content: "Excellent Oxidation Stability and Corrosion Protection",
          },
          {
            id: 2,
            content: "Good Demulsibility and Anti-Foaming Properties",
          },
        ],

        contact: {
          location: "3111 West",
          email: "support@financ.com",
          contactNumber: [
            {
              id: 0,
              number: "1-982-782-5297",
            },
            {
              id: 1,
              number: "1-982-782-5297",
            },
          ],
        },
      },
    ],
  },
  {
    id: 5,
    productcategory: "ENGINE CARE & FUEL ADDITIVES",
    categorySlug: "engine-care-&-fuel-additives",
    items: [
      {
        id: 0,
        name: "TRANSMISSION TREATMENT",
        slug: "transmission-treatment",
        producttype: "Automatic Transmission Additive",
        image: img1,
        productDescription:
          "Transmission Treatment is a special additive formulated to provide extra lubrication protection for automatic transmissions. It is added to the new and remaining transmission fluid left behind after a drain and refill service. This treatment helps prevent transmission shudder, shifting problems, and leaks by keeping seals soft and pliable. It also helps reduce wear, maintain proper viscosity, and resist fluid oxidation.",
        application: [
          {
            id: 0,
            content:
              "Recommended for use in most manual and automatic transmissions.",
          },
          {
            id: 1,
            content: "Not recommended for CVT Transmissions.",
          },
        ],

        Highlight: [
          {
            id: 0,
            content:
              "Provides extra lubrication protection for automatic transmissions",
          },
          {
            id: 1,
            content:
              "Helps prevent deposit formation, fluid breakdown, and transmission failure",
          },
          {
            id: 2,
            content: "Conditions seals and prevents leaks",
          },
        ],

        contact: {
          location: "3111 West",
          email: "support@financ.com",
          contactNumber: [
            {
              id: 0,
              number: "1-982-782-5297",
            },
            {
              id: 1,
              number: "1-982-782-5297",
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

//       Highlight: [
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
//         location: "3111 West",
//         email: "support@financ.com",
//         contactNumber: [
//           {
//             id: 0,
//             number: "1-982-782-5297",
//           },
//           {
//             id: 1,
//             number: "1-982-782-5297",
//           },
//         ],
//       },
//     },
//   ],
// },
