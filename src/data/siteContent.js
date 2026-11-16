export const SITE_CONFIG = {
  brandName: 'LetsGetSchengen',
  domain: 'letsgetschengen.com',
  email: 'hello@letsgetschengen.com',
  phone: '+971 50 553 6123',
  phoneRaw: '+971505536123',
  phoneDisplay: '+971 50 553 6123',
  whatsappNumber: '971505536123',
  whatsappBaseUrl: 'https://wa.me/971505536123',
  officeHours: 'Available 24/7 – Quick Response',
};

export function buildWhatsAppUrl(customMessage) {
  const text = encodeURIComponent(
    customMessage ||
      'Hello LetsGetSchengen team, I would like guidance with my European travel documentation.'
  );
  return `${SITE_CONFIG.whatsappBaseUrl}?text=${text}`;
}

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Consultation', href: '#lead-form' },
  { label: 'Client Reviews', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
];

export const HERO_CONTENT = {
  eyebrow: 'Schengen Travel Consultancy',
  headline: 'Your European Journey Starts With the Right Guidance.',
  description:
    'Navigating European travel documentation does not have to feel overwhelming. LetsGetSchengen provides personalised document preparation support, structured checklist planning, and coordinated appointment guidance so you can prepare with clarity and confidence.',
  primaryCta: {
    label: 'Get Started',
    href: '#lead-form',
  },
  secondaryCta: {
    label: 'Explore Our Services',
    href: '#services',
  },
  trustItems: [
    'Trusted by 12,500+ Travellers',
    '29 Schengen Destinations Covered',
    'Dedicated 1-on-1 Specialist Support',
  ],
};

// Replace placeholder figures with verified business metrics when available.
export const STATS_ITEMS = [
  {
    id: 'travellers',
    value: '12,500+',
    label: 'Travellers Assisted',
  },
  {
    id: 'destinations',
    value: '29',
    label: 'European Destinations Covered',
  },
  {
    id: 'satisfaction',
    value: '98.6%',
    label: 'Client Satisfaction',
  },
  {
    id: 'response',
    value: '< 2 hrs',
    label: 'Average Response Time',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: 'personalised-guidance',
    iconName: 'Compass',
    title: 'Personalised Travel Guidance',
    description:
      'Every itinerary and traveller profile is unique. We tailor our documentation checklist and preparation plan around your specific European destination and purpose of travel.',
  },
  {
    id: 'expert-review',
    iconName: 'FileCheck2',
    title: 'Expert Documentation Review',
    description:
      'Our specialists carefully inspect every supporting record for clarity, consistency, and completeness before you move forward with your submission steps.',
  },
  {
    id: 'transparent-process',
    iconName: 'ShieldCheck',
    title: 'Clear & Transparent Process',
    description:
      'No confusing jargon or hidden steps. You receive a straightforward roadmap with clear milestones, expected timelines, and upfront consultancy scope.',
  },
  {
    id: 'dedicated-assistance',
    iconName: 'Headset',
    title: 'Dedicated Client Assistance',
    description:
      'Work directly with a responsive travel documentation advisor who answers your questions promptly via WhatsApp, phone, or email.',
  },
  {
    id: 'appointment-coordination',
    iconName: 'CalendarCheck2',
    title: 'Appointment Coordination',
    description:
      'We help you plan around regional appointment availability, prepare your booking details accurately, and stay organised ahead of your scheduled date.',
  },
  {
    id: 'end-to-end-support',
    iconName: 'Layers',
    title: 'End-to-End Preparation Support',
    description:
      'From initial consultation and itinerary structuring to final pre-departure file checks, we stay beside you through every preparation stage.',
  },
];

export const SERVICES_ITEMS = [
  {
    id: 'documentation-consultation',
    iconName: 'MessageSquareText',
    title: 'Schengen Documentation Consultation',
    description:
      'One-on-one advisory sessions to assess your travel timeline, destination requirements, and personalised document roadmap.',
    highlights: [
      'Destination-specific requirement assessment',
      'Customised preparation checklist',
      'Timeline and milestone planning',
      'Direct Q&A with a Schengen specialist',
    ],
    ctaLabel: 'Book Consultation',
  },
  {
    id: 'document-preparation',
    iconName: 'FolderKanban',
    title: 'Travel Document Preparation',
    description:
      'Structured support to help you organise employment, financial, invitation, and supporting travel paperwork cleanly.',
    highlights: [
      'Structured file organisation',
      'Cover letter & travel narrative drafting',
      'Supporting evidence alignment',
      'Format and sequence verification',
    ],
    ctaLabel: 'Prepare Documents',
  },
  {
    id: 'appointment-coordination',
    iconName: 'CalendarClock',
    title: 'Appointment Guidance & Coordination',
    description:
      'Step-by-step coordination assistance to help you navigate application centre scheduling and readiness timelines.',
    highlights: [
      'Centre selection & jurisdiction clarity',
      'Scheduling readiness preparation',
      'Rescheduling & timing guidance',
      'Pre-appointment checklist briefing',
    ],
    ctaLabel: 'Coordinate Appointment',
  },
  {
    id: 'itinerary-accommodation',
    iconName: 'MapPinned',
    title: 'Travel Itinerary & Accommodation Guidance',
    description:
      'Cohesive day-by-day route planning and accommodation documentation guidance matched to your European trip dates.',
    highlights: [
      'Multi-country Schengen route structuring',
      'Accommodation proof alignment',
      'Transport connection planning',
      'Date consistency cross-checks',
    ],
    ctaLabel: 'Plan Itinerary',
  },
  {
    id: 'travel-insurance',
    iconName: 'ShieldPlus',
    title: 'Travel Insurance Assistance',
    description:
      'Guidance on selecting compliant European travel protection plans that meet regional coverage criteria and trip dates.',
    highlights: [
      'Coverage threshold verification',
      'Exact trip-date alignment',
      'Multi-trip & single-trip options',
      'Policy certificate review',
    ],
    ctaLabel: 'Get Coverage Guidance',
  },
  {
    id: 'application-review',
    iconName: 'ClipboardCheck',
    title: 'Application Review & Pre-Departure Guidance',
    description:
      'A thorough final inspection of your complete travel dossier plus practical preparation before you attend or depart.',
    highlights: [
      'Full dossier consistency audit',
      'Missing-item & discrepancy check',
      'Submission day readiness brief',
      'Post-submission & departure tips',
    ],
    ctaLabel: 'Request Final Review',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Initial Consultation',
    description:
      'Understand your travel dates, destination countries, and personal documentation requirements in a focused discovery call.',
  },
  {
    step: '02',
    title: 'Documentation Planning',
    description:
      'Receive a tailored, easy-to-follow checklist outlining every supporting record needed for your European travel file.',
  },
  {
    step: '03',
    title: 'Document Review',
    description:
      'Our team checks your prepared documents, forms, and travel itinerary for completeness, alignment, and clarity.',
  },
  {
    step: '04',
    title: 'Appointment Coordination',
    description:
      'Get structured guidance on selecting the right submission centre and preparing for your scheduled appointment.',
  },
  {
    step: '05',
    title: 'Final Preparation',
    description:
      'Complete a final pre-departure file review so you step into the next phase of your European journey prepared.',
  },
];

export const LEAD_BENEFITS = [
  {
    id: 'benefit-1',
    iconName: 'UserCheck',
    title: 'Personalised consultation',
    description: 'Guidance matched to your destination, trip duration, and traveller profile.',
  },
  {
    id: 'benefit-2',
    iconName: 'FileText',
    title: 'Professional documentation guidance',
    description: 'Clear checklists and meticulous file reviews to prevent avoidable gaps.',
  },
  {
    id: 'benefit-3',
    iconName: 'Zap',
    title: 'Responsive assistance',
    description: 'Fast answers from dedicated advisors when timelines feel tight.',
  },
  {
    id: 'benefit-4',
    iconName: 'Route',
    title: 'Clear next steps',
    description: 'A practical, milestone-driven plan from first enquiry to travel readiness.',
  },
];

export const SCHENGEN_DESTINATIONS = [
  'Multiple Schengen Countries',
  'France',
  'Germany',
  'Italy',
  'Spain',
  'Netherlands',
  'Switzerland',
  'Portugal',
  'Greece',
  'Austria',
  'Belgium',
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
  'Poland',
  'Czechia',
  'Hungary',
  'Croatia',
  'Iceland',
  'Other Schengen Destination',
];

export const UAE_RESIDENCY_CATEGORIES = [
  'UAE Golden Residency (10-Year)',
  'UAE Employment Visa (Private Sector)',
  'UAE Employment Visa (Freezone)',
  'UAE Employment Visa (Government / Semi-Gov)',
  'UAE Investor / Business Partner',
  'UAE Family / Dependent Visa',
  'UAE Freelance / Green Visa',
  'UAE Student Visa',
  'Other UAE Residency Category',
];

export const TRAVEL_MONTH_OPTIONS = [
  'Immediate (Next 30 Days)',
  'Next 1–2 Months',
  'Next 2–3 Months',
  'Next 3–6 Months',
  'Summer 2026',
  'Winter 2026',
  'Flexible / Not Decided Yet',
];

// Replace with verified client testimonials when ready.
export const TESTIMONIALS_ITEMS = [
  {
    id: 't1',
    name: 'Aarav Mehta',
    initials: 'AM',
    destination: 'France & Switzerland Trip',
    quote:
      'LetsGetSchengen turned a daunting stack of paperwork into a clear, manageable checklist. Their advisor caught two date mismatches in my itinerary before my appointment.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Nadia Al-Mansoor',
    initials: 'NA',
    destination: 'Italy Family Holiday',
    quote:
      'Planning documentation for four family members felt stressful until we spoke with their team. Every step was explained clearly and our questions were answered within the hour.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Daniel Okafor',
    initials: 'DO',
    destination: 'Germany Business Travel',
    quote:
      'Professional, structured, and responsive from day one. The document review gave me real peace of mind ahead of a tight work travel schedule.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Priya Nair',
    initials: 'PN',
    destination: 'Spain & Portugal Tour',
    quote:
      'What stood out most was the clarity of communication. Instead of generic templates, I received practical feedback tailored to my multi-city itinerary.',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Tariq Hassan',
    initials: 'TH',
    destination: 'Netherlands & Belgium',
    quote:
      'Their appointment coordination guidance saved us days of confusion. Knowing everything in our file was properly ordered made the whole experience calm and straightforward.',
    rating: 5,
  },
  {
    id: 't6',
    name: 'Elena Petrova',
    initials: 'EP',
    destination: 'Greece Summer Getaway',
    quote:
      'Friendly, detail-oriented support without any pushy sales tactics. I felt well guided from my first consultation right through to pre-departure checks.',
    rating: 5,
  },
];

export const SUPPORT_PROTOCOL_ITEMS = [
  {
    id: 'dedicated-guidance',
    iconName: 'Users',
    title: 'Dedicated Guidance',
    description:
      'A single point of contact who understands your travel dossier and stays with you throughout preparation.',
  },
  {
    id: 'clear-communication',
    iconName: 'MessageCircle',
    title: 'Clear Communication',
    description:
      'Plain-English explanations, structured checklists, and transparent status updates without guesswork.',
  },
  {
    id: 'proactive-followups',
    iconName: 'BellRing',
    title: 'Proactive Follow-Ups',
    description:
      'Timely check-ins ahead of document deadlines and scheduled appointments so nothing slips through.',
  },
  {
    id: 'reliable-assistance',
    iconName: 'CheckCircle2',
    title: 'Reliable Assistance',
    description:
      'Consistent, detail-first consultancy standards designed to make European travel preparation stress-free.',
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-destinations',
    question: 'Which European destinations are covered by your consultancy?',
    answer:
      'We provide European travel documentation assistance across all 29 Schengen Area countries, including popular destinations such as France, Italy, Spain, Germany, Switzerland, the Netherlands, Portugal, Greece, and multi-country itineraries.',
  },
  {
    id: 'faq-documents',
    question: 'What documents should I prepare before starting?',
    answer:
      'You only need your valid passport details, rough travel dates, and destination plan to begin. During your initial consultation, we map out a tailored checklist covering employment or business records, financial statements, itinerary details, accommodation plans, and travel insurance.',
  },
  {
    id: 'faq-process',
    question: 'How does the consultation process work?',
    answer:
      'Once you submit an enquiry, a Schengen travel specialist reviews your trip profile and contacts you to discuss your requirements. From there, we guide you through documentation planning, thorough file review, appointment coordination, and final pre-departure preparation.',
  },
  {
    id: 'faq-appointments',
    question: 'Can you assist with appointment coordination?',
    answer:
      'Yes. We provide structured Schengen appointment assistance, helping you understand the appropriate submission jurisdiction, prepare the required booking information accurately, and align your documentation timeline with available appointment windows.',
  },
  {
    id: 'faq-timeline',
    question: 'How early should I begin preparing for my trip?',
    answer:
      'We recommend reaching out 6 to 10 weeks before your intended departure date, especially during peak spring, summer, and winter holiday seasons. If your travel dates are closer, contact us right away so we can prioritise an expedited preparation plan.',
  },
  {
    id: 'faq-personalised',
    question: 'Can I get personalised assistance for my travel plans?',
    answer:
      'Absolutely. Whether you are travelling solo, coordinating a family holiday, planning a multi-country European route, or arranging a corporate trip, every consultation is tailored to your exact itinerary and documentation background.',
  },
];

