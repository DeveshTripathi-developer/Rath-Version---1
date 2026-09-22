export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  title: string;
  category: 'uk-onshore' | 'group-leadership';
  experience: string;
  bioSummary: string;
  imageUrl?: string;
  initials: string;
  qualifications: string[];
  fullBio: string[];
  focusAreas: string[];
  quote: string;
}

export interface ClientArchetype {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  needs: string[];
  solution: string;
  keyDeliverable: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'approach' | 'regulation' | 'custody' | 'india';
}

// Onshore UK Leadership & Group Leadership
export const LEADERSHIP: LeadershipMember[] = [
  {
    id: 'aishwarya-gupta',
    name: 'Aishwarya Gupta',
    role: 'Executive Director',
    title: 'Executive Director, Anand Rathi Wealth UK Limited',
    category: 'uk-onshore',
    experience: '10+ Years in Strategy Consulting & Private Wealth',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    initials: 'AG',
    bioSummary: 'Strategy consulting veteran with decade-long experience leading strategic advisory at EY-Parthenon, specializing in UK-India wealth corridors.',
    qualifications: [
      'CISI Level 4 Qualified',
      'Investment Advice Diploma (UK)',
      'University of Oxford Alumna',
      'University of Warwick Alumna',
    ],
    fullBio: [
      'Aishwarya Gupta serves as Executive Director at Anand Rathi Wealth UK Limited, driving client strategy, institutional partnerships, and regulatory governance in London.',
      'Prior to Anand Rathi Wealth UK, she accrued extensive strategy consulting experience, notably serving as Assistant Director at EY-Parthenon where she advised institutional leaders and corporate enterprises on market entry, capital allocation, and governance.',
      'Holding CISI Level 4 certification and the prestigious Investment Advice Diploma (UK), Aishwarya combines an elite academic pedigree from the University of Oxford and University of Warwick with deep analytical rigor to guide UK and global Indian families.',
    ],
    focusAreas: [
      'UK-India Wealth Structuring',
      'Fiduciary Client Stewardship',
      'Cross-Border Strategic Allocation',
      'Institutional Governance',
    ],
    quote: 'Our mission in London is to make India’s growth story accessible within a disciplined, transparent UK regulatory framework—delivering clarity without complexity.',
  },
  {
    id: 'pooja-maru',
    name: 'Pooja Maru',
    role: 'Executive Director',
    title: 'Executive Director, Anand Rathi Wealth UK Limited',
    category: 'uk-onshore',
    experience: '25+ Years in UK Corporate Finance & Investment Banking',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    initials: 'PM',
    bioSummary: 'Distinguished corporate finance leader with over a quarter-century in London banking (ex-PwC, Vedanta Resources UK, co-founder of Jiva Capital Partners).',
    qualifications: [
      'Chartered Accountant (FCA/ACA)',
      'MBA, Bayes Business School UK',
      'Board Member, The Rajasthani Foundation UK',
      '25+ Years UK Financial Market Experience',
    ],
    fullBio: [
      'Pooja Maru brings more than 25 years of corporate finance, M&A, and investment banking experience across the City of London and international markets.',
      'Her distinguished career includes senior tenures at PricewaterhouseCoopers (PwC) and Vedanta Resources UK, as well as co-founding Jiva Capital Partners, advising high-net-worth founders, family enterprises, and institutional boards on capital transactions.',
      'A Chartered Accountant and MBA graduate from Bayes Business School, Pooja also serves as a board member of The Rajasthani Foundation UK, championing philanthropic impact and diaspora connectivity.',
    ],
    focusAreas: [
      'Corporate Finance & Liquidity Planning',
      'Family Enterprise Structuring',
      'UK Tax-Efficient Mandates',
      'Diaspora Capital Alignment',
    ],
    quote: 'True wealth management is built on unwavering accountability. We provide UK families with institutional precision and the confidence that their capital is rigorously stewarded.',
  },
  {
    id: 'anand-rathi',
    name: 'Anand Rathi',
    role: 'Founder & Chairman',
    title: 'Founder & Chairman, Anand Rathi Group',
    category: 'group-leadership',
    experience: '40+ Years in Financial Leadership & Capital Markets',
    imageUrl: 'https://www.anandrathiwealth.co.uk/anand-rathi1.jpg',
    initials: 'AR',
    bioSummary: 'Former BSE President and Chartered Accountant Gold Medallist, leading the Anand Rathi Group across four decades of financial innovation.',
    qualifications: [
      'Chartered Accountant Gold Medallist',
      'Former President, Bombay Stock Exchange (BSE)',
      'Senior President, Birla Group (Grasim)',
      '40+ Years Global Leadership',
    ],
    fullBio: [
      'Mr. Anand Rathi is a veteran chartered accountant and one of the most respected figures in global financial services. Over four decades, he has guided corporate conglomerates, family offices, and institutions.',
      'Prior to founding the group in 1994, he served as Senior President of Birla Group (Grasim Industries) and President of the Bombay Stock Exchange (BSE), spearheading historic modernization and computerized trade settlement mechanisms.',
      'Under his chairmanship, Anand Rathi Wealth has expanded to oversee more than $11 billion in client assets, establishing an uncompromising standard of fiduciary transparency and client-first ethics.',
    ],
    focusAreas: [
      'Multi-Generational Wealth Preservation',
      'Macroeconomic Governance',
      'Institutional Risk Frameworks',
    ],
    quote: 'True wealth management is not about predicting short-term market noise; it is about creating an unshakeable framework that guarantees family security across generations.',
  },
  {
    id: 'pradeep-gupta',
    name: 'Pradeep Gupta',
    role: 'Co-Founder & Vice Chairman',
    title: 'Co-Founder & Vice Chairman, Anand Rathi Group',
    category: 'group-leadership',
    experience: '30+ Years in Capital Markets & Cross-Border Wealth',
    imageUrl: 'https://www.anandrathiwealth.co.uk/pradeep-gupta.png',
    initials: 'PG',
    bioSummary: 'Over three decades of capital markets leadership and Harvard Business School alumnus, instrumental in building transparent advisory architecture.',
    qualifications: [
      'Harvard Business School (Alumnus)',
      '30+ Years Capital Markets Pioneer',
      'Architect of Fee-Aligned Advisory Models',
    ],
    fullBio: [
      'Mr. Pradeep Gupta co-founded the Anand Rathi Group and has been pivotal in steering the enterprise into one of the preeminent private wealth institutions.',
      'A distinguished leader in Indian and international financial markets, he has championed transparent, fee-aligned advisory models that eliminate conflicts of interest between product distributors and client families.',
      'His strategic vision has shaped the group’s international expansion, bringing regulated wealth solutions to international families and UK-based entrepreneurs navigating complex cross-border opportunities.',
    ],
    focusAreas: [
      'Cross-Border Asset Structuring',
      'Capital Allocation Strategy',
      'Family Office Governance',
    ],
    quote: 'Our client relationships are measured in decades, not quarterly cycles. We align our destiny completely with the families who entrust us with their legacy.',
  },
  {
    id: 'rakesh-rawal',
    name: 'Rakesh Rawal',
    role: 'Chief Executive Officer',
    title: 'Chief Executive Officer, Anand Rathi Wealth Limited',
    category: 'group-leadership',
    experience: '19+ Years Leading AR Wealth to $11.16B AUM',
    imageUrl: 'https://www.anandrathiwealth.co.uk/rakesh-sir1.png',
    initials: 'RR',
    bioSummary: 'Over 19 years steering Anand Rathi Wealth to $11.16B+ AUM, former Deutsche Bank Head of Private Wealth and Hindustan Unilever (HUL) executive.',
    qualifications: [
      'B.Tech Mechanical Engineering, IIT Kanpur',
      'Former Head of Private Wealth, Deutsche Bank India',
      'Former Executive, Hindustan Unilever (HUL)',
      '19+ Years AR Wealth Executive Leadership',
    ],
    fullBio: [
      'Mr. Rakesh Rawal holds a B.Tech in Mechanical Engineering from IIT Kanpur and brings decades of executive leadership in private banking and institutional wealth management.',
      'He previously served as Head of Private Wealth Management at Deutsche Bank India, managing high-net-worth portfolios with rigorous risk-budgeted allocations, after beginning his career at Hindustan Unilever.',
      'Under his 19-year leadership, Anand Rathi Wealth transformed into a research-driven, predictable wealth engine overseeing $11.16B+ AUM for nearly 14,000 client families.',
    ],
    focusAreas: [
      'Systematic Asset Allocation',
      'Quantitative Risk Budgeting',
      'Institutional Scaled Execution',
    ],
    quote: 'Wealth management is a science of probability and asset allocation. When you strip out emotional biases and adhere strictly to data, superior outcomes follow.',
  },
  {
    id: 'feroze-azeez',
    name: 'Feroze Azeez',
    role: 'Joint Chief Executive Officer',
    title: 'Joint Chief Executive Officer, Anand Rathi Wealth Limited',
    category: 'group-leadership',
    experience: '20+ Years in Private Wealth & Quantitative Research',
    imageUrl: 'https://www.anandrathiwealth.co.uk/feroze-sir1.png',
    initials: 'FA',
    bioSummary: 'Pioneer in structured risk frameworks and quantitative portfolio models, featured speaker across 2,500+ investor education media programs.',
    qualifications: [
      'Pioneer in Mathematical Risk Mitigation',
      'Featured across 2,500+ Financial Media Programs',
      '20+ Years Quantitative Wealth Strategy',
    ],
    fullBio: [
      'Mr. Feroze Azeez is widely regarded as one of the foremost financial strategists in private wealth management, frequently cited in global financial press for his quantitative portfolio models.',
      'With an engineering background and extensive tenure in multi-asset structuring, he oversees the investment strategy and quantitative research team responsible for proprietary risk engines.',
      'He has pioneered mathematical portfolio evaluation models that evaluate risk-adjusted return ratios, structured downside protection strategies, and rigorous product evaluation frameworks.',
    ],
    focusAreas: [
      'Structured Risk Mitigation',
      'Tax-Optimised Allocation',
      'Quantitative Portfolio Architecture',
    ],
    quote: 'Our duty is to engineer clarity out of complexity. Every portfolio decision we make is backed by exhaustive historical data and measurable risk criteria.',
  },
];

// 6 Core Pillars from Blueprint
export const CORE_PILLARS = [
  {
    id: 'trusted-heritage',
    title: 'Trusted Heritage',
    description: 'Two decades of research, experience, and structured processes built by Anand Rathi Wealth Limited in India, now available directly to you in the UK.',
  },
  {
    id: 'onshore-team',
    title: 'Onshore Team',
    description: 'A UK-based team with a working understanding of both the UK environment and Indian investment markets, directly accountable for decisions about your portfolio.',
  },
  {
    id: 'hassle-free-investing',
    title: 'Hassle-Free Investing',
    description: 'Access India-focused opportunities from the UK without transferring funds to India, operating NRE/NRO accounts, or managing complex cross-border processes.',
  },
  {
    id: 'tax-efficient',
    title: 'Tax Efficient',
    description: 'Invest within the UK regulatory and tax framework, utilizing applicable UK allowances including ISA eligibility where relevant.',
  },
  {
    id: 'risk-managed-returns',
    title: 'Risk-Managed Returns',
    description: 'A disciplined process weighing risk alongside return, focusing portfolio construction on managing downside participation while pursuing long-term growth.',
  },
  {
    id: 'bridge-for-existing-assets',
    title: 'A Bridge for Existing India Assets',
    description: 'Beyond new investments, our specialized experience brings clarity and structure to assets you already hold in India.',
  },
];

// Brand Values - What We Stand For
export const BRAND_VALUES = [
  {
    id: 'fearless',
    title: 'Fearless',
    tagline: 'We show you what you need to see, not what is easiest to hear.',
    description: 'We do not sugarcoat market risks or recommend speculative fads. Our counsel is unvarnished, objective, and solely aligned with protecting and compounding your family capital.',
  },
  {
    id: 'backed-by-data',
    title: 'Backed by Data',
    tagline: 'Every recommendation is grounded in evidence and considered at scale, not based on opinion.',
    description: 'We replace emotional market timing with quantitative probability, historical validation, and mathematical risk budgeting across all market cycles.',
  },
  {
    id: 'uncomplicated',
    title: 'Uncomplicated',
    tagline: 'Complex financial concepts, explained clearly enough to decide with confidence.',
    description: 'We strip out industry jargon and opaque products to give you total clarity on what every pound in your portfolio is doing and why.',
  },
  {
    id: 'transparent',
    title: 'Transparent',
    tagline: 'Transparency builds trust. Trust is what makes implementation possible.',
    description: 'No hidden commissions, zero retrocessions, and complete openness regarding custody, fees, and regulatory protections.',
  },
];

// 6 Client Archetypes from Blueprint
export const CLIENT_ARCHETYPES: ClientArchetype[] = [
  {
    id: 'uk-investors-india',
    title: 'UK Investors Exploring India',
    subtitle: 'Institutional Access to a 6%+ Growth Economy',
    overview: 'Investors needing disciplined portfolio sizing, currency evaluation, and active selection rather than unmanaged or speculative exposure.',
    needs: [
      'Overcoming currency fluctuation risks between GBP and INR',
      'Selecting proven institutional managers with deep ground research',
      'Sizing India exposure appropriately within an existing UK/global portfolio',
    ],
    solution: 'UK platform-hosted investments with structured risk budgeting and GBP-denominated return metrics.',
    keyDeliverable: 'GBP-Denominated Asset Allocation Model & Currency Risk Audit',
  },
  {
    id: 'hnw-individuals',
    title: 'High-Net-Worth Individuals',
    subtitle: 'Consolidation & Strategic Balance Sheet Alignment',
    overview: 'Families experiencing fragmented providers, uncoordinated liquidity, and complex wealth structures requiring a unified, data-led plan.',
    needs: [
      'Eliminating overlapping fees and duplicated portfolio risks',
      'Aligning liquid reserves with long-term capital preservation',
      'FCA-regulated independent fiduciary oversight',
    ],
    solution: 'Unified family balance sheet stewardship with segregated UK custody and clear net-of-fee reporting.',
    keyDeliverable: 'Consolidated Family Balance Sheet & Fee Diagnostic',
  },
  {
    id: 'global-indian-families',
    title: 'Global Indian Families',
    subtitle: 'Dual-Jurisdiction Wealth Across UK & India',
    overview: 'Individuals with assets, property, or responsibilities split across the UK and India, seeking a single, integrated strategy without administrative friction.',
    needs: [
      'Navigating UK-India Double Taxation Avoidance Agreements (DTAA)',
      'Simplifying or consolidating historical NRE/NRO holdings and Indian assets',
      'Managing wealth seamlessly without transferring capital offshore',
    ],
    solution: 'Onshore London advisory with deep ground expertise in India, bridging cross-border complexities cleanly.',
    keyDeliverable: 'Dual-Jurisdiction Asset Mapping & Tax Treaty Alignment',
  },
  {
    id: 'entrepreneurs',
    title: 'Business Owners & Entrepreneurs',
    subtitle: 'Pre- & Post-Liquidity Event Structuring',
    overview: 'Founders with concentrated wealth inside their core business needing separate capital structures for liquidity, treasury, and exit planning.',
    needs: [
      'De-risking single-asset enterprise concentration',
      'Structuring phased capital deployment post-sale',
      'Preserving business wealth outside operating entity risks',
    ],
    solution: 'Diversified liquid endowments decoupled from the founder’s core sector, with tax-aware phased deployment.',
    keyDeliverable: 'Liquidity Event Phasing Blueprint & Cash Treasury Mandate',
  },
  {
    id: 'senior-professionals',
    title: 'Senior Professionals & Executives',
    subtitle: 'Time-Poor Leaders in Law, Finance & Corporate Sectors',
    overview: 'Executives with high bonus and equity-linked income tied to one employer, requiring concentration risk reduction and automated governance.',
    needs: [
      'Strict adherence to personal trading and employer compliance lists',
      'Managing deferred compensation, carried interest, and lump-sum bonuses',
      'Navigating UK pension allowance tapering and annual limits',
    ],
    solution: 'Compliance-cleared discretionary mandates tailored to partner capital calls and cash-flow horizons.',
    keyDeliverable: 'Annual Allowance Audit & Partner Capital Liquidity Plan',
  },
  {
    id: 'multigenerational-families',
    title: 'Multigenerational Families',
    subtitle: 'Legacy Structuring & Inter-Generational Continuity',
    overview: 'Families structuring multi-generational capital with defined purposes alongside qualified legal and tax professionals.',
    needs: [
      'Mitigating Inheritance Tax (IHT) exposure on UK estates',
      'Establishing purpose-driven capital pools for future generations',
      'Aligning family values with institutional governance',
    ],
    solution: 'Multi-decade risk-budgeted portfolios coordinated with specialist trust, tax, and legal advisers.',
    keyDeliverable: 'Inter-Generational Governance Charter & IHT Strategy',
  },
];

// The 4-Stage Process & 6-Step Client Journey
export const APPROACH_STAGES = [
  {
    number: '01',
    name: 'DEFINE',
    tagline: 'Establish clear wealth objectives and time horizons.',
    details: 'We begin by diagnosing your full financial picture, defining the specific job of every pound, and establishing precise loss tolerance and liquidity requirements.',
  },
  {
    number: '02',
    name: 'DECIDE',
    tagline: 'Formulate a well-thought-out, evidence-based strategy.',
    details: 'Using proprietary quantitative risk engines and decades of historical market data, we design a mathematically validated portfolio tailored to your mandate.',
  },
  {
    number: '03',
    name: 'IMPLEMENT',
    tagline: 'Execute the agreed strategy using UK platform custody.',
    details: 'Assets remain safely within established, authorised UK custody platforms in your name. We execute investments transparently with zero hidden spreads.',
  },
  {
    number: '04',
    name: 'MONITOR',
    tagline: 'Continuously review performance against stated goals.',
    details: 'Ongoing quarterly reviews, risk rebalancing, and transparent net-of-fee reporting keep your portfolio aligned with changing family circumstances and market dynamics.',
  },
];

export const CLIENT_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Private Introduction',
    description: 'A confidential conversation to understand your circumstances and explain our scope without obligation.',
  },
  {
    step: '02',
    title: 'Objective & Risk Assessment',
    description: 'We define your investment time horizon, liquidity requirements, loss capacity, and currency considerations.',
  },
  {
    step: '03',
    title: 'Portfolio Structure',
    description: 'A bespoke proposal prepared using eligible UK platform-hosted investments tied to defined financial purposes.',
  },
  {
    step: '04',
    title: 'Explanation & Approval',
    description: 'Full review of all risks, costs, and asset structures before any transaction or allocation occurs.',
  },
  {
    step: '05',
    title: 'Custody & Reporting',
    description: 'Assets held independently with established UK platforms/custodians under segregated nominee accounts.',
  },
  {
    step: '06',
    title: 'Continuing Review',
    description: 'Periodic evaluations against original objectives, market evidence, and life milestones.',
  },
];

// Why India - 4 Strategic Market Drivers
export const INDIA_MARKET_DRIVERS = [
  {
    id: 'growth',
    title: 'Leading Long-Term Returns',
    stat: '6%+',
    sub: 'Real GDP Expansion',
    description: 'One of the world’s fastest-growing major economies, sustained by strong demographics, domestic consumption, and structural manufacturing reforms.',
  },
  {
    id: 'capital-markets',
    title: 'Broadening Capital Markets',
    stat: '$5T+',
    sub: 'Market Capitalization',
    description: 'Expanding public equity markets spanning consumption, modern infrastructure, financial digitization, healthcare, and global technology services.',
  },
  {
    id: 'domestic-capital',
    title: 'Growing Domestic Capital',
    stat: '$2.5B+',
    sub: 'Monthly SIP Inflows',
    description: 'Rising participation from local Indian households and pension institutions providing unprecedented liquidity and structural resilience to capital markets.',
  },
  {
    id: 'active-selection',
    title: 'Scope for Active Selection',
    stat: 'Top 10%',
    sub: 'Dispersion Spread',
    description: 'Wide dispersion in corporate growth and governance profiles, creating meaningful scope for specialized on-the-ground research to add long-term alpha.',
  },
];

// Comprehensive FAQ List from Blueprint
export const FAQS: FaqItem[] = [
  {
    id: 'investments-held',
    category: 'custody',
    question: 'Where are investments held?',
    answer: 'Your investments are held independently in your own name on an authorised, established UK custody and settlement platform. Anand Rathi Wealth UK operates as an authorised investment manager and does not hold client money or assets on its own balance sheet.',
  },
  {
    id: 'transfer-money-india',
    category: 'india',
    question: 'Do I need to transfer money to India or open NRE/NRO accounts?',
    answer: 'No. You do not need to transfer funds to India, convert currencies yourself, or operate complex NRE/NRO bank accounts. We provide access to India-focused investment opportunities directly from the UK using eligible UK-domiciled and platform-hosted instruments.',
  },
  {
    id: 'isa-eligibility',
    category: 'approach',
    question: 'Can investments sit inside an ISA or SIPP?',
    answer: 'Yes. Certain eligible India-focused investments can be held within a UK Stocks & Shares ISA or Self-Invested Personal Pension (SIPP), subject to prevailing HMRC regulations, platform availability, and your annual allowance thresholds.',
  },
  {
    id: 'fca-regulation',
    category: 'regulation',
    question: 'Is Anand Rathi Wealth UK regulated by the FCA?',
    answer: 'Yes. Anand Rathi Wealth UK Limited is authorised and regulated by the Financial Conduct Authority in the United Kingdom under FCA Reference Number 1033886. Client assets are subject to UK regulatory client money rules and FSCS protection subject to statutory limits.',
  },
  {
    id: 'minimum-portfolio',
    category: 'approach',
    question: 'What is the minimum investment portfolio threshold?',
    answer: 'Our institutional advisory is tailored for high-net-worth families, entrepreneurs, senior executives, and global citizens with typical investable assets starting from £500,000 up to £10M+.',
  },
  {
    id: 'london-office',
    category: 'regulation',
    question: 'Where is your London office located?',
    answer: 'Our UK headquarters is located at Octagon Point, 5 Cheapside, City of London, EC2V 6AA, situated directly adjacent to St Paul’s Cathedral and Bank.',
  },
];
