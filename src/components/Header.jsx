import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleMenuClick = (section) => {
    if (section === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      scrollToSection(section);
    }
  };

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'a-propos', label: 'Qui sommes-nous' },
    { id: 'services', label: 'Services' },
    { id: 'engagements', label: 'Engagements' },
    { id: 'references', label: 'Références' },
    { id: 'actualites', label: 'Actualités' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleMenuClick('accueil')}
          >
            <img
              src={encodeURI('/Actualités/Logo3Sanivit.svg')}
              alt="Logo SANIVIT"
              className="h-28 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline-block">
              SANIVIT
            </span>
          </motion.button>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMenuClick(link.id)}
                className="text-gray-700 hover:text-green-600 transition-colors text-sm"
              >
                {link.label}
              </motion.button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <a href="tel:+241077108387" className="hidden sm:flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+241 077 10 83 87</span>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 space-y-4 bg-white/90 rounded-b-lg shadow-lg"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleMenuClick(link.id)}
                className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors py-2 px-6"
              >
                {link.label}
              </button>
            ))}
             <a href="tel:+241077108387" className="flex sm:hidden items-center gap-2 text-sm text-gray-700 hover:text-green-600 transition-colors py-2 px-6">
              <Phone className="w-4 h-4" />
              <span>+241 077 10 83 87</span>
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;