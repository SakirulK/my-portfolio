export default function ProjectsPage() {
    const projects = [
      {
        title: "Banking Management System",
        date: "Oct 2024 – Dec 2024",
        description:
          "A scalable banking system built in Java using OOP and TDD. Achieved 95% test coverage with 50+ JUnit tests. Git and GitLab used for team collaboration and version control.",
        tech: ["Java", "JUnit", "OOP", "Git", "GitLab"],
      },
      {
        title: "StyleSync App",
        date: "Jan 2024 – Jun 2024",
        description:
          "A virtual wardrobe app created with React and Node.js. Users can upload clothes, organize their wardrobe, and build outfits. Built in a team of four using Agile and Git.",
        tech: ["React", "Node.js", "JavaScript", "Agile", "Git"],
      },
      {
        title: "Portfolio Website",
        date: "May 2025",
        description:
          "A responsive personal portfolio site showcasing projects, skills, and experience. Designed with HTML and CSS to be clean, interactive, and easy to navigate.",
        tech: ["Next.js", "Javascript", "HTML", "CSS", "Vercel", "Git"],
      },
      {
        title: "Heart Disease Prediction (AI/ML)",
        date: "April 2025 - present",
        description:
          "Built a machine learning model to predict the likelihood of heart disease using patient data. Applied preprocessing, feature selection, and model evaluation techniques. Achieved high accuracy using logistic regression and decision trees.",
        tech: ["Python", "Pandas", "Scikit-learn", "Logistic Regression", "Decision Trees"],
      }
      
    ];
  
    return (
      <main className="min-h-screen bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-12 text-center">Projects</h1>
  
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-blue-700 mb-2">{project.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{project.date}</p>
                <p className="text-gray-800 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  