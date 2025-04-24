import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

export default function Home() {
  const { projects, techSkills } = useContext(PortfolioContext);

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-800">Hi, I'm Justus</h1>
        <p className="text-lg mt-4 text-gray-600">
          A developer studying at Chas Academy, learning new skills every day.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tech Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techSkills.map((skill, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-lg p-4 text-center text-gray-700"
            >
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200 ease-in-out"
            >
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <p className="text-sm mt-2 italic text-gray-500">
                  Tech: {project.tech}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 mt-4 block"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-600">Email: justussundelof@chasacademy.se</p>
      </section>
    </main>
  );
}
