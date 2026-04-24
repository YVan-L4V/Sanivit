import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    devis: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ 
      title: "Message envoyé (simulation)",
      description: "Nous avons bien reçu votre message et nous vous répondrons bientôt." 
    });
    setFormData({ name: '', phone: '', email: '', message: '', devis: false });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sanivitga@yahoo.fr",
      href: "mailto:sanivitga@yahoo.fr"
    },
    {
      icon: Phone,
      title: "Téléphones",
      value: "+241 077 10 83 87 | +241 01 77 23 87 | 077 42 74 74",
      href: "tel:+241077108387"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "B.P. 14210 Libreville – Gabon",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Contactez
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> nous</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Une question ? Un projet ? N'hésitez pas à nous contacter. Notre équipe est à votre écoute.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group text-gray-900"
                >
                  <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                alt="Équipe SANIVIT sur le terrain"
                className="rounded-2xl shadow-lg border border-gray-200 w-full h-80 object-cover"
               src="https://images.unsplash.com/photo-1650859481642-d38648ba7d63" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors text-gray-900 placeholder-gray-500" placeholder="Nom" required />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors text-gray-900 placeholder-gray-500" placeholder="Téléphone" required />
                </div>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors text-gray-900 placeholder-gray-500" placeholder="Email" required />
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors text-gray-900 placeholder-gray-500 resize-none" placeholder="Votre message..." required />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="devis" name="devis" checked={formData.devis} onChange={handleInputChange} className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <label htmlFor="devis" className="text-sm text-gray-700">Je souhaite demander un devis gratuit</label>
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-4 rounded-lg group text-white">
                  Envoyer
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;