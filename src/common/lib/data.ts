import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import Chatbotpage from '@/../public/images/Chatbotpage.jpeg';
import MTH from '@/../public/images/patient.jpeg';
import Fhiraa from '@/../public/images/fhiraa.png';
import SMS from '@/../public/images/sms.png';

import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Mphasis Limited',
    location: 'Bangalore',
    description:
      `• Worked with React.js components, forms, event handling, routing, and state management using Redux.` +
      '' +
      `• Translated designs and wireframes into high-quality, maintainable code.` +
      '' +
      `• Optimized components for maximum performance across a wide range of web-capable devices and browsers.` +
      '' +
      `• Experienced in popular React.js workflows, such as Flux and Redux.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Sep 2021 - Dec 2022',
  },
  {
    title: 'Brandconn Digital Group',
    location: 'Delhi',
    description: `• Designed & implemented Architecture solutions; contributed in all phases of the development lifecycle
• Supervised and translated business requirements to Functional requirements, Non-Functional requirements, System Level requirements, Component Level requirements and architecture`,
    icon: React.createElement(BookIcon),
    date: 'Dec 2022 - Dec 2023',
  },
  {
    title: 'Screen Magic Mobile Media Pvt. Ltd',
    location: 'Pune',
    description: `•
Providing technical design solutions and leading a team for ensuring effective management of UI are aligned with business objectives
•
Analyzing existing codebases and recommend refactoring / optimization to enhance stability and maintenance
•
Assisting in determining operational feasibility through analysis, problem definition, requirement analysis, and proposing solutions`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Jan 2024 - Sep 2024',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'MTH',
    description:
      'This Webapp is used to dispaly the deatil of Practitioner,Patient,Front Office,Admin that help to Book Appointment,Cancel Appointment,Reshedual Appointment,Patient Health Record,Add Patient,Add Practitioner with validation. The tech stack we used are React,JSX,Taildwind,CSS,HTML,JavaScript,Java,SpringBoot,FHIR,PostgerSQL',
    tags: [
      'React',
      'TypeScript',
      'Java',
      'springBoot',
      'PYTHON',
      'TFS',
      'Node.js',
      'FHIR',
      'Microsoft Bot Framework',
      'Sql',
      'Tailwind',
    ],
    imageUrl: MTH,
    link: 'https://github.com/somendrpal',
  },
  {
    title: 'CG',
    description: `CognitiveGuru™ (CG) is an AI based chatbot development platform, built using Microsoft AI and popular opensource technologies to enable enterprises design, build, establish and deploy chatbots in an easy manner.`,
    tags: ['React', 'Luise', 'Microsoft Bot Framework', 'Tailwind'],
    imageUrl: Chatbotpage,
    link: 'https://www.mphasis.com/home/services/cognitive/cognitive-guru-solution/videos/healthcare-provider-registration-on-cg.html',
  },
  {
    title: 'fhiraa',
    description: `fhirra is a concept demonstration. It demonstrates the power of conversational virtual assistants, enabled to work over any FHIR system, using a suite of Google technologies. fhiraa accentuates transformation in healthcare services offered by healthcare providers and payers`,
    tags: ['Dialogflow', 'Lamda Function', 'Google site', 'AI'],
    imageUrl: Fhiraa,
    link: 'https://sites.google.com/view/fhiraa',
  },
  {
    title: 'Circket Wepon',
    description: ` Cricket Weapon, an e-commerce shopping app built using the MERN (MongoDB, Express, React, Node.js) stack and Material-UI (MUI) for the user interface. This project provides both normal user and admin modes, offering a wide range of features to enhance the shopping experience.`,
    tags: [
      'React',
      'Node.js',
      'Next.js',
      'Express',
      'OpenAI',
      'SCRUM Methodology',
      'End-to-End Development',
    ],
    imageUrl: projectmanagementImg,
    link: '',
  },
  {
    title: 'ZOHO Crm tool',
    description:
      'SMS-Magic is a highly-rated Zoho app for all your customer-messaging needs. Install SMS-Magic to communicate with your customers on the channel of their choice - while you stay in the comfort of your Zoho window or smartphone. SMS-Magic is perfect for high-touch, contextual, and time-sensitive customer engagement that is fully compliant.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'SQL',
      'Javscript',
      'CICD',
      'Jenkins',
      'Tailwind',
      'Gitlab',
    ],
    imageUrl: SMS,
    link: 'https://app.txtbox.in/app/#/converse-desk',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['GitLab', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['Microsoft Bot Framework', '/images/bot-framework.png'],
  ['Jenkins', '/images/jenkins.png'],
  ['CI/CD', '/images/CICD.webp'],

  ['', '/svgs/etc.svg'],
] as const;
