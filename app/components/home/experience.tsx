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
      title: "FullStack Developper",
      company: "Ennea",
      period: "Juin 2024 - Juillet 2024 (2 mois)",
      type: "work",
      description: [
        "Développement de la market-place « Bones »",
        "Création de composants et nouvelles pages",
        "Suppressions de bugs existants et suivi de projet",
        "Réalisation des sprints et optimisation de code",
        "Tests et Responsive design"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      icon: <FaBriefcase />
    },
    {
      id: 2,
      title: "FullStack Developer",
      company: "Ennea",
      period: "Février 2024 - Juin 2024 (5 mois)",
      type: "work",
      description: [
        "Développement de la market-place « Bones »",
        "Création de composants et nouvelles pages",
        "Suppressions de bugs existants",
        "Suivi de projet et réalisation des sprints",
        "Optimisation de code, tests et responsive"
      ],
      technologies: ["React", "Next.js", "JavaScript", "Node.js", "MySQL"],
      icon: <FaBriefcase />
    },
    {
      id: 3,
      title: "FullStack Developer JavaScript",
      company: "Foudroyer",
      period: "Janvier 2022 - Juillet 2022 (7 mois)",
      type: "work",
      description: [
        "Développement de la partie Ranking pour le suivi de mots-clés",
        "Calcul du positionnement sur les moteurs de recherche (Google, Yahoo!, Bing)",
        "Développement avec ReactJS et NestJS",
        "Gestion de base de données PostgreSQL",
        "Déploiement sur AWS"
      ],
      technologies: ["ReactJS", "NestJS", "PostgreSQL", "AWS"],
      icon: <FaBriefcase />
    },
    {
      id: 4,
      title: "Développeur web JavaScript",
      company: "Bird and Human",
      period: "Décembre 2019 - Février 2020 (3 mois)",
      type: "work",
      description: [
        "Développement d'une interface de suivi de projets",
        "Interface entre prestataire de services et clients",
        "Projet \"Organon\"",
        "Technologies: HTML/CSS/PHP/JS/SQL"
      ],
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "SQL"],
      icon: <FaBriefcase />
    },
    {
      id: 5,
      title: "Master Informatique",
      company: "Université de Franche-Comté",
      period: "Octobre 2022 - Juillet 2024",
      type: "education",
      description: [
        "Développement et Validation du Logiciel",
        "Formation approfondie en développement logiciel",
        "Méthodologies de test et validation",
        "Gestion de projets informatiques"
      ],
      icon: <FaGraduationCap />
    },
    {
      id: 6,
      title: "Licence professionnelle",
      company: "Université de Limoges",
      period: "Septembre 2021 - Juillet 2022",
      type: "education",
      description: [
        "Métiers de l'informatique : conduite de projet",
        "Technologie du développement web",
        "Gestion de projet informatique",
        "Développement web moderne"
      ],
      icon: <FaGraduationCap />
    },
    {
      id: 7,
      title: "BTS Informatique",
      company: "CNED",
      period: "Septembre 2020 - Mai 2021",
      type: "education",
      description: [
        "Brevet de technicien supérieur en Informatique",
        "Formation en développement informatique",
        "Programmation et algorithmique",
        "Bases de données et réseaux"
      ],
      icon: <FaGraduationCap />
    },
    {
      id: 8,
      title: "BTS Informatique",
      company: "Lycée Louis Armand Paris",
      period: "Septembre 2018 - Mai 2020",
      type: "education",
      description: [
        "Formation en informatique et développement",
        "Apprentissage des fondamentaux du développement",
        "Programmation et conception de systèmes",
        "Travaux pratiques et projets"
      ],
      icon: <FaGraduationCap />
    }
  ];

  const certifications = [
    {
      name: "Master Informatique - Développement et Validation du Logiciel",
      issuer: "Université de Franche-Comté",
      year: "2022-2024"
    },
    {
      name: "Licence professionnelle - Métiers de l'informatique",
      issuer: "Université de Limoges",
      year: "2021-2022"
    },
    {
      name: "Gestion de projets en technologies de l'information",
      issuer: "MOOC Gestion de Projet",
      year: "2021"
    },
    {
      name: "BTS Informatique",
      issuer: "CNED / Lycée Louis Armand Paris",
      year: "2018-2021"
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
    <div className="bg-dark-900 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* Background decoration with liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header with liquid glass */}
        <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 liquid-glass rounded-full mb-6 sm:mb-8">
            <FaBriefcase className="text-primary-400 text-lg" />
            <span className='text-sm sm:text-base font-bold text-primary-300 uppercase tracking-wider'>Parcours Professionnel</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8'>
            Mon <span className="text-gradient">Expérience</span>
          </h2>
          <p className='text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Un parcours orienté innovation et apprentissage continu dans le développement web
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Experience Timeline */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <FaBriefcase className="text-primary-400 text-xl sm:text-2xl" />
              Expérience & Formation
            </h3>
            
            <div className="relative">
              {/* Timeline line with gradient */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className="relative flex gap-6 pb-10 sm:pb-12 last:pb-0"
                >
                  {/* Timeline icon with liquid glass effect */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r ${getTypeColor(exp.type)} flex items-center justify-center text-white text-lg sm:text-xl z-10 shadow-glow`}>
                    {exp.icon}
                  </div>
                  
                  {/* Content with liquid glass card */}
                  <div className="flex-1 liquid-glass-hover liquid-glass p-5 sm:p-6 rounded-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h4>
                        <p className="text-primary-300 font-semibold text-sm sm:text-base">{exp.company}</p>
                      </div>
                      <span className="text-xs sm:text-sm text-accent-300 font-medium glass px-3 py-1.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-300 text-sm sm:text-base flex items-start gap-2">
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
                            className="px-2.5 py-1 glass text-primary-200 text-xs sm:text-sm rounded-lg border border-primary-500/30"
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
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <FaCertificate className="text-accent-400 text-xl sm:text-2xl" />
                Certifications & Formations
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="liquid-glass-hover liquid-glass p-4 sm:p-5 rounded-xl"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm sm:text-base mb-1">{cert.name}</h4>
                        <p className="text-gray-300 text-xs sm:text-sm">{cert.issuer}</p>
                      </div>
                      <span className="text-accent-300 font-bold text-sm sm:text-base glass px-3 py-1 rounded-lg">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Categories */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <HiOfficeBuilding className="text-primary-400 text-xl sm:text-2xl" />
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
                    skills: "Node.js, NestJS, PHP, PostgreSQL",
                    level: 85
                  },
                  {
                    category: "Database & DevOps",
                    skills: "MySQL, PostgreSQL, AWS, Git",
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
                    className="liquid-glass p-4 sm:p-5 rounded-xl"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-white text-sm sm:text-base">{skill.category}</h4>
                      <span className="text-primary-300 font-bold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3">{skill.skills}</p>
                    <div className="w-full glass rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 h-2.5 rounded-full shadow-glow"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
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