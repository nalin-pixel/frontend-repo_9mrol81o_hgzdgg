import { Rocket, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
          <Rocket className="h-4 w-4" />
          High‑intent lead capture
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Launch a lightning‑fast lead form
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          A clean, conversion‑focused form inspired by the best of social lead ads.
          Capture name, email, phone, and intent in seconds.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#get-started"
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get started
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
