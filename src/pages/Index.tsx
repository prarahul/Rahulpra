import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import ContactInfo from '@/components/ContactInfo';
import heroImage from '@/assets/hero-bg.jpg';
import { Download, MapPin, Calendar, GraduationCap, BookOpen } from 'lucide-react';

const Index = () => {
  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'TensorFlow',
    'PyTorch', 'OpenCV', 'Machine Learning', 'Deep Learning', 'WebRTC',
    'Unity', 'C#', 'SQL', 'MongoDB', 'Git', 'Docker', 'AWS'
  ];

  const projects = [
    {
      title: 'SupplyIQ 2.0 — Supply Chain Analytics Platform',
      description: 'A Dockerized supply chain analytics platform with a dimensional data warehouse, analytical SQL views, and an executive Power BI dashboard.',
      technologies: ['PostgreSQL', 'SQL', 'Power BI', 'Docker', 'Python', 'Pandas', 'SQLAlchemy', 'Faker'],
      githubUrl: 'https://github.com/prarahul/supplyiq',
      highlights: [
        'Designed a dimensional model with 6 dimension and 5 fact tables, populated with approximately 4.6 million synthetic records.',
        'Created analytical views for revenue, profitability, inventory, procurement, shipment delivery, returns, and supplier performance.',
        'Built a Power BI dashboard over 1M+ orders and shipments, tracking revenue, profit margin, on-time delivery, inventory, and year-over-year trends.',
      ],
    },
    {
      title: 'MolecuLens AI — Drug Bioactivity Prediction',
      description: 'A molecular screening app that predicts EGFR inhibitor bioactivity and combines model explanations with a literature assistant.',
      technologies: ['Python', 'Scikit-learn', 'RDKit', 'Streamlit', 'Gemini API'],
      githubUrl: 'https://github.com/prarahul/moleculens-ai',
      highlights: [
        'Trained a Random Forest model on 416 ChEMBL compounds to predict EGFR (L858R/T790M) inhibitor bioactivity; scaffold-based 5-seed cross-validation achieved MAE 0.611 and R² 0.437 on pIC50.',
        'Built an RDKit pipeline for SMILES standardization, 2048-bit Morgan fingerprints, and Tanimoto similarity-based compound comparison and screening.',
        'Shipped multi-molecule prediction, ranking, explainability, and applicability warnings, plus a RAG literature assistant using Europe PMC, TF-IDF, and the Gemini API.',
      ],
    },
    {
      title: 'Industrial Equipment Monitoring & IoT Platform',
      description: 'A containerized IIoT platform for collecting and monitoring simulated industrial equipment telemetry.',
      technologies: ['MQTT', 'FastAPI', 'PostgreSQL', 'React', 'Docker', 'WebSockets'],
      githubUrl: 'https://github.com/prarahul/industrial-iot-monitoring',
      highlights: [
        'Ingested temperature, vibration, motor current, load, and RPM telemetry over MQTT into PostgreSQL for real-time equipment monitoring.',
        'Delivered REST APIs and WebSocket streaming for live fleet status and historical telemetry analysis, with threshold-based fault detection, alerts, and event tracking.',
        'Automated backend API and WebSocket tests and orchestrated services with Docker Compose.',
      ],
    },
    {
      title: 'Aurora Beauty SEA Analytics Platform',
      description: 'An analytics platform for Southeast Asian beauty retail, combining transaction ETL, demand forecasting, and product recommendations.',
      technologies: ['Python', 'ETL', 'Streamlit', 'Dashboards', 'Recommendation Systems'],
      githubUrl: 'https://github.com/prarahul/urora-beauty-analytics',
      highlights: [
        'Built ETL pipelines processing more than 50,000 daily transactions across Southeast Asian markets.',
        'Created KPI dashboards for demand forecasting and trend analysis, alongside a hybrid recommendation engine.',
      ],
    },
    {
      title: 'AI Face Recognition System',
      description: 'A deep learning facial recognition system for real-time detection and identification.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas'],
      githubUrl: 'https://github.com/rahulkumar/face-recognition',
      liveUrl: 'https://face-recognition-demo.vercel.app',
    },
    {
      title: 'WebRTC Video Call Application',
      description: 'A peer-to-peer video calling application with screen sharing, chat, and room management.',
      technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'Express'],
      githubUrl: 'https://github.com/rahulkumar/webrtc-app',
      liveUrl: 'https://video-call-app.herokuapp.com',
    },
    {
      title: '2D Unity Game Development',
      description: 'A 2D platformer with physics-based mechanics, collectibles, and multiple levels.',
      technologies: ['Unity', 'C#', 'Game Physics', '2D Animation', 'UI/UX'],
      githubUrl: 'https://github.com/rahulkumar/unity-2d-game',
      liveUrl: 'https://play.unity.com/mg/other/webgl-builds-278543',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              Rahul Kumar
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4">
              Computer Science & Artificial Intelligence Student
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Integrated Dual Degree (B.Tech + M.Tech) at RGIPT
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about AI, machine learning, and cutting-edge web technologies. 
              Building innovative solutions that bridge the gap between artificial intelligence and real-world applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:opacity-90 transition-opacity text-lg px-8 py-3"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-lg px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A dedicated student with a passion for artificial intelligence and software development
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Education & Summary */}
              <div className="space-y-8">
                <Card className="bg-card-gradient shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-foreground">
                      <GraduationCap className="text-primary" size={24} />
                      <span>Education</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-semibold text-foreground">Integrated Dual Degree</h3>
                      <p className="text-muted-foreground">B.Tech + M.Tech in Computer Science & Artificial Intelligence</p>
                      <p className="text-sm text-muted-foreground">Rajiv Gandhi Institute of Petroleum Technology (RGIPT)</p>
                      <p className="text-sm text-muted-foreground flex items-center mt-1">
                        <Calendar size={14} className="mr-1" />
                        2020 - 2025 (Expected)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card-gradient shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-foreground">
                      <BookOpen className="text-primary" size={24} />
                      <span>Research & Academic Experience</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold text-foreground">
                      Geo-fencing & Boundary Surveillance using CCTV and IoT Sensors
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">Nov 2025 – May 2026</p>
                    <p className="mt-1 text-sm text-muted-foreground">Under the guidance of Dr. Susham Biswas, RGIPT</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      <li>Designed a real-time perimeter monitoring framework integrating CCTV, geo-fencing, and IoT sensors, with polygon-based intrusion detection and automated alerts.</li>
                      <li>Estimated speed, height, and distance using camera calibration and computer vision, and built face-recognition workflows for long-range identity verification.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Skills & Summary */}
              <div className="space-y-8">
                <Card className="bg-card-gradient shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Professional Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      As an Integrated Dual Degree student at RGIPT, I'm passionate about leveraging artificial 
                      intelligence to solve real-world problems. My academic journey has equipped me with strong 
                      foundations in both theoretical concepts and practical implementations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I have hands-on experience in machine learning, web development, and game development, 
                      with a particular interest in computer vision and deep learning applications.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card-gradient shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Technical Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in analytics, machine learning, drug discovery, and industrial IoT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Resume</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Download my resume or view it online to learn more about my experience and qualifications
            </p>

            <div className="bg-card-gradient rounded-lg shadow-card p-8 mb-8">
              <div className="aspect-[8.5/11] w-full max-w-2xl mx-auto bg-white rounded-lg shadow-inner mb-6">
                <iframe
                  src="/Rahul_Kumar_Resume.pdf"
                  className="w-full h-full rounded-lg"
                  title="Rahul Kumar Resume"
                />
              </div>
              
              <Button
                size="lg"
                className="bg-hero-gradient hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="/Rahul_Kumar_Resume.pdf" download="Rahul_Kumar_Resume.pdf">
                  <Download size={20} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology
              </p>
            </div>

            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;