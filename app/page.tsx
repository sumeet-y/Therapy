import About from "./components/About";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Message from "./components/Message";
import Pricing from "./components/Pricing";
import Quote from "./components/Quote";
import Services from "./components/Services";


export default function HomePage() {
  return (
    <main className="">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Message />
      <Quote />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
