import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, Users } from 'lucide-react';
const About = () => {
  const values = [{
    icon: Zap,
    title: "Fiabilité et expertise",
    description: "Plus de 35 ans d'expérience à votre service."
  }, {
    icon: Leaf,
    title: "Respect de l’environnement",
    description: "Des pratiques durables pour préserver notre écosystème."
  }, {
    icon: Users,
    title: "Proximité avec nos clients",
    description: "Une écoute attentive pour des solutions sur mesure."
  }];
  return <section id="a-propos" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Qui
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> sommes-nous ?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <img alt="Camion de collecte SANIVIT en action" className="rounded-2xl shadow-lg border border-gray-200 w-full" src="https://horizons-cdn.hostinger.com/eb229a7e-5e41-4f5a-bc54-004427c6a4c4/4-camion-sanivit-KtpVX.png" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">Fondée en 1987, SANIVIT est une entreprise gabonaise spécialisée dans l’assainissement et la gestion des déchets. Nous intervenons à Libreville et dans la commune d'Owendo, en collaboration avec les municipalités, les institutions et les particuliers.</p>
            <p className="text-gray-800 font-semibold text-xl leading-relaxed">
              Notre mission : contribuer à un cadre de vie propre, sain et durable.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => <motion.div key={value.title} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="text-center group">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm group-hover:border-green-400 transition-all duration-300 h-full">
                <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default About;