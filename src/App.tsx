import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView, animate } from 'motion/react';
import { 
  ShieldCheck, 
  Smartphone, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Globe, 
  Layers,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  FileText,
  BadgeCheck,
  CreditCard,
  Rocket,
  Building2,
  Target,
  Shield
} from 'lucide-react';

// --- Shared Components ---

const FadeInWhenVisible: React.FC<{ 
  delay?: number, 
  direction?: 'up' | 'down' | 'left' | 'right',
  className?: string,
  children?: React.ReactNode
}> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = ""
}) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2,
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    { 
      logo: "PREMIER ESCAPE", 
      logoColor: "text-emerald-600",
      text: "Love that the waiver app resets automatically for the next customer. It makes sign in very efficient.",
      company: "Premier Escape Rooms"
    },
    { 
      logo: "ALTA MOTORS", 
      logoColor: "text-orange-500",
      text: "I love the offline app from WaiverForever. Very happy you added the API, which helps us a lot to configure waivers and users and better enterprise tools for managing users.",
      company: "Alta Motors"
    },
    { 
      logo: "STANS NO TUBES", 
      logoColor: "text-red-600",
      text: "WaiverForever provides the flexibility to use it for different things includes waivers, surveys, and analytics. Best of the best.",
      company: "Stans No Tubes"
    },
  ];

  return (
    <div className="relative max-w-[1360px] mx-auto px-6 py-12">
      {/* Background Quotation Marks */}
      <div className="absolute top-0 left-0 text-[12rem] leading-none text-brand/5 font-serif select-none pointer-events-none">“</div>
      <div className="absolute bottom-0 right-0 text-[12rem] leading-none text-brand/5 font-serif select-none pointer-events-none">”</div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-2xl md:text-3xl font-black text-brand uppercase tracking-widest mb-8">
          HEAR FROM YOUR PEERS
        </h2>
        <button className="px-8 py-2.5 rounded-full border border-brand/40 text-brand font-medium text-sm hover:bg-brand hover:text-white transition-all">
          See all customer experiences
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((t, i) => (
          <FadeInWhenVisible key={i} delay={i * 0.1}>
            <div className="bg-white p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-50 flex flex-col items-center text-center h-full min-h-[450px] justify-center hover:shadow-2xl transition-shadow duration-500">
              <div className={`text-2xl font-black mb-12 ${t.logoColor} tracking-tighter italic`}>
                {t.logo}
              </div>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                “{t.text}”
              </p>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>

      {/* Navigation Dots (Visual only for now as per screenshot) */}
      <div className="flex justify-center items-center gap-4 mt-16">
        <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          <div className="w-8 h-1.5 rounded-full bg-brand" />
          <div className="w-8 h-1.5 rounded-full bg-slate-200" />
          <div className="w-8 h-1.5 rounded-full bg-slate-200" />
          <div className="w-8 h-1.5 rounded-full bg-slate-200" />
        </div>
        <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// --- Version 1: Modern SaaS (Clean & Trustworthy) ---

const VersionOne = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="https://www.waiverforever.com/static/images/logo.png" alt="WaiverForever" className="h-8" referrerPolicy="no-referrer" />
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            <button className="flex items-center gap-1 text-[13px] font-bold text-slate-600 uppercase tracking-wider hover:text-brand transition-colors">
              功能 <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-[13px] font-bold text-slate-600 uppercase tracking-wider hover:text-brand transition-colors">定价</button>
            <button className="flex items-center gap-1 text-[13px] font-bold text-slate-600 uppercase tracking-wider hover:text-brand transition-colors">
              客户 <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-[13px] font-bold text-slate-600 uppercase tracking-wider hover:text-brand transition-colors">常见问题</button>
            <button className="text-[13px] font-bold text-slate-600 uppercase tracking-wider hover:text-brand transition-colors">企业版</button>
            <button className="text-[13px] font-bold text-brand uppercase tracking-wider border-b-2 border-brand">关于我们</button>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-[#4173E3] to-[#6394FF] text-white px-8 py-3 rounded-full text-[13px] font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-brand/20 transition-all">
              免费试用
            </button>
            <button className="border-2 border-brand text-brand px-8 py-3 rounded-full text-[13px] font-bold uppercase tracking-widest hover:bg-brand hover:text-white transition-all">
              登录
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent opacity-70" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px]" 
          />
        </div>

        <div className="max-w-[1360px] mx-auto text-center relative z-10">
          <FadeInWhenVisible>
            <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-6">
              自2011年起
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              简化您的免责申明。<br />
              <span className="text-brand">助力您的业务腾飞。</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              我们已帮助企业将纸质混乱转为数字化简洁，持续超过十年。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-brand text-white px-8 py-4 rounded-[32px] border border-brand font-bold text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand/25 flex items-center justify-center gap-2 group">
                开始免费试用
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-slate-50 text-slate-900 px-8 py-4 rounded-[32px] border-2 border-slate-200 font-bold text-lg hover:bg-slate-100 transition-all">
                联系销售
              </button>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: 'Businesses', value: 40000, suffix: '+', icon: Users, detail: 'Trusted by companies in 150+ countries' },
              { label: 'Years', value: 15, suffix: '+', icon: Globe, detail: 'Pioneering digital waivers since 2011' },
              { label: 'Integrations', value: 5000, suffix: '+', icon: Layers, detail: 'Seamlessly connects with your existing tools' },
            ].map((stat, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand/10 transition-colors" />
                  <div className="w-14 h-14 bg-brand/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    <stat.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-4">{stat.label}</div>
                  <p className="text-slate-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {stat.detail}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <FadeInWhenVisible direction="right" className="lg:w-1/3 sticky top-32">
              <div className="space-y-6">
                <span className="text-brand font-bold uppercase tracking-widest text-sm">About Us</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  Who We Are
                </h2>
                <div className="w-16 h-1.5 bg-brand rounded-full" />
                <p className="text-xl text-slate-600 font-medium">
                  The premier digital waiver solution, trusted by over 40,000 businesses worldwide.
                </p>
              </div>
            </FadeInWhenVisible>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeInWhenVisible delay={0.1} className="md:col-span-2">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row gap-8 items-center group hover:bg-white hover:shadow-2xl hover:border-brand/20 transition-all duration-500">
                  <div className="w-20 h-20 shrink-0 bg-brand/10 rounded-3xl flex items-center justify-center group-hover:bg-brand group-hover:rotate-6 transition-all duration-500">
                    <Target className="w-10 h-10 text-brand group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Purpose-Built, Not Generic</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      We pioneered purpose-built waiver management, not a generic form tool, but a system designed for businesses that need to collect signatures, protect themselves legally, and deliver great customer experiences.
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                      <Globe className="w-8 h-8 text-brand" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Today, we serve customers in 150+ countries across 16+ industries, from local fitness studios to multi-location enterprises.
                    </p>
                    <div className="mt-8 flex gap-6">
                      <div>
                        <div className="text-2xl font-bold">150+</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Countries</div>
                      </div>
                      <div className="w-px h-10 bg-white/10" />
                      <div>
                        <div className="text-2xl font-bold">16+</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Industries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.3}>
                <div className="bg-brand p-10 rounded-[2.5rem] text-white h-full relative overflow-hidden group">
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Trusted Community</h3>
                    <p className="text-white/80 leading-relaxed">
                      WaiverForever is the premier digital waiver solution, trusted by over 40,000 businesses worldwide.
                    </p>
                    <div className="mt-8">
                      <div className="text-4xl font-black tracking-tighter">40,000+</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/60">Active Businesses</div>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-[1360px] mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Trust Us</h2>
              <p className="text-slate-600">Built for security, accessibility, and intelligence.</p>
            </div>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise-Grade Security',
                desc: 'SOC 2 Type II • ISO 27001 • GDPR • eIDAS compliant',
                icon: ShieldCheck
              },
              {
                title: 'Works Everywhere',
                desc: 'iOS, Android, Web, Kiosk — even offline',
                icon: Smartphone
              },
              {
                title: 'AI-Powered',
                desc: 'The smartest waiver builder on the market',
                icon: Cpu
              }
            ].map((feature, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand/30 hover:shadow-xl transition-all h-full">
                  <feature.icon className="w-10 h-10 text-brand mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#F8FAFF]">
        <div className="max-w-[1360px] mx-auto">
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1360px] mx-auto bg-gradient-to-r from-[#2B7FFF] via-[#4173E3] to-[#5AA1FF] rounded-[2rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Abstract background elements */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          
          {/* Subtle theme-related background icons */}
          <div className="absolute top-10 left-1/4 opacity-10 -rotate-12">
            <FileText className="w-24 h-24 text-white" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 opacity-5 rotate-12">
            <ShieldCheck className="w-32 h-32 text-white" />
          </div>
          <div className="absolute top-1/2 left-10 opacity-10 rotate-45">
            <CheckCircle2 className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -bottom-5 right-1/4 opacity-10 -rotate-12">
            <Layers className="w-20 h-20 text-white" />
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible direction="left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  Get WaiverForever to <br />
                  Streamline Your Business
                </h2>
                <button className="bg-white text-[#4173E3] px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl uppercase tracking-wider">
                  Try For Free
                </button>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible direction="right">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center relative">
                    <CreditCard className="w-6 h-6 text-white" />
                    <div className="absolute w-7 h-0.5 bg-white rotate-45" />
                  </div>
                  <span className="text-xl font-medium">No Credit Card Needed</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-medium">Mostly used digital waiver solution</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-medium">
                    Free <span className="underline decoration-2 underline-offset-4">Starter Plan</span> Forever
                  </span>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Industries */}
            <div>
              <h3 className="font-bold text-slate-900 mb-8">Industries</h3>
              <ul className="space-y-4 text-[15px] text-slate-500">
                <li><a href="#" className="hover:text-brand transition-colors">Salons, Spas & Wellness</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Gyms, Fitness & Yoga Studios</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Sports Teams, Leagues & Camps</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Tattoo & Piercing Studios</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Entertainment & Activity Centers</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Events, Parties & Venues</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Tour & Activity Operators</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Clinics & Medical Practices</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Schools & Training Centers</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Non-Profits & Volunteer Groups</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Retail Stores & Services</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Equipment & Property Rentals</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Auto Repair & Service Shops</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Pet Care, Grooming & Daycare</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Photography & Video Services</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Legal & Consulting Firms</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Waiverforever vs Docusign</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Waiverforever vs SmartWaiver</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Release of Liability Form</a></li>
              </ul>
            </div>

            {/* Using WaiverForever */}
            <div>
              <h3 className="font-bold text-slate-900 mb-8">Using WaiverForever</h3>
              <ul className="space-y-4 text-[15px] text-slate-500">
                <li className="flex items-center gap-2">
                  <a href="#" className="hover:text-brand transition-colors">AI Generator</a>
                  <span className="bg-[#22c55e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">New</span>
                </li>
                <li><a href="#" className="hover:text-brand transition-colors">Product Features</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Template Gallery</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Digital Signature</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Payment</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Customized PDF Generation</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Request & Assign Forms</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Free Plan</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">App</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Developer</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Handy Links */}
            <div>
              <h3 className="font-bold text-slate-900 mb-8">Handy Links</h3>
              <ul className="space-y-4 text-[15px] text-slate-500 mb-12">
                <li><a href="#" className="hover:text-brand transition-colors">Download iPhone/iPad App</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Download Android App</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
              </ul>
              
              {/* G2 Badge Placeholder */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 inline-block shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#ff4e00] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">Read our reviews on</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#ff4e00] rounded flex items-center justify-center text-white font-black text-lg">G</div>
                  <span className="font-black text-xl tracking-tighter text-slate-900">G2</span>
                </div>
              </div>

              <div className="mt-8">
                <button className="flex items-center gap-2 text-slate-500 hover:text-brand transition-colors text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  English <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Logo and Copyright */}
            <div className="lg:text-right flex flex-col lg:items-end">
              <img src="https://www.waiverforever.com/static/images/logo.png" alt="WaiverForever" className="h-10 mb-8" referrerPolicy="no-referrer" />
              <p className="text-slate-400 text-sm">
                ©2009~2026 Aries App Inc.,<br />all rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Version 2: Editorial Bold (Dynamic & High Impact) ---

const VersionTwo = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-brand selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-8 h-24 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="https://www.waiverforever.com/static/images/logo-white.png" alt="WaiverForever" className="h-8" referrerPolicy="no-referrer" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <button className="flex items-center gap-1 text-[13px] font-bold text-white/70 uppercase tracking-wider hover:text-white transition-colors">
              Feature <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-[13px] font-bold text-white/70 uppercase tracking-wider hover:text-white transition-colors">Pricing</button>
            <button className="flex items-center gap-1 text-[13px] font-bold text-white/70 uppercase tracking-wider hover:text-white transition-colors">
              Customers <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-[13px] font-bold text-white/70 uppercase tracking-wider hover:text-white transition-colors">FAQ</button>
            <button className="text-[13px] font-bold text-white/70 uppercase tracking-wider hover:text-white transition-colors">Enterprise</button>
            <button className="text-[13px] font-bold text-brand uppercase tracking-wider border-b-2 border-brand">About Us</button>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-[#4173E3] to-[#6394FF] text-white px-8 py-3 rounded-full text-[13px] font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-brand/20 transition-all">
              Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Log In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1e293b_0%,_#020617_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[150px] opacity-30" 
          />
          <motion.div 
            animate={{ 
              x: [0, -150, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[180px] opacity-20" 
          />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 2000 - 1000, 
                y: Math.random() * 2000 - 1000,
                opacity: Math.random() * 0.5
              }}
              animate={{ 
                y: [null, Math.random() * -500 - 200],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute w-1 h-1 bg-brand rounded-full"
            />
          ))}
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="max-w-[1360px] mx-auto w-full z-10"
        >
          <FadeInWhenVisible direction="down">
            <div className="text-brand font-black uppercase tracking-[0.3em] text-sm mb-6">Established 2011</div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-12">
              Simplify<br />
              Your<br />
              <span className="text-brand">Waiver.</span>
            </h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
              <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-medium leading-tight">
                Since 2011, we've helped businesses replace paper chaos with digital simplicity.
              </p>
              <div className="flex gap-4">
                <button className="bg-brand text-white px-10 py-5 rounded-none font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Start Trial
                </button>
                <button className="border-2 border-white text-white px-10 py-5 rounded-none font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Contact
                </button>
              </div>
            </div>
          </FadeInWhenVisible>
        </motion.div>
        
        {/* Background Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-brand/20 rounded-full blur-[120px] -z-0" />
      </section>

      {/* Stats - Horizontal Scroll Style */}
      <section className="py-40 border-y border-white/10">
        <div className="max-w-[1360px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { label: 'Businesses', value: '40K+', sub: 'Worldwide' },
              { label: 'Years', value: '15+', sub: 'Experience' },
              { label: 'Integrations', value: '5K+', sub: 'Connected' },
            ].map((stat, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="group">
                  <div className="text-8xl font-black tracking-tighter text-white/20 group-hover:text-brand transition-colors duration-500 mb-4">
                    {stat.value}
                  </div>
                  <div className="text-2xl font-bold uppercase tracking-tight mb-1">{stat.label}</div>
                  <div className="text-slate-500 uppercase tracking-widest text-xs font-bold">{stat.sub}</div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are - Split Layout */}
      <section className="py-40 px-8">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
          <FadeInWhenVisible direction="right">
            <div className="sticky top-40">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Who<br />We Are
              </h2>
              <div className="w-20 h-2 bg-brand mb-12" />
              <p className="text-2xl text-slate-400 font-medium leading-snug">
                The premier digital waiver solution, trusted by over 40,000 businesses worldwide.
              </p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="left" delay={0.2}>
            <div className="space-y-16">
              <div className="p-12 bg-white/5 border border-white/10 hover:border-brand/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand/20 rounded-xl flex items-center justify-center mb-8">
                    <Target className="w-8 h-8 text-brand" />
                  </div>
                  <span className="text-brand font-black text-4xl mb-6 block">01</span>
                  <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">Purpose-Built</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    We pioneered purpose-built waiver management, not a generic form tool, but a system designed for businesses that need to collect signatures, protect themselves legally, and deliver great customer experiences.
                  </p>
                </div>
              </div>
              <div className="p-12 bg-white/5 border border-white/10 hover:border-brand/50 transition-all group relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand/20 rounded-xl flex items-center justify-center mb-8">
                    <Globe className="w-8 h-8 text-brand" />
                  </div>
                  <span className="text-brand font-black text-4xl mb-6 block">02</span>
                  <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">Global Reach</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Today, we serve customers in 150+ countries across 16+ industries, from local fitness studios to multi-location enterprises.
                  </p>
                  <div className="mt-8 flex gap-12">
                    <div>
                      <div className="text-4xl font-black">150+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Countries</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black">16+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Industries</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12 bg-brand text-white border border-brand transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-8">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white/50 font-black text-4xl mb-6 block">03</span>
                  <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">Trusted Community</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    WaiverForever is the premier digital waiver solution, trusted by over 40,000 businesses worldwide.
                  </p>
                  <div className="mt-8">
                    <div className="text-6xl font-black tracking-tighter">40,000+</div>
                    <div className="text-xs text-white/50 uppercase tracking-widest">Active Businesses</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Why Trust Us - Grid */}
      <section className="py-40 bg-white text-black">
        <div className="max-w-[1360px] mx-auto px-8">
          <FadeInWhenVisible>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-24">Why Trust Us</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-black/10 border border-black/10">
            {[
              { title: 'Security', desc: 'Enterprise-Grade Security SOC 2 Type II • ISO 27001 • GDPR • eIDAS compliant', icon: ShieldCheck },
              { title: 'Ubiquity', desc: 'Works Everywhere iOS, Android, Web, Kiosk — even offline', icon: Smartphone },
              { title: 'Intelligence', desc: 'AI-Powered The smartest waiver builder on the market', icon: Cpu },
            ].map((item, i) => (
              <div key={i} className="bg-white p-16 hover:bg-brand hover:text-white transition-all duration-500 group">
                <item.icon className="w-12 h-12 mb-12 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black uppercase tracking-tight mb-6">{item.title}</h3>
                <p className="text-lg font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Editorial Style */}
      <section className="py-40 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-8">
          <FadeInWhenVisible>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                Hear From<br />Your <span className="text-brand">Peers</span>
              </h2>
              <button className="bg-white text-black px-10 py-5 rounded-none font-black uppercase tracking-widest hover:bg-brand hover:text-white transition-all">
                See Experiences
              </button>
            </div>
          </FadeInWhenVisible>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                logo: "PREMIER ESCAPE", 
                text: "Love that the waiver app resets automatically for the next customer. It makes sign in very efficient.",
                company: "Premier Escape Rooms"
              },
              { 
                logo: "ALTA MOTORS", 
                text: "I love the offline app from WaiverForever. Very happy you added the API, which helps us a lot to configure waivers and users and better enterprise tools for managing users.",
                company: "Alta Motors"
              },
              { 
                logo: "STANS NO TUBES", 
                text: "WaiverForever provides the flexibility to use it for different things includes waivers, surveys, and analytics. Best of the best.",
                company: "Stans No Tubes"
              },
            ].map((t, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="p-12 bg-white/5 border border-white/10 hover:border-brand/50 transition-all group h-full flex flex-col justify-between">
                  <div>
                    <div className="text-brand font-black text-2xl mb-12 italic tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">
                      {t.logo}
                    </div>
                    <p className="text-2xl font-medium leading-tight mb-12">
                      “{t.text}”
                    </p>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {t.company}
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-8">
        <div className="max-w-[1360px] mx-auto border-t border-white/10 pt-40 text-center">
          <FadeInWhenVisible>
            <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
              Ready to<br />Simplify?
            </h2>
            <p className="text-2xl text-slate-400 mb-16 font-medium">No credit card required • Free plan forever</p>
            <button className="bg-brand text-white px-16 py-8 rounded-none font-black text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Get Started Now
            </button>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 px-8 border-t border-white/10 bg-slate-950">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-40">
            {/* Industries */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-12">Industries</h3>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-500">
                <li><a href="#" className="hover:text-brand transition-colors">Salons, Spas & Wellness</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Gyms, Fitness & Yoga Studios</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Sports Teams, Leagues & Camps</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Tattoo & Piercing Studios</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Entertainment & Activity Centers</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Events, Parties & Venues</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Tour & Activity Operators</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Clinics & Medical Practices</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Schools & Training Centers</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Non-Profits & Volunteer Groups</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Retail Stores & Services</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Equipment & Property Rentals</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Auto Repair & Service Shops</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Pet Care, Grooming & Daycare</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Photography & Video Services</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Legal & Consulting Firms</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Waiverforever vs Docusign</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Waiverforever vs SmartWaiver</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Release of Liability Form</a></li>
              </ul>
            </div>

            {/* Using WaiverForever */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-12">Using WaiverForever</h3>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-500">
                <li className="flex items-center gap-2">
                  <a href="#" className="hover:text-brand transition-colors">AI Generator</a>
                  <span className="bg-brand text-white text-[10px] font-black px-2 py-0.5 rounded-none uppercase">New</span>
                </li>
                <li><a href="#" className="hover:text-brand transition-colors">Product Features</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Template Gallery</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Digital Signature</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Payment</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Customized PDF Generation</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Request & Assign Forms</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Free Plan</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">App</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Developer</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Handy Links */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-12">Handy Links</h3>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-500 mb-16">
                <li><a href="#" className="hover:text-brand transition-colors">Download iPhone/iPad App</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Download Android App</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
              </ul>
              
              {/* G2 Badge - Dark Style */}
              <div className="bg-white/5 p-6 border border-white/10 inline-block group hover:border-brand transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-brand fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand flex items-center justify-center text-white font-black text-2xl">G</div>
                  <span className="font-black text-2xl tracking-tighter text-white">G2</span>
                </div>
              </div>

              <div className="mt-12">
                <button className="flex items-center gap-3 text-white/40 hover:text-brand transition-colors text-xs font-black uppercase tracking-widest">
                  <Globe className="w-4 h-4" />
                  English <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Logo and Copyright */}
            <div className="lg:text-right flex flex-col lg:items-end">
              <img src="https://www.waiverforever.com/static/images/logo-white.png" alt="WaiverForever" className="h-10 mb-8" referrerPolicy="no-referrer" />
              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] leading-relaxed">
                ©2009~2026 Aries App Inc.,<br />all rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [version, setVersion] = useState<'v1' | 'v2'>('v1');

  return (
    <div className="relative">
      {/* Version Switcher */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-black/90 backdrop-blur-xl p-2 rounded-full border border-white/10 shadow-2xl flex items-center gap-2">
        <button 
          onClick={() => setVersion('v1')}
          className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${version === 'v1' ? 'bg-brand text-white' : 'text-white/50 hover:text-white'}`}
        >
          Modern SaaS
        </button>
        <button 
          onClick={() => setVersion('v2')}
          className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${version === 'v2' ? 'bg-brand text-white' : 'text-white/50 hover:text-white'}`}
        >
          Editorial Bold
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={version}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {version === 'v1' ? <VersionOne /> : <VersionTwo />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
