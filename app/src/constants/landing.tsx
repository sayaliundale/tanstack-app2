import {
    Bank,
    BookOpen,
    CalendarCheck,
    ChalkboardTeacher,
    ChartPie,
    Clock,
    Confetti,
    Factory,
    Fingerprint,
    Gift,
    HandHeart,
    Lightning,
    Scales,
    Target,
    Wallet,
} from '@phosphor-icons/react'

export const LANDING_FEATURES = [
    {
        title: 'Goal Planner + Streaks',
        description:
            'Build consistency without burnout through intelligent goal setting and visual progress tracking.',
        icon: CalendarCheck,
        color: 'bg-blue-500',
    },
    {
        title: 'Reflection Companion',
        description:
            'Guided prompts that build clarity, mindfulness, and personal accountability in just minutes a day.',
        icon: BookOpen,
        color: 'bg-emerald-500',
    },
    {
        title: 'Reward + Remorse Purses',
        description:
            'Honest self-tracking with dynamic learning loops that help you understand your behavioral patterns.',
        icon: Wallet,
        color: 'bg-orange-500',
    },
    {
        title: 'Charity Giving',
        description:
            'Convert your earned rewards into real-world impact by donating to verified global and local causes.',
        icon: Gift,
        color: 'bg-pink-500',
    },
    {
        title: 'SoGood Ledger',
        description:
            'A permanent, transparent record of your purpose-driven actions and contributions to the world.',
        icon: Fingerprint,
        color: 'bg-indigo-500',
    },
    {
        title: 'Dashboards',
        description:
            'Comprehensive insights for individuals, teams, and organizations to measure growth and impact.',
        icon: ChartPie,
        color: 'bg-cyan-500',
    },
]

export const HOW_IT_WORKS_STEPS = [
    {
        title: 'Set Goals',
        description:
            'Define your daily or weekly objectives to create a clear path forward.',
        icon: Target,
        color: 'bg-blue-500',
        detail: 'daily/weekly',
    },
    {
        title: 'Do Micro-Actions',
        description:
            'Break down goals into small, realistic steps that are easy to start.',
        icon: Lightning,
        color: 'bg-emerald-500',
        detail: 'small & realistic',
    },
    {
        title: 'Reflect Daily',
        description:
            'Spend just 60–120 seconds reviewing your choices and progress.',
        icon: Clock,
        color: 'bg-purple-500',
        detail: '60–120 seconds',
    },
    {
        title: 'Reward or Remorse',
        description:
            'Tokens move based on outcomes, creating honest self-tracking.',
        icon: Scales,
        color: 'bg-orange-500',
        detail: 'learning loops',
    },
    {
        title: 'Give & Share',
        description:
            'Donate rewards and record your transparent impact in the SoGood Ledger.',
        icon: HandHeart,
        color: 'bg-pink-500',
        detail: 'record impact',
    },
]

export const LANDING_INDUSTRIES = [
    { name: 'Education', icon: ChalkboardTeacher },
    { name: 'Enterprises', icon: Factory },
    { name: 'Public Sector', icon: Bank },
    { name: 'Events', icon: Confetti },
]

export const HERO_STEPS = [
    { label: 'Purpose', color: '#FF539C' },
    { label: 'Action', color: '#3CC9AE' },
    { label: 'Reflection', color: '#0074E4' },
    { label: 'Reward', color: '#FF9800' },
    { label: 'Impact', color: '#4CAF50' },
]
