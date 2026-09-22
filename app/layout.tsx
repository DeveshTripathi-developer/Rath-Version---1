import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Private Wealth Management UK | Anand Rathi Wealth UK',
  description:
    'FCA-regulated wealth management for UK residents and the Indian diaspora, offering structured, UK-based access to India-focused investment opportunities.',
  openGraph: {
    title: 'Private Wealth Management UK | Anand Rathi Wealth UK',
    description:
      'FCA-regulated wealth management for UK residents and the Indian diaspora, offering structured, UK-based access to India-focused investment opportunities.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Wealth Management UK | Anand Rathi Wealth UK',
    description:
      'FCA-regulated wealth management for UK residents and the Indian diaspora, offering structured, UK-based access to India-focused investment opportunities.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FinancialService',
      '@id': 'https://www.anandrathiwealth.co.uk/#financialservice',
      name: 'Anand Rathi Wealth UK Limited',
      legalName: 'Anand Rathi Wealth UK Limited',
      url: 'https://www.anandrathiwealth.co.uk',
      logo: 'https://www.anandrathiwealth.co.uk/logo.png',
      description:
        'FCA-regulated wealth management for UK residents and the Indian diaspora, offering structured, UK-based access to India-focused investment opportunities.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Octagon Point, 5 Cheapside',
        addressLocality: 'City of London',
        postalCode: 'EC2V 6AA',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.5138,
        longitude: -0.0934,
      },
      email: 'anandrathiwealth@rathi.com',
      telephone: '+44 20 7946 0920',
      priceRange: '££££',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:30',
          closes: '18:00',
        },
      ],
      knowsAbout: [
        'Private Wealth Management',
        'India-Focused Investment Opportunities',
        'Cross-Border Asset Structuring',
        'Inheritance Tax & Estate Planning',
        'FCA-Regulated Advisory',
        'Risk-Managed Portfolio Construction',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.anandrathiwealth.co.uk/#organization',
      name: 'Anand Rathi Wealth UK Limited',
      alternateName: 'Anand Rathi Wealth UK',
      url: 'https://www.anandrathiwealth.co.uk',
      sameAs: [
        'https://www.anandrathiwealth.co.uk',
        'https://www.rathi.com',
      ],
      foundingDate: '2002',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Anand Rathi Wealth Limited',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.anandrathiwealth.co.uk/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where are investments held?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your investments are held independently in your own name on an authorised, established UK custody and settlement platform. Anand Rathi Wealth UK operates as an authorised investment manager and does not hold client money or assets on its own balance sheet.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to transfer money to India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. You do not need to transfer funds to India, convert currencies yourself, or operate complex NRE/NRO bank accounts. We provide access to India-focused investment opportunities directly from the UK using eligible UK-domiciled and platform-hosted instruments.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can investments sit inside an ISA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Certain eligible India-focused investments can be held within a UK Stocks & Shares ISA or Self-Invested Personal Pension (SIPP), subject to prevailing HMRC regulations and platform availability.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Anand Rathi Wealth UK regulated by the FCA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Anand Rathi Wealth UK Limited is authorised and regulated by the Financial Conduct Authority in the United Kingdom under FCA Reference Number 1033886.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased text-[#252525] bg-[#FFFFFF] min-h-screen selection:bg-[#F1E1A6] selection:text-[#252525]">
        {children}
      </body>
    </html>
  );
}
