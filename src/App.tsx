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
  MessageSquare,
  Sparkles
} from 'lucide-react';
import BlogPost from './components/BlogPost';

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
  const [showBlogPost, setShowBlogPost] = useState(false);

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
      {showBlogPost ? (
        <BlogPost onBack={() => setShowBlogPost(false)} />
      ) : (
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
          <ProjectsSection onOpenBlog={() => setShowBlogPost(true)} />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </div>
      )}
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
      <div className="w-full px-16 sm:px-20 lg:px-24">
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
      
      <div className="relative z-10 w-full px-16 sm:px-20 lg:px-24">
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
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in leading-tight">
              Abdul Rehman
            </h1>
            
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                Machine Learning Engineer & AI Specialist
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
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
          <div className="mt-16 px-16 sm:px-20 lg:px-28">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <ContactCard 
                icon={<Mail />} 
                value="abdulrehmanghani197@gmail.com" 
                href="mailto:abdulrehmanghani197@gmail.com" 
                className="hover:-translate-y-1 transition-transform duration-200"
              />
              <ContactCard 
                icon={<Phone />} 
                value="+92-341-7528497" 
                href="tel:+923417528497" 
                className="hover:-translate-y-1 transition-transform duration-200"
              />
              <ContactCard 
                icon={<MapPin />} 
                value="Nicosia, Cyprus" 
                className="hover:-translate-y-1 transition-transform duration-200"
              />
              <ContactCard 
                icon={<Linkedin />} 
                value="linkedin.com/in/abdulrehman197" 
                href="https://linkedin.com/in/abdulrehman197" 
                className="hover:-translate-y-1 transition-transform duration-200"
              />
              <ContactCard 
                icon={<Github />} 
                value="github.com/Abdulrehmanghani" 
                href="https://github.com/Abdulrehmanghani" 
                className="hover:-translate-y-1 transition-transform duration-200"
              />
            </div>
          </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, value, href, className }: { 
  icon: React.ReactNode; 
  value: string; 
  href?: string; 
  className?: string;
}) {
  const { isDark } = useContext(ThemeContext);
  
  const content = (
    <div className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 ${
      isDark 
        ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800 backdrop-blur-sm' 
        : 'bg-white/70 border-gray-200/50 hover:bg-white backdrop-blur-sm'
    } ${className ? className : ''}`}>
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg flex-shrink-0">
          {cloneElement(icon as ReactElement, { size: 16 })}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
            {value}
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
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="w-full px-16 sm:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main About Content */}
        <div className="text-center mb-16">
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
            <span className="font-semibold text-purple-600 dark:text-purple-400"> ChatGPT, Google Gemini, NVIDIA Jetson, CUDA, and TensorRT</span>.
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
      title: "Computer Vision",
      icon: <Camera />,
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Object Detection (YOLO, DETR, Faster R-CNN)", level: 92 },
        { name: "Segmentation (HRNet, FCHarDNet, U-Net)", level: 90 },
        { name: "Re-ID & Tracking", level: 88 },
        { name: "OpenCV / NVIDIA DeepStream", level: 90 }
      ]
    },
    {
      title: "Natural Language Processing (NLP)",
      icon: <MessageSquare />,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Transformers (BERT, GPT, LLaMA)", level: 85 },
        { name: "RAG Architectures", level: 80 },
        { name: "Text Summarization & Document Automation", level: 85 },
        { name: "LangChain & Vector Databases", level: 80 }
      ]
    },
    {
      title: "Generative AI & LLMs",
      icon: <Sparkles />,
      gradient: "from-fuchsia-500 to-pink-500",
      skills: [
        { name: "Prompt Engineering", level: 85 },
        { name: "Fine-tuning LLMs", level: 80 },
        { name: "Diffusion Models (Stable Diffusion)", level: 75 },
        { name: "Conversational AI / Agents", level: 80 }
      ]
    },
    {
      title: "Edge & Optimization",
      icon: <Cpu />,
      gradient: "from-teal-500 to-cyan-500",
      skills: [
        { name: "NVIDIA Jetson / TensorRT", level: 88 },
        { name: "CUDA / GPU Optimization", level: 82 },
        { name: "Quantization & Pruning", level: 90 },
        { name: "TinyML (OpenMV, ESP32, Edge Impulse)", level: 75 }
      ]
    },
    {
      title: "Cloud & MLOps",
      icon: <Cloud />,
      gradient: "from-blue-500 to-sky-500",
      skills: [
        { name: "Azure ML / AWS Sagemaker", level: 80 },
        { name: "Docker & Kubernetes", level: 78 },
        { name: "Apache Airflow", level: 70 },
        { name: "Triton Inference Server", level: 82 }
      ]
    },
    {
      title: "AI Product Development",
      icon: <Bot />,
      gradient: "from-orange-500 to-amber-500",
      skills: [
        { name: "End-to-End ML Pipelines", level: 85 },
        { name: "FastAPI / REST APIs", level: 80 },
        { name: "Experiment Tracking (W&B)", level: 75 },
        { name: "Production Deployment", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="w-full px-16 sm:px-20 lg:px-24">
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

  // Group roles by company
  const experiences = [
    {
      company: "AIVStudios",
      gradient: "from-indigo-500 to-purple-500",
      roles: [
        {
          title: "Computer Vision & ML Engineer",
          period: "Jul 2024 – Present",
          location: "Remote",
          description:
            "Building advanced AI platforms for healthcare, legal, and video analytics with LLMs and high-performance computer vision solutions.",
          achievements: [
            "Developed an end-to-end medical record summarization platform using Python, Streamlit, and GPT-4, automating PDF extraction, data normalization, LLM-driven summarization, quality review, and secure cloud storage, improving efficiency and accuracy for healthcare and legal workflows.",
            "Engineered an AI-powered legal document automation platform using Python, GPT-4, and Streamlit, reducing legal document review time by 99% and achieving 85% accuracy in automated decision-making for court case preparation, including predictive analysis of judicial arguments with 65% accuracy.",
            "Boosted video analytics speed by 50% through multi-threading and deployed scalable AI services with NVIDIA DeepStream and Triton Inference Server, reducing latency from 200 ms to 100 ms using GStreamer with Python and C++."
          ],
          current: true
        }
      ]
    },
    {
      company: "LVisionAI",
      gradient: "from-blue-500 to-cyan-500",
      roles: [
        {
          title: "Machine Learning Engineer",
          period: "Dec 2022 – Jul 2024",
          location: "Islamabad, Pakistan",
          description:
            "Driving efficient AI and TinyML solutions for edge devices and cloud platforms to optimize cost, performance, and decision-making.",
          achievements: [
            "Established TinyML pipelines on low-cost devices (Jetson Nano, Raspberry Pi, OpenMV, etc.) for real-time video analytics, reducing cost and energy consumption by over 60% compared to CPU/GPU usage.",
            "Applied Neural Architecture Search (NAS) to optimize models for target devices, reducing memory usage by 30%, improving compute efficiency by 40%, and accelerating inference speed by 2× for top performance on resource-constrained hardware.",
            "Built scalable AI pipelines on Azure ML and Google Cloud for an advertising agency, analyzing product trends to improve ad campaign accuracy by 25% and decision-making efficiency by 35%.",
          ]
        }
      ]
    },
    {
      company: "DLision",
      gradient: "from-emerald-500 to-teal-500",
      roles: [
        {
          title: "Software Developer",
          period: "Mar 2021 – Nov 2022",
          location: "Islamabad, Pakistan",
          description:
            "Delivering high-performance AI solutions for video analytics, workflow automation, and business forecasting.",
          achievements: [
            "Trained and evaluated object detection models using NVIDIA DALI, DeepStream SDK, and CUDA Toolkit, reducing training time by 30% and improving inference speed by 40%, while automating 100% of task scheduling with Apache Airflow for streamlined deployment.",
            "Implemented real-time video surveillance with Triton Inference Server and DeepStream, offloading inference to the server and reducing client-side cost by 50%.",
            "Developed demand forecasting models (ARIMA, LSTM, Prophet) for a retail business using historical sales data, improving inventory planning accuracy by 35%."
          ]
        },
        {
          title: "Trainee Developer",
          period: "Jan 2020 – Feb 2021",
          location: "Islamabad, Pakistan",
          description:
            "Specializing in optimizing deep learning models and deploying efficient computer vision solutions on resource-constrained platforms.",
          achievements: [
            "Optimized deep learning models with OpenVINO and TensorFlow Lite, increasing inference speed by 40% on edge and low-power devices.",
            "Contributed to dataset preparation using Labelme and Roboflow, trained PyTorch models for image classification and object detection (YOLO, DETR, MobileNet), and optimized deployment models for real-world applications.",
          ],
          extraSpacing: true // add spacing for trainee role
        }
      ]
    },
    {
      company: "Interloop Ltd.",
      gradient: "from-pink-500 to-rose-500",
      roles: [
        {
          title: "Auditor",
          period: "Jul 2019 – Dec 2019",
          location: "Faisalabad, Pakistan",
          description:
            "Building data-driven solutions and web applications to enhance operational efficiency and user engagement",
          achievements: [
            "Analyzed data from industrial machines, improving operational efficiency by 15%.",
            "Developed a web visitor tracking tool using HTML5, CSS, JavaScript, and PHP, increasing user engagement by 25%.",
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="w-full px-16 sm:px-20 lg:px-24">
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
              } ${exp.roles.some(r => (r as any).current) ? 'ring-2 ring-indigo-500/30' : ''}`}
            >
              {/* Company header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} text-white mr-4 shadow-lg`}>
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
              </div>

              {/* Roles with timeline */}
              <div className="space-y-12 relative">
                {exp.roles.map((role, rIndex) => (
                  <div
                    key={rIndex}
                    className={`grid grid-cols-1 lg:grid-cols-3 gap-8 pl-8 relative ${(role as any).extraSpacing ? 'mt-6' : ''}`}
                  >
                    {/* Timeline dot */}
                    <span className={`absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient}`}></span>
                    {/* Timeline line (except last role) */}
                    {rIndex !== exp.roles.length - 1 && (
                      <span className="absolute left-[7px] top-6 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></span>
                    )}

                    {/* Left column */}
                    <div className="lg:col-span-1">
                      <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{role.title}</p>
                      {(role as any).current && (
                        <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full">
                          Current
                        </span>
                      )}
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{role.period}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm font-medium">{role.location}</span>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">{role.description}</p>
                      <h4 className="font-bold mb-4 text-gray-800 dark:text-gray-200 text-lg">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {role.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3 group/item">
                            <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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


function ProjectsSection({ onOpenBlog }: { onOpenBlog: () => void }) {
  const { isDark } = useContext(ThemeContext);

  const projects = [
    {
      title: "Accelerate the inference at edge",
      description: "Accelerated deep learning inference for resource-constrained edge devices using Python workflows. Leveraged advanced quantization and pruning to achieve up to 90% model size reduction with minimal loss in accuracy. Integrated and deployed models on ARM Cortex and Edge TPU hardware for real-time, efficient Edge AI.",
      tech: ["Python", "Intel OpenVINO", "Edge TPU", "Quantization", "Pruning", "ARM Cortex"],
      icon: <Cpu />,
      category: "Edge AI",
      gradient: "from-emerald-500 to-teal-500",
      gif: "/project-media/Accelerate-the-inference-at-edge.gif", // replace with actual GIF
      repoUrl: "https://github.com/Abdulrehmanghani/Accelerate-the-inference-at-edge/tree/main"
    },
    {
      title: "Medical Record Summarization",
      description: "Developed an intelligent healthcare automation system that processes and summarizes medical records using GPT-4. Reduced manual processing time by 80% for healthcare providers. Built a scalable SaaS platform with subscription-based pricing that serves law firms and healthcare organizations through automated document processing workflows.",
      tech: ["GPT-4", "Google Gemini", "Healthcare AI", "Python", "FastAPI", "AWS"],
      icon: <Brain />,
      category: "Healthcare AI",
      gradient: "from-rose-500 to-pink-500",
      // gif: "public/project-media/Accelerate-the-inference-at-edge.gif", // replace with actual GIF
      repoStatus: "This project is not Open-source",
      hasBlogPost: true
    },
    // {
    //   title: "Legal Document Automation Pipeline",
    //   description: "Built an AI-powered solution for legal document processing, analysis, and automated workflow generation using LLaMA and RAG architecture. Streamlined legal operations for multiple law firms.",
    //   tech: ["LLaMA", "Document AI", "RAG", "LangChain", "Vector DB"],
    //   icon: <Database />,
    //   category: "Legal Tech",
    //   gradient: "from-indigo-500 to-purple-500",
    //   // gif: "public/project-media/Accelerate-the-inference-at-edge.gif", // replace with actual GIF
    //   repoStatus: "This project is not Open-source"
    // },
    {
      title: "Edge-Based Person Re-Identification System",
      description: "Developed and deployed a real-time person re-identification system using Raspberry Pi and Intel Neural Compute Stick 2. Integrates deep learning models for feature extraction and matching at the edge, enabling efficient and low-latency identification for surveillance and security applications.",
      tech: ["Raspberry Pi", "Intel NCS2", "Deep Learning", "OpenVINO", "Computer Vision"],
      icon: <Camera />,
      category: "Edge AI",
      gradient: "from-green-500 to-teal-500",
      gif: "/project-media/ReIdentification_retail.gif", // replace with an actual GIF path relevant to the project
      repoUrl: "https://github.com/dlision/Re-Identification-with-RaspberryPi-and-Neural-Comput-Stick-2"
    },
    {
      title: "Multi-Camera Football Analytics Platform",
      description: "Developed an advanced football analytics system leveraging 12 synchronized stadium cameras to provide real-time tactical and performance insights. YOLO/DETR were used for player, referee, and ball detection; a transformer-based model classified players into Team A or Team B; HRNet enabled player pose estimation and movement tracking; and FCHarDNet was applied for semantic ground segmentation to analyze pitch zones. The end-to-end pipeline was orchestrated with Apache Airflow and NVIDIA DeepStream, deployed on A100 GPUs with Triton Inference Server for high-throughput, low-latency inference. This platform delivers actionable insights for coaches, analysts, and sports teams in real time.",
      tech: [
        "YOLO",
        "DETR",
        "Transformer Models",
        "HRNet",
        "FCHarDNet",
        "Apache Airflow",
        "NVIDIA DeepStream",
        "Triton Inference Server",
        "PyTorch",
        "A100 GPU"
      ],
      icon: <Bot />,
      category: "Sports Tech",
      gradient: "from-orange-500 to-amber-500",
      // gif: "public/project-media/Accelerate-the-inference-at-edge.gif", // replace with actual GIF
      repoStatus: "This project is not Open-source"
    },
    {
      title: "NVIDIA DeepStream Video Analytics for face detection and recognition application",
      description: "Implemented high-performance video analytics pipeline using NVIDIA DeepStream SDK and TensorRT optimization. Processes multiple video streams simultaneously with sub-second latency.",
      tech: ["NVIDIA DeepStream", "TensorRT", "CUDA", "Jetson", "GStreamer"],
      icon: <Cpu />,
      category: "Video Analytics",
      gradient: "from-violet-500 to-purple-500",
      // gif: "public/project-media/Accelerate-the-inference-at-edge.gif", // replace with actual GIF
      repoStatus: "This project is not Open-source"
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
      <div className="w-full px-16 sm:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Innovative AI/ML solutions that solve real-world problems across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 overflow-hidden ${
                isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'
              }`}
            >
              {/* GIF Media Preview */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
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

                {/* Repository Status, GitHub Link, or Blog Post */}
                <div className="space-y-3">
                  {project.hasBlogPost && (
                    <button
                      onClick={onOpenBlog}
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow hover:scale-105 transition-transform duration-200"
                    >
                      <Brain size={18} className="mr-2" />
                      Read Project Details
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  )}
                  
                  {project.repoStatus ? (
                    <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {project.repoStatus}
                    </div>
                  ) : project.repoUrl ? (
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
                  ) : null}
                </div>
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
      year: "2025-In progress"
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
      <div className="w-full px-16 sm:px-20 lg:px-24">
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
      <div className="w-full px-16 sm:px-20 lg:px-24">
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
      <div className="w-full px-16 sm:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
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
