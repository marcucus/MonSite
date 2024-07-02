import React from 'react';

const Contact = () => {
  return (
    <div className="p-20">
      <h2 className="text-2xl font-bold text-gray-300">Contactez-moi</h2>
      <p className="mt-2 text-gray-600">Si vous avez des questions ou des projets en tête, n&apos;hésitez pas à me contacter.</p>
      <form className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-400">Nom</label>
          <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Votre nom" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
          <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Votre email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
          <textarea id="message" name="message" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Votre message"></textarea>
        </div>
        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
