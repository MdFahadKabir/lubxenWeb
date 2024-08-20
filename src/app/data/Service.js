import img1 from "../../../public/images/1.jpg";
import img2 from "../../../public/images/factor1.jpg";
import img3 from "../../../public/images/factor2.jpg";
import img4 from "../../../public/images/factor3.jpg";

const services = [
  {
    id: 0,
    name: "OIL ANALYSIS",
    image: img1,
    content:
      "Performing an effective oil analysis helps identify possible issues of wear, contamination and changes that could affect the performance and health of the mechanical parts. At Lubrex, we support our clients with our Used Oil Analysis Programme that aim to improve their productivity and equipment reliability by performing what is called Condition Based Monitoring (CBM) which finally reduces Engine/Machine/ Equipment downtime and prevents catastrophic damage. Another test to consider is Oil Condition Monitoring (OCM), which can provide vital information about machine wear conditions as well as lubricant conditions. Crucial maintenance decisions can be made based on the outcomes of such tests to prevent potential problems before a major repair is necessary. Oil analysis reveals information that can be broken down into three categories: Lubricant Condition, Contaminants, and Machine Wear.Knowing the status of the analysed oil with regards to each of these three categories could help find the best way to prolong machines life and enhance their performance. Proper testing and analysis could also provide optimal performance as it ensures using the right fluid for the right part.",
    slug: "OIL-ANALYSIS",

    sliderImg: [
      { id: 0, image1: img3, alt: "Partner 1" },
      { id: 1, image1: img2, alt: "Partner 2" },
      { id: 2, image1: img3, alt: "Partner 3" },
    ],
    list: [
      {
        id: 0,
        content: "asfdbhosauief sfijhs",
      },
    ],
    contact: {
      location: "3111 West Allegheny Avenue Pennsylvania 19132",
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
  {
    id: 1,
    name: "Mechanical Projects Planning",
    image: img1,
    content: "Detailed content about Mechanical Projects Planning...",
    slug: "mechanical-projects-planning",
    sliderImg: [
      { id: 0, image1: img2, alt: "Partner 1" },
      { id: 1, image1: img3, alt: "Partner 2" },
      { id: 2, image1: img4, alt: "Partner 3" },
    ],
    list: [
      {
        id: 0,
        content: "asfdbhosauief sfijhs",
      },
    ],
    contact: {
      location: "3111 West Allegheny Avenue Pennsylvania 19132",
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
  // Add more services as needed
];

export default services;
