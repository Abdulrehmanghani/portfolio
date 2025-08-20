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
  Camera,
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
  X,
  Briefcase,
  Target,
  Zap,
  Globe
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
      <div className={`min-h-screen transition-colors duration-500 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <Navigation 
          activeSection={activeSection} 
          scrollToSection={scrollToSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <HeroSection scrollToSection={scrollToSection} />
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
      isDark ? 'bg-gray-900/90 backdrop-blur-md border-gray-700/50' : 'bg-white/90 backdrop-blur-md border-gray-200/50'
    } border-b shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Abdul Rehman
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md'
                      : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/70'
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
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-yellow-400 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100/70'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${
                  isDark ? 'text-gray-400 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100/70'
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
                  className={`block px-3 py-2 rounded-lg text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600'
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

function HeroSection({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
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
    <section id="hero" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-indigo-900/20 to-purple-900/30' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse ${
          isDark ? 'bg-indigo-500' : 'bg-indigo-200'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-10 animate-pulse delay-1000 ${
          isDark ? 'bg-purple-500' : 'bg-purple-200'
        }`}></div>
        <div className={`absolute top-1/3 right-1/4 w-16 h-16 rounded-full opacity-10 animate-pulse delay-500 ${
          isDark ? 'bg-blue-500' : 'bg-blue-200'
        }`}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          {/* Profile Image - Centered and Enlarged */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-indigo-500/25">
                <img 
                  src="/abdul.jpeg" 
                  alt="Abdul Rehman - Machine Learning Engineer" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Animated ring around image */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 opacity-20 animate-spin-slow"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in leading-tight">
              Abdul Rehman
            </h1>
            
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                Machine Learning Engineer & AI Specialist
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Transforming complex data into intelligent solutions. Specializing in Computer Vision, 
                Generative AI, and Edge Computing with <span className="font-semibold text-indigo-600 dark:text-indigo-400">6+ years</span> of production experience.
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center">
              <button 
                onClick={handleDownloadCV}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-lg hover:scale-105 hover:shadow-indigo-500/25"
              >
                <span className="flex items-center justify-center">
                  Download CV
                  <Download className="ml-2 group-hover:animate-bounce" size={20} />
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg ${
                  isDark ? 'hover:bg-indigo-600' : ''
                }`}
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>

        {/* Contact Cards - Single Row, Enhanced Design */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <ContactCard icon={<Mail />} label="Email" value="abdulrehmanghani197@gmail.com" href="mailto:abdulrehmanghani197@gmail.com" compact />
            <ContactCard icon={<Phone />} label="Phone" value="+92-341-7528497" href="tel:+923417528497" compact />
            <ContactCard icon={<MapPin />} label="Location" value="Islamabad, Pakistan" compact />
            <ContactCard icon={<Linkedin />} label="LinkedIn" value="linkedin.com/in/abdulrehman197" href="https://linkedin.com/in/abdulrehman197" compact />
            <ContactCard icon={<Github />} label="GitHub" value="github.com/Abdulrehmanghani" href="https://github.com/Abdulrehmanghani" compact />
            <ContactCard icon={<ExternalLink />} label="Portfolio" value="View Portfolio" href="https://abdulrehmanghani.site" compact />
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
    <div className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 ${
      isDark 
        ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800 backdrop-blur-sm' 
        : 'bg-white/70 border-gray-200/50 hover:bg-white backdrop-blur-sm'
    }`}>
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
          {cloneElement(icon as ReactElement, { size: 18 })}
        </div>
        <div className="min-h-0 flex-1">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
            {label}
          </p>
          <p className="text-xs font-semibold text-gray-900 dark:text-white break-words leading-tight">
            {label === 'Email' ? 'Contact Email' :
             label === 'Phone' ? 'Call Me' :
             label === 'Location' ? 'Islamabad, PK' :
             label === 'LinkedIn' ? 'Connect' :
             label === 'GitHub' ? 'View Code' :
             label === 'Portfolio' ? 'View Site' :
             value}
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

  const highlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven",
      description: "Building AI solutions that create measurable real-world impact"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Pushing boundaries in computer vision and edge computing"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Working across industries and geographies to solve complex challenges"
    }
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main About Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
            Senior Machine Learning Engineer with <span className="font-bold text-indigo-600 dark:text-indigo-400">6+ years of experience</span> 
            designing and deploying production-grade AI systems. Currently pursuing an M.S. in Artificial Intelligence at the 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> University of Cyprus</span> while working as a 
            Computer Vision & ML Engineer at <span className="font-semibold text-blue-600 dark:text-blue-400">AIVStudios</span>.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-12">
            Specialized in <span className="font-semibold text-indigo-600 dark:text-indigo-400">computer vision, generative AI, and edge computing</span>. 
            Proven track record of delivering high-performance solutions for healthcare automation, legal document analysis, 
            sports analytics, and remote inference on embedded systems using 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> NVIDIA Jetson, CUDA, and TensorRT</span>.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-indigo-50 to-purple-50'} shadow-xl`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">6+</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">5</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">Companies Served</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">3</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">AI Certifications</div>
            </div>
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
      gradient: "from-pink-500 to-rose-500",
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
      gradient: "from-indigo-500 to-purple-500",
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
      gradient: "from-blue-500 to-cyan-500",
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
      gradient: "from-emerald-500 to-teal-500",
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
      gradient: "from-orange-500 to-amber-500",
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
      gradient: "from-violet-500 to-purple-500",
      skills: [
        { name: "NVIDIA DeepStream", level: 88 },
        { name: "Triton Inference Server", level: 82 },
        { name: "LangChain", level: 80 },
        { name: "Weights & Biases", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the AI/ML technology stack with cutting-edge implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 ${
                isDark ? 'bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm' : 'bg-white/70 border border-gray-200/50 backdrop-blur-sm'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className={`w-full h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 shadow-sm`}
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
      ],
      gradient: "from-indigo-500 to-purple-500",
      current: true
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
      ],
      gradient: "from-blue-500 to-cyan-500"
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
      ],
      gradient: "from-emerald-500 to-teal-500"
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
      ],
      gradient: "from-orange-500 to-amber-500"
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
      ],
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            6+ years of progressive growth in AI/ML and software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-102 ${
                isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'
              } ${exp.current ? 'ring-2 ring-indigo-500/30' : ''}`}
            >
              {exp.current && (
                <div className="flex justify-end mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    Current Position
                  </span>
                </div>
              )}
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">{exp.role}</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm font-medium">{exp.location}</span>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">{exp.description}</p>
                  <div>
                    <h4 className="font-bold mb-4 text-gray-800 dark:text-gray-200 text-lg">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3 group/item">
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}></div>
                          <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement}</span>
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
      title: "Accelerate the inference at edge",
      description: "Accelerated deep learning inference for resource-constrained edge devices using Python workflows. Leveraged advanced quantization and pruning to achieve up to 90% model size reduction with minimal loss in accuracy. Integrated and deployed models on ARM Cortex and Edge TPU hardware for real-time, efficient Edge AI.",
      tech: ["Python", "Intel OpenVINO", "Edge TPU", "Quantization", "Pruning", "ARM Cortex"],
      icon: <Cpu />,
      category: "Edge AI",
      gradient: "from-emerald-500 to-teal-500",
      featured: true,
      gif: "public/project-media/Accelerate-the-inference-at-edge.gif", // replace with actual GIF
      repoUrl: "https://github.com/Abdulrehmanghani/Accelerate-the-inference-at-edge/tree/main"
    },
    {
      title: "GPT-4 Medical Record Summarization",
      description: "Developed an intelligent healthcare automation system that processes and summarizes medical records using GPT-4. Reduced manual processing time by 80% for healthcare providers.",
      tech: ["GPT-4", "NLP", "Healthcare AI", "Python", "FastAPI"],
      icon: <Brain />,
      category: "Healthcare AI",
      gradient: "from-rose-500 to-pink-500",
      featured: true,
      gif: "public/project-media/Accelerate-the-inference-at-edge.gif", // replace with actual GIF
      repoUrl: "https://github.com/Abdulrehmanghani/med-record-summarization"
    },
    {
      title: "Legal Document Automation Pipeline",
      description: "Built an AI-powered solution for legal document processing, analysis, and automated workflow generation using LLaMA and RAG architecture. Streamlined legal operations for multiple law firms.",
      tech: ["LLaMA", "Document AI", "RAG", "LangChain", "Vector DB"],
      icon: <Database />,
      category: "Legal Tech",
      gradient: "from-indigo-500 to-purple-500",
      gif: "public/project-media/Accelerate-the-inference-at-edge.gif", // replace with actual GIF
      repoUrl: "https://github.com/Abdulrehmanghani/legal-docs-automation"
    },
    {
      title: "Edge-Based Person Re-Identification System",
      description: "Developed and deployed a real-time person re-identification system using Raspberry Pi and Intel Neural Compute Stick 2. Integrates deep learning models for feature extraction and matching at the edge, enabling efficient and low-latency identification for surveillance and security applications.",
      tech: ["Raspberry Pi", "Intel NCS2", "Deep Learning", "OpenVINO", "Computer Vision"],
      icon: <Camera />,
      category: "Edge AI",
      gradient: "from-green-500 to-teal-500",
      gif: "public/project-media/ReIdentification_retail.gif", // replace with an actual GIF path relevant to the project
      repoUrl: "https://github.com/dlision/Re-Identification-with-RaspberryPi-and-Neural-Comput-Stick-2"
    },
    {
      title: "YOLO/DETR Sports Analytics",
      description: "Developed a real-time sports analytics application using advanced object detection models for player tracking, performance analysis, and strategic insights. Deployed for multiple sports teams.",
      tech: ["YOLO", "DETR", "Computer Vision", "PyTorch", "OpenCV"],
      icon: <Bot />,
      category: "Sports Tech",
      gradient: "from-orange-500 to-amber-500",
      gif: "public/project-media/Accelerate-the-inference-at-edge.gif", // replace with actual GIF
      repoUrl: "https://github.com/Abdulrehmanghani/sports-analytics"
    },
    {
      title: "NVIDIA DeepStream Video Analytics",
      description: "Implemented high-performance video analytics pipeline using NVIDIA DeepStream SDK and TensorRT optimization. Processes multiple video streams simultaneously with sub-second latency.",
      tech: ["NVIDIA DeepStream", "TensorRT", "CUDA", "Jetson", "GStreamer"],
      icon: <Cpu />,
      category: "Video Analytics",
      gradient: "from-violet-500 to-purple-500",
      gif: "public/project-media/Accelerate-the-inference-at-edge.gif", // replace with actual GIF
      repoUrl: "https://github.com/Abdulrehmanghani/deepstream-analytics"
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
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovative AI/ML solutions that solve real-world problems across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 overflow-hidden ${
                isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'
              } ${project.featured ? 'ring-2 ring-indigo-500/20' : ''}`}
            >
              {project.featured && (
                <div className="px-6 pt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* GIF Media Preview */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden ${project.featured ? 'mt-2' : 'mt-0'}`}>
                <img
                  src={project.gif}
                  alt={`${project.title} demo`}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm mb-4 inline-block shadow-xl group-hover:scale-110 transition-transform duration-300">
                      {cloneElement(project.icon as ReactElement, { size: 32 })}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm bg-white/20 text-white border border-white/30">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 ${
                        isDark 
                          ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600 border border-gray-600/50' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:scale-105 transition-transform duration-200"
                >
                  <Github size={18} className="mr-2" />
                  View Code on GitHub
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Section */}
        <div className={`p-10 rounded-2xl ${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-indigo-50 to-purple-50'} shadow-2xl border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center text-gray-900 dark:text-white">
              <Github className="mr-4 p-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white" size={40} />
              Open Source Contributions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Sharing knowledge and contributing to the AI community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {githubRepos.map((repo, index) => (
              <a
                key={index}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 ${
                  isDark ? 'bg-gray-900/50 border-gray-700/50 hover:border-indigo-500/50' : 'bg-white/70 border-gray-200/50 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{repo.name}</h4>
                  <div className="flex items-center text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full">
                    <span className="text-sm mr-1">⭐</span>
                    <span className="text-sm font-bold">{repo.stars}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{repo.description}</p>
                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  <span>View Repository</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
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
      description: "Advanced studies in AI, machine learning, and computational intelligence with focus on cutting-edge research.",
      gradient: "from-indigo-500 to-purple-500",
      year: "2024-2026"
    },
    {
      degree: "B.S. in Computer Engineering",
      institution: "HITEC University",
      status: "Completed",
      description: "Final Year Project: Vehicle detection & lane tracking using CNNs (TensorFlow + Keras). Comprehensive foundation in computer science and engineering principles.",
      gradient: "from-blue-500 to-cyan-500",
      year: "2015-2019"
    }
  ];

  return (
    <section id="education" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Continuous learning and academic excellence in AI and technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-102 ${
                isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'
              } ${edu.status === 'In Progress' ? 'ring-2 ring-indigo-500/30' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                <div className="lg:col-span-1 text-center lg:text-left">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${edu.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    <GraduationCap size={32} />
                  </div>
                  <div className="text-center lg:text-left">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                      edu.status === 'In Progress' 
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    } shadow-lg`}>
                      {edu.status}
                    </span>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-2">{edu.year}</p>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{edu.description}</p>
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
      description: "Comprehensive training in edge AI deployment and IoT integration with hands-on projects.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Introduction to AI",
      provider: "Udacity", 
      year: "2018",
      description: "Foundational knowledge in artificial intelligence concepts and practical applications.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Computer Vision",
      provider: "Georgia Tech via Udacity",
      year: "2017",
      description: "Advanced computer vision techniques and implementation strategies for real-world applications.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="certifications" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Committed to continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 ${
                isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'
              }`}
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${cert.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Award size={28} />
                </div>
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${cert.gradient} text-white shadow-lg`}>
                    {cert.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">{cert.provider}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{cert.description}</p>
              </div>
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
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your ideas into intelligent solutions? Let's discuss your next AI/ML project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'} shadow-xl`}>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white mr-4 shadow-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">abdulrehmanghani197@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white mr-4 shadow-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">+92-341-7528497</p>
                </div>
              </div>
              
              <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white mr-4 shadow-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/abdulrehman197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://github.com/Abdulrehmanghani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-gray-500/25"
                >
                  <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://abdulrehmanghani.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/25"
                >
                  <ExternalLink size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'} shadow-xl`}>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:scale-105 ${
                      isDark 
                        ? 'bg-gray-900/50 border-gray-600/50 text-white focus:border-indigo-500 focus:bg-gray-900' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500 focus:bg-white'
                    } focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:shadow-lg`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:scale-105 ${
                      isDark 
                        ? 'bg-gray-900/50 border-gray-600/50 text-white focus:border-indigo-500 focus:bg-gray-900' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500 focus:bg-white'
                    } focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:shadow-lg`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:scale-105 ${
                    isDark 
                      ? 'bg-gray-900/50 border-gray-600/50 text-white focus:border-indigo-500 focus:bg-gray-900' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500 focus:bg-white'
                  } focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:shadow-lg`}
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:scale-105 resize-none ${
                    isDark 
                      ? 'bg-gray-900/50 border-gray-600/50 text-white focus:border-indigo-500 focus:bg-gray-900' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500 focus:bg-white'
                  } focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:shadow-lg`}
                  placeholder="Tell me about your project, timeline, and how I can help..."
                />
              </div>
              
              <button
                type="submit"
                className="group w-full px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25 text-lg"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">
            © 2025 Abdul Rehman.
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;