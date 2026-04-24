import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Engagements from '@/components/Engagements';
import References from '@/components/References';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <>
      <Helmet>
        <title>SANIVIT - Assainissement et gestion des déchets au Gabon</title>
        <meta name="description" content="Depuis 1987, SANIVIT s’engage pour un environnement plus propre et plus sain au Gabon. Services de collecte, vidange, nettoyage industriel et gestion durable des déchets." />
      </Helmet>
      
      <div className="min-h-screen text-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Engagements />
          <References />
          <News />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;