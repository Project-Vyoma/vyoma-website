"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Particles from "@/components/ui/Particles";
import { Mail, Github, Linkedin, Twitter, Sparkles, Loader2 } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
        variant: "default",
      });

      // Reset form
      setFormData({
        name: "",
        contact: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Add smooth scroll behavior to the entire page
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById("contact-content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Particles Background */}
      <div className="fixed inset-0 w-full h-full z-[5] pointer-events-auto">
        <div style={{ width: '100%', height: '100vh', position: 'relative', pointerEvents: 'auto' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
      
      <Header />
      <main className="relative z-10 pointer-events-auto">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 px-4 overflow-hidden">
          <div className="container mx-auto relative max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact</span>
              </div>
              <div className="mb-8">
                <div className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-tight flex flex-wrap justify-center items-center gap-2">
                  <BlurText
                    text="We'd Love to Hear from"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-white"
                  />
                  <BlurText
                    text="You!"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-primary"
                  />
                </div>
              </div>
              <div className="mb-12 max-w-4xl mx-auto">
                <BlurText
                  text="Get in Touch With Us"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl md:text-2xl text-white/80 leading-relaxed"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Multiple Channels</span>
                </div>
              </div>
              {/* Contact Icons */}
              <div className="flex justify-center items-center gap-6 flex-wrap">
                <a
                  href="mailto:contact@projectvyoma.com"
                  className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Mail className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Github className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Linkedin className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Twitter className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section id="contact-content" className="py-12 px-4 pb-24">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                  <h2 className="text-2xl font-headline font-bold text-white mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-gray-700/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Contact Number Field */}
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium text-white/80 mb-2">
                        Contact number
                      </label>
                      <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-gray-700/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="Your contact number"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-gray-700/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-black/40 border border-gray-700/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-gradient-to-r from-primary to-sky-300 text-white font-semibold rounded-lg hover:from-primary/90 hover:to-sky-300/90 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Map Section */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                  <h2 className="text-2xl font-headline font-bold text-white mb-6">
                    Find Us
                  </h2>
                  <div className="mb-4">
                    <p className="text-white/80 text-sm mb-1">
                      <span className="text-primary font-medium">Location:</span>
                    </p>
                    <p className="text-white text-base">
                      RV College of Engineering, Bangalore
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-gray-700/50 h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.992091711418!2d77.46039457431642!3d12.923846600000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1767387210677!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="RV College of Engineering Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
