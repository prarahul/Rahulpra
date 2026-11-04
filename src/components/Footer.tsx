import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-gradient border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/rahulkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-lg"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rahulkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-lg"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:prathamskt@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-lg"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Name and Title */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-1">Rahul Kumar</h3>
            <p className="text-muted-foreground text-sm">
              Computer Science & Artificial Intelligence Student
            </p>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} Rahul Kumar. Made with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;