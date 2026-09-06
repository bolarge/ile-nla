import { type ReactNode } from "react";

interface TermsSection {
  number: number;
  title: string;
  body: ReactNode;
}

const introText =
  'Please read these Terms of Supply carefully. These terms constitute a legally binding agreement between you ("Buyer") and Ile-Nla. ("Supplier") governing the ordering, commercial procurement, quality inspection, and delivery protocols of our premium agricultural cash crops.';

const sections: TermsSection[] = [
  {
    number: 1,
    title: "Definitions",
    body: (
      <p>
        In these Terms of Supply, 'Agreement' refers collectively to this
        document, any associated purchase orders, and signed schedules.
        'Produce' designates the fresh tomatoes (Cobra F1), habanero peppers
        (Atarodo), cayenne peppers (Shombo), and other agricultural goods
        cultivated by Ile-Nla. 'Buyer' designates the commercial entity,
        processor, or aggregator purchasing the Produce.
      </p>
    ),
  },
  {
    number: 2,
    title: "Scope of Supply",
    body: (
      <p>
        Ile-Nla agrees to sell and deliver, and the Buyer agrees to purchase,
        the varieties, grades, and quantities of Produce specified in an
        executed B2B Supply Contract or written Purchase Order. All transactions
        are commercial B2B contracts, and consumer protection regulations do not
        apply.
      </p>
    ),
  },
  {
    number: 3,
    title: "Orders and Acceptance",
    body: (
      <p>
        All orders must be submitted in writing via the B2B Buyers Portal or
        verified corporate email channels. Orders are subject to real-time crop
        yield forecasts, climatic conditions, and seasonal availability, and
        they only become binding upon formal written confirmation from an
        authorized representative of Ile-Nla.
      </p>
    ),
  },
  {
    number: 4,
    title: "Pricing and Payment",
    body: (
      <p>
        All prices are quoted in Nigerian Naira (NGN) unless otherwise stated.
        Unless credit terms are formally approved in writing, all deliveries
        require prepayment or are subject to payment within 14 days of invoice
        issuance. Late payments shall accrue interest at a rate of 2% above the
        prevailing central bank prime lending rate.
      </p>
    ),
  },
  {
    number: 5,
    title: "Delivery and Risk",
    body: (
      <p>
        Deliveries will be executed using specialized ventilated,
        damage-reducing plastic crates to the designated delivery address. Risk
        of loss, deterioration, or damage transfers to the Buyer immediately
        upon unloading at the delivery point. Delivery windows are estimates,
        and Ile-Nla is not liable for transport delays beyond its reasonable
        control.
      </p>
    ),
  },
  {
    number: 6,
    title: "Quality and Inspection",
    body: (
      <p>
        Ile-Nla warrants that all Produce complies with Grade-A commercial
        specifications at the time of delivery. The Buyer must perform a
        thorough physical inspection of all crates immediately upon receipt and
        note any clear quality variances, box-count deficits, or structural
        damage on the delivery manifest.
      </p>
    ),
  },
  {
    number: 7,
    title: "Returns and Complaints",
    body: (
      <p>
        Due to the highly perishable nature of fresh horticultural crops, any
        quality claims or complaints must be submitted with photographic
        evidence within 24 hours of delivery. Approved quality deficits will be
        credited to the Buyer's account or compensated in the immediate next
        scheduled delivery cycle; cash refunds are not provided.
      </p>
    ),
  },
  {
    number: 8,
    title: "Warranties",
    body: (
      <p>
        We warrant that our crops are grown under strict climate-smart agronomy
        and Integrated Pest Management (IPM) protocols with complete chemical
        traceability. Except as expressly set forth herein, Ile-Nla disclaims
        all other warranties, express, implied, or statutory, including any
        warranties of merchantability for specific secondary processing.
      </p>
    ),
  },
  {
    number: 9,
    title: "Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by applicable law, the cumulative
        liability of Ile-Nla for any direct claims, losses, or damages arising
        out of the supply of Produce shall not exceed the invoice value of the
        specific batch giving rise to the claim. We shall not be liable for any
        indirect, incidental, or consequential loss of profits.
      </p>
    ),
  },
  {
    number: 10,
    title: "Force Majeure",
    body: (
      <p>
        Neither party shall be liable for failures or delays in performance
        resulting from acts of God, extreme weather anomalies, severe pest
        infestations, civil unrest, labor strikes, fuel shortages, municipal
        road closures, or government regulations that materially halt
        agricultural production or physical transport networks.
      </p>
    ),
  },
  {
    number: 11,
    title: "Termination",
    body: (
      <p>
        Either party may terminate a continuous supply agreement for convenience
        upon 30 days' written notice. Additionally, either party may terminate
        immediately if the other party enters liquidation, files for bankruptcy,
        or commits a material breach of contract that remains uncured for 7
        business days following formal notice.
      </p>
    ),
  },
  {
    number: 12,
    title: "Governing Law and Dispute Resolution",
    body: (
      <p>
        These Terms of Supply and all supply contracts are governed by and
        construed in accordance with the laws of the Federal Republic of
        Nigeria. Any disputes arising under this agreement shall first be
        subjected to good-faith bilateral negotiation, failing which they shall
        be referred to binding arbitration in Lagos State.
      </p>
    ),
  },
  {
    number: 13,
    title: "Contact Information",
    body: (
      <p>
        For all legal notices, contract renegotiations, or billing queries,
        please contact our corporate relations team via{" "}
        <a
          href="mailto:sales@ilenlaagri.com"
          className="text-primary hover:underline"
        >
          sales@ilenlaagri.com
        </a>
        , or send formal mail to: Legal & Compliance Department, Ile-Nla,
        Commercial Towers, Victoria Island, Lagos State, Nigeria.
      </p>
    ),
  },
];

function TermsIntro() {
  return (
    <div className="pb-8 border-b border-gray-100">
      <p className="text-sub text-sm leading-relaxed">{introText}</p>
    </div>
  );
}

function TermsSectionBlock({ section }: { section: TermsSection }) {
  return (
    <section className="flex flex-col gap-3 py-8 border-b border-gray-100 last:border-b-0">
      <p className="text-darkgreen font-bold text-xl md:text-2xl">
        {section.number}. {section.title}
      </p>
      <div className="text-sm text-sub leading-relaxed flex flex-col gap-3">
        {section.body}
      </div>
    </section>
  );
}

function ImportantNoteCard() {
  return (
    <div className="border border-tertiary bg-milky rounded-xl p-6 mt-4">
      <p className="text-darkgreen font-semibold mb-2">
        Important Note for B2B Partners
      </p>
      <p className="text-sm text-sub leading-relaxed">
        By executing a written purchase order or accepting any physical shipment
        of Produce from Ile-Nla, the Buyer unconditionally agrees to be bound by
        the quality inspection windows and dispute resolution limits outlined in
        these Terms of Supply.
      </p>
    </div>
  );
}

function TermsOfSupplyContent() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col px-2">
        <TermsIntro />
        {sections.map((section) => (
          <TermsSectionBlock key={section.number} section={section} />
        ))}
        <ImportantNoteCard />
      </div>
    </div>
  );
}

export default TermsOfSupplyContent;
