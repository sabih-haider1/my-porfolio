import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Eye } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import type { Project } from "../types";

const Projects: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Spam Message Classifier",
      description:
        "Built an ML model using TF-IDF + logistic regression achieving ~96% accuracy on test set. Python, scikit-learn.",
      technologies: ["Python", "Scikit-learn", "NLTK", "Machine Learning"],
      github: "https://github.com/sabih-haider1/SMS-Spam-Detector",
      live: "#",
    },
    {
      id: "2",
      title: "UPC / Demion University Portal",
      description:
        "Frontend portal integrating 20+ educational and admin processes, with business process automation and documentation for each route. Built in React.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/sabih-haider1/horizon-ucp-frontend",
      live: "#",
    },
    {
      id: "3",
      title: "Pro_Physio Web App",
      description:
        "Physiotherapy-focused web app for managing patient records, appointments, exercise plans, and progress tracking. Replace tech stack & link with exact details if you’d like to show a live demo.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/sabih-haider1/Physio_Pro",
      live: "#",
    },
    {
      id: "4",
      title: "Tetras",
      description:
        "Lightweight single-page HTML Tetris game playable in-browser. Built as a portfolio piece for frontend and game logic.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sabih-haider1/Tetras-html-game",
      live: "#",
    },
    {
      id: "5",
      title: "Pokémon-themed Chess",
      description:
        "Standalone HTML chess game with Pokémon-themed pieces, full chess rules implemented (promotion, en passant, castling) and embedded base64 sprites.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      id: "6",
      title: "Pure Eats — Food Delivery App",
      description:
        "Developed a food delivery platform with authentication, diet filters, and daily meal tracking. Built with React and Firebase.",
      technologies: ["React", "Firebase"],
      github: "#",
      live: "#",
    },
  ];

  const styles = {
    sectionInner: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "48px 20px",
      color: "#e5e7eb",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    } as React.CSSProperties,
    header: {
      textAlign: "center" as const,
      marginBottom: 40,
    },
    title: {
      fontSize: "2.25rem",
      lineHeight: 1.05,
      fontWeight: 800,
      margin: 0,
      background:
        "linear-gradient(90deg, #06b6d4 0%, #10b981 100%)", // cyan -> emerald
      WebkitBackgroundClip: "text" as const,
      WebkitTextFillColor: "transparent" as const,
      textShadow: "0 6px 18px rgba(0,0,0,0.45)",
    } as React.CSSProperties,
    bar: {
      width: 112,
      height: 6,
      margin: "16px auto 0",
      borderRadius: 9999,
      background: "linear-gradient(90deg,#06b6d4,#10b981)",
    } as React.CSSProperties,
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: 24,
      alignItems: "stretch",
      marginTop: 24,
    } as React.CSSProperties,
    card: {
      position: "relative" as const,
      borderRadius: 24,
      padding: 28,
      minHeight: 420,
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "space-between",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(8px)",
      boxShadow:
        "0 12px 30px rgba(2,6,23,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
      transition: "box-shadow 220ms ease, transform 220ms ease",
      overflow: "hidden",
    } as React.CSSProperties,
    cardHeader: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 12,
    } as React.CSSProperties,
    avatar: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: 20,
      color: "#0f172a",
      background: "linear-gradient(135deg,#06b6d4,#10b981)",
      boxShadow: "0 8px 18px rgba(16,24,40,0.45)",
      flexShrink: 0,
    } as React.CSSProperties,
    projectTitle: {
      fontSize: 20,
      fontWeight: 700,
      color: "#fff",
      margin: 0,
      textShadow: "0 6px 14px rgba(0,0,0,0.35)",
    } as React.CSSProperties,
    description: {
      color: "rgba(229,231,235,0.9)",
      marginBottom: 18,
      lineHeight: 1.6,
      flex: 1,
    } as React.CSSProperties,
    badgesWrap: {
      display: "flex",
      flexWrap: "wrap" as const,
      gap: 8,
      marginBottom: 18,
    } as React.CSSProperties,
    badge: {
      display: "inline-block",
      padding: "6px 10px",
      borderRadius: 9999,
      fontSize: 12,
      fontWeight: 700,
      color: "#fff",
      background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
      border: "1px solid rgba(255,255,255,0.06)",
      boxShadow: "0 6px 18px rgba(3,7,18,0.35)",
    } as React.CSSProperties,
    actions: {
      display: "flex",
      gap: 12,
      marginTop: 8,
    } as React.CSSProperties,
    linkBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      borderRadius: 9999,
      fontWeight: 700,
      fontSize: 14,
      textDecoration: "none",
      color: "#0f172a",
      background: "linear-gradient(90deg,#f8fafc 0%, #e6fffa 100%)",
      border: "1px solid rgba(3, 105, 161, 0.08)",
      boxShadow: "0 8px 20px rgba(3,7,18,0.25)",
      transition: "transform 160ms ease, box-shadow 160ms ease, background 160ms ease, color 160ms ease",
    } as React.CSSProperties,
    linkBtnDark: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      borderRadius: 9999,
      fontWeight: 700,
      fontSize: 14,
      textDecoration: "none",
      color: "#fff",
      background: "linear-gradient(90deg,#06b6d4,#10b981)",
      border: "1px solid rgba(255,255,255,0.06)",
      boxShadow: "0 10px 28px rgba(6,22,40,0.5)",
      transition: "transform 160ms ease, box-shadow 160ms ease",
    } as React.CSSProperties,
    iconStyle: { marginRight: 6, display: "inline-flex" } as React.CSSProperties,
    overlay: {
      position: "absolute" as const,
      inset: 0,
      borderRadius: 24,
      transition: "background 220ms ease, backdrop-filter 220ms ease, opacity 220ms ease",
      pointerEvents: "none" as const,
      opacity: 0,
    } as React.CSSProperties,
    ctaWrap: {
      marginTop: 40,
      textAlign: "center" as const,
    },
    codePanel: {
      maxWidth: 900,
      margin: "0 auto",
      borderRadius: 20,
      padding: 24,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 20px 40px rgba(2,6,23,0.6)",
      textAlign: "left" as const,
    } as React.CSSProperties,
    dotRow: { display: "flex", gap: 8, marginBottom: 12 } as React.CSSProperties,
    dot: (color: string) =>
      ({
        width: 10,
        height: 10,
        borderRadius: 9999,
        backgroundColor: color,
      } as React.CSSProperties),
    ctaButton: {
      display: "inline-block",
      marginTop: 20,
      padding: "12px 26px",
      borderRadius: 9999,
      fontWeight: 800,
      fontSize: 16,
      color: "#fff",
      background: "linear-gradient(90deg,#06b6d4,#10b981)",
      textDecoration: "none",
      boxShadow: "0 12px 30px rgba(6,22,40,0.6)",
      border: "none",
    } as React.CSSProperties,
  };

  return (
    <SectionWrapper id="projects">
      <div style={styles.sectionInner}>
        <header style={styles.header}>
          <motion.h2
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            style={styles.bar}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
          />
        </header>

        <section style={styles.grid}>
          {projects.map((project, index) => {
            const isHovered = hovered === project.id;
            return (
              <motion.article
                key={project.id}
                style={{
                  ...styles.card,
                  boxShadow: isHovered
                    ? "0 20px 40px rgba(2,6,23,0.7), inset 0 1px 0 rgba(255,255,255,0.02)"
                    : styles.card.boxShadow,
                  transform: isHovered ? "translateY(-6px)" : undefined,
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                aria-labelledby={`project-${project.id}-title`}
              >
                {/* overlay */}
                <div
                  style={{
                    ...styles.overlay,
                    background: isHovered
                      ? "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))"
                      : "transparent",
                    backdropFilter: isHovered ? "blur(6px)" : undefined,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                <div style={styles.cardHeader}>
                  <div style={styles.avatar as React.CSSProperties}>
                    {project.title.charAt(0)}
                  </div>
                  <div>
                    <h3
                      id={`project-${project.id}-title`}
                      style={styles.projectTitle}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p style={styles.description}>{project.description}</p>

                <div style={styles.badgesWrap}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        ...styles.badge,
                        background:
                          "linear-gradient(90deg,#06b6d4,#3b82f6)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={styles.actions}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} - Source code`}
                      style={styles.linkBtn}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.transform = "translateY(-2px)";
                        el.style.boxShadow = "0 14px 34px rgba(3,7,18,0.35)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.transform = "translateY(0)";
                        el.style.boxShadow = "0 8px 20px rgba(3,7,18,0.25)";
                      }}
                    >
                      <span style={styles.iconStyle}>
                        <Github size={18} />
                      </span>
                      Code
                    </a>
                  )}

                </div>
              </motion.article>
            );
          })}
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={styles.ctaWrap}
        >
          <div style={styles.codePanel}>
            <div style={styles.dotRow}>
              <div style={styles.dot("#ef4444")} />
              <div style={styles.dot("#f59e0b")} />
              <div style={styles.dot("#10b981")} />
            </div>

            <pre style={{ color: "#10b981", fontSize: 13, margin: 0 }}>
{`// More projects coming soon...
const upcomingProjects = [
  "AI-Powered Chat Application",
  "Real-time Collaboration Tool", 
  "Advanced E-commerce Platform",
  "Mobile-First Web Apps"
];

// Always open to new opportunities
const openToWork = true;`}
            </pre>
          </div>

          <a
            href="#contact"
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-4px)";
              (el.style as any).boxShadow = "0 18px 44px rgba(6,22,40,0.7)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              (el.style as any).boxShadow = "0 12px 30px rgba(6,22,40,0.6)";
            }}
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
