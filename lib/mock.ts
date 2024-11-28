const categories = [
  {
    id: 1,
    slug: "iphones",
    name: "iPhones",
    description: "Showcase your mobile app designs with these iPhone mockups.",
  },
  {
    id: 2,
    slug: "ipads",
    name: "iPads",
    description: "Present your web designs with these iPad mockups.",
  },
  {
    id: 3,
    slug: "macbooks",
    name: "MacBooks",
    description: "Display your website designs with these MacBook mockups.",
  },
];

const products = [
  {
    id: 1,
    title: "Echo Mockups: iPhone 16 Pro Max",
    description:
      "This is a demonstration store. You can purchase products like this on UI8.",
    price: "38.00",
    images: [
      "/images/echo-mockups/01.jpg",
      "/images/echo-mockups/02.jpg",
      "/images/echo-mockups/03.jpg",
    ],
    featured: true,
    category_id: 1,
  },
  {
    id: 2,
    title: "Echo Mockups: MacBook Pro",
    description:
      "This is a demonstration store. You can purchase products like this on UI8.",
    price: "12.00",
    images: [
      "/images/echo-macbook/01.jpg",
      "/images/echo-macbook/02.jpg",
      "/images/echo-macbook/03.jpg",
    ],
    featured: true,
    category_id: 3,
  },
  {
    id: 3,
    title: "BVGE: iPad Mockups",
    description:
      "This is a demonstration store. You can purchase products like this on UI8.",
    price: "38.00",
    images: [
      "/images/bvge/01.jpg",
      "/images/bvge/02.jpg",
      "/images/bvge/03.jpg",
    ],
    featured: true,
    category_id: 2,
  },
  {
    id: 4,
    title: "U-Mockups: iPhone 16 Pro",
    description:
      "This is a demonstration store. You can purchase products like this on UI8.",
    price: "38.00",
    images: [
      "/images/u-mockups/01.jpg",
      "/images/u-mockups/02.jpg",
      "/images/u-mockups/03.jpg",
    ],
    featured: false,
    category_id: 1,
  },
  {
    id: 5,
    title: "T-Mockups: iPhone 16 Pro",
    description:
      "This is a demonstration store. You can purchase products like this on UI8.",
    price: "24.00",
    images: [
      "/images/t-mockups/01.jpg",
      "/images/t-mockups/02.jpg",
      "/images/t-mockups/03.jpg",
    ],
    featured: false,
    category_id: 1,
  },
  {
    id: 6,
    title: "R-Mockups: iPad Pro",
    description:
      "This is a demonstration store. You can purchase products like this on UI8.",
    price: "29.00",
    images: [
      "/images/r-mockups/01.jpg",
      "/images/r-mockups/02.jpg",
      "/images/r-mockups/03.jpg",
    ],
    featured: false,
    category_id: 2,
  },
  {
    id: 7,
    title: "D-Mockups: iPad Pro",
    description:
      "This is a demonstration store. You can purchase products like this on UI8.",
    price: "32.00",
    images: [
      "/images/d-mockups/01.jpg",
      "/images/d-mockups/02.jpg",
      "/images/d-mockups/03.jpg",
    ],
    featured: false,
    category_id: 2,
  },
  {
    id: 8,
    title: "R-Mockups: Macbook Air",
    description:
      "This is a demonstration store. You can purchase products like this on UI8.",
    price: "24.00",
    images: [
      "/images/r-macbook/01.jpg",
      "/images/r-macbook/02.jpg",
      "/images/r-macbook/03.jpg",
    ],
    featured: false,
    category_id: 3,
  },
  {
    id: 9,
    title: "L-Mockups: Macbook Air",
    description:
      "This is a demonstration store. You can purchase products like this on UI8.",
    price: "22.00",
    images: [
      "/images/l-mockups/01.jpg",
      "/images/l-mockups/02.jpg",
      "/images/l-mockups/03.jpg",
    ],
    featured: false,
    category_id: 3,
  },
];

const features = [
  {
    id: 1,
    title: "High-Resolution Quality",
    subtitle:
      "All mockups are crafter with crisp, high-definition visuals that showcase your designs in stunning detail, ensuring they look professional and polished.",
    icon: "image-search",
  },
  {
    id: 2,
    title: "Easy Customization",
    subtitle:
      "Each mockup comes with smart objects and editable layers, making it simple to drag and drop your designs for quick and effortless customization.",
    icon: "paint-ai",
  },
  {
    id: 3,
    title: "Diverse Range of Devices",
    subtitle:
      "Featuring a variety of devices including iPhones, iPads, MacBooks, Apple Watches, and iMacs, allowing you to present your work across multiple platforms seamlessly.",
    icon: "pc",
  },
];

const benefits = [
  {
    id: 1,
    title: "Realistic Lighting",
    description:
      "Enjoy lifelike reflections and shadows that bring depth and realism to your designs, ensuring a professional and polished look in any context.",
    icon: "lamp",
  },
  {
    id: 2,
    title: "Multi-Compatible",
    description:
      "Seamlessly integrate our mockups with popular design tools like Photoshop, Figma, and Sketch, making customization effortless and efficient.",
    icon: "plugin",
  },
  {
    id: 3,
    title: "Aesthetic Design",
    description:
      "Featuring clean and modern layouts, our mockups are crafted to elevate your projects with style and sophistication.",
    icon: "effect",
  },
];

const awards = [
  {
    id: 1,
    title: "Design Innovation",
    description:
      "Awarded for pushing boundaries in creative tools for designers.",
  },
  {
    id: 2,
    title: "Excellence in UI/UX",
    description:
      "Recognized for outstanding, user-friendly templates that enhance UX.",
  },
  {
    id: 3,
    title: "Top digital resource",
    description:
      "Honored as a go-to source for high-quality mockups and templates.",
  },
  {
    id: 4,
    title: "Global favorite",
    description: "Celebrated for assets loved and used by designers worldwide.",
  },
  {
    id: 5,
    title: "Top platform",
    description:
      "Praised for offering a curated and seamless shopping experience.",
  },
  {
    id: 6,
    title: "Creative impact",
    description:
      "Acknowledged for exceptional tools that inspire and support creators.",
  },
];

const values = [
  {
    id: 1,
    title: "Innovation",
    description: "Trendy mockups that keep you ahead of the curve.",
    icon: "bulb",
  },
  {
    id: 2,
    title: "Quality",
    description: "High-quality mockups for stunning, realistic presentations.",
    icon: "gem",
  },
  {
    id: 3,
    title: "Simplicity",
    description: "Easy to use and customize, no design skills needed.",
    icon: "paint-ai",
  },
  {
    id: 4,
    title: "Flexibility",
    description:
      "Mockups that work with any design software, including Photoshop.",
    icon: "tools",
  },
  {
    id: 5,
    title: "Customer-centric",
    description: "We’re here to help you succeed, every step of the way.",
    icon: "heart",
  },
  {
    id: 6,
    title: "Efficiency",
    description: "Save time and money with our easy-to-use mockups.",
    icon: "clock",
  },
];

const faqs = [
  {
    id: 1,
    question: "What is included in each mockup package?",
    answer:
      "Each package includes high-resolution mockup files in popular formats like PSD and PNG, compatible with Photoshop anf other design tools. Some packages may contain additional assets like shadows, backgrounds and lighting layers.",
  },
  {
    id: 2,
    question: "Can I use these mockups for commercial projects?",
    answer:
      "Yes, all mockups on the site are free to use for both personal and commercial projects. You can modify any resources to fit your project needs.",
  },
  {
    id: 3,
    question: "How do I download the mockups after purchasing?",
    answer:
      "After purchasing a package, you will receive an email with a download link. You can also download the package from the order confirmation page.",
  },
  {
    id: 4,
    question: "Can I share or resell these mockups?",
    answer:
      "No, you cannot share or resell the mockups. You can use them in personal or commercial projects, but you cannot distribute or offer them as a separate file.",
  },
  {
    id: 5,
    question: "Is attribution required when using these mockups?",
    answer:
      "No, attribution is not required. You can use these mockups for personal and commercial projects without giving credit to the author.",
  },
  {
    id: 6,
    question: "Do I get updates for the mockups?",
    answer:
      "Yes, you will receive an email notification when a new version of the mockup is available for download. You can also check for updates on the order confirmation page.",
  },
];

export { categories, products, features, benefits, awards, values, faqs };
