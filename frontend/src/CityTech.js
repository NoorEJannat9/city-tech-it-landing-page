import React from 'react';
import { CloudCheck, Headset, Lan, Code, Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

const CityTech = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <nav className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
          <div className="text-xl font-extrabold text-[#0E2A2A] uppercase tracking-wider">City Tech IT</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-[#00A19E] font-bold border-b-2 border-[#00A19E] pb-1 text-sm" href="#services">Services</a>
            <a className="text-gray-600 hover:text-[#00A19E] transition-colors text-sm font-medium" href="#solutions">Solutions</a>
            <a className="text-gray-600 hover:text-[#00A19E] transition-colors text-sm font-medium" href="#contact">Contact</a>
          </div>
          <button className="bg-[#00A19E] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all">Request Quote</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-[#00A19E] text-xs font-bold mb-6 uppercase tracking-widest">Future-Proof Infrastructure</span>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Architecting <span className="text-[#00A19E]">Reliability</span> for the Modern Enterprise
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl">
              Comprehensive managed IT services, network engineering, and cybersecurity solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#00A19E] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-[#008280] transition-all">Request Quote</button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000" alt="Server" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-10 rounded-2xl border border-slate-100 shadow-sm group">
              <div className="bg-teal-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                {/* Changed CloudDone to CloudCheck */}
                <CloudCheck className="text-[#00A19E]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Managed Services</h3>
              <p className="text-slate-600 mb-8">Proactive 24/7 monitoring and strategic IT planning.</p>
              <div className="flex gap-4 text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00A19E]" /> Remote Monitoring</div>
              </div>
            </div>

            <div className="bg-[#00A19E] text-white p-10 rounded-2xl shadow-lg">
              {/* Changed SupportAgent to Headset */}
              <Headset className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Expert IT Support</h3>
              <p className="opacity-90">Instant technical assistance for your team.</p>
              <button className="flex items-center gap-2 mt-8 font-bold">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-[#0E2A2A] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-1/3 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-6 text-sm">
                <div className="flex items-center gap-4"><Mail className="text-[#00A19E]" /> solutions@citytechit.com</div>
                <div className="flex items-center gap-4"><Phone className="text-[#00A19E]" /> +1 (800) CITY-TECH</div>
              </div>
            </div>
            <div className="md:w-2/3 bg-white p-12">
              <form className="grid gap-6">
                <input className="border-b-2 border-slate-100 py-3 outline-none" placeholder="Full Name" />
                <button type="button" className="bg-[#00A19E] text-white px-10 py-4 rounded-xl font-bold">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityTech;