import {
    Brain,
    ChartLineUp,
    Clock,
    ShieldCheck,
    Smiley,
    Trophy,
} from '@phosphor-icons/react'

export const GAMIFICATION_OUTCOMES = [
    {
        title: "Play with purpose",
        features: ["reset your mind", "sharpen knowledge", "build a streak of positive habits", "feel proud after you log off"],
        intro: "You don’t just “play to escape.” You play to:",
        icon: Brain,
        color: "text-rose-500",
        bg: "bg-white",
        border: "border-rose-100",
        shadow: "shadow-rose-100"
    },
    {
        title: "Win by showing up",
        features: ["daily short sessions", "milestone streaks", "calm and focus improvement", "learning progress"],
        intro: "Instead of rewarding obsession, RDM rewards consistency and healthy discipline:",
        icon: Trophy,
        color: "text-amber-500",
        bg: "bg-white",
        border: "border-amber-100",
        shadow: "shadow-amber-100"
    },
    {
        title: "Safe rewards, not risky loops",
        desc: "RDM avoids “chase” mechanics and builds transparent, capped, and fair reward systems.",
        icon: ShieldCheck,
        color: "text-emerald-500",
        bg: "bg-white",
        border: "border-emerald-100",
        shadow: "shadow-emerald-100"
    },
    {
        title: "Protection is built-in—not optional",
        desc: "Responsible Gaming isn’t an afterthought. It’s the default.",
        icon: ShieldCheck,
        color: "text-blue-500",
        bg: "bg-white",
        border: "border-blue-100",
        shadow: "shadow-blue-100"
    }
]

export const GAMIFICATION_FEATURES = [
    {
        title: "Smart Time Controls",
        features: ["Short-session design (2–5 minutes)", "Daily play limits and cool-downs", "“Take a break” nudges after repeated losses", "Optional one-session-per-day streak mode"],
        benefit: "less binge gaming, more balance.",
        icon: Clock,
        color: "text-rose-500",
        bullet: "bg-rose-400"
    },
    {
        title: "Spend / Pledge Safety",
        subtitle: "(if pledges are enabled)",
        features: ["Clear caps per day/week/month", "No “chasing losses” patterns", "Reduced or disabled pledges after repeated failures", "Full transparency on what happens when you win or lose"],
        benefit: "fun stays fun—without financial regret.",
        icon: ShieldCheck,
        color: "text-emerald-500",
        bullet: "bg-emerald-400"
    },
    {
        title: "Mood & Wellbeing Awareness",
        features: ["Quick check-ins: How do you feel before and after?", "Stress-relief game categories designed to calm (not spike)", "Gentle rewards for healthier emotional regulation"],
        benefit: "gaming becomes a reset tool, not a stress amplifier.",
        icon: Smiley,
        color: "text-amber-500",
        bullet: "bg-amber-400"
    },
    {
        title: "Fair Play & Transparency",
        features: ["Clear rules and scoring", "Bots are labeled as bots", "No misleading “near-miss” tricks", "Clean, readable reward terms"],
        benefit: "trust and confidence—no manipulation.",
        icon: ShieldCheck, // Using ShieldCheck as a fallback for ScaleIcon if needed, but original had ScaleIcon which returned Sparkle
        color: "text-blue-500",
        bullet: "bg-blue-400"
    },
    {
        title: "Streak-Based Progress",
        features: ["21-day “show up once a day” challenges", "Milestone rewards at Day 3/7/14/21", "Recognition for consistency—even if you don’t always “win”"],
        benefit: "players keep going for the right reasons.",
        icon: ChartLineUp,
        color: "text-orange-500",
        bullet: "bg-orange-400"
    }
]
