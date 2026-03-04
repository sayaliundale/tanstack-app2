import {
    ArrowsClockwise,
    HandHeart,
    Heart,
    Microscope,
    Ranking,
    Selection,
    ShieldCheck,
    Target,
    Users,
} from '@phosphor-icons/react'

export const PLATFORM_FEATURES = [
    {
        icon: Target,
        title: 'Goals & Micro-Actions',
        desc: 'Break clear goals into small actions that fit real life.',
    },
    {
        icon: ArrowsClockwise,
        title: 'Daily Reflection',
        desc: 'A 60–120s guided check-in to track progress and blockers.',
    },
    {
        icon: Selection,
        title: 'Reward + Remorse',
        desc: 'Tokens move based on outcomes with learning prompts.',
    },
    {
        icon: HandHeart,
        title: 'Charity & Giving',
        desc: 'Donate rewards to verified causes individually or as a team.',
    },
    {
        icon: Ranking,
        title: 'SoGood Ledger',
        desc: 'Reputation-grade record of your purpose-driven actions.',
    },
    {
        icon: Users,
        title: 'Communities',
        desc: 'Team streaks, group goals, and cause-driven challenges.',
    },
    {
        icon: Microscope,
        title: 'Insights',
        desc: 'Dashboards for patterns, engagement, and ESG reporting.',
    },
]

export const RDM_LOOP_STEPS = [
    {
        step: '1',
        title: 'Set a goal',
        desc: 'Daily, weekly, monthly targets that matter to you.',
    },
    {
        step: '2',
        title: 'Take actions',
        desc: 'Micro-actions you can actually sustain.',
    },
    {
        step: '3',
        title: 'Reflect',
        desc: 'Quick daily check-in with truth and clarity (60-120s).',
    },
    {
        step: '4',
        title: 'Reward or Remorse',
        desc: 'Tokens move based on outcomes—no shame, just learning.',
    },
    {
        step: '5',
        title: 'Share goodness',
        desc: 'Donate rewards, support causes, and build your SoGood Ledger.',
    },
]

export const PLATFORM_BENEFITS_INDIVIDUALS = [
    'Stronger discipline without burnout',
    'Better mental clarity and reduced decision fatigue',
    'Improved performance through micro-consistency',
    'Higher self-esteem from integrity-based progress',
    'A “giving habit” built into daily life',
]

export const PLATFORM_BENEFITS_ORGANIZATIONS = [
    'Culture reinforcement without forcing compliance',
    'Higher engagement and lower attrition risk',
    'ESG participation becomes measurable and inclusive',
    'CSR becomes employee-led and transparent',
    'Reputation benefits through SoGood Ledger reporting',
]

export const PLATFORM_HERO_ACTIONS = [
    { label: 'Track', icon: Target, color: 'text-[#ff9800]' },
    { label: 'Reflect', icon: ArrowsClockwise, color: 'text-blue-500' },
    { label: 'Reward', icon: ShieldCheck, color: 'text-green-500' },
    { label: 'Give', icon: Heart, color: 'text-pink-500' },
]
