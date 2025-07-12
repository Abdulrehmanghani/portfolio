import { Skill, Experience, Project, Education, Certificate, SocialLink } from '../types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', proficiency: 95, category: 'Programming Languages' },
  { name: 'C/C++', proficiency: 85, category: 'Programming Languages' },
  
  // AI & Machine Learning Frameworks
  { name: 'PyTorch', proficiency: 90, category: 'AI & ML Frameworks' },
  { name: 'TensorFlow', proficiency: 85, category: 'AI & ML Frameworks' },
  { name: 'ONNX', proficiency: 80, category: 'AI & ML Frameworks' },
  
  // NVIDIA AI & Edge Computing
  { name: 'CUDA', proficiency: 85, category: 'NVIDIA Tools' },
  { name: 'DeepStream', proficiency: 90, category: 'NVIDIA Tools' },
  { name: 'Triton Inference Server', proficiency: 85, category: 'NVIDIA Tools' },
  { name: 'TensorRT', proficiency: 80, category: 'NVIDIA Tools' },
  { name: 'Jetson Nano/PI', proficiency: 90, category: 'NVIDIA Tools' },
  
  // Generative AI & NLP
  { name: 'Large Language Models', proficiency: 80, category: 'Generative AI & NLP' },
  { name: 'Natural Language Processing', proficiency: 75, category: 'Generative AI & NLP' },
  
  // Model Optimization & Deployment
  { name: 'Neural Architecture Search', proficiency: 85, category: 'Model Optimization' },
  { name: 'Pruning & Quantization', proficiency: 90, category: 'Model Optimization' },
  { name: 'Azure Machine Learning', proficiency: 80, category: 'Model Optimization' },
  
  // Data Engineering & Automation
  { name: 'Apache Airflow', proficiency: 75, category: 'Data Engineering' },
  { name: 'Apache Storm', proficiency: 70, category: 'Data Engineering' },
  { name: 'GStreamer', proficiency: 85, category: 'Data Engineering' },
];

export const experiences: Experience[] = [
  {
    company: 'AIVSTUDIOS',
    role: 'Computer Vision and Machine Learning Engineer',
    period: 'July 2024-Present',
    location: 'Islamabad, Pakistan',
    description: [
      'Built computer vision-based real-time video analytics applications for global clients, leveraging multi-threading to double processing speed, reducing latency from 200ms to 100ms and improving real-time performance by 50%.',
      'Utilized various NVIDIA platforms such as DeepStream and Triton Server for end-user services.',
      'Developing an application involving LLMs and Generative AI to understand the documents for a law firm.',
      'Working on natural language understanding, text generation, and pdf data processing for insightful decisions.'
    ]
  },
  {
    company: 'LVISIONAI',
    role: 'Machine Learning Engineer',
    period: 'Dec 2022- Jun 2024',
    location: 'Islamabad, Pakistan',
    description: [
      'Developed and deployed a TinyML pipeline on low-cost hardware such as Jetson Nano, Intel Neural Compute Stick, Raspberry Pi, OpenMV, and Arducam.',
      'Applied Neural Architecture Search (NAS) to identify the optimal model for target devices to reduce memory usage by 30%, improve compute efficiency by 40% and accelerate inference speed by 2× for top performance on resource-constrained hardware.',
      'Worked on data science projects for an advertising agency, analyzing product trends, predicting future performance, and handling time-series data.',
      'Utilized Azure ML to develop scalable predictive models and designed automated pipelines for model retraining and performance monitoring. Deployed machine learning models on Google Cloud to generate actionable insights for clients.'
    ]
  },
  {
    company: 'DLISION',
    role: 'Software Developer',
    period: 'Mar 2021- Nov 2022',
    location: 'Islamabad, Pakistan',
    description: [
      'Developed, optimized, and deployed deep learning models using Intel OpenVINO, TensorFlow-Lite, and other advanced frameworks.',
      'Implemented real-time video surveillance applications using Triton Server for deep learning model deployment, receiving data from the client side and processing it on the server.',
      'Trained and evaluated object detection models using NVIDIA DALI, Deepstream SDK, and CUDA Toolkit, achieving a 30% reduction in training time and improving inference speed by 40%. Managed workflows with Apache Airflow, automating 100% of task scheduling for streamlined deployment.',
      'Employed real-time data processing and analytics in deep learning applications using Apache Storm.'
    ]
  },
  {
    company: 'DLISION',
    role: 'Trainee Developer',
    period: 'Jan 2020- Feb 2021',
    location: 'Islamabad, Pakistan',
    description: [
      'Contributed to developing deep learning models, including dataset preparation with OpenCV, running Pytorch models for image classification and object detection (e.g., YOLO, Detr, Mobile Net), and optimizing deployment models.',
      'Collaborated with senior developers to troubleshoot and resolve technical issues.'
    ]
  },
  {
    company: 'INTERLOOP LIMITED',
    role: 'Auditor',
    period: 'Jul 2019 - Dec 2019',
    location: 'Faisalabad, Pakistan',
    description: [
      'Tested industrial machines and analyzed data to make data-driven decisions.',
      'Created a web visitor tool using HTML5, CSS, PHP, and JavaScript to track website visitors.',
      'Designed and tested the web visitor tool on an Apache server running on a Linux local system before deployment.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Deep Stream Object Detection, Segmentation and Classification',
    category: 'Computer Vision',
    description: [
      'Developed a sports video analytics application using YOLO, DETR, etc. player detection alongside with team classification and ground segmentation for multiple cameras around the ground.',
      'Implemented face detection, recognition, tracking and counting in deep stream and Triton Server using Python and C++ for retail store analytics.',
      'Utilized Tensor-RT for model optimization, achieving up to 4× faster inference on NVIDIA GPUs, specifically for Jetson-based object recognition on remote sites.',
      'Executed remote client inference from ESP32 to Triton Server, reducing latency by 35% and ensuring efficient real-time processing.'
    ],
    technologies: ['YOLO', 'DETR', 'Deep Stream', 'Triton Server', 'Python', 'C++', 'Tensor-RT']
  },
  {
    title: 'Data Science Cloud-Based Projects',
    category: 'Machine Learning',
    description: [
      'Predicted future stock prices using historical market data and time series models like ARIMA or LSTM for an advertising agency.',
      'Forecasted future product demand to optimize retail inventory and supply chain operations deployed on Azure.',
      'Predicted future energy consumption patterns based on historical usage data for better grid management.',
      'Used time series data from patient vitals to predict health deterioration or disease outbreaks.',
      'Analyzed sensor data to predict equipment failure and schedule maintenance proactively for an IoT based system of the manufacturing factory.'
    ],
    technologies: ['ARIMA', 'LSTM', 'Azure ML', 'Time Series Analysis', 'IoT']
  },
  {
    title: 'TinyML at Edge Devices',
    category: 'Edge Computing',
    description: [
      'Deployed computer vision based and machine learning models on Jetson by using Triton Server.',
      'Installed remote face recognition on Jetson with Triton and DeepStream.',
      'Optimized various object detection models like SSD-MobileNet and YOLOv5 using Intel OpenVINO.',
      'Achieved high real-time FPS on CPU and Raspberry Pi with Neural Compute Stick 2.',
      'Implemented image classification to benchmark the compute capacity of the OpenMV, Arducam pico4ml, and OpenMV using TensorFlow Lite.'
    ],
    technologies: ['TinyML', 'Jetson', 'Triton Server', 'OpenVINO', 'Raspberry Pi', 'TensorFlow Lite']
  }
];

export const education: Education[] = [
  {
    institution: 'HITEC UNIVERSITY',
    degree: 'Bachelor\'s degree, Computer Engineering',
    period: '2014-2018',
    details: 'Final Year Project: Vehicle detection and tracking along-with lane finding for autonomous driving using convolutional neural network developed in keras back-end TensorFlow-gpu.'
  }
];

export const certificates: Certificate[] = [
  {
    title: 'Intel edge AI for IoT developer Nanodegree',
    issuer: 'Udacity',
    year: '2021',
    description: 'Learn how to convert existing models to Intermediate representation to run on low cost devices by using Intel OpenVINO toolkit'
  },
  {
    title: 'Intro to the Artificial Intelligence',
    issuer: 'Udacity',
    year: '2018',
    description: 'Covered AI fundamentals, including machine learning, probabilistic reasoning, robotics, computer vision, and natural language processing.'
  },
  {
    title: 'Introduction to Computer Vision',
    issuer: 'Georgia Institute of Technology (Udacity)',
    year: '2017',
    description: 'An introduction to computer vision including fundamentals, methods for application of image processing and machine learning classification.'
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/abdulrehman197',
    icon: 'Linkedin'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/Abdulrehmanghani',
    icon: 'Github'
  },
  {
    platform: 'Email',
    url: 'mailto:abdulrehmanghani197@gmail.com',
    icon: 'Mail'
  },
  {
    platform: 'Phone',
    url: 'tel:+923417528497',
    icon: 'Phone'
  }
];

export const personalInfo = {
  name: 'Abdul Rehman',
  title: 'Computer Vision and Machine Learning Engineer',
  location: 'Islamabad, Capital, Pakistan',
  email: 'abdulrehmanghani197@gmail.com',
  phone: '+92-341-7528497',
  summary: 'With over six years of experience in Computer Vision and Machine Learning, I am eager to apply my expertise in AI-driven video analytics to this role in Riyadh, KSA. I have a strong background in developing real-time AI solutions using NVIDIA DeepStream SDK and Triton Inference Server, optimizing models for edge devices like Jetson Nano and Raspberry Pi. Proficient in Python, C/C++, Gstreamer, and GPU programming, I excel in building scalable, high-performance applications. Passionate about innovation, I am excited to contribute my skills in AI model deployment, optimization, and mentoring to drive impactful solutions within your organization.',
  languages: [
    { name: 'English', level: 'Conversational' },
    { name: 'Urdu', level: 'Fluent' }
  ],
  volunteer: [
    'Contributor to Open-Source AI Projects – Developed and optimized AI models for real-world applications on GitHub.',
    'Mentor for AI & Deep Learning Enthusiasts – Guided aspiring ML engineers in model deployment and NVIDIA SDKs.'
  ]
};