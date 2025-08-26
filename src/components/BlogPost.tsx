import React, { useContext } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Brain,
  Cpu,
  Database,
  Shield,
  Zap,
  CheckCircle,
  Award,
  TrendingUp,
  FileText,
  Settings
} from 'lucide-react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {}
});

interface BlogPostProps {
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ onBack }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isDark ? 'bg-gray-900/90 backdrop-blur-md border-gray-700/50' : 'bg-white/90 backdrop-blur-md border-gray-200/50'
      } border-b shadow-lg`}>
        <div className="w-full px-16 sm:px-20 lg:px-24">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Portfolio</span>
            </button>
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Abdul Rehman
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="w-full px-16 sm:px-20 lg:px-24 py-12">
        
        {/* Hero Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold mb-6 shadow-lg">
            {/* <span className="text-lg mr-2">🏥</span> */}
            Healthcare Technology
          </div>
          
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Medical Record Summarization
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
              Automated Medical Record Processing for Legal & Healthcare Professionals

            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>August 26, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>12 min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>Abdul Rehman</span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className={`p-8 rounded-2xl mb-12 ${isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'} shadow-xl`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            {/* <span className="text-3xl mr-3">🎯</span> */}
            Introduction: The Challenge of Medical Document Analysis
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              In the complex world of healthcare and legal documentation, medical professionals and law firms face an overwhelming challenge: processing hundreds of pages of medical records to extract relevant information for patient care and legal cases. Traditional manual review methods are not only time-consuming but also prone to human error, often requiring dozens of billable hours to create comprehensive medical timelines. This inefficiency creates significant bottlenecks in both healthcare delivery and legal proceedings, where timely access to organized medical information can be critical to case outcomes.
            </p>
            <p>
              Enter the <strong className="text-indigo-600 dark:text-indigo-400">Medical Summaries Platform</strong>—an innovative AI-powered solution that transforms this laborious process into an automated, intelligent workflow. By leveraging cutting-edge Large Language Models (LLMs) including GPT-4 and Google's Gemini, the platform can process complex medical PDFs, extract relevant information, and generate chronological summaries that would traditionally take human reviewers days or weeks to complete. The system intelligently identifies treatment dates, healthcare facilities, practitioners, and medical procedures, organizing this information into coherent, timeline-based summaries that maintain accuracy while dramatically reducing processing time.
            </p>
            <p>
              What sets this platform apart is its comprehensive approach to the entire medical document lifecycle—from initial PDF upload through final summary delivery. The system seamlessly integrates with major legal practice management platforms like Clio and SmartAdvocate, while incorporating human-in-the-loop quality assurance to ensure the highest standards of accuracy. With subscription-based pricing models and built-in payment processing through Stripe and QuickBooks integration, the platform serves as a complete end-to-end solution for law firms, medical practices, and healthcare organizations seeking to modernize their document processing workflows and improve operational efficiency.
            </p>
          </div>

          {/* Platform Overview Visual */}
          <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'} overflow-hidden`}>
            <h3 className="text-xl font-bold mb-6 flex items-center text-center w-full justify-center">
              {/* <span className="text-2xl mr-3">🗺️</span> */}
              Platform Architecture & Vision Overview
            </h3>
            <div className="w-full flex justify-center mb-4">
              <img 
                src="/project-media/mindmap.jpeg" 
                alt="Medical Summaries Platform Architecture Mindmap" 
                className="w-full max-w-4xl h-auto rounded-lg shadow-lg border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic mb-6">
              Comprehensive system architecture showing the interconnected components and strategic vision of the Medical Summaries Platform
            </p>
            
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className={`p-6 rounded-xl ${isDark ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border border-indigo-700/50' : 'bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/50'}`}>
                <h4 className="text-lg font-bold mb-3 flex items-center">
                  {/* <span className="text-xl mr-2">🎯</span> */}
                  Mission
                </h4>
                <p className="text-sm leading-relaxed">
                  Transform complex medical documentation into accessible, chronological summaries using cutting-edge AI/LLM technology, enabling healthcare professionals and legal teams to focus on what matters most—patient care and case outcomes.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${isDark ? 'bg-gradient-to-br from-emerald-900 to-teal-900 border border-emerald-700/50' : 'bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/50'}`}>
                <h4 className="text-lg font-bold mb-3 flex items-center">
                  {/* <span className="text-xl mr-2">🌟</span> */}
                  Vision
                </h4>
                <p className="text-sm leading-relaxed">
                  To become the leading platform for automated medical document analysis, serving law firms, medical professionals, and healthcare organizations with intelligent summarization services that set the industry standard.
                </p>
              </div>
            </div>

            {/* Core Problems Being Solved */}
            <div className={`mt-6 p-6 rounded-xl ${isDark ? 'bg-gradient-to-br from-red-900 to-orange-900 border border-red-700/50' : 'bg-gradient-to-br from-red-50 to-orange-50 border border-red-200/50'}`}>
              <h4 className="text-lg font-bold mb-4 flex items-center">
                {/* <span className="text-xl mr-2">❓</span> */}
                Critical Problems We Solve
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm"><strong>Time-Consuming Manual Review:</strong> Medical records spanning hundreds of pages require weeks of analysis</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm"><strong>Information Overload:</strong> Extracting relevant medical information from complex, unstructured documents</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm"><strong>Cost Inefficiency:</strong> Reduce billable hours and operational overhead by 80%+</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm"><strong>Standardization Needs:</strong> Create consistent, chronological medical timelines for legal proceedings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-indigo-50 to-purple-50'} border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              {/* <span className="text-2xl mr-3">📊</span> */}
              Platform Impact Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">99.2%</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Processing Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">4.2 min</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Average Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">12,500+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Documents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-2">4.8/5</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className={`p-8 rounded-2xl mb-12 ${isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'} shadow-xl`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            {/* <span className="text-3xl mr-3">🛠️</span> */}
            The Technology Foundation: Building for Excellence
          </h2>
          <div className="space-y-6 text-lg leading-relaxed mb-8">
            <p>
              The AcroDocz platform is built on a sophisticated technology stack that combines the best of modern 
              cloud computing, artificial intelligence, and enterprise software development practices. Our architecture 
              represents a careful balance of performance, security, and scalability.
            </p>
            <p>
              At the core of our platform lies a robust <strong>Python 3.10</strong> backend, powered by 
              <strong className="text-indigo-600 dark:text-indigo-400"> FastAPI</strong>—a modern, high-performance web framework that provides automatic API 
              documentation and type safety. This choice enables us to build APIs that are both lightning-fast 
              and maintainable at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'}`}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white mr-4">
                  <Brain size={24} />
                </div>
                <h4 className="text-xl font-bold">AI & Machine Learning</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>OpenAI GPT-4:</strong> Primary engine for medical text summarization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Google Gemini:</strong> Secondary processing for cost optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>LangChain:</strong> Orchestration framework for AI workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>SpaCy:</strong> Advanced NLP for medical entity recognition</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'}`}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white mr-4">
                  <FileText size={24} />
                </div>
                <h4 className="text-xl font-bold">Document Processing</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Adobe PDF Services:</strong> Enterprise-grade text extraction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Tesseract OCR:</strong> Optical character recognition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>PyMuPDF:</strong> High-performance PDF manipulation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>ReportLab:</strong> Professional PDF generation</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'}`}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white mr-4">
                  <Database size={24} />
                </div>
                <h4 className="text-xl font-bold">Enterprise Integrations</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Legal Platforms:</strong> Clio, SmartAdvocate, Smokeball</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Payment Systems:</strong> Stripe and CardPointe</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Cloud Storage:</strong> AWS S3 for scalable storage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Business Intelligence:</strong> QuickBooks integration</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processing Workflow */}
        <section className={`p-8 rounded-2xl mb-12 ${isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'} shadow-xl`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            {/* <span className="text-3xl mr-3">🔄</span> */}
            The Six-Stage Processing Revolution
          </h2>
          
          {/* Visual Workflow Diagram */}
          <div className={`mb-8 p-6 rounded-xl ${isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'} overflow-hidden`}>
            <h3 className="text-xl font-bold mb-6 flex items-center text-center w-full justify-center">
              {/* <span className="text-2xl mr-3">🔄</span> */}
              Complete Medical Document Processing Pipeline
            </h3>
            <div className="w-full flex justify-center mb-4">
              <img 
                src="/project-media/flow.jpg" 
                alt="Medical Document Processing Workflow Diagram" 
                className="w-full max-w-5xl h-auto rounded-lg shadow-lg border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic mb-4">
              End-to-end workflow showing the 6-stage process transforming medical PDFs into AI-powered summaries
            </p>
            <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-900/20 border border-blue-700/50' : 'bg-blue-50 border border-blue-200/50'}`}>
              <p className="text-sm text-center font-medium">
                <span className="text-blue-600 dark:text-blue-400">Pipeline Efficiency:</span> Converting hundreds of pages into structured summaries in minutes, not weeks
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-8">
            Our document processing workflow represents a scientific approach to medical document analysis, 
            breaking down the complex task into six distinct, optimized stages. Each stage employs specialized 
            algorithms and AI models to ensure maximum accuracy and efficiency.
          </p>

          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Ingest Medical Documents",
                subtitle: "Upload & Store Raw PDFs",
                icon: <FileText size={32} />,
                gradient: "from-indigo-500 to-purple-500",
                description: "Customer uploads medical records and bills via secure API endpoints. Our system stores files in dedicated S3 buckets with proper segregation between records and bills, supporting multiple file formats and sizes up to 1GB per document.",
                features: [
                  "Secure API Upload: End-to-end encryption for sensitive medical data",
                  "S3 Storage: Segregated buckets for records/bills with automatic backup",
                  "Multi-format Support: PDF, TIFF, JPG, and other document formats",
                  "Size Optimization: Intelligent compression without quality loss"
                ],
                // code: "POST /api/upload/medical-records --file patient_records.pdf --type medical_record"
              },
              {
                number: "02",
                title: "Extract & Parse Content",
                subtitle: "PDF Processing & Text Extraction",
                icon: <Database size={32} />,
                gradient: "from-blue-500 to-cyan-500",
                description: "Adobe PDF extraction with intelligent chunking strategies to handle massive medical records. OCR processing ensures even poor-quality scanned documents are accurately converted to searchable text.",
                features: [
                  "Adobe PDF Services: Professional-grade extraction with 99%+ accuracy",
                  "Intelligent Chunking: Dynamic 30-page segments for optimal processing",
                  "OCR Integration: Tesseract OCR for scanned document processing",
                  "Page-by-page Processing: Systematic text extraction with metadata retention"
                ]
              },
              {
                number: "03",
                title: "AI Relevancy Analysis",
                subtitle: "Quality & Relevance Assessment",
                icon: <Brain size={32} />,
                gradient: "from-emerald-500 to-teal-500",
                description: "GPT-4 and Gemini models analyze each page for medical relevance, extracting treatment dates, healthcare facilities, practitioners, and flagging relevant versus irrelevant content for downstream processing.",
                features: [
                  "GPT-4 Analysis: Advanced medical context understanding",
                  "Treatment Date Extraction: Automated chronological identification",
                  "Facility & Practitioner Recognition: Named entity extraction",
                  "Relevancy Scoring: AI-powered content filtering and classification"
                ]
              },
              {
                number: "04",
                title: "Data Standardization",
                subtitle: "Transform & Structure Data",
                icon: <Settings size={32} />,
                gradient: "from-orange-500 to-amber-500",
                description: "Raw extracted data undergoes sophisticated normalization using fuzzy matching algorithms. Chronological sorting by treatment date, grouping by facility and practitioner, with medical data formatting rules applied.",
                features: [
                  "Chronological Sorting: Intelligent timeline creation by treatment dates",
                  "Facility Grouping: Fuzzy matching for hospital and clinic standardization",
                  "Practitioner Normalization: ML-powered name and title standardization",
                  "Medical Data Rules: Clinical terminology standardization and formatting"
                ]
              },
              {
                number: "05",
                title: "Generate AI Summaries",
                subtitle: "Automated Content Creation",
                icon: <Zap size={32} />,
                gradient: "from-pink-500 to-rose-500",
                description: "LLM-powered summarization creates comprehensive chronological medical timelines. Each summary is linked to source pages with proper citations, maintaining clinical accuracy while ensuring legal document compliance.",
                features: [
                  "LLM Summarization: GPT-4 powered medical content generation",
                  "Chronological Timelines: Structured medical history organization",
                  "Source Page Linking: Automatic citation and reference management",
                  "Clinical Accuracy: Medical terminology and context preservation"
                ]
              },
              {
                number: "06",
                title: "Quality Review & Delivery",
                subtitle: "Human Validation & Final Output",
                icon: <Shield size={32} />,
                gradient: "from-red-500 to-pink-500",
                description: "Reviewer dashboard enables quality checks and agent validation for accuracy. Final PDF generation includes hyperlinks and professional formatting, with delivery via email or customer dashboard.",
                features: [
                  "Reviewer Dashboard: Streamlit-powered quality assurance interface",
                  "Agent Validation: Multi-layer accuracy verification process",
                  "PDF Generation: Professional formatting with interactive hyperlinks",
                  "Delivery Options: Email notifications and secure dashboard access"
                ]
              }
            ].map((stage, index) => (
              <div key={index} className={`group p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'
              }`}>
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stage.gradient} text-white mr-6 text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stage.number}
                  </div>
                  <div className="flex-1">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stage.gradient} text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 inline-block`}>
                      {stage.icon}
                    </div>
                    <div className="inline-block">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                      {stage.subtitle && (
                        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mt-1">{stage.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">{stage.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Technical Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {stage.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-3">
                        <Zap size={16} className={`text-${stage.gradient.split('-')[1]}-500 mt-1 flex-shrink-0`} />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {stage.code && (
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-300 dark:border-gray-600`}>
                    <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400">{stage.code}</code>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Architecture & Security */}
        <section className={`p-8 rounded-2xl mb-12 ${isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'} shadow-xl`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            {/* <span className="text-3xl mr-3">🏗️</span> */}
            Architecture Philosophy: Building for the Future
          </h2>
          <div className="space-y-6 text-lg leading-relaxed mb-8">
            <p>
              The AcroDocz platform embodies modern software architecture principles, designed from the ground up 
              for scalability, reliability, and maintainability. Our cloud-native approach ensures that the 
              platform can grow with our customers' needs while maintaining consistent performance.
            </p>
            <p>
              We've adopted a microservices architecture that allows independent scaling of different platform 
              components. Document processing, AI inference, user management, and billing systems all operate 
              as separate services, connected through well-defined APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield size={24} />,
                title: "Data Protection",
                description: "AES-256 encryption for data at rest and in transit, with secure key management",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Database size={24} />,
                title: "Access Control",
                description: "Role-based permissions with principle of least privilege enforcement",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Award size={24} />,
                title: "Compliance",
                description: "HIPAA and SOC 2 compliance with regular security audits and penetration testing",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Monitoring",
                description: "Real-time security monitoring with automated threat detection and response",
                gradient: "from-orange-500 to-amber-500"
              }
            ].map((feature, index) => (
              <div key={index} className={`group p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'
              }`}>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className={`p-8 rounded-2xl mb-12 ${isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'} shadow-xl`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">⚡</span>
            Performance Excellence: Engineering for Scale
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Performance isn't just about speed—it's about reliability, consistency, and the ability to handle 
            varying workloads gracefully. Our platform is engineered to deliver consistent performance whether 
            processing a single document or handling enterprise-level volumes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'}`}>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Cpu size={24} className="mr-3 text-indigo-600 dark:text-indigo-400" />
                Processing Performance
              </h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>Average processing time:</span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">4.2 minutes per document</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Concurrent document processing:</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">Up to 50 documents</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Peak throughput:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">500+ documents per hour</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Processing accuracy:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">99.2% verified accuracy</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'}`}>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Shield size={24} className="mr-3 text-emerald-600 dark:text-emerald-400" />
                System Reliability
              </h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>System uptime:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">99.9% availability</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Error rate:</span>
                  <span className="font-bold text-teal-600 dark:text-teal-400">Less than 0.1%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Recovery time:</span>
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">Under 30 seconds</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Data integrity:</span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">100% with redundancy</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Future Vision & Dreams */}
        <section className={`p-8 rounded-2xl mb-12 ${isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'} shadow-xl`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            {/* <span className="text-3xl mr-3">�</span> */}
            Dreams & Future Aspirations
          </h2>
          <div className="space-y-6 text-lg leading-relaxed mb-8">
            <p>
              The Medical Summaries Platform represents just the beginning of our vision for transforming healthcare documentation. 
              Our dreams extend far beyond current capabilities, envisioning a future where AI-powered medical analysis 
              becomes the global standard for healthcare and legal industries.
            </p>
            <p>
              We're not just building software—we're pioneering the future of intelligent medical document processing, 
              with aspirations that span from AI excellence to global market transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* AI Excellence */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-700/50' : 'bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/50'}`}>
              <div className="flex items-center mb-4">
                <Brain size={24} className="text-indigo-600 dark:text-indigo-400 mr-3" />
                <h4 className="text-lg font-bold">AI Excellence</h4>
              </div>
              <p className="text-sm mb-3">Become the industry standard for medical document AI with cutting-edge machine learning capabilities.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Advanced multi-modal AI processing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Predictive insights from medical data patterns</span>
                </li>
              </ul>
            </div>

            {/* Global Reach */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-700/50' : 'bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/50'}`}>
              <div className="flex items-center mb-4">
                <TrendingUp size={24} className="text-emerald-600 dark:text-emerald-400 mr-3" />
                <h4 className="text-lg font-bold">Global Expansion</h4>
              </div>
              <p className="text-sm mb-3">Expand to international legal and healthcare markets with localized solutions.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Multi-language document processing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>International compliance standards</span>
                </li>
              </ul>
            </div>

            {/* Real-time Processing */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gradient-to-br from-orange-900/50 to-amber-900/50 border border-orange-700/50' : 'bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200/50'}`}>
              <div className="flex items-center mb-4">
                <Zap size={24} className="text-orange-600 dark:text-orange-400 mr-3" />
                <h4 className="text-lg font-bold">Real-time Capabilities</h4>
              </div>
              <p className="text-sm mb-3">Instant summarization capabilities with live document processing.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Live streaming document analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Instant medical timeline generation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Future Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <FileText size={24} className="mr-3 text-blue-600 dark:text-blue-400" />
                Multi-modal AI Integration
              </h3>
              <ul className="space-y-4">
                {[
                  "Support for images, handwritten notes, and audio transcriptions",
                  "Medical chart and diagram interpretation capabilities",
                  "Voice-to-text conversion for medical dictations",
                  "Handwriting recognition for physician notes"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={16} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <Shield size={24} className="mr-3 text-green-600 dark:text-green-400" />
                Regulatory & Compliance Evolution
              </h3>
              <ul className="space-y-4">
                {[
                  "HIPAA and international healthcare data standards",
                  "White-label solutions for enterprise organizations",
                  "Platform as a Service (PaaS) for other organizations",
                  "Advanced regulatory compliance automation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Statement */}
          <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-700/50' : 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50'}`}>
            <h4 className="font-bold text-xl mb-4 flex items-center">
              <Award size={24} className="mr-3 text-purple-600 dark:text-purple-400" />
              Our Ultimate Vision
            </h4>
            <p className="text-lg leading-relaxed">
              To revolutionize healthcare documentation globally, becoming the definitive platform where AI excellence 
              meets human expertise. We envision a future where medical document analysis is instant, accurate, and accessible 
              to healthcare professionals and legal teams worldwide, enabling them to focus on what truly matters—improving 
              patient outcomes and delivering justice.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className={`p-8 rounded-2xl mb-12 ${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-indigo-50 to-purple-50'} border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-xl`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            {/* <span className="text-3xl mr-3">🎯</span> */}
            Conclusion: Transforming Healthcare Legal Analysis
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              The Medical Summaries Platform represents a convergence of cutting-edge technology, 
              deep domain expertise, and relentless focus on user needs. By combining advanced AI with 
              robust engineering practices, we've created a solution that doesn't just process medical 
              documents—it understands them.
            </p>
            <p>
              As we continue to push the boundaries of what's possible in medical document analysis, 
              our commitment remains unchanged: to provide legal professionals with the tools they need 
              to deliver exceptional outcomes for their clients while operating more efficiently than 
              ever before.
            </p>
          </div>
          
          <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50' : 'bg-gradient-to-r from-indigo-100 to-purple-100'} border ${isDark ? 'border-indigo-700/50' : 'border-indigo-300/50'}`}>
            <h3 className="text-2xl font-bold mb-4 text-center">🌟 Experience the Future Today</h3>
            <p className="text-center text-lg">
              Ready to transform your medical document analysis workflow? The Medical Summaries Platform is 
              ready to revolutionize how your practice handles medical records.
            </p>
          </div>
        </section>

        {/* Article Footer */}
        <footer className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200/50'} shadow-xl`}>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Healthcare Technology",
              "Artificial Intelligence", 
              "Legal Tech",
              "Medical Records",
              "Document Processing",
              "Machine Learning"
            ].map((tag, index) => (
              <span key={index} className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
            <Clock size={18} className="mr-2" />
            <span> Estimated reading time: 12 minutes</span>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
