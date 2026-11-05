import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, Mail, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';

interface ContactProps {
  initialProjectType?: string;
}

const PROJECT_TYPES = [
  'Full-Stack Web Application',
  'Frontend Development / React UI',
  'Backend & REST API Architecture',
  'Web Design & UI/UX Experience',
  'Database Development & MySQL',
  'AI Integration & Prompt Engineering',
  'Website Performance Optimization',
  'General Technical Consultation',
];

export const Contact: React.FC<ContactProps> = ({ initialProjectType = '' }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(initialProjectType || PROJECT_TYPES[0]);
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ fullName?: string; email?: string; message?: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [dispatchReady, setDispatchReady] = useState(false);

  useEffect(() => {
    if (initialProjectType) {
      setProjectType(initialProjectType);
    }
  }, [initialProjectType]);

  const validate = () => {
    const newErrors: { fullName?: string; email?: string; message?: string } = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }
    if (!email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!message.trim()) {
      newErrors.message = 'Please provide a message or project outline.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = () => {
    return `Hello ROCKS DEV! 👋
I would like to discuss a project with ROCKS DEV.

• Name: ${fullName.trim()}
• Email: ${email.trim()}
• Project Type: ${projectType}

• Project Brief:
${message.trim()}

Looking forward to connecting!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setDispatchReady(true);
    const text = constructWhatsAppMessage();
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/595986970971?text=${encoded}`;

    // Open WhatsApp in a new tab/window for desktop and mobile
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('rocks.d2vops@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden border-t border-[#8B5CF6]/15 bg-[#08080D]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8B5CF6]/8 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F7] font-heading leading-tight">
            Have an Idea? <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F7] via-[#D8B4FE] to-[#8B5CF6]">
              Let's Build It Together.
            </span>
          </h2>
          <p className="mt-4 text-base text-[#9696A5] leading-relaxed">
            Tell me about your project. Let's turn your idea into something real.
          </p>
        </div>

        {/* 2-Column Layout: Form on Left, Contact Metadata & Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: WhatsApp Contact Form (Crystal Glass Style) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl crystal-glass border border-white/10 shadow-2xl shadow-black/80">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Full Name Input */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-[#D1D1DB] mb-2">
                    Full Name <span className="text-[#8B5CF6]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl crystal-glass-input ${
                      errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-[#8B5CF6]'
                    } text-sm text-[#F5F5F7] placeholder-[#9696A5]/50 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address Input */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#D1D1DB] mb-2">
                    Email Address <span className="text-[#8B5CF6]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl crystal-glass-input ${
                      errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#8B5CF6]'
                    } text-sm text-[#F5F5F7] placeholder-[#9696A5]/50 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Project Type Dropdown */}
                <div>
                  <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-[#D1D1DB] mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl crystal-glass-input border border-white/10 text-sm text-[#F5F5F7] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#11111A] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#D1D1DB] mb-2">
                    Project Overview / Message <span className="text-[#8B5CF6]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell me about your idea, requirements, goals, or timeline..."
                    className={`w-full px-4 py-3 rounded-xl crystal-glass-input ${
                      errors.message ? 'border-rose-500' : 'border-white/10 focus:border-[#8B5CF6]'
                    } text-sm text-[#F5F5F7] placeholder-[#9696A5]/50 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 text-sm font-bold text-white bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#9061F9] hover:to-[#8B5CF6] rounded-xl shadow-lg shadow-[#8B5CF6]/30 hover:shadow-[#8B5CF6]/50 transition-all duration-200 cursor-pointer border border-white/10"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Through WhatsApp (+595 986 970971)</span>
                </button>

                <p className="text-[11px] font-mono text-center text-[#9696A5]">
                  Clicking will open WhatsApp with your pre-filled inquiry. You can review before dispatching.
                </p>
              </form>
            </div>
          </div>

          {/* Right Column: Direct Channels & Live Dispatch Preview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-2xl crystal-glass-card space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5F5F7] font-mono">
                Direct Contact Channels
              </h3>

              {/* WhatsApp Item */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#9696A5]">WhatsApp</div>
                  <a
                    href="https://wa.me/595986970971"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#F5F5F7] hover:text-[#8B5CF6] transition-colors"
                  >
                    +595 986 970971
                  </a>
                  <p className="text-[11px] text-[#9696A5] mt-0.5">Direct chat & rapid responses</p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#9696A5]">Email</div>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:rocks.d2vops@gmail.com"
                      className="text-sm font-semibold text-[#F5F5F7] hover:text-[#8B5CF6] transition-colors break-all"
                    >
                      rocks.d2vops@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="p-1 rounded bg-white/5 hover:bg-white/10 text-[#9696A5] hover:text-white transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-[#9696A5] mt-0.5">Formal inquiries & technical proposals</p>
                </div>
              </div>

            </div>

            {/* Live Message Preview Terminal */}
            <div className="p-6 rounded-2xl crystal-glass-card space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[#8B5CF6]">
                <span className="uppercase tracking-widest text-[10px]">// WhatsApp Payload Preview</span>
                <span className="text-[10px] text-[#9696A5]">wa.me/595986970971</span>
              </div>
              
              <div className="p-3.5 rounded-xl crystal-glass-subtle border border-white/5 text-[#D1D1DB] leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
                {constructWhatsAppMessage()}
              </div>

              <div className="text-[11px] text-[#9696A5] flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Payload dynamically formats and encodes with UTF-8.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
