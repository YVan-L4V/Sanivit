import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      date: "Novembre 2024",
      title: "SANIVIT reprend du service à Owendo",
      description: "Après une brève interruption, nous sommes fiers d'annoncer la reprise complète de nos services de collecte des déchets dans la commune d'Owendo.",
      image: "/Actualités/Owendo.png",
      url: "https://gabonmailinfos.com/sanivit-relance-le-nettoyage-de-la-commune-dowendo/"
    },
    {
      date: "Juin 2025",
      title: "Un projet structurant pour la gestion des déchets : futur CET à Owendo",
      description: "Le projet de Centre d'Enfouissement Technique (CET) à Igoumié (commune d'Owendo) avance, promettant une révolution dans la gestion des déchets au Gabon.",
      image: "/Actualités/CET.png",
      url: "https://gabon-quotidien.com/gestion-des-dechets-sanivit-presente-un-projet-structurant-de-centre-denfouissement-au-ministre-de-lenvironnement/"
    }
  ];

  const handleReadMore = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="actualites" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nos
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Actualités</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Restez informés de nos dernières actions et de nos projets futurs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm group"
            >
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4 bg-gray-800/70 text-white text-sm font-semibold px-3 py-1 rounded-full">{item.date}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                <Button
                  variant="outline"
                  onClick={() => handleReadMore(item.url)}
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 group-hover:border-green-400 transition-all duration-300"
                >
                  Lire la suite
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;