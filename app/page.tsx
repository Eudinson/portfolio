'use client';

import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Briefcase, Code, Award, Menu, X, Star, Users, Clock, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { icon: Clock, value: '6+ Years', label: 'Experience' },
    { icon: Code, value: 'Full Stack', label: 'Development' },
    { icon: Users, value: 'Cloud & DevOps', label: 'Expertise' },
    { icon: Star, value: 'Modern Web', label: 'Architecture' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`
        }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'
      }`}>
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                <Code className="h-4 w-4 text-white dark:text-slate-900" />
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Portfolio</span>
            </div>

            <div className="hidden md:flex gap-6">
              {['about', 'experience', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-xs font-medium transition-colors ${
                    activeSection === section
                      ? 'text-slate-900 dark:text-slate-100'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-14 right-4 w-36 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="py-1">
              {['about', 'experience', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeSection === section
                      ? 'text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900'
                      : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="relative max-w-5xl mx-auto px-6 pt-20 pb-12">
        <section id="about" className="py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-800">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Eudinson Uy
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
                Full Stack Web Application Developer & IT Consultant
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                Specializing in React.js, Node.js, Express.js, and PostgreSQL. I build scalable, efficient, and user-centric web applications that solve real business needs.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                I'm passionate about emerging technologies, AI-driven automation, and smart digital solutions. I help businesses streamline operations, enhance user experiences, and achieve measurable growth through modern, reliable web systems.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                I thrive in environments that push innovation, continuous learning, and long-term value creation—turning complex ideas into elegant, high-performance solutions.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button size="sm" className="gap-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900" asChild>
                  <a href="mailto:eudinson_uy29@yahoo.com">
                    <Mail className="h-3.5 w-3.5" />
                    Contact
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5" asChild>
                  <a href="https://github.com/Eudinson" target="_blank" rel="noopener noreferrer">
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5" asChild>
                  <a href="https://www.linkedin.com/in/eudinson-uy-6970a1128/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-slate-100 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs font-normal">React</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">TypeScript</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">Redux</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">MUI</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">Node.js</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">Express.js</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">PostgreSQL</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">SQL Server</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">Socket.IO</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">Azure</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">WordPress</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">JWT</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">AI Automation</Badge>
                  <Badge variant="secondary" className="text-xs font-normal">AI Integration</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <Card key={index} className="border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <CardContent className="pt-4 pb-3 text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 mb-2">
                    <stat.icon className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="py-12">
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Experience
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Building innovative solutions across various tech companies
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="space-y-1">
                      <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        IT Consultant / Full Stack Web Application Developer
                      </CardTitle>
                      <CardDescription className="text-xs">SSY (Contract) — Remote</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs w-fit">
                      Aug 2023 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex gap-2 items-start">
                      <span className="text-slate-400 dark:text-slate-600 mt-1.5">•</span>
                      <span>Delivering full-stack solutions using React.js, Node.js, Express, and PostgreSQL</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-slate-400 dark:text-slate-600 mt-1.5">•</span>
                      <span>Building secure, scalable web applications deployed on Microsoft Azure</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-slate-400 dark:text-slate-600 mt-1.5">•</span>
                      <span>Providing ongoing technical consulting and improving internal enterprise tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="space-y-1">
                      <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        Full Stack Web Application Developer
                      </CardTitle>
                      <CardDescription className="text-xs">F3O Offshore Services (Contract) — Dubai, UAE</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs w-fit">
                      Jun 2021 - Aug 2023
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex gap-2 items-start">
                      <span className="text-slate-400 dark:text-slate-600 mt-1.5">•</span>
                      <span>Developed and maintained applications supporting offshore and marine operations</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-slate-400 dark:text-slate-600 mt-1.5">•</span>
                      <span>Built full-stack features using React.js, Node.js, Express, PostgreSQL, and MUI</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-slate-400 dark:text-slate-600 mt-1.5">•</span>
                      <span>Improved internal workflow efficiency through automation and system enhancements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="space-y-1">
                      <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        IT Support / Web Developer
                      </CardTitle>
                      <CardDescription className="text-xs">Mittal Facility Management UAE — Dubai, UAE</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs w-fit">
                      Mar 2019 - Aug 2020
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex gap-2 items-start">
                      <span className="text-slate-400 dark:text-slate-600 mt-1.5">•</span>
                      <span>Provided IT support, troubleshooting, and system maintenance</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-slate-400 dark:text-slate-600 mt-1.5">•</span>
                      <span>Developed internal tools using HTML, CSS, JavaScript, and basic backend scripting</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-slate-400 dark:text-slate-600 mt-1.5">•</span>
                      <span>Supported digital transformation by replacing manual processes with efficient web tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12">
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Featured Projects
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                A collection of projects that showcase my skills
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    Offshore Maritime Intelligence Platform
                    {false && <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />}
                  </CardTitle>
                  <CardDescription className="text-xs">Enterprise maritime intelligence solution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                    A system designed to efficiently manage and organize data and information related to vessels. Built using React.js and TypeScript on the frontend, with state management via Redux-Saga. Backend powered by Node.js and Express.js with PostgreSQL.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs font-normal">React.js</Badge>
                    <Badge variant="secondary" className="text-xs font-normal">TypeScript</Badge>
                    <Badge variant="secondary" className="text-xs font-normal">Node.js</Badge>
                    <Badge variant="secondary" className="text-xs font-normal">PostgreSQL</Badge>
                    <Badge variant="secondary" className="text-xs font-normal">Socket.IO</Badge>
                  </div>
                </CardContent>
              </Card>

              {[
                { title: 'Apphia Worship', desc: 'An app that provides lyrics and easy to understand chords exclusive only for praise & worship songs with the functionality to transpose the chord key of your choice.', link: 'https://apphia-worship.netlify.app/', tech: ['React.js', 'TypeScript', 'Redux', 'MUI'] },
                { title: 'Blu Subsea', desc: 'A static web that provides information about the company. Built with Next.js for server-side rendering and routing.', link: 'https://www.blusubsea.com/', tech: ['Next.js', 'Lottie', 'EmailJS'] },
                { title: 'Bent-Tech', desc: 'A static web that provides information about the company. Built with React.js and styled using MUI.', link: 'https://www.bent-tech.com/', tech: ['React.js', 'MUI', 'EmailJS'] },
                { title: 'Simple To-do List App', desc: 'Web app that allows user to add, edit, update, and delete task. Developed using React.js.', link: 'https://eudinson.github.io/todo-app-local-storage/', tech: ['React.js', 'CSS'] },
                { title: 'Ecommerce Demo Shop', desc: 'A demo e-commerce website showcasing product listings and basic user interaction features with Google OAuth authentication.', link: 'https://demo-shop-by-eudin.netlify.app/', tech: ['React.js', 'Google OAuth'] },
                { title: 'Play-A-Maze', desc: 'A WordPress-based semi e-commerce website that showcases detailed information about the company and its products.', link: 'https://plmaze.com/', tech: ['WordPress'] },
                { title: 'QPI Technical Services LLC', desc: 'A WordPress website designed to showcase company information, featuring integrated WhatsApp support.', link: 'https://qpi.ae/', tech: ['WordPress', 'WhatsApp'] },
                { title: 'Bible Quiz Game', desc: 'A fun and interactive Bible quiz game developed using C# WinForms with SQLite for local data storage.', link: 'https://eudinson.github.io/Bible-Quiz-Game/', tech: ['C#', 'WinForms', 'SQLite'] },
                { title: 'CGMI Church', desc: 'A WordPress website developed for a local church, featuring service information, upcoming events, media content, and contact details.', link: 'https://churchcgmi.com/', tech: ['WordPress'] },
              ].map((project, idx) => (
                <Card key={idx} className="border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                      {project.title}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                        </a>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <Badge key={i} variant="secondary" className="text-xs font-normal">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="accomplishments" className="py-12">
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Accomplishments
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Recognition and achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Associate Degree in Computer Service and Network Technology
                      </CardTitle>
                      <CardDescription className="text-xs mt-1">St. Augustine College, 2016</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Best in Software Development Project
                      </CardTitle>
                      <CardDescription className="text-xs mt-1">St. Augustine College, 2016</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Salutatorian Award Honor
                      </CardTitle>
                      <CardDescription className="text-xs mt-1">St. Augustine College, 2016</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <Card className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Let's Work Together
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <Button size="sm" className="gap-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900" asChild>
                    <a href="mailto:eudinson_uy29@yahoo.com">
                      <Mail className="h-3.5 w-3.5" />
                      eudinson_uy29@yahoo.com
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5" asChild>
                    <a href="tel:+639392498891">
                      <Phone className="h-3.5 w-3.5" />
                      +63 939 249 8891
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5" asChild>
                    <a href="https://github.com/Eudinson" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5" asChild>
                    <a href="https://www.linkedin.com/in/eudinson-uy-6970a1128/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 pt-2">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Worldwide Remote</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="relative border-t border-slate-200 dark:border-slate-800 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <p>© 2024 Eudinson Uy. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#about" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">About</a>
              <a href="#experience" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
