import { type ReactNode } from "react";

interface PolicySection {
  id: string;
  number: number;
  title: string;
  body: ReactNode;
}

const sections: PolicySection[] = [
  {
    id: "information-we-collect",
    number: 1,
    title: "Information We Collect",
    body: (
      <>
        <p>
          We collect information that identifies, relates to, describes,
          references, or is reasonably capable of being associated with you. The
          categories of information we collect include:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-3">
          <li>
            <span className="font-semibold text-black">
              Personal Information:
            </span>{" "}
            Name, email address, corporate telephone number, job title, and
            business affiliation when you register on our B2B Buyers Portal or
            inquire about investor programs.
          </li>
          <li>
            <span className="font-semibold text-black">
              Farm & Operational Data:
            </span>{" "}
            Crop requirements, estimated volume demands, trade locations, and
            procurement cycle preferences supplied via our request forms.
          </li>
          <li>
            <span className="font-semibold text-black">
              Technical & Usage Data:
            </span>{" "}
            IP address, browser type, navigation paths, operating system, and
            system performance telemetry collected automatically when you browse
            our website.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    number: 2,
    title: "How We Use Your Information",
    body: (
      <>
        <p>
          Ile-Nla uses the collected data to maintain, optimize, and safely
          scale our agricultural B2B pipelines:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-3">
          <li>
            To prepare and deliver accurate scheduled commodity quotes and
            fulfill supply contracts.
          </li>
          <li>
            To verify creditworthiness and perform compliance checks essential
            for structured credit facilities.
          </li>
          <li>
            To optimize our solar hybrid irrigation arrays and cold chain
            logistics based on overall demand maps.
          </li>
          <li>
            To communicate updates regarding production capacities, crop harvest
            calendars, and investor disclosures.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-sharing-disclosure",
    number: 3,
    title: "Data Sharing & Disclosure",
    body: (
      <>
        <p>
          We do not sell, barter, or rent your personal or operational data to
          third parties. We share information only with trusted partners under
          strict confidentiality agreements:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-3">
          <li>
            <span className="font-semibold text-black">
              Financial Partners:
            </span>{" "}
            Selected credit institutions (such as Stanbic IBTC) when managing
            debt service ratios or structured trade finance.
          </li>
          <li>
            <span className="font-semibold text-black">
              Logistics Operators:
            </span>{" "}
            Certified cold-chain and sorting bay carriers who manage
            harvest-to-market dispatch.
          </li>
          <li>
            <span className="font-semibold text-black">Legal Compliance:</span>{" "}
            If required to do so by Nigerian law, CAMA regulations, or to
            safeguard the rights and physical assets of Ile-Nla.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    number: 4,
    title: "Data Security",
    body: (
      <p>
        We deploy industrial-grade technical and administrative controls to
        protect your data. All digital transactions, quote applications, and
        corporate database paths are safeguarded using Transport Layer Security
        (TLS) encryption. Access to operational farm metrics and investor
        databases is strictly restricted to authorized agronomists, executive
        officers, and compliance personnel who have passed verified identity
        management checks.
      </p>
    ),
  },
  {
    id: "your-rights-choices",
    number: 5,
    title: "Your Rights & Choices",
    body: (
      <>
        <p>
          Depending on your location and corporate agreement framework, you hold
          the following rights:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-3">
          <li>
            The right to request copies of your stored personal and corporate
            transaction records.
          </li>
          <li>
            The right to correct any inaccurate contact details, trade volumes,
            or location addresses.
          </li>
          <li>
            The right to request data deletion, provided there are no active,
            unfulfilled commercial crop contracts or debt covenants.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies-tracking",
    number: 6,
    title: "Cookies & Tracking Technologies",
    body: (
      <p>
        Our website uses cookies to remember portal session preferences and
        analyze aggregated site traffic. You can choose to disable cookies
        through your browser settings, though doing so may prevent seamless
        access to the B2B Buyers Portal.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    number: 7,
    title: "Children's Privacy",
    body: (
      <p>
        Our commercial agritech services are designed exclusively for business
        operators, wholesalers, and institutional investors. We do not knowingly
        collect or request personal details from individuals under the age of
        18.
      </p>
    ),
  },
  {
    id: "international-data-transfers",
    number: 8,
    title: "International Data Transfers",
    body: (
      <p>
        Your information may be stored and processed in countries outside
        Nigeria where our cloud infrastructure partners maintain operations. We
        employ standard contractual clauses and legal compliance frameworks to
        ensure your data maintains consistent protection regardless of
        geographical borders.
      </p>
    ),
  },
  {
    id: "changes-to-policy",
    number: 9,
    title: "Changes to This Policy",
    body: (
      <p>
        We update this policy periodically to align with precision agriculture
        standard changes, NDPR regulations, and structural growth. When updates
        occur, we will notify you by revising the "Last updated" timeline at the
        top of this page.
      </p>
    ),
  },
  {
    id: "contact-us",
    number: 10,
    title: "Contact Us",
    body: (
      <>
        <p>
          For any questions, requests, or disputes concerning your personal
          information, please connect with us at:
        </p>
        <div className="mt-3 flex flex-col gap-0.5 text-sub">
          <p className="font-semibold text-black">Ile-Nla</p>
          <p>Data Protection & Compliance Office</p>
          <p>Commercial Towers, Victoria Island, Lagos State, Nigeria</p>
          <a
            href="mailto:privacy@ilenla-agri.com"
            className="text-tertiary hover:underline"
          >
            Email: privacy@ilenla-agri.com
          </a>
        </div>
      </>
    ),
  },
];

function TableOfContents() {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-semibold text-black">Table of Contents</p>
      <ul className="flex flex-col gap-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm text-darkgreen hover:text-primary underline underline-offset-2 transition"
            >
              {section.number}. {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HaveQuestionsCard() {
  return (
    <div className="bg-[#E8E2D6] rounded-xl p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-black">Have Questions?</p>
        <p className="text-sm text-textcat leading-relaxed">
          Our data protection officer is ready to assist you with any questions
          regarding this policy, data deletion, or your personal information
          rights.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs tracking-widest font-semibold text-textcat">
          EMAIL SUPPORT
        </p>
        <a
          href="mailto:privacy@ilenla-agri.com"
          className="text-sm text-primary underline underline-offset-2"
        >
          privacy@ilenla-agri.com
        </a>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs tracking-widest font-semibold text-textcat">
          RESPONSE TIME
        </p>
        <p className="text-sm text-darkgreen">
          Typically within 48 business hours.
        </p>
      </div>
    </div>
  );
}

function PolicyContentSection({ section }: { section: PolicySection }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 flex flex-col gap-3 py-8 border-b border-gray-100 last:border-b-0"
    >
      <p className="text-darkgreen font-bold text-xl md:text-2xl">
        {section.number}. {section.title}
      </p>
      <div className="text-sm text-[] leading-relaxed flex flex-col gap-3">
        {section.body}
      </div>
    </section>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 px-2">
        <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:h-fit">
          <TableOfContents />
          <HaveQuestionsCard />
        </aside>
        <div className="flex flex-col">
          {sections.map((section) => (
            <PolicyContentSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyContent;
