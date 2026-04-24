import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Droplets, HardHat, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Trash2,
      title: "Collecte des ordures ménagères",
      description: "Ramassage régulier pour les ménages et les collectivités.",
    },
    {
      icon: Droplets,
      title: "Vidange et curage de fosses septiques",
      description: "Interventions rapides et sécurisées pour particuliers et entreprises.",
    },
    {
      icon: HardHat,
      title: "Nettoyage industriel",
      description: "Prestations adaptées aux sites industriels, chantiers et zones sensibles.",
    },
    {
      icon: Recycle,
      title: "Gestion durable des déchets",
      description: "Projets innovants comme le futur centre d’enfouissement technique d’Igoumié.",
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nos
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes et adaptées pour l'assainissement et la gestion de vos déchets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-green-400 transition-all duration-300 h-full flex flex-col">
                <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 flex-grow text-gray-900">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-12 border border-gray-200 shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Un besoin spécifique ?</h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-6 rounded-full text-white"
          >
            Demander un devis
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;