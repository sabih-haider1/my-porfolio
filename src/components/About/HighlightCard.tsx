import React from "react";
import { motion } from "framer-motion";

export interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  idx: number;
  mobile?: boolean;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  icon,
  title,
  description,
  idx,
  mobile,
}) => (
  <motion.article
    initial={{ opacity: 0, y: 30, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    tabIndex={0}
    role="region"
    aria-label={title}
    className={[
      "rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-lg shadow-lg p-5 text-center group transition-all duration-300",
      "hover:scale-105 hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-emerald-400/20",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
      mobile ? "min-w-[220px] flex-shrink-0" : "",
      "flex flex-col items-center",
    ].join(" ")}
  >
    <div className="w-12 h-12 flex items-center justify-center mb-3 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-gray-900 text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
      {icon}
    </div>
    <h4 className="text-base font-semibold mb-1 text-white">{title}</h4>
    <p className="text-gray-200 text-xs leading-relaxed">{description}</p>
  </motion.article>
);

export default HighlightCard; 