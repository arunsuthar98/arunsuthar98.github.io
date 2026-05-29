// Single source of truth for all portfolio content.

export const profile = {
  name: 'Arun Suthar',
  handle: 'arunsuthar98',
  title: 'Senior Firmware Engineer',
  location: 'Bengaluru, India',
  email: 'arunsuthar98@gmail.com',
  tagline: 'Building firmware that drives the automotive future',
  blurb:
    'Senior Firmware Engineer specializing in automotive Ethernet switches, embedded networking, and real-time systems. I build the low-level software that connects modern vehicles — from silicon bring-up to production-grade drivers.',
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
    { value: 'M.Tech', label: 'VLSI · MNIT Jaipur' },
    { value: '6+', label: 'IoT Projects Published' },
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
    logo: '/logos/infineon.svg',
    role: 'Senior Firmware Engineer',
    period: '2024 — Present',
    location: 'Bengaluru, India',
    color: '#0072CE',
    summary:
      'Working on the firmware of automotive Ethernet switches — the core networking silicon that connects ECUs in next-gen vehicles.',
    responsibilities: [
      'eHSM (embedded Hardware Security Module) firmware for automotive Ethernet switch',
      'Ethernet driver development and throughput optimization',
      'PCI drivers for inter-core communication',
      'PTP / IEEE 1588 drivers for time synchronization',
      'Network driver & MCAL development',
      'UML diagrams & system design for functional testing',
      'ASPICE process-compliant development',
      'Cantata unit testing and coverage analysis',
      'Multi-module build system on ARM R52 and AURIX',
      'Profiling and performance optimization',
    ],
    stack: ['C', 'ARM R52', 'AURIX', 'ASPICE', 'PTP', 'Cantata', 'UML'],
  },
  {
    company: 'Marvell Semiconductor',
    logo: '/logos/marvell.svg',
    role: 'Firmware Engineer',
    period: '2022 — 2024',
    location: 'Bengaluru, India',
    color: '#CC0000',
    summary:
      'Built firmware for automotive Ethernet PHY silicon (88Q2xxx family) — from bare-metal drivers to validation tooling.',
    responsibilities: [
      'Developed iperf application on lwIP TCP/IP stack for embedded network testing',
      'Open-source contributions to lwIP — bug fixes and zero-copy RX improvements',
      'Automotive Ethernet PHY firmware (88Q2xxx) — bring-up & validation',
      'Ethernet driver development and throughput benchmarking',
      'Firmware profiling and performance tuning',
      'Hardware bring-up: oscilloscope, logic analyzer, JTAG',
    ],
    stack: ['C', 'lwIP', 'FreeRTOS', 'ARM Cortex-M', 'Python', 'Make'],
  },
  {
    company: 'Techiesms',
    logo: null,
    role: 'IoT Developer (Freelance)',
    period: '2020 — 2022',
    location: 'Remote',
    color: '#f9a826',
    summary:
      'Built production IoT products with ESP32/ESP8266. Published 6+ projects on Hackster.io with schematics & source code.',
    responsibilities: [
      'Production IoT firmware — MQTT, BLE, OTA updates',
      'Published projects on Hackster.io with full schematics',
      'PCB design and small-batch manufacturing',
      'Custom firmware for smart home & industrial sensors',
    ],
    stack: ['ESP-IDF', 'Arduino', 'MQTT', 'KiCad', 'PCB Design'],
  },
  {
    company: 'GTU Robotics Club',
    logo: null,
    role: 'Embedded Lead',
    period: '2018 — 2020',
    location: 'Ahmedabad, India',
    color: '#7c5cff',
    summary: 'Led firmware development for inter-college robotics competitions.',
    responsibilities: [
      'Motor control, sensor fusion, line-follower & maze-solver bots',
      'Firmware for STM32 and AVR platforms',
    ],
    stack: ['STM32', 'AVR', 'C', 'Motor Control'],
  },
];

export const projects = [
  {
    id: 'ehsm',
    title: 'eHSM Firmware — Automotive Ethernet Switch',
    summary:
      'Firmware for the embedded Hardware Security Module on an automotive Ethernet switch. Manages secure boot, key storage, and crypto operations for the switch silicon.',
    stack: ['C', 'ARM R52', 'ASPICE', 'Cantata'],
    tag: 'AUTOMOTIVE · SECURITY',
  },
  {
    id: 'iperf-lwip',
    title: 'iperf Application on lwIP',
    summary:
      'Built an iperf-compatible network performance measurement tool running on the lightweight lwIP TCP/IP stack. Used for validating automotive Ethernet throughput on embedded targets.',
    stack: ['C', 'lwIP', 'FreeRTOS', 'Automotive Ethernet'],
    tag: 'NETWORKING · TOOLING',
  },
  {
    id: 'lwip-contrib',
    title: 'lwIP Open Source Contributions',
    summary:
      'Contributed bug fixes and zero-copy receive path improvements to the lwIP open-source TCP/IP stack used across millions of embedded devices.',
    stack: ['C', 'lwIP', 'Git', 'Open Source'],
    tag: 'OPEN SOURCE',
    link: 'https://savannah.nongnu.org/projects/lwip/',
  },
  {
    id: 'eth-drivers',
    title: 'Ethernet & PCI Drivers',
    summary:
      'Developed high-performance Ethernet and PCI drivers for automotive platforms. Focus on throughput optimization, profiling, and multi-module build systems across ARM R52 and AURIX cores.',
    stack: ['C', 'ARM R52', 'AURIX', 'PCI', 'Network Stack'],
    tag: 'DRIVERS · FIRMWARE',
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['C', 'C++', 'Python', 'Shell Scripting', 'ARM Assembly'],
  },
  {
    group: 'Platforms & RTOS',
    items: ['FreeRTOS', 'QNX', 'Linux', 'AUTOSAR', 'Bare-metal'],
  },
  {
    group: 'Networking',
    items: ['Automotive Ethernet', 'lwIP', 'PTP / IEEE 1588', 'TCP/IP', 'TSN'],
  },
  {
    group: 'Silicon & Hardware',
    items: ['ARM Cortex-R52', 'AURIX', 'Marvell 88Q2xxx', 'ESP32', 'STM32'],
  },
  {
    group: 'Tooling',
    items: ['GDB', 'JTAG / Lauterbach', 'Oscilloscope', 'Cantata', 'Git', 'CMake / Make'],
  },
  {
    group: 'Process & Methodology',
    items: ['ASPICE', 'MISRA-C', 'UML Design', 'Functional Testing', 'Unit Testing', 'Code Review'],
  },
];

export const education = [
  {
    school: 'MNIT Jaipur',
    degree: 'M.Tech — VLSI Design',
    period: '2020 — 2022',
  },
  {
    school: 'Gujarat Technological University',
    degree: 'B.E. — Electronics & Communication',
    period: '2016 — 2020',
  },
];
