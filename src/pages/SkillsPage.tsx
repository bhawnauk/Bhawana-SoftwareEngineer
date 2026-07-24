import { motion } from 'framer-motion';
import { skillCategories, operationsCategory, type SkillCategory } from '../data';
import { fadeUp, staggerContainer } from '../lib/motion';
import {
  IconComponents, IconServer, IconLink, IconDatabase, IconLayers,
  IconSparkles, IconCreditCard, IconShield, IconTool, IconBriefcase,
} from '../components/Icons';

const iconMap: Record<SkillCategory['icon'], React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  components: IconComponents,
  server: IconServer,
  link: IconLink,
  database: IconDatabase,
  layers: IconLayers,
  sparkles: IconSparkles,
  creditcard: IconCreditCard,
  shield: IconShield,
  tool: IconTool,
  briefcase: IconBriefcase,
};

const allCategories = [...skillCategories, operationsCategory];
const totalSkills = allCategories.reduce((sum, c) => sum + c.items.length, 0);

export default function SkillsPage() {
  return (
    <div className="py-16 md:py-20">
      <p className="text-xs tracking-wide text-ember mb-2">SKILLS</p>
      <h2 className="font-display text-2xl md:text-[28px] text-paper mb-4 leading-[1.15]">
        Full skills list across my portfolio.
      </h2>
      <p className="text-sm text-muted leading-6 max-w-[520px] mb-10">
        {totalSkills} tools and practices across {allCategories.length} areas, drawn from shipped
        production projects — not a list of buzzwords.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
      >
        {allCategories.map((cat) => {
          const Icon = iconMap[cat.icon];
          return (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              className="bg-panel rounded-xl p-5 lg:p-6 border border-transparent hover:border-ember/30 hover:shadow-panel transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="h-9 w-9 rounded-xl flex items-center justify-center shadow-panel"
                  style={{ backgroundColor: cat.iconBg }}
                >
                  <Icon className="h-4 w-4" style={{ color: cat.iconColor }} />
                </div>
                <span className="text-[11px] font-mono text-faint">{cat.items.length}</span>
              </div>
              <p className="text-[13px] font-medium text-paper mb-3">{cat.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((s) => (
                  <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-ink text-muted border border-line">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
