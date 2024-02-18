'use client';

import React from 'react';
import Notification from "../notifs/notifications";
import localFont from "next/font/local";

  const font = localFont({
    src: "../../../fonts/Starjedi.ttf",
  });

const Home = () => {

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">      
      <Notification iconNotif={'Home'} titleNotif={"Page D'accueil"} textNotif={"Bienvenue sur la page d'accueil, vous pouvez en apprendre plus sur moi ainsi que voir mes réalisations sur ce site !"}></Notification>
    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">

      <div className="bg-white rounded-2xl">
        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className={`${font.className} text-3xl font-bold text-gray-900 sm:text-4xl mt-20 tracking-wide`}>Adrien Marques</h2>
            <p className="mt-4 text-gray-500">
              Qui suis-je ?
            </p>
          </div>
        </div>
      </div>
    <br/>
      </div>
    </div>
  );
};

export default Home;
