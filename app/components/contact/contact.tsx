"use client";

import React, { useState } from 'react';
import { sendMailAction } from '../../actions/sendMail';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendMail = async () => {
    if (!name || !email || !message) {
      setError(true);
    } else {
      setIsSending(true);
      const response = await sendMailAction(name,email,message);
      if(response.success){
        toast.success("Votre message a bien été envoyé");
      } else {
        toast.error("Erreur dans l'envoi de votre message");
      }
      setIsSending(false);
      setName("");
      setEmail("");
      setMessage("");
      setError(false);
    }
  }

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-dark-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative overflow-hidden">
      {/* Background decoration with liquid glass */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-15"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary-500/20 liquid-blob blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent-500/20 liquid-blob blur-3xl" style={{ animationDelay: '6s' }}></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 liquid-glass rounded-full mb-4 sm:mb-6">
            <FaCommentDots className="text-primary-400 text-lg" />
            <span className='text-xs sm:text-sm font-bold text-primary-300 uppercase tracking-wider'>Contact</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6'>
            Contactez-<span className="text-gradient">moi</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0'>
            Si vous avez des questions ou des projets en tête, n&apos;hésitez pas à me contacter.
          </p>
        </motion.div>

        {/* Contact Form with liquid glass */}
        <motion.div variants={fadeInUp} className="liquid-glass p-6 sm:p-8 md:p-10 rounded-3xl">
          <div className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label 
                htmlFor="name" 
                className={`flex items-center gap-2 text-sm font-medium ${
                  error && !name ? "text-red-400" : "text-gray-300"
                }`}
              >
                <FaUser className="text-primary-400" />
                Nom*
              </label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                className="w-full p-3 sm:p-4 liquid-glass rounded-xl border border-primary-500/30 bg-dark-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300 text-sm sm:text-base" 
                placeholder="Votre nom complet"
                value={name} 
                required 
                onChange={(e) => setName(e.target.value)}
              />
              {error && !name && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm flex items-center gap-1"
                >
                  Nom manquant
                </motion.p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className={`flex items-center gap-2 text-sm font-medium ${
                  error && !email ? "text-red-400" : "text-gray-300"
                }`}
              >
                <FaEnvelope className="text-primary-400" />
                Email*
              </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className="w-full p-3 sm:p-4 liquid-glass rounded-xl border border-primary-500/30 bg-dark-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300 text-sm sm:text-base" 
                placeholder="votre.email@exemple.com"
                value={email} 
                required 
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && !email && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm flex items-center gap-1"
                >
                  Adresse mail manquante
                </motion.p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label 
                htmlFor="message" 
                className={`flex items-center gap-2 text-sm font-medium ${
                  error && !message ? "text-red-400" : "text-gray-300"
                }`}
              >
                <FaCommentDots className="text-primary-400" />
                Message*
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                className="w-full p-3 sm:p-4 liquid-glass rounded-xl border border-primary-500/30 bg-dark-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300 resize-none text-sm sm:text-base" 
                placeholder="Décrivez votre projet ou votre question..."
                value={message} 
                required 
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {error && !message && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm flex items-center gap-1"
                >
                  Message manquant
                </motion.p>
              )}
            </div>

            {/* Required Fields Note */}
            <p className='text-gray-400 text-sm italic'>* Champs obligatoires</p>

            {/* Submit Button */}
            <motion.button 
              type="button"
              onClick={sendMail}
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-white transition-all duration-300 text-sm sm:text-base
                ${isSending 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 hover:shadow-glow-lg'
                }
              `}
            >
              {isSending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Envoyer le message</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
