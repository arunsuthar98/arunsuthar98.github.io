// Single source of truth for portfolio content.
// Edit values here; components consume this file.

export const profile = {
  name: 'Arun Suthar',
  handle: 'arunsuthar98',
  title: 'Senior Firmware Engineer',
  location: 'Bengaluru, India',
  email: 'arunsuthar98@gmail.com',
  tagline: 'Engineer at the edge of hardware & software',
  blurb:
    'I build firmware that ships in cars. Linux drivers, real-time systems, automotive Ethernet stacks, and the silicon-software boundary where bits become voltage.',
  socials: {
    github: 'https://github.com/arunsuthar98',
    linkedin: 'https://www.linkedin.com/in/arunsuthar98/',
    hackster: 'https://www.hackster.io/arunsuthar98',
    email: 'mailto:arunsuthar98@gmail.com',
  },
  stats: [
    { value: '3+', label: 'Years exp.' },
    { value: '2',  label: 'Semi cos.' },
    { value: 'M.Tech', label: 'MNIT Jaipur' },
    { value: '6+', label: 'IoT projects' },
  ],
};

export const experience = [
  {
    company: 'Infineon Technologies',
    role: 'Senior Firmware Engineer',
    period: '2024 — Present',
    location: 'Bengaluru, IN',
    color: '#00b3a4',
    bullets: [
      'eHSM firmware for AURIX TC3xx — secure boot, key management, crypto primitives',
      'Automotive Ethernet firmware on QNX (io-sock), Linux & FreeRTOS',
      'TSN / IEEE 1588 PTP integration for time-critical networking',
      'ASPICE-compliant development, MISRA-C, static analysis',
    ],
    stack: ['C', 'C++', 'QNX', 'Linux Drivers', 'FreeRTOS', 'AUTOSAR'],
  },
  {
    company: 'Marvell Semiconductor',
    role: 'Firmware Engineer',
    period: '2022 — 2024',
    location: 'Bengaluru, IN',
    color: '#e63946',
    bullets: [
      'Automotive Ethernet PHY firmware (88Q2xxx family) — bring-up & validation',
      'lwIP TCP/IP stack integration & open-source upstream contributions',
      'iperf3 port for embedded automotive test harnesses',
      'Hardware bring-up: oscilloscope, logic analyzer, JTAG, ICE',
    ],
    stack: ['C', 'Python', 'lwIP', 'iperf3', 'ARM Cortex-M', 'Make'],
  },
  {
    company: 'Techiesms',
    role: 'IoT Developer (Freelance)',
    period: '2020 — 2022',
    location: 'Remote',
    color: '#f9a826',
    bullets: [
      'Production IoT firmware on ESP32 / ESP8266 — MQTT, BLE, OTA',
      '6+ published projects on Hackster.io with full schematics & code',
      'PCB design and small-batch manufacturing workflow',
    ],
    stack: ['ESP-IDF', 'Arduino', 'MQTT', 'PCB', 'KiCad'],
  },
  {
    company: 'GTU Robotics Club',
    role: 'Embedded Lead',
    period: '2018 — 2020',
    location: 'Ahmedabad, IN',
    color: '#7c5cff',
    bullets: [
      'Led firmware for inter-college robotics competitions',
      'Motor control, sensor fusion, line-follower & maze-solver bots',
    ],
    stack: ['AVR', 'STM32', 'C'],
  },
];

export const projects = [
  {
    id: 'ehsm',
    title: 'eHSM — Embedded Hardware Security Module',
    role: 'Firmware Lead',
    period: 'Active',
    summary:
      'Firmware for the embedded Hardware Security Module on AURIX TC3xx. Implements secure boot chain, runtime key storage, and HSM-accelerated crypto (AES-GCM, ECDSA, SHA-2) exposed to the host core over IPC.',
    highlights: [
      'Secure boot with measured boot chain across BootROM → BL2 → app',
      'HSM-host IPC layer with zero-copy command queue',
      'MISRA-C, ASIL-B targets, static analysis gating CI',
    ],
    stack: ['C', 'AURIX TC3xx', 'TriCore', 'AUTOSAR Crypto', 'ASIL-B'],
    tag: 'AUTOMOTIVE · SECURITY',
  },
  {
    id: 'iperf',
    title: 'iperf3 — Automotive Ethernet Port',
    role: 'Maintainer',
    period: 'Active',
    summary:
      'Port and adaptation of iperf3 for embedded automotive Ethernet validation. Runs on QNX (io-sock) and bare-metal lwIP, with PTP-synchronized timestamps for sub-microsecond throughput / jitter measurement on 1000BASE-T1 links.',
    highlights: [
      'PTP-synchronized bidirectional UDP / TCP measurement',
      'QNX io-sock + lwIP RAW API back-ends',
      'CLI-compatible with upstream iperf3 for CI parity',
    ],
    stack: ['C', 'lwIP', 'QNX', 'PTP / IEEE 1588', '1000BASE-T1'],
    tag: 'NETWORKING · TOOLING',
  },
  {
    id: 'lwip',
    title: 'lwIP — Open Source Contributions',
    role: 'Contributor',
    period: 'Ongoing',
    summary:
      'Upstream contributions to the lwIP TCP/IP stack — bug fixes, IEEE 1588 hooks, and improvements to the RAW API for zero-copy receive paths on automotive controllers.',
    highlights: [
      'Patches reviewed on lwip-devel mailing list',
      'Zero-copy RX path for memory-constrained MCUs',
      'Documentation and example clean-ups',
    ],
    stack: ['C', 'lwIP', 'Git', 'Mailing-list workflow'],
    tag: 'OPEN SOURCE',
    link: 'https://savannah.nongnu.org/projects/lwip/',
  },
  {
    id: 'tsn-lab',
    title: 'TSN Lab — Time-Sensitive Networking Sandbox',
    role: 'Personal',
    period: 'Personal',
    summary:
      'A home-lab setup exploring TSN building blocks — 802.1AS gPTP, 802.1Qbv scheduled traffic, frame preemption — using off-the-shelf TSN switches and Linux endpoints. Scripts, captures, and notes are open-sourced.',
    highlights: [
      'gPTP daemon configs & sync accuracy measurements',
      'Qbv gate-control list experiments',
      'Wireshark dissectors for ST traffic',
    ],
    stack: ['Linux', 'gPTP', '802.1Qbv', 'Wireshark', 'Python'],
    tag: 'PERSONAL · TSN',
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['C', 'C++', 'Python', 'Shell', 'Assembly (ARM/TriCore)'],
  },
  {
    group: 'Platforms',
    items: ['Linux', 'QNX', 'FreeRTOS', 'AUTOSAR Classic', 'Bare-metal'],
  },
  {
    group: 'Networking',
    items: [
      'Automotive Ethernet (1000BASE-T1)',
      'TSN / IEEE 1588',
      'lwIP',
      'Sockets / io-sock',
      'TCP/IP internals',
    ],
  },
  {
    group: 'Silicon',
    items: ['AURIX TC3xx', 'Marvell 88Q2xxx', 'ARM Cortex-M/R/A', 'ESP32', 'STM32'],
  },
  {
    group: 'Tooling',
    items: ['GDB', 'JTAG / Lauterbach', 'Logic Analyzer', 'Oscilloscope', 'Git', 'Make / CMake'],
  },
  {
    group: 'Process',
    items: ['ASPICE', 'MISRA-C', 'ISO 26262 (ASIL-B aware)', 'Static analysis', 'Code review'],
  },
];

export const education = [
  {
    school: 'MNIT Jaipur',
    degree: 'M.Tech, VLSI Design',
    period: '2020 — 2022',
  },
  {
    school: 'Gujarat Technological University',
    degree: 'B.E., Electronics & Communication',
    period: '2016 — 2020',
  },
];
