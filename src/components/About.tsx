import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, Lightbulb, Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const About: React.FC = () => {
  return (
    <SectionWrapper
      id="about"
      style={{
        backgroundColor: "rgba(31, 41, 55, 0.5)", // bg-gray-800/50
        padding: "4rem 2rem",
      }}
    >
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          About{" "}
          <span
            style={{
              background:
                "linear-gradient(to right, #22d3ee, #34d399)", // cyan to emerald
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Me
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            width: "6rem",
            height: "0.25rem",
            background:
              "linear-gradient(to right, rgb(34, 211, 238), rgb(16, 185, 129))",
            margin: "0 auto",
            borderRadius: "9999px",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#22d3ee" }}>
            Software Engineer & Front-End Developer
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              color: "#d1d5db",
              lineHeight: "1.6",
            }}
          >
            <p>
              I'm currently studying Software Engineering at the University of
              Central Punjab (UCP). I've been learning and building things on
              the web for a few years now, focusing mostly on front-end
              development.
            </p>
            <p>
              I enjoy working with React, JavaScript, and modern CSS tools.
              Lately, I've also started exploring full-stack development to
              build complete web apps.
            </p>
            <p>
              Outside of coding, I like trying out new tools, learning from
              open-source projects, and helping others in the developer
              community when I can.
            </p>
          </div>

          {/* Code Block */}
          <div style={{ marginTop: "2rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "rgb(239, 68, 68)", // red-500
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "rgb(234, 179, 8)", // yellow-500
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "rgb(34, 197, 94)", // green-500
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <pre style={{ color: "rgb(16, 185, 129)", fontFamily: "monospace" }}>
{`const sabih = {
  name: "Sabih Haider",
  role: "Software Engineer",
  education: "UCP",
  passion: "Web Development",
  skills: ["React", "JavaScript", "PHP", "WordPress"],
  location: "Pakistan"
};`}
            </pre>
          </div>
        </motion.div>

        {/* Right Column - Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {/* Education */}
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "0.75rem",
              transition: "color 0.3s",
            }}
          >
            <div style={{ color: "#22d3ee", marginBottom: "1rem" }}>
              <GraduationCap size={24} />
            </div>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#f9fafb" }}>
              Education
            </h4>
            <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
              Software Engineering student at UCP, passionate about technology and
              innovation.
            </p>
          </div>

          {/* Development */}
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "0.75rem",
            }}
          >
            <div style={{ color: "#22d3ee", marginBottom: "1rem" }}>
              <Code size={24} />
            </div>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#f9fafb" }}>
              Development
            </h4>
            <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
              Specialized in front-end and full-stack development with modern
              technologies.
            </p>
          </div>

          {/* Problem Solving */}
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "0.75rem",
            }}
          >
            <div style={{ color: "#22d3ee", marginBottom: "1rem" }}>
              <Lightbulb size={24} />
            </div>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#f9fafb" }}>
              Problem Solving
            </h4>
            <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
              Love tackling complex challenges and creating elegant, scalable
              solutions.
            </p>
          </div>

          {/* Collaboration */}
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "0.75rem",
            }}
          >
            <div style={{ color: "#22d3ee", marginBottom: "1rem" }}>
              <Users size={24} />
            </div>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#f9fafb" }}>
              Collaboration
            </h4>
            <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
              Thrive in team environments and enjoy sharing knowledge with fellow
              developers.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
