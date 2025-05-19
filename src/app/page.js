import Image from 'next/image';
import Slider from './Slider';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-100">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-center items-center px-6 py-24 max-w-6xl mx-auto gap-12">
        {/* Image block */}
        <div className="flex-1">
          <Image
            src="/FBD563FA-2DCD-4581-AA56-F5FBC57F2190.JPG"
            alt="Sakirul Karim"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text block */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
            Hi, I&apos;m <span className="text-blue-600">Sakirul Karim.</span>
          </h2>
          <p className="text-xl text-gray-700">
            I am currently enrolled at Drexel University pursuing a bachelor&apos;s degree in Computer Science.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-blue-100 py-24 px-6">
        <div className="max-w-6xl mx-auto flex justify-end">
          <div className="flex items-start gap-6 text-right">
            {/* Line */}
            <div className="pt-2">
              <div className="w-24 h-px bg-gray-400"></div>
            </div>

            {/* Title + Paragraph */}
            <div className="max-w-xl">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">
                Intro
              </h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
                I&apos;m a passionate and motivated <span className="font-semibold text-blue-600">Computer Science</span> student with hands-on experience in
                <span className="font-semibold text-blue-600"> full-stack development</span>,
                <span className="font-semibold text-blue-600"> machine learning</span>, and collaborative software projects.
              </p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Whether it&apos;s building user-friendly web apps or working on
                <span className="font-semibold text-blue-600"> AI-driven solutions</span>, I enjoy learning by doing and thrive in creative, fast-paced environments.
                Outside of coding, you&apos;ll find me exploring new tech, reading up on finance, or diving into personal growth habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-700 mb-10 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-blue-100">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">Heart Disease Prediction (AI/ML)</h4>
              <p className="text-gray-700 mb-4">
                Built a machine learning model to predict the likelihood of heart disease using patient data. Utilized logistic regression, decision trees, and feature selection techniques.
              </p>
              <Link href="/projects" className="text-blue-600 font-medium hover:underline">
                View Project →
              </Link>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-blue-100">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">StyleSync App</h4>
              <p className="text-gray-700 mb-4">
                A virtual wardrobe app where users can upload clothes, create outfits, and manage their closet. Built using React, Node.js, and Agile development practices.
              </p>
              <Link href="/projects" className="text-blue-600 font-medium hover:underline">
                View Project →
              </Link>
            </div>
          </div>

          {/* Link to full project page */}
          <div className="text-center mt-10">
            <Link href="/projects" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition">
              See All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Slider */}
      <Slider />
    </main>
  );
}
