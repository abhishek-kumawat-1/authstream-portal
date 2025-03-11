
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';

export default function Index() {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple animation on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 animate-slide-down">
            Streamlit Integration Made Simple
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-slide-down" style={{ animationDelay: '100ms' }}>
            Connect with your <span className="text-primary">Streamlit</span> apps seamlessly
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-slide-down" style={{ animationDelay: '200ms' }}>
            A secure, elegant interface to manage and interact with your Streamlit applications
            through a streamlined authentication system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-down" style={{ animationDelay: '300ms' }}>
            <Link to="/login">
              <Button size="lg">
                Get Started
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Features Section */}
      <section ref={featuresRef} className="py-24 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 animate-on-scroll">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Designed with simplicity and elegance in mind, our platform offers everything you need
              to showcase your Streamlit applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Secure Authentication',
                description: 'Protect your Streamlit apps with our secure and elegant authentication system.'
              },
              {
                title: 'Seamless Integration',
                description: 'Embed any Streamlit application with a clean, responsive interface.'
              },
              {
                title: 'Modern Design',
                description: 'A beautiful, minimalistic design that puts your applications first.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="rounded-lg p-6 border bg-card shadow-sm animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-on-scroll">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-10 animate-on-scroll">
            Join us today and start connecting your users with your Streamlit applications
            through a beautiful, secure interface.
          </p>
          <Link to="/login" className="animate-on-scroll">
            <Button size="lg">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} StreamConnect. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
