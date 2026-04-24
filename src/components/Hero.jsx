import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whyChooseUs = [
    {
      icon: Zap,
      title: "35+ ans d’expérience",
      description: "Une expertise inégalée dans l'assainissement au Gabon."
    },
    {
      icon: Users,
      title: "Une entreprise locale",
      description: "Proche de ses clients et des réalités du terrain."
    },
    {
      icon: CheckCircle,
      title: "Solutions fiables",
      description: "Des prestations adaptées et efficaces pour chaque besoin."
    }
  ];

  return (
    <>
      <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 bg-white">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900"
            >
              Depuis 1987, SANIVIT s’engage pour un 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                environnement plus propre et plus sain
              </span>
              au Gabon.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-6 rounded-full group text-white"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-gray-300 text-gray-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
              >
                Nous contacter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Pourquoi choisir SANIVIT ?</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;