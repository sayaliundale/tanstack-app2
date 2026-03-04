import {
    Buildings,
    ChartLineUp,
    CheckCircle,
    Fingerprint,
    Heart,
    Lock,
    Selection,
    ShieldCheck,
    UsersThree,
} from '@phosphor-icons/react'

export const whyRecordGoodWorkData = [
    {
        icon: ChartLineUp,
        title: 'Track your impact over time',
        desc: 'Habits, volunteering, giving, mentoring, responsible actions.',
    },
    {
        icon: ShieldCheck,
        title: 'Build credibility',
        desc: 'Through consistency, not self-promotion.',
    },
    {
        icon: CheckCircle,
        title: 'Create proof of participation',
        desc: 'For communities, institutions, and causes.',
    },
    {
        icon: Fingerprint,
        title: 'Turn invisible effort into visible reputation',
        desc: 'The kind that earns trust.',
    },
]

export const socialCurrencyData = [
    {
        icon: ShieldCheck,
        title: 'Trust currency',
        desc: 'Others know you keep your commitments',
        color: 'bg-blue-600',
    },
    {
        icon: Heart,
        title: 'Contribution currency',
        desc: 'Your giving and service is visible and meaningful',
        color: 'bg-rose-600',
    },
    {
        icon: CheckCircle,
        title: 'Integrity currency',
        desc: 'You’re recognized for doing what’s right consistently',
        color: 'bg-emerald-600',
    },
    {
        icon: UsersThree,
        title: 'Community currency',
        desc: 'You inspire others to act—and they follow',
        color: 'bg-amber-600',
    },
]

export const legacyAssetsData = [
    'Your actions',
    'Your values',
    'Your causes',
    'Your contributions',
    'Your growth',
]

export const inheritanceListData = [
    'An inheritance of social trust and reputation',
    'A family story of values, recorded through action',
    'An inspirational gift that future generations can follow',
    'A blueprint for living well, not just living fast',
]

export const privacyOptionsData = [
    {
        title: 'Fully private',
        desc: '(for personal growth)',
        icon: Lock,
    },
    {
        title: 'Selective',
        desc: '(share milestones only)',
        icon: Selection,
    },
    {
        title: 'Community-based',
        desc: '(campaign totals, group impact)',
        icon: UsersThree,
    },
    {
        title: 'Institutional',
        desc: '(aggregated reporting without names)',
        icon: Buildings,
    },
]
