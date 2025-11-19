'use client';

import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 2,
    title: 'Be Mind Power Mobile App',
    description: 'An all-in-one Flutter app uniting banking, crypto, chat, marketplace, health, and media in a seamless experience.',
    image: '/portfolioImage/bmp.png'
  },
  {
    id: 7,
    title: 'Nexaru Web App',
    description: 'A unified platform for secure banking, crypto, chat, marketplace, and media streaming.',
    image: '/portfolioImage/nexru.png'
  },
  {
    id: 3,
    title: 'D&V Web App',
    description: 'A multi-currency crypto platform with trading, secure KYC login, real-time analytics, and seamless global transactions.',
    image: '/portfolioImage/d&v.png'
  },
  {
    id: 5,
    title: 'Invex Web App',
    description: 'A no-code platform for intuitive data analysis, visualization, and real-time collaboration that transforms data into actionable insights.',
    image: '/portfolioImage/invex.png'
  },
  {
    id: 4,
    title: 'Devshock Web App',
    description: 'Devshock delivers scalable, innovative digital solutions through custom development, AI, ERP, and DevOps expertise.',
    image: '/portfolioImage/devshock.png'
  },
  {
    id: 9,
    title: 'Titanium Website',
    description: 'Precision-driven construction management ensuring quality, efficiency, and trust across every project.',
    image: '/portfolioImage/titanuim.png'
  },
  {
    id: 8,
    title: 'Prism Web App',
    description: 'A no-code platform that transforms data into actionable insights through intuitive visualization and real-time collaboration.',
    image: '/portfolioImage/prism.png'
  },
  {
    id: 10,
    title: 'Vaihok Mobile App',
    description: 'A secure multi-currency app combining banking, crypto, chat, marketplace, and animated Flutter design in one seamless experience.',
    image: '/portfolioImage/vaihok.png'
  },
  {
    id: 1,
    title: 'Airax solutions Website',
    description: 'An intelligent ERP system that unifies business operations with real-time analytics, automation, and scalable, secure management.',
    image: '/portfolioImage/airax.png'
  },
  {
    id: 6,
    title: 'KTK EXPERTS Website',
    description: 'Delivering innovative tech solutions that streamline workflows, boost productivity, and drive sustainable business growth.',
    image: '/portfolioImage/ktk.png'
  }
  
 
 
];

function PortfolioCard({ project }: { project: Project }) {
  return (
    <div 
      className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-blue-50 hover:border-opacity-20"
      style={{ 
        borderRadius: '16px', 
        border: '0.3px solid #02B2E8',
        transition: 'border-color 0.2s ease-in-out'
      }}
    >
      <div className="text-center mb-6">
        <h3  className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold bg-gradient-to-r from-[#215EB3] mb-4 to-[#02B2E8] text-transparent bg-clip-text text-center">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto mb-6">
          {project.description}
        </p>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="w-full max-w-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto max-h-[300px] object-contain mx-auto" 
          />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const filteredProjects = projects;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden w-full h-auto py-10 px-4 md:px-8 lg:px-16"
        style={{
          backgroundColor: '#183762',
          borderBottomLeftRadius: '26px',
          borderBottomRightRadius: '26px'
        }}
      >
        <div className="container mx-auto justify-center items-center mt-20 ml-14">
          <h1 
            className="text-transparent text-[35px] md:text-[50px] mb-2 bg-clip-text bg-gradient-to-r from-[#E9F2FA] to-[#74A9D0] align-middle capitalize"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              lineHeight: '100%',
              letterSpacing: '-0.78px'
            }}
          >
           Our Portfolio
          </h1>
          <p 
            className="max-w-2xl"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '15.38px',
              lineHeight: '24px',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}
          >
            At Smart Computings, we don’t just build software we build solutions that drive progress. We provide end-to-end technology solutions, from AI and IoT to software development and IT systems. 
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}