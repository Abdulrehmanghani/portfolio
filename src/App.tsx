import { useState, useEffect, useContext, createContext, cloneElement, ReactElement } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Moon,
  Sun,
  Download,
  Send,
  Code,
  Brain,
  Cloud,
  Cpu,
  Database,
  Bot,
  GraduationCap,
  Award,
  Calendar,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {}
});

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <Navigation 
          activeSection={activeSection} 
          scrollToSection={scrollToSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </ThemeContext.Provider>
  );
}

function Navigation({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }: {
  activeSection: string;
  scrollToSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isDark ? 'bg-gray-900/95 backdrop-blur-sm border-gray-700' : 'bg-white/95 backdrop-blur-sm border-gray-200'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
            >
              Abdul Rehman
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isDark ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  const { isDark } = useContext(ThemeContext);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Abdul_Rehman_Resume.pdf';
    link.download = 'Abdul_Rehman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Layout - Left Text, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start min-h-[85vh]">
          
          {/* Left Side - Main Content */}
          <div className="lg:col-span-3 space-y-6 text-left lg:pr-8 pt-8 lg:pt-16">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 bg-clip-text text-transparent animate-fade-in leading-tight">
                Abdul Rehman
              </h1>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                  Senior Machine Learning Engineer | GenAI Specialist | TinyML Expert
                </p>
                <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                  6+ years of experience building production-grade AI systems. Specialized in computer vision, 
                  generative AI, and edge computing solutions for healthcare, legal, and industrial applications.
                </p>
              </div>
            </div>

            {/* Action Buttons - Left Aligned */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={handleDownloadCV}
                className="btn-primary px-8 py-4 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-lg"
              >
                Download CV
                <Download className="inline ml-2" size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg ${
                  isDark ? 'hover:bg-blue-600' : ''
                }`}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end">
            {/* Profile Image - Positioned Below Navigation */}
            <div className="relative profile-image pt-8 lg:pt-12">
              <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl hover-lift">
                <img 
                  src="/abdul.jpeg" 
                  alt="Abdul Rehman - Machine Learning Engineer" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Contact Cards - Full Width, 2 Rows */}
        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <ContactCard icon={<Mail />} label="Email" value="abdulrehmanghani197@gmail.com" href="mailto:abdulrehmanghani197@gmail.com" compact />
            <ContactCard icon={<Phone />} label="Phone" value="+92-341-7528497" href="tel:+923417528497" compact />
            <ContactCard icon={<MapPin />} label="Location" value="Islamabad, Pakistan" compact />
            <ContactCard icon={<Linkedin />} label="LinkedIn" value="linkedin.com/in/abdulrehman197" href="https://linkedin.com/in/abdulrehman197" compact />
            <ContactCard icon={<Github />} label="GitHub" value="github.com/Abdulrehmanghani" href="https://github.com/Abdulrehmanghani" compact />
            <ContactCard icon={<ExternalLink />} label="Portfolio" value="abd-ul-rehman.vercel.app" href="https://abd-ul-rehman.vercel.app" compact />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href, compact }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  href?: string; 
  compact?: boolean; 
}) {
  const { isDark } = useContext(ThemeContext);
  
  const content = (
    <div className={`${compact ? 'p-4 md:p-5' : 'p-6'} rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-105 hover-lift ${
      isDark 
        ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
        : 'bg-white border-gray-200 hover:bg-gray-50'
    }`}>
      <div className={`flex ${compact ? 'flex-col items-center text-center space-y-3' : 'flex-col items-center text-center space-y-3'}`}>
        <div className={`${compact ? 'p-3' : 'p-3'} rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white`}>
          {cloneElement(icon as ReactElement, { size: compact ? 20 : 24 })}
        </div>
        <div className="min-h-0 flex-1">
          <p className={`${compact ? 'text-sm' : 'text-sm'} font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1`}>
            {label}
          </p>
          <p className={`${compact ? 'text-sm' : 'text-sm'} font-semibold text-gray-900 dark:text-white break-words leading-tight`}>
            {compact ? (
              label === 'Email' ? 'abdulrehmanghani197@gmail.com' :
              label === 'Phone' ? '+92-341-7528497' :
              label === 'Location' ? 'Islamabad, PK' :
              label === 'LinkedIn' ? 'abdulrehman197' :
              label === 'GitHub' ? 'Abdulrehmanghani' :
              label === 'Portfolio' ? 'Portfolio Site' :
              value
            ) : value}
          </p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function AboutSection() {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="about" className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Passionate about building AI solutions that make a real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`rounded-2xl p-8 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Professional Summary</h3>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
              Senior Machine Learning Engineer with <span className="font-semibold text-blue-600 dark:text-blue-400">6+ years of experience </span> 
              designing and deploying production-grade AI systems. Currently pursuing an M.S. in Artificial Intelligence at the University of Cyprus 
              while working as a Computer Vision & ML Engineer at AIVStudios.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Specialized in <span className="font-semibold">computer vision, generative AI, and edge computing</span>. 
              Proven track record of delivering high-performance solutions for healthcare automation, legal document analysis, 
              sports analytics, and remote inference on embedded systems using <span className="font-semibold">NVIDIA Jetson, CUDA, and TensorRT</span>.
            </p>
          </div>

          <div className={`rounded-2xl p-8 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Core Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Computer Vision & Deep Learning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">YOLO, DETR, CNNs, object detection, image classification</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Generative AI & NLP</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">GPT-4, LLaMA, RAG systems, prompt engineering, LangChain</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Edge Computing & Optimization</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">TinyML, quantization, pruning, NVIDIA DeepStream, Triton</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">MLOps & Cloud Deployment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Azure ML, GCP, AWS, Docker, Apache Airflow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">6+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">50+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { isDark } = useContext(ThemeContext);

  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <Code />,
      skills: [
        { name: "Python", level: 95 },
        { name: "C/C++", level: 85 },
        { name: "JavaScript/TypeScript", level: 80 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Machine Learning Frameworks",
      icon: <Brain />,
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow/Keras", level: 88 },
        { name: "Scikit-learn", level: 85 },
        { name: "OpenCV", level: 82 }
      ]
    },
    {
      title: "AI/ML Specializations",
      icon: <Bot />,
      skills: [
        { name: "Computer Vision", level: 92 },
        { name: "Deep Learning", level: 90 },
        { name: "Generative AI", level: 85 },
        { name: "NLP", level: 80 }
      ]
    },
    {
      title: "Edge Computing & Optimization",
      icon: <Cpu />,
      skills: [
        { name: "NVIDIA Jetson", level: 88 },
        { name: "TensorRT", level: 85 },
        { name: "CUDA", level: 82 },
        { name: "Model Optimization", level: 90 }
      ]
    },
    {
      title: "Cloud & MLOps",
      icon: <Cloud />,
      skills: [
        { name: "Azure ML", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Apache Airflow", level: 70 }
      ]
    },
    {
      title: "AI Tools & Platforms",
      icon: <Database />,
      skills: [
        { name: "NVIDIA DeepStream", level: 88 },
        { name: "Triton Inference Server", level: 82 },
        { name: "LangChain", level: 80 },
        { name: "Weights & Biases", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive expertise across the AI/ML technology stack with 6+ years of hands-on experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-card p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover-lift ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : ''}`}>
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-teal-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { isDark } = useContext(ThemeContext);

  const experiences = [
    {
      company: "AIVStudios",
      role: "Computer Vision & ML Engineer",
      period: "Jul 2024 – Present",
      location: "Remote",
      description: "Leading computer vision projects and developing advanced ML solutions for production environments.",
      achievements: [
        "Developing state-of-the-art computer vision models for real-time applications",
        "Implementing edge AI solutions using NVIDIA Jetson and TensorRT optimization",
        "Leading cross-functional teams in AI product development"
      ]
    },
    {
      company: "LVisionAI",
      role: "Machine Learning Engineer", 
      period: "Dec 2022 – Jul 2024",
      location: "Islamabad, Pakistan",
      description: "Developed and deployed production-grade ML models focusing on computer vision and NLP applications.",
      achievements: [
        "Built and deployed YOLO/DETR models for sports analytics with 95% accuracy",
        "Developed GPT-4 powered medical record summarization system",
        "Implemented cloud-based forecasting using ARIMA and LSTM models on Azure",
        "Created legal document automation pipeline using LLaMA and RAG architecture"
      ]
    },
    {
      company: "DLision",
      role: "Software Developer",
      period: "Mar 2021 – Nov 2022", 
      location: "Islamabad, Pakistan",
      description: "Built software solutions integrating AI/ML capabilities with focus on performance optimization.",
      achievements: [
        "Developed TinyML solutions for resource-constrained edge devices",
        "Implemented model optimization techniques including quantization and pruning",
        "Created end-to-end ML pipelines from data preprocessing to deployment"
      ]
    },
    {
      company: "DLision",
      role: "Trainee Developer",
      period: "Jan 2020 – Feb 2021",
      location: "Islamabad, Pakistan",
      description: "Started as a trainee, learning development practices and contributing to various AI/ML projects.",
      achievements: [
        "Completed comprehensive training in machine learning fundamentals",
        "Contributed to computer vision projects using OpenCV and TensorFlow",
        "Developed proficiency in Python, C++, and deep learning frameworks"
      ]
    },
    {
      company: "Interloop Ltd.",
      role: "Auditor",
      period: "Jul 2019 – Dec 2019",
      location: "Faisalabad, Pakistan", 
      description: "Conducted auditing processes and quality assurance in manufacturing operations.",
      achievements: [
        "Performed quality audits ensuring compliance with international standards",
        "Analyzed manufacturing data to identify process improvement opportunities",
        "Developed analytical skills that later proved valuable in data science roles"
      ]
    }
  ];

  return (
    <section id="experience" className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            6+ years of progressive experience in AI/ML and software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 hover:shadow-xl ${
                isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.company}</h3>
                  <p className="text-lg font-medium mb-2">{exp.role}</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { isDark } = useContext(ThemeContext);

  const projects = [
    {
      title: "TinyML Edge Deployment",
      description: "Optimized deep learning models for deployment on resource-constrained edge devices using advanced quantization and pruning techniques. Achieved 90% model size reduction while maintaining accuracy.",
      tech: ["TensorFlow Lite", "Edge TPU", "Quantization", "Pruning", "ARM Cortex"],
      icon: <Cpu />,
      category: "Edge AI",
      media: "/project-media/tinyml-demo.gif", // Placeholder for future GIF
      mediaType: "gif"
    },
    {
      title: "GPT-4 Medical Record Summarization",
      description: "Developed an intelligent healthcare automation system that processes and summarizes medical records using GPT-4. Reduced manual processing time by 80% for healthcare providers.",
      tech: ["GPT-4", "NLP", "Healthcare AI", "Python", "FastAPI"],
      icon: <Brain />,
      category: "Healthcare AI",
      media: "/project-media/medical-ai-demo.mp4", // Placeholder for future video
      mediaType: "video"
    },
    {
      title: "Legal Document Automation Pipeline",
      description: "Built an AI-powered solution for legal document processing, analysis, and automated workflow generation using LLaMA and RAG architecture. Streamlined legal operations for multiple law firms.",
      tech: ["LLaMA", "Document AI", "RAG", "LangChain", "Vector DB"],
      icon: <Database />,
      category: "Legal Tech",
      media: "/project-media/legal-ai-demo.gif", // Placeholder for future GIF
      mediaType: "gif"
    },
    {
      title: "Azure Cloud Forecasting System",
      description: "Designed and deployed a scalable forecasting system using ARIMA and LSTM models on Azure cloud infrastructure. Handles real-time data processing for financial predictions.",
      tech: ["Azure ML", "ARIMA", "LSTM", "Time Series", "Apache Airflow"],
      icon: <Cloud />,
      category: "FinTech",
      media: "/project-media/forecasting-demo.mp4", // Placeholder for future video
      mediaType: "video"
    },
    {
      title: "YOLO/DETR Sports Analytics",
      description: "Developed a real-time sports analytics application using advanced object detection models for player tracking, performance analysis, and strategic insights. Deployed for multiple sports teams.",
      tech: ["YOLO", "DETR", "Computer Vision", "PyTorch", "OpenCV"],
      icon: <Bot />,
      category: "Sports Tech",
      media: "/project-media/sports-analytics-demo.gif", // Placeholder for future GIF
      mediaType: "gif"
    },
    {
      title: "NVIDIA DeepStream Video Analytics",
      description: "Implemented high-performance video analytics pipeline using NVIDIA DeepStream SDK and TensorRT optimization. Processes multiple video streams simultaneously with sub-second latency.",
      tech: ["NVIDIA DeepStream", "TensorRT", "CUDA", "Jetson", "GStreamer"],
      icon: <Cpu />,
      category: "Video Analytics",
      media: "/project-media/deepstream-demo.mp4", // Placeholder for future video
      mediaType: "video"
    }
  ];

  const githubRepos = [
    { 
      name: "Neural Architecture Search", 
      url: "https://github.com/Abdulrehmanghani/nas-project",
      description: "Automated neural architecture search for optimal model design",
      stars: "15"
    },
    { 
      name: "OpenMV Classification", 
      url: "https://github.com/Abdulrehmanghani/openmv-classification",
      description: "Computer vision classification using OpenMV cameras",
      stars: "8"
    },
    {
      name: "TinyML Optimization",
      url: "https://github.com/Abdulrehmanghani/tinyml-optimization",
      description: "Model optimization techniques for edge deployment",
      stars: "12"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovative AI/ML solutions that solve real-world problems across various industries. 
            Each project demonstrates cutting-edge technology implementation and measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Media Preview Section */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                {/* Placeholder for media */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm mb-3 inline-block">
                      {project.icon}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      {project.mediaType === 'video' ? 'Demo Video' : 'Demo GIF'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Coming Soon
                    </p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    isDark ? 'bg-gray-900/70 text-gray-200' : 'bg-white/70 text-gray-700'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white mr-3">
                    {cloneElement(project.icon as ReactElement, { size: 20 })}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded-md text-xs font-medium transition-colors duration-300 ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Section */}
        <div className={`p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center">
            <Github className="mr-3" />
            Open Source Contributions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {githubRepos.map((repo, index) => (
              <a
                key={index}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  isDark ? 'bg-gray-900 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-lg">{repo.name}</h4>
                  <div className="flex items-center text-yellow-500">
                    <span className="text-sm mr-1">⭐</span>
                    <span className="text-sm font-medium">{repo.stars}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{repo.description}</p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  <span>View on GitHub</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const { isDark } = useContext(ThemeContext);

  const education = [
    {
      degree: "M.S. in Artificial Intelligence",
      institution: "University of Cyprus",
      status: "In Progress",
      description: "Advanced studies in AI, machine learning, and computational intelligence."
    },
    {
      degree: "B.S. in Computer Engineering",
      institution: "HITEC University",
      status: "Completed",
      description: "Final Year Project: Vehicle detection & lane tracking using CNNs (TensorFlow + Keras)"
    }
  ];

  return (
    <section id="education" className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:shadow-xl ${
                isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white mr-4 mt-1">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm mt-2 md:mt-0 ${
                      edu.status === 'In Progress' 
                        ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                        : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const { isDark } = useContext(ThemeContext);

  const certifications = [
    {
      title: "Intel Edge AI for IoT Developer",
      provider: "Udacity",
      year: "2021",
      description: "Comprehensive training in edge AI deployment and IoT integration."
    },
    {
      title: "Introduction to AI",
      provider: "Udacity", 
      year: "2018",
      description: "Foundational knowledge in artificial intelligence concepts and applications."
    },
    {
      title: "Computer Vision",
      provider: "Georgia Tech via Udacity",
      year: "2017",
      description: "Advanced computer vision techniques and implementation strategies."
    }
  ];

  return (
    <section id="certifications" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white mr-3">
                  <Award size={20} />
                </div>
                <div className="text-right ml-auto">
                  <span className={`px-2 py-1 rounded text-sm ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {cert.year}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{cert.provider}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    const mailtoLink = `mailto:abdulrehmanghani197@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's discuss how we can work together on your next AI/ML project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">abdulrehmanghani197@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">+92-341-7528497</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/abdulrehman197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Abdulrehmanghani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors duration-300 ${
                    isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className={`p-6 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                  <Send className="inline ml-2" size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;