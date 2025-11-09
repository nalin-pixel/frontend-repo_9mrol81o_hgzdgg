import { useState } from "react";
import { Phone, Mail, User, ArrowRight } from "lucide-react";

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "General inquiry", hp: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email";
    if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone)) return "Please enter a valid phone number";
    if (form.hp) return ""; // honeypot triggered
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      // If honeypot was filled, silently ignore
      if (form.hp) return;
      setStatus({ loading: false, success: false, error: err });
      return;
    }
    setStatus({ loading: true, success: false, error: "" });

    try {
      // For now, simulate success. This can be wired to your backend easily.
      await new Promise((res) => setTimeout(res, 900));
      setStatus({ loading: false, success: true, error: "" });
      setForm({ name: "", email: "", phone: "", interest: "General inquiry", hp: "" });
    } catch (e) {
      setStatus({ loading: false, success: false, error: "Something went wrong. Please try again." });
    }
  };

  return (
    <section id="get-started" className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Get a callback</h2>
          <p className="mt-2 text-gray-600">Fill in your details and well reach out within minutes.</p>
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-green-500" /> One-tap autofill on supported browsers</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-green-500" /> WhatsApp friendly follow-up</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-green-500" /> No spam — ever</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 gap-4">
            <div className="hidden">
              <label className="block text-sm font-medium text-gray-700">Your company</label>
              <input name="hp" value={form.hp} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <div className="mt-1 relative flex items-center">
                <User className="absolute left-3 h-4 w-4 text-gray-400" />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="w-full rounded-md border-gray-300 pl-9 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative flex items-center">
                <Mail className="absolute left-3 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className="w-full rounded-md border-gray-300 pl-9 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <div className="mt-1 relative flex items-center">
                <Phone className="absolute left-3 h-4 w-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="+1 202 555 0123"
                  className="w-full rounded-md border-gray-300 pl-9 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">I'm interested in</label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              >
                <option>General inquiry</option>
                <option>Product demo</option>
                <option>Pricing</option>
                <option>Partnerships</option>
              </select>
            </div>
            {status.error && (
              <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {status.error}
              </div>
            )}
            {status.success && (
              <div className="rounded-md bg-green-50 border border-green-200 p-3 text-sm text-green-700">
                Thanks! Well be in touch shortly.
              </div>
            )}
            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow hover:bg-blue-700 disabled:opacity-60"
            >
              {status.loading ? "Submitting..." : "Request callback"}
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-xs text-gray-500">By submitting, you agree to our terms and privacy policy.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
