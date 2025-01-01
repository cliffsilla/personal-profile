import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=174"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-9444/1080p.mp4"
            type="video/mp4"
          />
          {/* Fallback video source */}
          <source
            src="https://cdn.coverr.co/videos/coverr-close-up-of-computer-coding-1584/1080p.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
            Hi, I'm <span className="text-cyan-400">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Developer specializing in building exceptional digital experiences
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <SocialLink href="#" icon={<Github />} label="GitHub" />
            <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="#" icon={<Mail />} label="Email" />
          </div>
          <a
            href="#portfolio"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-1 h-8 rounded-full bg-cyan-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
