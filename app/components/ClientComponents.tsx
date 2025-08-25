'use client';

import React from 'react';
import ParticleBackground from './particles/ParticleBackground';
import DevConsole from './particles/DevConsole';

const ClientComponents: React.FC = () => {
  return (
    <>
      <ParticleBackground />
      <DevConsole />
    </>
  );
};

export default ClientComponents;