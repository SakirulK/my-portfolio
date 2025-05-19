'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const sections = [
  {
    title: 'Education',
    content: (
      <>
        <p className="mb-2 font-medium">Central High School – High School (Sept 2019 - June 2023)</p>
        <p className="mb-2 font-medium">Drexel University – College of Computing & Informatics (Sept 2023 – June 2028)</p>
      </>
    ),
  },
  {
    title: 'Work Experience',
    content: (
      <>
        <p className="mb-2 font-medium">Johnson & Johnson. – Intern (March 2025 – Present)</p>
        <ul className="list-disc pl-5 space-y-1">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p className="mb-2 font-medium">Raptor Engineering Co. – Intern (Oct 2024 – Present)</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Developed and optimized AI-based landmine detection software</li>
          <li>Coordinated with cross-functional teams on prototype development</li>
          <li>Integrated LLM-related research into ongoing projects</li>
        </ul>
        
      </>
    ),
  },
  {
    title: 'Leadership & Extracurriculars',
    content: (
      <>
        <p>Active member of:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hack4Impact (open-source social good software)</li>
          <li>Cyberdragons (Cybersecurity club)</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Skills',
    content: (
      <>
        <p className="mb-2">Programming Languages:</p>
        <p>Python, Java, JavaScript, HTML, CSS, C, Bash</p>
        <p className="mt-2 mb-2">Technologies:</p>
        <p>React, Node.js, Next.js, Vercel, Git, Linux, IntelliJ, Vim</p>
      </>
    ),
  },
];

export default function ResumePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-blue-100 text-black px-8 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
         {/* Left Side: Heading + Resume Button */}
         <div className="flex flex-col items-start space-y-6">
          <h1 className="text-5xl font-extrabold">My Resume</h1>
          <a
            href="/Sakirul Karim - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            View Full Resume (PDF)
          </a>
        </div>


        {/* Right Side Accordion */}
        <div className="w-full space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="border-t border-white/50 pt-4">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center text-left text-black text-2xl font-semibold"
              >
                {section.title}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="mt-3 text-black text-base leading-relaxed">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
