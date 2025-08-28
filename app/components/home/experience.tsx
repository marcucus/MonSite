'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { HiOfficeBuilding } from 'react-icons/hi';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  type: 'work' | 'education' | 'certification';
  description: string[];
  technologies?: string[];
  icon: React.ReactNode;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Développeur Full Stack Freelance",
      company: "Auto-entrepreneur",
      period: "2023 - Présent",
      type: "work",
      description: [
        "Développement d'applications web sur mesure pour diverses entreprises",
        "Architecture et développement avec React/Next.js et PHP/Symfony",
        "Création de sites vitrines et d'applications métier performantes",
        "Optimisation SEO et performance web pour améliorer la visibilité"
      ],
      technologies: ["React", "Next.js", "TypeScript", "PHP", "Symfony", "MySQL", "Docker"],
      icon: <FaBriefcase />
    },
    {
      id: 2,
      title: "Développeur Web Full Stack",
      company: "Projets Clients Variés",
      period: "2022 - 2023",
      type: "work",
      description: [
        "Développement de LCF Auto Performance - Site vitrine avec React/Next.js",
        "Création du site Dijoma avec intégration sur Netlify",
        "Développement de Forestria - Application de randonnées avec Symfony",
        "Maintenance et évolution d'applications existantes"
      ],
      technologies: ["React", "Next.js", "Symfony", "Firebase", "Netlify", "MySQL"],
      icon: <FaBriefcase />
    },
    {
      id: 3,
      title: "Développeur Web",
      company: "Foudroyer.com",
      period: "2021 - 2022",
      type: "work",
      description: [
        "Développement de l'outil Ranking pour le suivi SEO",
        "Architecture et développement avec Gatsby et NestJS",
        "Gestion de base de données PostgreSQL",
        "Optimisation des performances et de l'expérience utilisateur"
      ],
      technologies: ["Gatsby", "NestJS", "PostgreSQL", "React", "TypeScript"],
      icon: <FaBriefcase />
    },
    {
      id: 4,
      title: "Formation Développeur Web",
      company: "Formation Autodidacte",
      period: "2020 - 2021",
      type: "education",
      description: [
        "Apprentissage autonome des technologies web modernes",
        "Maîtrise des frameworks JavaScript et PHP",
        "Projets personnels et open source",
        "Veille technologique continue"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
      icon: <FaGraduationCap />
    }
  ];

  const certifications = [
    {
      name: "React et Next.js",
      issuer: "Formation Continue",
      year: "2023"
    },
    {
      name: "PHP et Symfony",
      issuer: "Formation Continue",
      year: "2022"
    },
    {
      name: "JavaScript ES6+",
      issuer: "Formation Continue",
      year: "2021"
    }
  ];

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-primary-500 to-primary-600';
      case 'education':
        return 'from-accent-500 to-accent-600';
      case 'certification':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-dark-800 py-20 px-10 lg:px-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-accent-900/5"></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <FaBriefcase className="text-primary-400" />
            <span className='text-sm font-bold text-primary-400 uppercase tracking-wider'>Parcours Professionnel</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Mon <span className="text-gradient">Expérience</span>
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed'>
            Un parcours orienté innovation et apprentissage continu dans le développement web
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Experience Timeline */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <FaBriefcase className="text-primary-400" />
              Expérience & Formation
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className="relative flex gap-6 pb-12 last:pb-0"
                >
                  {/* Timeline icon */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getTypeColor(exp.type)} flex items-center justify-center text-white text-lg z-10 shadow-lg`}>
                    {exp.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 card-modern p-6 hover:scale-[1.02] transition-transform">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <p className="text-primary-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-accent-400 font-medium bg-accent-900/30 px-3 py-1 rounded-full mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-primary-900/30 text-primary-300 text-xs rounded border border-primary-700/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Skills */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <FaCertificate className="text-accent-400" />
                Certifications & Formations
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="card-modern p-4 hover:scale-[1.02] transition-transform"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{cert.name}</h4>
                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                      </div>
                      <span className="text-accent-400 font-bold">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Categories */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <HiOfficeBuilding className="text-primary-400" />
                Domaines d&apos;Expertise
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    category: "Frontend Development",
                    skills: "React, Next.js, TypeScript, TailwindCSS",
                    level: 90
                  },
                  {
                    category: "Backend Development",
                    skills: "PHP, Symfony, Node.js, NestJS",
                    level: 85
                  },
                  {
                    category: "Database & DevOps",
                    skills: "MySQL, PostgreSQL, Docker, Git",
                    level: 80
                  },
                  {
                    category: "UI/UX & SEO",
                    skills: "Design System, SEO, Performance",
                    level: 75
                  }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="card-modern p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-white">{skill.category}</h4>
                      <span className="text-primary-400 font-bold">{skill.level}%</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{skill.skills}</p>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;