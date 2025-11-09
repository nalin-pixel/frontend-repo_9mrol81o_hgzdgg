import { Shield, Zap, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Frictionless UX",
    desc: "Minimal steps, auto-formatting, and inline validation to reduce drop‑offs.",
  },
  {
    icon: Shield,
    title: "Spam‑safe",
    desc: "Honeypot field and rate limiting ready on the backend to keep data clean.",
  },
  {
    icon: CheckCircle2,
    title: "Easy to embed",
    desc: "Drop the form on any page or run it standalone for paid campaigns.",
  },
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built to convert
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Modeled after social lead ad flows — optimized for speed and clarity.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
