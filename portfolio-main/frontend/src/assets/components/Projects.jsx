import React from "react";

const projects = [
  {
    title: "Fake News Detection",
    description: "A machine learning project that classifies news as fake or real.",
    github: "https://github.com/MAHESHKUMAR-KS/fake-news-predection",
  },
  {
    title: "Car Rental System",
    description: "A cariirer guidence for school students and college students",
    github: "https://github.com/MAHESHKUMAR-KS/Carrier-guidence-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-transparent text-white py-24 md:py-32 relative">

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">My Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border border-white/10 rounded-xl bg-gray-800/60 backdrop-blur-md hover:bg-gray-700/60 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 text-gray-200">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-teal-200 underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


