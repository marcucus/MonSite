"use client";

import React, { useState } from 'react';
import { sendMailAction } from '../../actions/sendMail';
import toast from 'react-hot-toast';

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

  return (
    <div className="p-20 md:p-32 xl:flex xl:flex-col xl:justify-center xl:content-center">
      <h2 className="text-3xl font-bold text-[#e6d116]">Contactez-moi</h2>
      <p className="mt-2 text-[15px] text-gray-400 text-justify">Si vous avez des questions ou des projets en tête, n&apos;hésitez pas à me contacter.</p>
      <div className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className={`block text-sm ${error && !name ? "text-red-500 italic" : "text-gray-400 font-medium"}`}>Nom*</label>
          <input type="text" name="name" id="name" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none sm:text-sm" value={name} required onChange={(e) => setName(e.target.value)}/>
          {error && !name && <p className="text-red-500 italic text-xs">Nom manquant</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className={`block text-sm ${error && !email ? "text-red-500 italic" : "text-gray-400 font-medium"}`}>Email*</label>
          <input type="email" name="email" id="email" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none sm:text-sm" value={email} required onChange={(e) => setEmail(e.target.value)}/>
          {error && !email && <p className="text-red-500 italic text-xs">Adresse mail manquante</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className={`block text-sm ${error && !message ? "text-red-500 italic" : "text-gray-400 font-medium"}`}>Message*</label>
          <textarea id="message" name="message" rows={3} className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none sm:text-sm" value={message} required onChange={(e) => setMessage(e.target.value)}></textarea>
          {error && !message && <p className="text-red-500 italic text-xs">Message manquant</p>}
        </div>
        <div className='text-white text-xs italic mb-0.5'>* champ obligatoire</div>
        <button 
          type="submit" 
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 
          py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none" 
{/*           onClick={() => sendMail()} */}
        >
            {isSending === false ? "Envoyer" : "En cours d'envoi..."}
        </button>
      </div>
    </div>
  );
};

export default Contact;
