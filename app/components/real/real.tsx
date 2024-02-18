'use client';

import React from 'react';
import Image from "next/image";
import ranking from '../../../public/ranking.png';
import dijoma from '../../../public/dijoma.png';
import Notification from '../notifs/notifications';

const Real = () => {
  
  const rankings = [
    { name: 'Technologies Front', description: 'React, Gatsby, Tailwind CSS' },
    { name: 'Technologies Back', description: 'NestJS' },
    { name: 'Bases de données', description: 'PostgreSQL' },
  ]

  const dijomas = [
    { name: 'Technologies Front', description: 'React, Tailwind CSS' },
    { name: 'Technologies Back', description: 'Pas de Back-End' },
    { name: 'Déploiement', description: 'Sur Netlify' },
  ]


  return (

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Notification iconNotif={'Work'} titleNotif={"Page de réalisations"} textNotif={"Voici la page présentant mes réalisations !"}></Notification>
      <br/>
    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
    <div className="mx-auto max-w-3xl">
      <div className="bg-white rounded-2xl">
        <div aria-hidden="true" className="relative">
          <Image src={ranking} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl">
          </Image>
        </div>

        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">Foudroyer Ranking</h2>
            <p className="mt-4 text-gray-500">
              Partie du site internet <a href='https://www.foudroyer.com' className='font-bold'>foudroyer.com</a>, Ranking permet 
              d'enregistrer des mots-clés afin de stocker leurs positionnement sur les moteurs de recherche : Google, Yandex, Bing.
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {rankings.map((ranking) => (
              <div key={ranking.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{ranking.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{ranking.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    <br/>
      <div className="bg-white rounded-2xl">
        <div aria-hidden="true" className="relative">
          <Image src={dijoma} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl">
          </Image>
        </div>

        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-12">DIJOMA</h2>
            <p className="mt-4 text-gray-500">
              Site internet <a href='https://tourmaline-cucurucho-f2dac4.netlify.app/' className='font-bold'>dijoma.be</a>. C'est un site vitrine pour l'entreprise Dijoma
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {dijomas.map((dijoma) => (
              <div key={dijoma.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{dijoma.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{dijoma.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Real;
