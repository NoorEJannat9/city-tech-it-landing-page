import React, { useState, useEffect } from 'react';

const CityTechLanding = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: '',
    serviceInterest: 'Managed IT Services',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which elements are in view
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
          setVisibleElements(prev => ({
            ...prev,
            [el.id]: true
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const storedInquiries = JSON.parse(localStorage.getItem('citytech_inquiries')) || [];
      storedInquiries.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('citytech_inquiries', JSON.stringify(storedInquiries));

      setSubmitted(true);
      setFormData({
        fullName: '',
        companyEmail: '',
        serviceInterest: 'Managed IT Services',
        message: ''
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 161, 158, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 161, 158, 0.6);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes typewriter {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-rotate {
          animation: rotate 20s linear infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(14, 42, 42, 0.15);
        }

        .gradient-animate {
          background: linear-gradient(
            135deg,
            #00A19E,
            #006765,
            #00A19E
          );
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .button-ripple {
          position: relative;
          overflow: hidden;
        }

        .button-ripple::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .button-ripple:active::after {
          width: 300px;
          height: 300px;
        }

        .line-animation {
          position: relative;
          overflow: hidden;
        }

        .line-animation::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }

        .service-card {
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, transparent, rgba(0, 161, 158, 0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .service-card:hover::before {
          transform: translateX(100%);
        }

        .parallax {
          transition: transform 0.5s ease-out;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <nav className="flex justify-between items-center h-20 px-8 max-w-full mx-auto">
          <div className="text-xl font-extrabold text-[#0E2A2A] uppercase tracking-wider hover:text-[#00A19E] transition-colors cursor-pointer">
            City Tech IT
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#00A19E] font-semibold text-sm cursor-pointer hover:opacity-80 transition-all relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A19E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('why-choose')}
              className="text-gray-600 hover:text-[#00A19E] transition-colors text-sm font-medium cursor-pointer relative group"
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A19E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-[#00A19E] transition-colors text-sm font-medium cursor-pointer relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A19E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-gray-600 text-sm font-medium px-4 py-2 hover:bg-gray-50 transition-all cursor-pointer rounded">
              Support
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#00A19E] text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-[#008280] active:scale-95 transition-all cursor-pointer button-ripple shadow-lg hover:shadow-xl"
            >
              Request Quote
            </button>
          </div>
        </nav>
      </header>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-20">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-20 w-96 h-96 bg-[#00A19E] rounded-full opacity-10 animate-float"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#006765] rounded-full opacity-5 animate-float" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <span 
                  className="inline-block px-3 py-1 rounded-full bg-[#E0F2F1] text-[#00A19E] text-xs font-bold mb-6 uppercase tracking-wide animate-fade-in-up"
                  data-animate
                >
                  Future-Proof Infrastructure
                </span>
                <h1 
                  className="text-5xl lg:text-6xl font-bold text-[#0E2A2A] mb-6 leading-tight animate-fade-in-up delay-100"
                  data-animate
                  style={{animation: 'fadeInUp 0.6s ease-out 0.1s both'}}
                >
                  Architecting <span className="text-[#00A19E] relative inline-block">
                    Reliability
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#00A19E] opacity-30"></span>
                  </span> for the Modern Enterprise
                </h1>
                <p 
                  className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed animate-fade-in-up delay-200"
                  data-animate
                  style={{animation: 'fadeInUp 0.6s ease-out 0.2s both'}}
                >
                  Comprehensive managed IT services, network engineering, and cybersecurity solutions designed to scale with your business while ensuring zero-downtime performance.
                </p>
                <div 
                  className="flex flex-wrap gap-4 animate-fade-in-up delay-300"
                  data-animate
                  style={{animation: 'fadeInUp 0.6s ease-out 0.3s both'}}
                >
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-[#00A19E] text-white px-8 py-4 rounded-md font-bold hover:bg-[#008280] transition-all cursor-pointer button-ripple shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Request Quote
                  </button>
                  <button className="border-2 border-[#00A19E] text-[#00A19E] bg-white px-8 py-3 rounded-md font-bold hover:bg-[#E0F2F1] transition-all cursor-pointer hover:scale-105 transform">
                    View Case Studies
                  </button>
                </div>
              </div>
              <div className="relative">
                <div 
                  className="rounded-lg overflow-hidden shadow-xl animate-fade-in-up delay-200 parallax hover-lift"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out 0.2s both',
                    transform: `translateY(${scrollY * 0.1}px)`
                  }}
                >
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Clean and high-tech server room with glowing cyan LED lights" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIWqk-tkFBpem1PNjk848L8BYqh_5WkEOydQLPqLEKfbSCDJ_DUm-mRAUrqR264jHzEr30oKJiW3mFpEOw8AYomtkBve3sm655W6LPJpV4ZS4hcAHA973z7U89ShxQmQMLIfoFcfWP7OyLuZTP3R5AgF1CAX5PfJfukQlMF52D0I06RXYFS_AphGrJYwtH28GtKM4GpGIwLUCvhR1you-Lai634qoTkIHyQ_YAMkJPiegD1ebCGn82pisRdpRj3m6m5r1ZE_4IwKq8" 
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-[200px] border-2 border-gray-100 animate-fade-in-up delay-400 hover-lift hover:border-[#00A19E] transition-colors" style={{animation: 'fadeInUp 0.6s ease-out 0.4s both'}}>
                  <p className="text-[#00A19E] font-bold text-2xl mb-1 animate-pulse">99.9%</p>
                  <p className="text-gray-600 text-sm font-medium">Average Uptime for Managed Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-[#E0F2F1]" id="services">
          <div className="max-w-7xl mx-auto px-8">
            <div 
              className="text-center mb-20 animate-fade-in-up"
              id="services-header"
              data-animate
              style={visibleElements['services-header'] ? {animation: 'fadeInUp 0.6s ease-out'} : {}}
            >
              <h2 className="text-4xl font-bold text-[#0E2A2A] mb-4">
                Precision Engineering Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our holistic approach to IT management ensures your infrastructure isn't just maintained—it's optimized for peak efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Managed Services */}
              <div 
                className="bg-white p-8 rounded-lg shadow-md hover-lift service-card"
                id="service-1"
                data-animate
                style={visibleElements['service-1'] ? {animation: 'fadeInUp 0.6s ease-out'} : {}}
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">☁️</div>
                <h3 className="text-2xl font-bold text-[#0E2A2A] mb-4">Managed Services</h3>
                <p className="text-gray-600 mb-6">
                  Proactive 24/7 monitoring, patch management, and strategic IT planning to prevent issues before they impact your operations.
                </p>
                <div className="space-y-3">
                  {['Remote Monitoring', 'Disaster Recovery', 'Security Patching', 'IT Consulting'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                      <span className="text-[#00A19E] text-lg font-bold">✓</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* IT Support */}
              <div 
                className="bg-[#006765] text-white p-8 rounded-lg shadow-md hover-lift service-card overflow-hidden"
                id="service-2"
                data-animate
                style={visibleElements['service-2'] ? {animation: 'fadeInUp 0.6s ease-out 0.1s'} : {}}
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-6">👨‍💼</div>
                  <h3 className="text-2xl font-bold mb-4">Expert IT Support</h3>
                  <p className="text-white/90 mb-8">
                    Instant technical assistance for your team, minimizing downtime and maximizing productivity with our helpdesk.
                  </p>
                </div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity cursor-pointer text-[#00A19E] transform hover:translate-x-2 transition-transform"
                >
                  Learn More →
                </button>
              </div>

              {/* Network Solutions */}
              <div 
                className="bg-white p-8 rounded-lg shadow-md hover-lift service-card"
                id="service-3"
                data-animate
                style={visibleElements['service-3'] ? {animation: 'fadeInUp 0.6s ease-out 0.2s'} : {}}
              >
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-2xl font-bold text-[#0E2A2A] mb-4">Network Solutions</h3>
                <p className="text-gray-600">
                  Architecture, deployment, and optimization of high-speed enterprise networks and secure SD-WAN configurations.
                </p>
              </div>

              {/* Software Development */}
              <div 
                className="md:col-span-2 lg:col-span-2 bg-[#0E2A2A] text-white p-8 rounded-lg shadow-md hover-lift service-card flex items-center gap-8 overflow-hidden"
                id="service-4"
                data-animate
                style={visibleElements['service-4'] ? {animation: 'fadeInUp 0.6s ease-out 0.3s'} : {}}
              >
                <div className="flex-1 relative z-10">
                  <div className="text-5xl mb-6">💻</div>
                  <h3 className="text-2xl font-bold mb-4">Software Development</h3>
                  <p className="text-gray-300">
                    Custom business applications and integrations designed to streamline your unique workflows and data management.
                  </p>
                </div>
                <div className="hidden lg:block w-1/3 rounded-lg overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" 
                    alt="Close up of high-resolution code on a laptop screen" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzJHvUwhFNhsYPZqSw66SPP4TEsjxxNiKkcwmjBc-klniW2Zz606FlRp8kYOGlg1iDmIDI97HIc9gdA0H6wyR351u0Ii1iEGbXobdMlvFkoU1klqQy-hGKqZScWpV8M5xFHLZAFCertowua8QVTC8n8xyaQyhnRRMhasMfZEoa4pvjMKX2zojnv_K7nX0-3hlmS1THLQo61npZg8dYzqgwQ9laqHFLrGz8RmsfJgrFT2bXyURlD4PxKPM18dN4hyWxGI7YC1Qxp_3c" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white relative overflow-hidden" id="why-choose">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-5 w-80 h-80 bg-[#00A19E] rounded-full opacity-5 animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-[#0E2A2A] mb-12 leading-tight animate-slide-in-left" id="why-title" data-animate>
                  Built on Trust,<br />Focused on <span className="text-[#00A19E]">Precision</span>
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: '✓',
                      title: 'Unrivaled Reliability',
                      desc: 'We utilize enterprise-grade monitoring systems to ensure your core infrastructure remains operational around the clock.'
                    },
                    {
                      icon: '🧠',
                      title: 'Architectural Expertise',
                      desc: 'Our team consists of certified architects with deep expertise in cloud, on-premise, and hybrid environments.'
                    },
                    {
                      icon: '🛡️',
                      title: '24/7 Proactive Support',
                      desc: 'Support isn\'t just reactive; we constantly scan for vulnerabilities and performance bottlenecks to keep you ahead.'
                    }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex gap-6 animate-fade-in-up hover:translate-x-2 transition-transform"
                      id={`why-item-${idx}`}
                      data-animate
                      style={visibleElements[`why-item-${idx}`] ? {animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s`} : {}}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#E0F2F1] text-[#00A19E] text-xl font-bold hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#0E2A2A] mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div 
                  className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover-lift animate-slide-in-right"
                  id="why-img-1"
                  data-animate
                >
                  <img 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" 
                    alt="Professional IT engineers working together" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXnFMwjTup2pGZ5-Sg7UAcW8cffS_qXddBVS-ihpH6ljc1vcYejz8K-cFUqtQOZEChpJyLItG7V0Elp4NgWgKeXIWuVR5UKsl7EtvKFFv6oHeemE_tgPtX10QNhFZwY7JrBwZ23NeGyUSDDz7a5WupbBH-CXFtCSba8QbV9haskVd0CjXKbKVjqlm_w5mEYsv6I0b4U8epW-ssTRnJnKODdA_vRJdNaOsSZBn5PCXub4JYLziZp9-ThNne6fbbF0Snn2F-gKFn-rGH" 
                  />
                </div>
                <div className="space-y-4">
                  <div 
                    className="aspect-square rounded-lg overflow-hidden shadow-lg hover-lift animate-slide-in-right"
                    id="why-img-2"
                    data-animate
                    style={{animationDelay: '0.1s'}}
                  >
                    <img 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" 
                      alt="Abstract visualization of digital data networking" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtKnRlbyal3WjjgdXXOelmjTJ6hNSAqjpvcevM8sRCYEItS17-7u9uOFSfqnk6tpCgi6MZq_XCCgRGdQAU-QxkqlKQHWCQJDBQbSUHmSk8vxfm0HYzE2zFSrYteGE0FHgNzFiFi0u6Z6UNUnlqM0-MlD-nWNxYiZN5rb4pycgl1o2egM1l8sX3vMsr2EZmB9TBui8bDXukZjZjZYqvAcpjkxYUH8aDP9wX14vMaWdkvK8WyA9vVC3vJ9sitgly5n6XGfL3ymhRrqcp" 
                    />
                  </div>
                  <div 
                    className="bg-[#0E2A2A] p-8 rounded-lg aspect-square flex flex-col justify-center items-center text-center hover-lift animate-slide-in-right"
                    id="why-box"
                    data-animate
                    style={{animationDelay: '0.2s'}}
                  >
                    <p className="text-[#00A19E] font-bold text-4xl mb-2 animate-pulse">15+</p>
                    <p className="text-white font-semibold">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#E0F2F1]" id="contact">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-[#0E2A2A] p-10 text-white flex flex-col justify-between animate-slide-in-left" id="contact-info" data-animate>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Let's Secure Your Future</h2>
                  <p className="text-gray-300 mb-12 leading-relaxed">
                    Connect with our consultants to discuss your infrastructure needs and receive a tailored quote.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    {icon: '✉️', text: 'info@citytechit.com'},
                    {icon: '📞', text: '01998-006548'},
                    {icon: '📍', text: 'Sector-3, Road 2 Plot 34, Uttara( Rajlokkhi), Dhaka, Bangladesh'}
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
                      <span className="text-[#00A19E] text-2xl">{item.icon}</span>
                      <span className="text-white font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-2/3 p-10 animate-slide-in-right" id="contact-form" data-animate>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded animate-fade-in-up">
                    <p className="text-green-700 font-semibold">✅ Thank you! Your inquiry has been received. We'll contact you soon.</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="transform hover:scale-105 transition-transform origin-left">
                    <label className="block text-sm font-semibold text-[#0E2A2A] mb-2">Full Name</label>
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-50 border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-[#00A19E] transition-all focus:bg-white" 
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="transform hover:scale-105 transition-transform origin-left">
                    <label className="block text-sm font-semibold text-[#0E2A2A] mb-2">Company Email</label>
                    <input 
                      type="email"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-50 border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-[#00A19E] transition-all focus:bg-white" 
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="md:col-span-2 transform hover:scale-105 transition-transform origin-left">
                    <label className="block text-sm font-semibold text-[#0E2A2A] mb-2">Service Interest</label>
                    <select 
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-50 border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-[#00A19E] transition-all focus:bg-white"
                    >
                      <option>Managed IT Services</option>
                      <option>Network Infrastructure</option>
                      <option>Cybersecurity Audit</option>
                      <option>Custom Software Development</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 transform hover:scale-105 transition-transform origin-left">
                    <label className="block text-sm font-semibold text-[#0E2A2A] mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-50 border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-[#00A19E] transition-all focus:bg-white resize-none" 
                      placeholder="Tell us about your IT challenges..."
                      rows="4"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="bg-[#00A19E] text-white px-10 py-3 rounded-md font-bold hover:bg-[#008280] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer button-ripple shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      {loading ? 'Sending...' : 'Send Inquiry'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0E2A2A] w-full py-16 px-8">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="animate-fade-in-up" id="footer-brand" data-animate>
            <div className="text-xl font-bold text-white mb-4 hover:text-[#00A19E] transition-colors cursor-pointer">City Tech IT</div>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Premier managed service provider and infrastructure architecture firm helping businesses scale through technology.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Links',
                links: ['Privacy Policy', 'Terms of Service']
              },
              {
                title: 'Resources',
                links: ['Security', 'Sitemap']
              },
              {
                title: 'Company',
                links: ['Careers']
              }
            ].map((col, idx) => (
              <div key={idx} className="flex flex-col gap-4 animate-fade-in-up" style={{animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s`}}>
                <span className="text-white font-semibold text-sm">{col.title}</span>
                {col.links.map((link, linkIdx) => (
                  <a 
                    key={linkIdx}
                    href="#" 
                    className="text-gray-400 hover:text-[#00A19E] transition-colors text-sm cursor-pointer transform hover:translate-x-1"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 City Tech IT. Managed Services & Infrastructure Architects.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-400 cursor-pointer hover:text-[#00A19E] transition-colors text-2xl hover:scale-125 transform">🌐</span>
            <span className="text-gray-400 cursor-pointer hover:text-[#00A19E] transition-colors text-2xl hover:scale-125 transform">📊</span>
            <span className="text-gray-400 cursor-pointer hover:text-[#00A19E] transition-colors text-2xl hover:scale-125 transform">🔧</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CityTechLanding;