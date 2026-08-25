import { assets } from "../../../assets/assets";

interface ContactCardProps {
  icon?: string;
  label: string;
  name: string;
  addressLines: string[];
  email?: string;
  phone?: string;
}

function ContactCard({
  icon,
  label,
  name,
  addressLines,
  email,
  phone,
}: ContactCardProps) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        {icon && <img src={icon} alt={label} className="w-5 h-5" />}
      </div>

      <p className="text-sub tracking-widest text-xs font-semibold">{label}</p>

      <div className="flex flex-col gap-1">
        <p className="text-darkgreen font-semibold text-sm">{name}</p>
        {addressLines.map((line, i) => (
          <p key={i} className="text-sub text-sm">
            {line}
          </p>
        ))}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-tertiary text-sm hover:underline font-semibold"
          >
            {email}
          </a>
        )}
        {phone && <p className="text-sub text-sm">Phone: {phone}</p>}
      </div>
    </div>
  );
}

const contactLocations: ContactCardProps[] = [
  {
    label: "CORPORATE HEADQUARTERS",
    name: "Ile-Nla.",
    addressLines: [
      "Commercial Towers, Victoria Island,",
      "Lagos State, Nigeria",
    ],
    email: "sales@ilenlaagri.com",
    phone: "+234 (0) 803 XXX XXXX",
    icon: assets.hq
  },
  {
    label: "FARM LOCATION",
    name: "Ile-Nla.",
    addressLines: ["[Agricultural Hub Region]", "[State], Nigeria"],
    icon:assets.farmlocation
  },
];

function Contactus() {
  return (
    <div className="w-full bg-white py-16 px-2">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <section className="flex flex-col gap-3">
          <p className="text-sub tracking-widest text-xs font-semibold">
            CONTACT US
          </p>
          <p className="text-darkgreen font-extrabold text-3xl md:text-[40px]">
            Connect with Ile-Nla.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {contactLocations.map((location, i) => (
            <ContactCard key={i} {...location} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Contactus;
