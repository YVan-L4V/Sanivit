import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, Users, Building } from 'lucide-react';

const Engagements = () => {
  const commitments = [
    {
      icon: Award,
      title: "Qualité",
      description: "Des prestations conformes aux normes les plus strictes et à vos attentes."
    },
    {
      icon: Leaf,
      title: "Environnement",
      description: "Réduction des nuisances, tri et valorisation pour un impact positif."
    },
    {
      icon: Users,
      title: "Social",
      description: "Création d’emplois locaux et formation continue de nos équipes."
    },
    {
      icon: Building,
      title: "Institutionnel",
      description: "Collaboration étroite avec les municipalités et le ministère de l’Environnement."
    }
  ];

  return (
    <section id="engagements" className="py-20 bg-white">
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
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Engagements</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Notre engagement pour un Gabon plus propre se traduit par des actions concrètes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-green-400 transition-all duration-300 h-full">
                <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <commitment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{commitment.title}</h3>
                <p className="text-gray-700 leading-relaxed">{commitment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;