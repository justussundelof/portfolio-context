import { useContext, useState } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

export default function Admin() {
  const { projects, setProjects, techSkills, setTechSkills } =
    useContext(PortfolioContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    tech: "",
    link: "",
  });
  const [newTech, setNewTech] = useState("");

  function handleLogin() {
    if (username === "admin" && password === "your password") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  const handleAddProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ title: "", description: "", tech: "", link: "" });
  };

  const handleAddTech = () => {
    if (newTech.trim()) {
      setTechSkills([...techSkills, newTech]);
      setNewTech("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {!loggedIn ? (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
          >
            Log In
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-semibold text-gray-800">
              Add New Project
            </h3>
            <input
              type="text"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <textarea
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Tech Used"
              value={newProject.tech}
              onChange={(e) =>
                setNewProject({ ...newProject, tech: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Project Link"
              value={newProject.link}
              onChange={(e) =>
                setNewProject({ ...newProject, link: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={handleAddProject}
              className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-700"
            >
              Add Project
            </button>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-800">
              Add New Tech Skill
            </h3>
            <input
              type="text"
              placeholder="Tech Skill"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={handleAddTech}
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
            >
              Add Tech Skill
            </button>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-800">
              Current Projects and Tech Skills
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Projects:</h4>
                <ul>
                  {projects.map((project, index) => (
                    <li key={index} className="text-gray-600">
                      {project.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Tech Skills:</h4>
                <ul>
                  {techSkills.map((skill, index) => (
                    <li key={index} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
