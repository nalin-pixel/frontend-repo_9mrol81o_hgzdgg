import Hero from "./components/Hero";
import Features from "./components/Features";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <LeadForm />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
