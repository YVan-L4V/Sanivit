import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake as Handshake, MapPin } from 'lucide-react';
const References = () => {
  return <section id="references" className="py-20 relative overflow-hidden bg-gray-50">
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
            Références
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> et Projets</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nous sommes fiers de collaborer avec des acteurs majeurs et de mener des projets structurants pour l'avenir du Gabon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Partenaires */}
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
        }} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <Handshake className="w-10 h-10 text-green-600" />
              <h3 className="text-3xl font-bold text-gray-900">Nos Partenaires</h3>
            </div>
            <p className="text-gray-700 mb-6">
              La confiance de nos partenaires institutionnels est le gage de notre sérieux et de notre expertise.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <img alt="Logo Commune d'Owendo" className="w-10 h-10 rounded-full" src="https://horizons-cdn.hostinger.com/eb229a7e-5e41-4f5a-bc54-004427c6a4c4/owendo-YPvV5.png" />
                <span className="font-semibold text-lg text-gray-800">Commune d’Owendo</span>
              </li>
              <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <img alt="Logo Ville de Libreville" className="w-10 h-10 rounded-full" src="https://horizons-cdn.hostinger.com/eb229a7e-5e41-4f5a-bc54-004427c6a4c4/libreville-Qz9CY.png" />
                <span className="font-semibold text-lg text-gray-800">Ville de Libreville</span>
              </li>
              <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <img alt="Logo Ministère de l’Environnement" className="w-10 h-10 rounded-full" src="https://horizons-cdn.hostinger.com/eb229a7e-5e41-4f5a-bc54-004427c6a4c4/min-envirronement-D0MSC.jpg" />
                <span className="font-semibold text-lg text-gray-800">Ministère de l’Environnement</span>
              </li>
            </ul>
          </motion.div>

          {/* Projet Igoumié */}
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
        }} className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 border border-gray-200 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-10 h-10 text-blue-600" />
                <h3 className="text-3xl font-bold text-gray-900">Projet Structurant</h3>
              </div>
              <p className="text-2xl font-semibold text-gray-900 mb-4">
                Centre d’Enfouissement Technique (CET) à Igoumié
              </p>
              <p className="text-gray-700">
                Un projet d'envergure sur 27 hectares pour une gestion moderne et durable des déchets, répondant aux défis environnementaux de demain.
              </p>
            </div>
            <div className="mt-6">
              <img alt="Plan du futur centre d'enfouissement technique" className="w-full h-48 object-cover rounded-lg shadow-md" src="https://images.unsplash.com/photo-1556442643-dd3f04a1a483" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default References;