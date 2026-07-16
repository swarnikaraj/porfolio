// components/Footer.js
"use client";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import Link from "next/link";
import { contactInfo } from "@/utils/contanst";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Case Studies", href: "#case-studies" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Writing", href: "#articles" },
    { name: "Open Source", href: "#open-source" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: contactInfo.github },
    { name: "LinkedIn", icon: FaLinkedin, href: contactInfo.linkedin },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-content mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Bio */}
          <div>
            <h3 className="text-foreground font-medium mb-3">
              Swarnnika Raj Singh
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Platform Engineer building cloud platforms and AI infrastructure.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm text-foreground font-medium mb-3">
              Explore
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume */}
          <div>
            <h3 className="text-sm text-foreground font-medium mb-3">
              Resume
            </h3>
            <a
              href="/Swarnnika_resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <FaFileAlt size={14} /> Download PDF
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted text-sm">
            © {currentYear} Swarnnika Raj Singh
          </div>
          <div className="text-sm text-muted">
            Platform Engineer · Distributed Systems · AI Infrastructure
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

