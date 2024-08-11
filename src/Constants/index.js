import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    shirt,
    metaverse,
    dashboard,
    gpt3,
    gericht,
    hoobank,
    o4u,
    midas,
    iphone,
    brainwave,
    yoom,
    figpro,
    carhub,
    livedocs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Senior Sales Executive",
      company_name: "Outsourcing-4-You",
      icon: o4u,
      iconBg: "#383E56",
      date: "January 2021 - May 2023",
      points: [
        "Started as a telesales agent and rose up the ranks as I got promoted from a sales agent to a sales closer after only 6 months and 4 months later I got promoted to become the Senior Sales Executive",
      ],
    },
    {
      title: "Acquisitions Specialist",
      company_name: "Midas Acquisitions",
      icon: midas,
      iconBg: "#E6DEDD",
      date: "May 2023 - Dec 2023",
      points: [
        "Deal Sourcing and Analysis: Proactively sourced and analyzed potential real estate acquisitions across Texas, assessing properties based on market trends, financial viability, and investment potential.",
        "Negotiation and Closing: Successfully negotiated purchase agreements, working closely with sellers, brokers, and legal teams to ensure smooth and timely closings, resulting in significant portfolio growth for the company.",
      ],
    },
    {
      title: "Operations Team Leader",
      company_name: "Outsourcing-4-You",
      icon: o4u,
      iconBg: "#383E56",
      date: "Feb 2024 - Now",
      points: [
        "Team Management: Led a team of telesales representatives, providing guidance, training, and support to ensure the achievement of sales targets and overall team performance.",
        "Performance Optimization: Implemented strategies to optimize call scripts, improve customer engagement, and increase conversion rates, resulting in higher sales and customer satisfaction.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Shirt Customzier",
      description:
        "A 3D tool that allows you to create unique t-shirt designs",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "blue-text-gradient",
        },
        {
          name: "react-tilt",
          color: "green-text-gradient",
        },
        {
          name: "valtio",
          color: "pink-text-gradient",
        },
        {
          name: "Vite.js",
          color: "blue-text-gradient",
        },
      ],
      image: shirt,
      source_code_link: "https://github.com/mo2men165/3D-Shirt-Customizer",
      website_link: 'https://mo2men165.github.io/3D-Shirt-Customizer/'
    },
    {
      name: "Metaversus",
      description:
        "A dummy site for 'Metaversus' a VR game that allows you to explore different worlds ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js 13",
          color: "green-text-gradient",
        },
      ],
      image: metaverse,
      source_code_link: "https://github.com/mo2men165/Metaversus",
      website_link: 'https://mo2men165.github.io/Metaversus/'
    },
    {
      name: "Shoppy",
      description:
        "A React dashbard built with dummy data. Adjustable dashboard for real life projects.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Syncfusion",
          color: "green-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/mo2men165/Shoppy-Dashboard",
      website_link: 'https://mo2men165.github.io/Shoppy-Dashboard/'
    },
    {
      name: "GPT3",
      description:
        `A dummy site for "GPT3" promoting OpenAi's GPT3 product `,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: gpt3,
      source_code_link: "https://github.com/mo2men165/GPT3",
      website_link: 'https://mo2men165.github.io/GPT3/'
    },
    {
      name: "Gericht",
      description:
        `A dummy site for "Gericht" a fancy dining restaurant `,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: gericht,
      source_code_link: "https://github.com/mo2men165/Gericht-Restaurant",
      website_link: 'https://mo2men165.github.io/Gericht-Restaurant/'
    },
    {
      name: "HooBank",
      description:
        `A dummy site for "HooBank" a business offering next-generation payment methods`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Vite.js",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
      ],
      image: hoobank,
      source_code_link: "https://github.com/mo2men165/HooBank",
      website_link: 'https://mo2men165.github.io/HooBank/'
    },
    {
      name: "Brainwave",
      description:
        `A dummy site for Brainwave an AI chatbot`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: brainwave,
      source_code_link: "https://github.com/mo2men165/Brainwave",
      website_link: 'https://brainwave-jet-zeta.vercel.app/'
    },
    {
      name: "Iphone",
      description:
        `An Iphone sales website, selling all the recent apple products`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
        {
          name: "Sentry",
          color: "green-text-gradient",
        },
        {
          name: "Gsap",
          color: "blue-text-gradient",
        },
      ],
      image: iphone,
      source_code_link: "https://github.com/mo2men165/Iphone",
      website_link: 'https://iphone-pied.vercel.app/'
    },
    {
      name: "Yoom",
      description:
        `A Zoom clone`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Nextjs",
          color: "pink-text-gradient",
        },
        {
          name: "shadcn/ui",
          color: "green-text-gradient",
        },
        {
          name: "stream",
          color: "blue-text-gradient",
        },
      ],
      image: yoom,
      source_code_link: "https://github.com/mo2men165/Yoom",
      website_link: 'https://yoom-eight-flame.vercel.app/'
    },
    {
      name: "Car Hub",
      description:
        `A car showcase website, showcasing cars for sale using RapidApi`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Nextjs",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: carhub,
      source_code_link: "https://github.com/mo2men165/Car-hub",
      website_link: 'https://car-hub-wine-ten.vercel.app/'
    },
    {
      name: "LiveDocs",
      description:
        `A Google docs clone`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NextJs",
          color: "pink-text-gradient",
        },
        {
          name: "Liveblocks",
          color: "green-text-gradient",
        },
        {
          name: "Clerk",
          color: "blue-text-gradient",
        },
      ],
      image: livedocs,
      source_code_link: "https://github.com/mo2men165/LiveDocs",
      website_link: 'https://live-docs-sooty.vercel.app/'
    },
    {
      name: "FigPro",
      description:
        `A Figma clone`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NextJs",
          color: "pink-text-gradient",
        },
        {
          name: "Liveblocks",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: figpro,
      source_code_link: "https://github.com/mo2men165/Figma-Clone",
      website_link: 'https://figma-clone-three-snowy.vercel.app/'
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };