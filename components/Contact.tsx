"use client";
import { Mail, Instagram, MessageCircle } from 'lucide-react';
const Contact = () => {
  const footerLinks = {
    about: ['ABOUT', 'THEORY', 'COLLECTION', 'RANKING'],
    interest: ['Are You Interest?', 'Send E-Mail', 'PayPal', 'Privacy Policy'],
    community: ['Join Our Community', 'YouTube', 'PayPal', 'Privacy Policy'],
    newsletter: ['Subscribe To Our Newsletter', 'Email', 'Terms Of Use', 'Privacy Policy']
  };

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider leading-tight">
            <span className="block">{"CONTACT US"}</span>
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Are You Interest */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em] text-white/60 font-light">
              / {footerLinks.interest[0].toUpperCase()} /
            </h3>
            <div className="space-y-3">
              {footerLinks.interest.slice(1).map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-sm tracking-wider text-white/80 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Join Our Community */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em] text-white/60 font-light">
              / {footerLinks.community[0].toUpperCase()} /
            </h3>
            <div className="space-y-3">
              {footerLinks.community.slice(1).map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-sm tracking-wider text-white/80 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe To Newsletter */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em] text-white/60 font-light">
              / {footerLinks.newsletter[0].toUpperCase()} /
            </h3>
            <div className="space-y-3">
              {footerLinks.newsletter.slice(1).map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-sm tracking-wider text-white/80 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em] text-white/60 font-light">
              / FOLLOW US /
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Mail size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm tracking-wider text-white/60 mb-4 md:mb-0">
              Cartier
            </div>
            <div className="flex flex-wrap items-center space-x-8">
              {footerLinks.about.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm tracking-wider text-white/60 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="text-sm tracking-wider text-white/60 mt-4 md:mt-0">
              [ CONTACT ] | [ DEV MORE ]
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;