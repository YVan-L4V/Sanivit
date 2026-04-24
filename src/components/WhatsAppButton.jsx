import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = "241077108387";
  const message = "Bonjour, je visite votre site et j'aimerais avoir plus d'informations.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      aria-label="Contacter sur WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.849 6.069l-1.254 4.587 4.68-1.231zm9.35-6.344c-.273-.136-1.618-.799-1.869-.888-.251-.088-.433-.136-.615.137-.182.272-.707.888-.868 1.064-.161.176-.322.198-.594.062-.272-.136-1.146-.42-2.181-1.344-.808-.718-1.35-1.612-1.511-1.887-.161-.273-.017-.42.118-.557.121-.122.272-.312.408-.464.136-.152.181-.251.272-.42.09-.17.045-.312-.023-.433-.068-.122-.615-1.475-.84-2.015-.224-.54-.448-.464-.615-.471-.162-.007-.344-.007-.525-.007-.182 0-.479.068-.729.343-.25.274-.966.943-.966 2.302 0 1.359.991 2.668 1.132 2.849.141.181 1.95 2.993 4.733 4.19.68.293 1.214.468 1.63.598.693.218 1.325.187 1.818.113.57-.085 1.618-.662 1.849-1.295.232-.633.232-1.17.162-1.295-.069-.125-.251-.198-.525-.334z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;