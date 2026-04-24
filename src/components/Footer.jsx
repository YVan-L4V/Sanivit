import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleNavigationClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = () => {
    toast({ 
      description: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀" 
    });
  };

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { text: 'Accueil', sectionId: 'accueil', isActive: true },
        { text: 'Qui sommes-nous', sectionId: 'a-propos', isActive: true },
        { text: 'Services', sectionId: 'services', isActive: true },
        { text: 'Engagements', sectionId: 'engagements', isActive: true },
        { text: 'Actualités', sectionId: 'actualites', isActive: true },
        { text: 'Contact', sectionId: 'contact', isActive: true }
      ]
    },
    {
      title: 'Services',
      links: [
        { text: 'Collecte des ordures', isActive: false },
        { text: 'Vidange de fosses', isActive: false },
        { text: 'Nettoyage industriel', isActive: false },
        { text: 'Gestion des déchets', isActive: false }
      ]
    },
    {
      title: 'Contact',
      links: [
        { text: 'sanivitga@yahoo.fr', isActive: false },
        { text: '+241 077 10 83 87', isActive: false },
        { text: 'Demander un devis', isActive: false }
      ]
    }
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-100">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                SANIVIT
              </span>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Votre partenaire propreté au Gabon depuis 1987.
              </p>
            </motion.div>
          </div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text || link}>
                    {link.isActive ? (
                      <button
                        onClick={() => handleNavigationClick(link.sectionId)}
                        className="text-gray-700 hover:text-green-600 transition-colors text-left cursor-pointer"
                      >
                        {link.text}
                      </button>
                    ) : (
                      <span className="text-gray-700">
                        {link.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} SANIVIT. Tous droits réservés.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <button
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Politique de confidentialité
              </button>
              <button
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Conditions d'utilisation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;