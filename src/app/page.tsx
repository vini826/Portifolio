"use client";

import { BackgroundGlow } from "@/components/background-glow";
import { ProjectCard } from "@/components/project-card";
import { Github, Linkedin, Mail, Code2, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";

export default function Home() {
  const { t } = useLanguage();



  return (
    <main className="min-h-screen relative selection:bg-primary selection:text-black">
      <BackgroundGlow />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32">


        {/* Hero Section */}
        <section className="mb-32 pt-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-8 animate-pulse">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {t.hero.available}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                {t.hero.title} <br />
                <span className="text-primary">{t.hero.subtitle}</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                {t.hero.description}
              </p>

              <div className="flex gap-4">
                <a href="#contact" className="px-8 py-3 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90 transition-colors">
                  {t.hero.cta_talk}
                </a>
                <a href="#projects" className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  {t.hero.cta_work}
                </a>
              </div>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
              <Image
                src="/me.jpg"
                alt="Vinicius"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl border-2 border-white/10 shadow-2xl relative z-10"
                priority
              />
            </div>
          </div>
        </section>



        {/* Projects */}
        <section id="projects" className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">{t.projects.title}</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {t.projects.items.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={["React", "Vite", "TailwindCSS", "Node.js", "Gemini API"]}

                image="/nutriassist-cover.png"
                video="/nutriassist-demo.mkv"
              />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12">{t.experience.title}</h2>
          <div className="space-y-8">
            {t.experience.items.map((job, index) => (
              <div key={index} className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-primary"></div>
                <div className="mb-1 flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <span className="text-sm text-primary bg-primary/10 px-2 py-0.5 rounded">{job.period}</span>
                </div>
                <p className="text-lg text-gray-300 mb-2">{job.company}</p>
                <p className="text-gray-400 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12">{t.education.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.education.items.map((edu, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{edu.course}</h3>
                <p className="text-primary mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12">{t.tech.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "JavaScript", "TypeScript", "React", "Next.js",
              "Node.js", "Python", "C#", "HTML/CSS",
              "Tailwind CSS", "Supabase", "PostgreSQL", "GraphQL",
              "Docker", "Git", "Figma", "Gemini API"
            ].map((tech) => (
              <div key={tech} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <Code2 className="text-primary h-5 w-5" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-gray-400 mb-10">
            {t.contact.description}
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/vini826" target="_blank" className="p-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors border border-white/10">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/vinícius-chiabai" target="_blank" className="p-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors border border-white/10">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:vinicius.chiabai@gmail.com" className="p-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors border border-white/10">
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/5567996117455?text=Ol%C3%A1%20Vinicius%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              className="p-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-green-500 transition-colors border border-white/10"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vinicius. {t.contact.copyright}
          </p>
        </section>
      </div>
    </main>
  );
}
