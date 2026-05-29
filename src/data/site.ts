// Single source of truth for portfolio content.

export const profile = {
  name: 'Arun Suthar',
  handle: 'arunsuthar98',
  title: 'Senior Firmware Engineer',
  location: 'Bengaluru, India',
  email: 'arunsuthar98@gmail.com',
  tagline: 'Building firmware that drives the automotive future',
  blurb:
    'Firmware Engineer specializing in driver development, HAL, protocol support software, test infrastructure, and embedded applications for automotive Ethernet platforms.',
  socials: {
    github: 'https://github.com/arunsuthar98',
    linkedin: 'https://www.linkedin.com/in/arunsuthar98/',
    hackster: 'https://www.hackster.io/arunsuthar98',
    leetcode: 'https://leetcode.com/u/arunsuthar98/',
    email: 'mailto:arunsuthar98@gmail.com',
  },
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '2', label: 'Semiconductor Cos' },
    { value: 'M.Tech', label: 'Embedded · MNIT' },
    { value: '6+', label: 'IoT Projects' },
  ],
};

export const profiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/arunsuthar98',
    logo: '/logos/github.svg',
    description: 'Open source & personal projects',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/arunsuthar98/',
    logo: '/logos/leetcode.svg',
    description: 'DSA & problem solving',
  },
  {
    name: 'Hackster.io',
    url: 'https://www.hackster.io/arunsuthar98',
    logo: '/logos/hackster.svg',
    description: 'IoT & embedded projects',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arunsuthar98/',
    logo: '/logos/linkedin.svg',
    description: 'Professional network',
  },
];

export const experience = [
  {
    company: 'Infineon Technologies',
    logo: '/logos/infineon.png',
    role: 'Senior Firmware Engineer',
    period: '2025 — Present',
    location: 'Bengaluru, India',
    color: '#0072CE',
    summary:
      'Firmware development for automotive Ethernet switch — writing drivers, HAL, protocol support, test infrastructure, and applications on multi-core embedded platforms.',
    responsibilities: [
      'eHSM (embedded Hardware Security Module) firmware for automotive Ethernet switch',
      'Ethernet driver development and throughput optimization',
      'PTP / IEEE 1588 driver for time synchronization',
      'Network driver & MCAL (Microcontroller Abstraction Layer)',
      'Firmware profiling and performance optimization',
      'ASPICE-compliant development process',
      'Cantata unit testing and coverage analysis',
      'UML diagrams & system design for functional testing',
      'Multi-module build system on ARM R52 and AURIX',
    ],
    stack: ['C', 'ARM R52', 'AURIX', 'ASPICE', 'PTP', 'Cantata', 'UML'],
  },
  {
    company: 'Marvell Semiconductor',
    logo: '/logos/marvell.png',
    role: 'Firmware Engineer',
    period: '2023 — 2025',
    location: 'Bengaluru, India',
    color: '#CC0000',
    summary:
      'Firmware development for automotive Ethernet PHY (88Q2xxx). Built networking tools, contributed to open-source, and developed Linux & QNX drivers.',
    responsibilities: [
      'Open source contribution: USP (UDP Server Protocol) support on iperf application for lwIP',
      'PCI driver development on Linux and QNX',
      'Automotive Ethernet PHY firmware (88Q2xxx) — bring-up & validation',
      'Ethernet driver development and throughput benchmarking',
      'Firmware profiling and performance tuning',
      'Hardware bring-up: oscilloscope, logic analyzer, JTAG',
    ],
    stack: ['C', 'lwIP', 'Linux', 'QNX', 'FreeRTOS', 'ARM Cortex-M', 'Python'],
  },
  {
    company: 'Techiesms',
    logo: '/logos/techiesms.png',
    role: 'IoT Developer (Freelance)',
    period: '2022',
    location: 'Remote',
    color: '#f9a826',
    summary:
      'Developed production IoT products with ESP32/ESP8266. Published projects on YouTube and Hackster.io with full schematics & source code.',
    responsibilities: [
      'All-in-One Home Automation with Fan Dimmer (published on YouTube)',
      'ESP32Cam / ESP32 Chip / Arduino Pro Mini — Universal TTL Programmer',
      'Home Automation project for Home Assistant users',
      'Techiesms Sound Box — ESP32 IoT audio project',
      'PCB design and small-batch manufacturing',
    ],
    stack: ['ESP32', 'ESP-IDF', 'Arduino', 'MQTT', 'KiCad', 'PCB Design'],
    youtubeProjects: [
      { title: 'All-in-One Home Automation with Fan Dimmer V2', url: 'https://youtu.be/87QhjQth-pQ' },
      { title: 'Universal TTL Programmer (ESP32Cam / Arduino Pro Mini)', url: 'https://youtu.be/9j1QwuQz_lI' },
      { title: 'Home Automation for Home Assistant Users', url: 'https://youtu.be/ZR2J6sx5EtY' },
      { title: 'Techiesms Sound Box — ESP32 IoT Project', url: 'https://youtu.be/vWUqUVTP6H8' },
    ],
  },
  {
    company: 'GTU Robotics Club',
    logo: '/logos/gtu-robotics.png',
    role: 'Member — Embedded Systems',
    period: '2019 — 2020',
    location: 'Ahmedabad, India',
    color: '#7c5cff',
    summary: 'Built robots for ABU Robocon 2020. Worked on motor control, sensor fusion, and embedded firmware.',
    responsibilities: [
      'Built multiple robots for ABU Robocon 2020 competition',
      'Motor control, sensor fusion, line-follower & maze-solver bots',
      'Firmware development on STM32 and AVR platforms',
    ],
    stack: ['STM32', 'AVR', 'C', 'Motor Control', 'Robocon'],
  },
];

export const projects = [
  {
    id: 'ehsm',
    title: 'eHSM — Automotive Ethernet Switch',
    summary:
      'Firmware for the embedded Hardware Security Module on an automotive Ethernet switch. Manages secure boot, key storage, and crypto operations at the silicon level.',
    stack: ['C', 'ARM R52', 'ASPICE', 'Cantata'],
    tag: 'AUTOMOTIVE · SECURITY',
  },
  {
    id: 'iperf-lwip',
    title: 'iperf on lwIP — Open Source Contribution',
    summary:
      'Contributed USP (UDP Server Protocol) support to the iperf application running on lwIP. Used for embedded automotive Ethernet throughput validation.',
    stack: ['C', 'lwIP', 'iperf', 'Open Source'],
    tag: 'OPEN SOURCE · NETWORKING',
    link: 'https://savannah.nongnu.org/projects/lwip/',
  },
  {
    id: 'pci-drivers',
    title: 'PCI Drivers — Linux & QNX',
    summary:
      'Developed PCI drivers for inter-core communication on Linux and QNX operating systems. Enables high-speed data transfer between host and embedded controllers.',
    stack: ['C', 'Linux', 'QNX', 'PCI', 'Device Drivers'],
    tag: 'DRIVERS · SYSTEMS',
  },
  {
    id: 'home-automation',
    title: 'All-in-One Home Automation',
    summary:
      'Complete home automation system with fan dimmer, relay control, and Home Assistant integration. Built on ESP32 with custom PCB, published on YouTube with full source.',
    stack: ['ESP32', 'MQTT', 'Home Assistant', 'PCB', 'KiCad'],
    tag: 'IOT · PUBLISHED',
    link: 'https://youtu.be/87QhjQth-pQ',
  },
  {
    id: 'robocon',
    title: 'ABU Robocon 2020 — Robot Firmware',
    summary:
      'Firmware for competition robots at ABU Robocon 2020. Motor control, sensor fusion, navigation algorithms on STM32/AVR.',
    stack: ['STM32', 'AVR', 'C', 'Motor Control'],
    tag: 'ROBOTICS',
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['C', 'C++', 'Python', 'Shell Scripting', 'ARM Assembly'],
  },
  {
    group: 'Platforms & OS',
    items: ['Linux', 'QNX', 'FreeRTOS', 'AUTOSAR', 'Bare-metal'],
  },
  {
    group: 'Firmware Work',
    items: ['Driver Development', 'HAL', 'Protocol Software', 'Test Infrastructure', 'Applications'],
  },
  {
    group: 'Networking',
    items: ['Automotive Ethernet', 'lwIP', 'PTP / IEEE 1588', 'TCP/IP', 'iperf'],
  },
  {
    group: 'Silicon & Hardware',
    items: ['ARM Cortex-R52', 'AURIX', 'Marvell 88Q2xxx', 'ESP32', 'STM32'],
  },
  {
    group: 'Tooling & Process',
    items: ['GDB', 'JTAG / Lauterbach', 'Oscilloscope', 'Cantata', 'ASPICE', 'MISRA-C', 'Git', 'CMake'],
  },
];

export const education = [
  {
    school: 'MNIT Jaipur',
    logo: '/logos/mnit.png',
    degree: 'M.Tech — Embedded Systems',
    period: '2022 — 2024',
  },
  {
    school: 'GEC Gandhinagar (GTU)',
    logo: '/logos/gec-gandhinagar.avif',
    degree: 'B.Tech — Electronics & Communication',
    period: '2017 — 2021',
  },
];
