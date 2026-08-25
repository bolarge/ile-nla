import { Form, Input, Radio, Checkbox } from "antd";

interface ProcessStepProps {
  step: number;
  label: string;
  isLast: boolean;
}

function ProcessStep({ step, label }: ProcessStepProps) {
  return (
    <div className="relative flex gap-4 border-l-stat border-l-3 bg-darkgreen  items-center px-3 h-13">
      <p className="text-stat text-xs font-semibold shrink-0">Step {step}</p>

      <p className="text-white text-sm">{label}</p>
    </div>
  );
}

const procurementSteps: string[] = [
  "Submit RFQ Form",
  "Receive Specification & Pricing Quote",
  "Sign Supply Contract",
  "Scheduled Harvest & Cold Delivery",
];

const businessCategories = [
  "FMCG Processor",
  "Retail/Supermarket",
  "HORECA",
  "Wholesale Trader",
];

const commodities = [
  "Tomato (Cobra F1)",
  "Habanero (Atarodo)",
  "Cayenne (Shombo)",
];

const deliveryFrequencies = ["Weekly", "Bi-Weekly", "Monthly Cycle"];

function B2bBuyerPortal() {
  const [form] = Form.useForm();

  const onFinish = (values: Record<string, unknown>) => {
    console.log("B2B Quote Request:", values);
  };

  return (
    <div className="w-full bg-primary py-24 px-4 sm:px-2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        <section className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-stat tracking-widest text-xs font-semibold">
              B2B BUYERS PORTAL
            </p>
            <p className="text-white font-extrabold text-3xl md:text-[40px] leading-tight">
              Secure Your Year-Round Produce Supply.
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Whether you operate a supermarket chain, a food processing
              factory, or a large-scale distribution business, Ile-Nla offers
              long-term supply contracts with fixed delivery schedules and
              transparent bulk pricing in Nigerian Naira (NGN).
            </p>
          </div>

          <div className="flex flex-col gap-1 mt-4">
            <p className="text-stat tracking-widest text-xs font-semibold mb-4">
              PROCUREMENT PROCESS
            </p>
            {procurementSteps.map((step, i) => (
              <ProcessStep
                key={i}
                step={i + 1}
                label={step}
                isLast={i === procurementSteps.length - 1}
              />
            ))}
          </div>
        </section>

        <section className="w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 h-fit">
          <p className="text-darkgreen font-bold text-lg mb-6">
            B2B Produce Quote Request
          </p>

          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            requiredMark={false}
          >
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[{ required: true, message: "Company name is required" }]}
            >
              <Input placeholder="Enter company name" size="large" />
            </Form.Item>

            <Form.Item
              label="Business Category"
              name="businessCategory"
              rules={[{ required: true, message: "Please select a category" }]}
            >
              <Radio.Group className="flex flex-col gap-2">
                {businessCategories.map((category) => (
                  <Radio key={category} value={category}>
                    {category}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Commodity Required"
              name="commodities"
              rules={[
                { required: true, message: "Select at least one commodity" },
              ]}
            >
              <Checkbox.Group className="flex flex-col gap-2">
                {commodities.map((commodity) => (
                  <Checkbox key={commodity} value={commodity}>
                    {commodity}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              label="Estimated Volume"
              name="estimatedVolume"
              rules={[
                { required: true, message: "Estimated volume is required" },
              ]}
            >
              <Input placeholder="Metric Tons / Bags / Crates" size="large" />
            </Form.Item>

            <Form.Item
              label="Delivery Frequency"
              name="deliveryFrequency"
              rules={[{ required: true, message: "Please select a frequency" }]}
            >
              <Radio.Group className="flex flex-col gap-2">
                {deliveryFrequencies.map((frequency) => (
                  <Radio key={frequency} value={frequency}>
                    {frequency}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Primary Location"
              name="primaryLocation"
              rules={[
                { required: true, message: "Primary location is required" },
              ]}
            >
              <Input placeholder="City / State / Region" size="large" />
            </Form.Item>

            <button className="w-full lg:w-[60%] h-12 bg-primary text-white font-semibold text-lg rounded-full cursor-pointer">
              SUBMIT B2B QUOTE REQUEST
            </button>
          </Form>
        </section>
      </div>
    </div>
  );
}

export default B2bBuyerPortal;
