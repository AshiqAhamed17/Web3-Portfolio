
export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Mark Zuckberg',
      position: 'CEO of Meta',
      img: 'assets/review1.png',
      review:
        'Working with Ashiq was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Harkirat Singh',
      position: 'Founder of 100xdevs',
      img: 'assets/review2.png',
      review:
        'Ashiq expertise in web3 development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'Elon Musk',
      position: 'CEO of Tesla, SpaceX',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Jeff Bezos',
      position: 'CEO of Amazon',
      img: 'assets/review4.png',
      review:
        'Ashiq was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Solana Faucet',
      desc: 'A Web3 faucet built with React.js, Tailwind CSS and web3.js',
      subdesc:
        'This Solana-based faucet allows users to connect their Web3 wallets, request SOL airdrops, view balances, send SOL to specific addresses, and sign messages. Built with React.js, Tailwind CSS, and @solana/web3.js, it ensures a seamless and interactive user experience.',
      href: 'https://solana-faucet-ashy-three.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png', // Replace
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: '@solana/web3.js',
          path: '/assets/typescript.png', // Replace with SOL image
        },
      ],
    },
    {
      title: 'Blockchain Visualization',
      desc: 'A dynamic and interactive blockchain visualization tool built with React.js and Tailwind CSS.',
      subdesc:
        'This project allows users to visually understand the workings of blockchain technology by creating and appending blocks with user-provided data. Featuring a sleek, dark-themed UI with glowing pink accents, the app demonstrates the generation of block hashes, timestamps, and connections to previous blocks, making blockchain concepts accessible to everyone.',
      href: 'https://blockchain-validator-k95s-1bd1s2lcj-ashiqs-projects-5d0d0586.vercel.app/',
      texture: '/textures/project/project2.mp4', // Replace
      logo: '/assets/project-logo2.png', //Replace
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Personalized Dashboard',
      desc: 'A feature-rich personalized dashboard built with React.js, Node.js, Express.js, PostgreSQL, and Tailwind CSS.',
      subdesc:
        'This dashboard enables users to log in and integrate their GitHub, LeetCode, Codeforces, and LinkedIn profiles. It fetches data through APIs and visualizes key metrics, such as problem-solving stats, rankings, ratings, and GitHub contributions, using interactive graphs and charts for an insightful user experience.',
      href: 'https://github.com/AshiqAhamed17/Dashboard',
      texture: '/textures/project/project3.mp4', // Replace
      logo: '/assets/project-logo3.png', // Replace
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png', // Replace
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Express.js',
          path: '/assets/framer.png', // Replace
        },
      ],
    },
    {
      title: 'ETH Staking Contract',
      desc: 'A decentralized staking platform built with Solidity, Foundry, React.js, Node.js and the Wagmi framework.',
      subdesc:
        'This project allows users to stake ETH and earn reward tokens as incentives for their participation. Users can monitor their staking balance, claim rewards, and unstake their ETH seamlessly, all through a Web3-enabled interface. The platform integrates smart contracts for secure staking mechanisms and utilizes Wagmi for a smooth wallet interaction experience.',
      href: 'https://github.com/AshiqAhamed17/Staking-Contract',
      texture: '/textures/project/project5.mp4', // Replace
      logo: '/assets/project-logo5.png', // Replace
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png', // Replace
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Solidity',
          path: 'assets/tailwindcss.png', // Replace
        },
        {
          id: 3,
          name: 'Foundry',
          path: '/assets/typescript.png', //Replace
        },
        {
          id: 4,
          name: 'Node.js',
          path: '/assets/framer.png', // Replace
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Rampex Technologies',
      pos: 'MERN Stack Intern',
      duration: '2024 - Present',
      title: "Rampex is a Educational Technology Startup. I'm currently working as a MERN Stack Intern at Rampex, where I'm involved in the development of web applications using React, Node.js, Express.js, and MongoDB.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'NULL',
      pos: 'NULL',
      duration: '00/00/0000',
      title: "----------------",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'NULL',
      pos: 'NULL',
      duration: '00/00/0000',
      title: "----------------",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];
  