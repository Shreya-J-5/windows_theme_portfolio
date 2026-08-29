"use client";
import React, { useEffect, useState, useMemo } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ProjectDetail } from "./ProjectDetail";
import {
  Github,
  ExternalLink,
  Search,
  ArrowRight,
  Code2,
  Sparkles,
  Bot,
  Globe,
  Terminal as TerminalIcon,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowStore } from "@/store/windowStore";

export function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const subRoute = useWindowStore((state) => state.windows.projects?.subRoute);
  const setSubRoute = useWindowStore((state) => state.setSubRoute);

  useEffect(() => {
    if (subRoute && projects.some((project) => project.id === subRoute)) {
      setSelectedProject(subRoute);
    }
  }, [subRoute, projects]);

  const activeProject = projects.find((p) => p.id === selectedProject);

  // Extract unique category tags
  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add("All");
    projects.forEach((p) => {
      if (p.category.includes("AI")) set.add("AI & Security");
      else if (p.category.includes("Discord") || p.category.includes("Bot")) set.add("Bots & Tools");
      else if (p.category.includes("Full-Stack")) set.add("Full-Stack");
      else if (p.category.includes("Frontend")) set.add("Frontend");
      else set.add("Systems & DevOps");
    });
    return Array.from(set);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.purpose.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));

      if (!matchesSearch) return false;
      if (activeCategory === "All") return true;
      if (activeCategory === "AI & Security") return p.category.includes("AI");
      if (activeCategory === "Bots & Tools") return p.category.includes("Discord") || p.category.includes("Bot");
      if (activeCategory === "Full-Stack") return p.category.includes("Full-Stack");
      if (activeCategory === "Frontend") return p.category.includes("Frontend");
      if (activeCategory === "Systems & DevOps")
        return !p.category.includes("AI") && !p.category.includes("Discord") && !p.category.includes("Full-Stack") && !p.category.includes("Frontend");

      return true;
    });
  }, [projects, searchQuery, activeCategory]);

  const getCategoryIcon = (category: string) => {
    if (category.includes("AI") || category.includes("Security")) return <Sparkles size={16} className="text-purple-400" />;
    if (category.includes("Discord") || category.includes("Bot")) return <Bot size={16} className="text-indigo-400" />;
    if (category.includes("Full-Stack")) return <Layers size={16} className="text-cyan-400" />;
    if (category.includes("Frontend")) return <Globe size={16} className="text-amber-400" />;
    return <TerminalIcon size={16} className="text-emerald-400" />;
  };

  return (
    <div className="h-full relative overflow-hidden bg-[#18181c] text-gray-200">
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 p-6 overflow-y-auto flex flex-col gap-5"
          >
            {/* Header & Controls Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#22222a] p-4 rounded-xl shadow-md">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Code2 className="text-[#0078d4] w-5 h-5" />
                  Software Projects
                </h2>
                <p className="text-xs text-white/50 mt-0.5">
                  Showing {filteredProjects.length} of {projects.length} verified projects
                </p>
              </div>

              {/* Search & Filters */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-56">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 bg-white/5 rounded-lg text-xs text-white placeholder-white/40 outline-none focus:bg-white/10 transition-colors"
                  />
                </div>

                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg overflow-x-auto max-w-full">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all whitespace-nowrap ${
                        activeCategory === cat
                          ? "bg-[#0078d4] text-white shadow"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Clean Seamless List Rows (No Description, No Outlines, Languages Only) */}
            <div className="flex flex-col gap-2">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className="group relative bg-[#202028] hover:bg-[#2a2a36] rounded-xl p-4 transition-all duration-200 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm"
                >
                  {/* Left Column: Category Icon + Project Name + Badges */}
                  <div className="flex items-center gap-3.5 min-w-[230px] max-w-xs">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#0078d4]/15 transition-colors">
                      {getCategoryIcon(project.category)}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white group-hover:text-[#0078d4] transition-colors">
                          {project.name}
                        </h3>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                            project.status === "Live"
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-amber-500/20 text-amber-300"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <span className="text-[11px] text-white/40 font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Middle Column: Languages Used Only */}
                  <div className="flex-1 min-w-0 flex items-center gap-1.5 flex-wrap">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-white/80 font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Right Column: Links & Details Action */}
                  <div
                    className="flex items-center gap-2 shrink-0 self-end md:self-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white rounded-lg transition-colors"
                        title="Source Code"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white rounded-lg transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="flex items-center gap-1 px-3.5 py-1.5 bg-[#0078d4]/20 hover:bg-[#0078d4] text-[#0078d4] hover:text-white text-xs font-semibold rounded-lg transition-all"
                    >
                      <span>Explore</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <div className="p-12 text-center text-white/40 text-xs bg-white/5 rounded-xl">
                  No projects match your search criteria.
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 overflow-y-auto"
          >
            {activeProject && (
              <ProjectDetail
                project={activeProject}
                onBack={() => {
                  setSubRoute("projects");
                  setSelectedProject(null);
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
