"use client";
import React, { createContext, useState, useEffect } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    const storedSkills = localStorage.getItem("techSkills");

    if (storedProjects) setProjects(JSON.parse(storedProjects));
    if (storedSkills) setTechSkills(JSON.parse(storedSkills));
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [techSkills]);

  return (
    <PortfolioContext.Provider
      value={{ projects, setProjects, techSkills, setTechSkills }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
