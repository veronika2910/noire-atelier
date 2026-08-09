import { useEffect, useState, type FormEvent, type ChangeEvent } from "react";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

const PROJECT_TYPES = [
  "Full-Service Design",
  "Interior Design",
  "Spatial Concept",
  "Custom Furniture",
  "Other",
];

const BUDGET_RANGES = [
  "Under 1,000,000 CZK",
  "1,000,000 – 3,000,000 CZK",
  "3,000,000 – 8,000,000 CZK",
  "8,000,000 CZK +",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact — NOIRÉ ATELIER";
  }, []);

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Tell us a little about the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Demo only — no backend is connected. This simulates a network
    // round-trip so the success state can be reviewed.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's create something timeless."
        description="Tell us about your project and we'll be in touch within two business days."
      />

      <section className="container-atelier grid grid-cols-1 gap-16 pb-28 md:grid-cols-12 md:gap-8 md:pb-40">
        <div className="md:col-span-4">
          <Reveal>
            <div className="space-y-8 text-[15px] text-ink/70">
              <div>
                <p className="eyebrow !text-ink/40">Email</p>
                <a
                  href="mailto:hello@noireatelier.com"
                  className="link-underline mt-2 inline-block text-ink"
                >
                  hello@noireatelier.com
                </a>
              </div>
              <div>
                <p className="eyebrow !text-ink/40">Studio</p>
                <p className="mt-2 text-ink">
                  Prague
                  <br />
                  Czech Republic
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            {submitted ? (
              <div className="border border-ink/15 px-8 py-16 text-center">
                <p className="eyebrow">Message Received</p>
                <h2 className="mt-4 font-display text-3xl text-ink">
                  Thank you, {form.name.split(" ")[0] || "there"}.
                </h2>
                <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-ink/60">
                  We&rsquo;ve received your message and will reply within two
                  business days.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(INITIAL_STATE);
                    setSubmitted(false);
                  }}
                  className="link-underline mt-8 text-xs uppercase tracking-widest2 text-ink/60"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <p className="text-xs uppercase tracking-widest2 text-ink/35">
                  Demo form &mdash; not yet connected to a backend
                </p>

                <Field
                  label="Name"
                  value={form.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                />

                <div>
                  <label className="eyebrow !text-ink/40">Project Type</label>
                  <select
                    value={form.projectType}
                    onChange={handleChange("projectType")}
                    className="mt-3 w-full border-0 border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-bronze"
                  >
                    <option value="">Select an option</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="eyebrow !text-ink/40">
                    Estimated Budget
                  </label>
                  <select
                    value={form.budget}
                    onChange={handleChange("budget")}
                    className="mt-3 w-full border-0 border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-bronze"
                  >
                    <option value="">Select a range</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="eyebrow !text-ink/40">Message</label>
                  <textarea
                    value={form.message}
                    onChange={handleChange("message")}
                    rows={4}
                    className="mt-3 w-full resize-none border-0 border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-bronze"
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-800/70">
                      {errors.message}
                    </p>
                  )}
                </div>

                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={submitting}
                  className="border border-ink/80 px-8 py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory disabled:opacity-50"
                >
                  {submitting ? "Sending…" : "Start a Project"}
                </MagneticButton>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="eyebrow !text-ink/40">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-3 w-full border-0 border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-bronze"
      />
      {error && <p className="mt-2 text-xs text-red-800/70">{error}</p>}
    </div>
  );
}
