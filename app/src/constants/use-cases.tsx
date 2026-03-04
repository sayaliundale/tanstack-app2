import {
    AirplaneTilt,
    Buildings,
    FirstAid,
    GraduationCap,
    Star,
} from '@phosphor-icons/react'

export const USE_CASES_DATA = [
    {
        id: 'corporates',
        title: 'RDM for Corporates',
        subtitle: 'Purpose-driven engagement that scales across the company.',
        description:
            'RDM helps organizations build healthy performance + healthy culture using a system employees voluntarily adopt because it benefits them personally—while also building measurable organizational outcomes.',
        icon: Buildings,
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        images: [
            '/images/use-cases/corporate-1.png',
            '/images/use-cases/corporate-2.png',
        ],
        sections: [
            {
                id: 'employee-engagement',
                title: 'Employee Engagement',
                description: 'RDM transforms engagement into an everyday habit:',
                points: [
                    'Personal goals aligned to wellbeing + work goals',
                    'Team challenges and streaks',
                    'Micro-recognition through RDM rewards',
                    'Reflection check-ins that improve self-management',
                ],
                outcome:
                    'Higher motivation, stronger collaboration, and better retention.',
            },
            {
                id: 'esg-participation',
                title: 'ESG Participation Company-Wide',
                description:
                    'ESG becomes a mass participation system, not a top-down initiative. Employees can complete verified micro-actions like:',
                points: [
                    'Low-waste habits at office/home',
                    'Eco-commute choices',
                    'Learning and awareness actions',
                    'Volunteer participation',
                ],
                outcome:
                    'Measurable ESG culture, improved sustainability adoption, audit-friendly reporting.',
            },
            {
                id: 'csr-involvement',
                title: 'CSR Involvement via Employee Donation',
                description: 'RDM makes CSR personal and transparent:',
                points: [
                    'Employees earn rewards from responsible actions',
                    'They can donate rewards to approved charity pools',
                    'Campaigns can be matched by the employer',
                    'Impact becomes visible in the SoGood Ledger',
                ],
                outcome:
                    'Stronger CSR participation, higher trust, and real employee ownership of giving.',
            },
        ],
    },
    {
        id: 'education',
        title: 'RDM for Educational Institutions',
        subtitle:
            'Build better students by building better habits, relationships, and purpose.',
        description:
            'RDM supports schools, colleges, and coaching institutions to improve teacher-student relationship quality, consistency in learning, confidence, and employability behaviors.',
        icon: GraduationCap,
        color: 'text-green-600',
        bg: 'bg-green-50',
        images: [
            '/images/use-cases/education-1.png',
            '/images/use-cases/education-2.png',
        ],
        sections: [
            {
                id: 'teacher-student-relationship',
                title: 'Stronger Teacher–Student Relationship',
                description: 'RDM creates constructive interaction loops:',
                points: [
                    'Teachers reward effort and improvement, not just marks',
                    'Students reflect and communicate blockers without fear',
                    'Positive reinforcement builds trust and motivation',
                    'Peer-to-peer recognition improves classroom culture',
                ],
                outcome: 'More respectful, supportive learning environments.',
            },
            {
                id: 'improved-student-performance',
                title: 'Improved Student Performance',
                description: 'RDM improves results through consistency:',
                points: [
                    'Micro-study plans and streak-based learning',
                    'Reflection after tests and study sessions',
                    'Reward loops for completing revision cycles',
                    'Habit-building that reduces procrastination',
                ],
                outcome: 'Measurable improvement in study discipline and exam readiness.',
            },
            {
                id: 'employability-career-readiness',
                title: 'Employability & Career Readiness',
                description: 'RDM trains "workplace behaviors" early:',
                points: [
                    'Reliability, punctuality, communication',
                    'Learning agility and accountability',
                    'Purpose-based planning (3–5 year goals)',
                    'SoGood Ledger as a reputation profile for internships',
                ],
                outcome: 'Students become more job-ready—not just exam-ready.',
            },
        ],
    },
    {
        id: 'healthcare',
        title: 'RDM in Healthcare',
        subtitle: 'Better adherence, better outcomes, better care culture.',
        description:
            'RDM supports patients and care teams with a simple behavioral system that improves adherence and service quality.',
        icon: FirstAid,
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        images: [
            '/images/use-cases/healthcare-1.png',
            '/images/use-cases/healthcare-2.png',
        ],
        sections: [
            {
                id: 'patient-adherence',
                title: 'Patient Adherence & Self-Care',
                description: 'Patients can receive rewards for:',
                points: [
                    'Taking medication on schedule',
                    'Following diet and exercise plans',
                    'Attending follow-ups',
                    'Completing rehab steps',
                ],
                extra:
                    'Reflection helps identify barriers early (forgetfulness, side effects, stress, motivation).',
                outcome: 'Higher adherence, fewer complications, better long-term outcomes.',
            },
            {
                id: 'better-patient-care',
                title: 'Better Patient Care by Doctors, Nurses, Technicians',
                description: 'Care teams can use RDM for:',
                points: [
                    'Patient experience behaviors',
                    'Handover and checklist discipline',
                    'Empathy and communication actions',
                    'Team recognition for service excellence',
                ],
                outcome: 'Improved patient satisfaction and stronger care-team culture.',
            },
        ],
    },
    {
        id: 'hospitality',
        title: 'RDM in Hospitality & Eco-Tourism',
        subtitle:
            'Reward guests for responsible travel—and staff for responsible service.',
        description:
            'RDM helps hotels, resorts, and eco-tourism operators build loyalty and sustainability through real actions.',
        icon: AirplaneTilt,
        color: 'text-teal-600',
        bg: 'bg-teal-50',
        images: [
            '/images/use-cases/hospitality-1.png',
            '/images/use-cases/hospitality-2.png',
        ],
        sections: [
            {
                id: 'guest-rewards',
                title: 'Guest Rewards (Eco-Behaviors)',
                description: 'Guests earn rewards for:',
                points: [
                    'Opting out of daily linen change',
                    'Responsible waste practices',
                    'Local community participation',
                    'Low-impact activities and choices',
                ],
                outcome: 'Sustainability becomes fun, visible, and measurable.',
            },
            {
                id: 'staff-rewards',
                title: 'Staff Rewards (Service & Sustainability)',
                description: 'Staff earn rewards for:',
                points: [
                    'Consistent service excellence',
                    'Hygiene and safety discipline',
                    'Sustainability actions and initiatives',
                    'Guest delight moments',
                ],
                outcome: 'Stronger service culture, reduced attrition, better reviews.',
            },
        ],
    },
    {
        id: 'loyalty',
        title: 'RDM as a Supplement to Loyalty Programs',
        subtitle: 'Add "Reward for Purpose" to traditional loyalty.',
        description:
            'Most loyalty programs reward spending. RDM adds a second dimension: rewarding responsible choices.',
        icon: Star,
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        images: [
            '/images/use-cases/loyalty-1.png',
            '/images/use-cases/loyalty-2.png',
        ],
        sections: [
            {
                id: 'reward-for-purpose',
                title: 'Reward for Purpose',
                description: 'Customers earn RDM rewards for actions like:',
                points: [
                    'Choosing sustainable options',
                    'Recycling/returns programs',
                    'Supporting local/community products',
                    'Completing learning or wellness journeys linked to the brand',
                ],
            },
            {
                id: 'sogood-ledger-entry',
                title: 'SoGood Ledger Entry (Reputation + Meaning)',
                description: 'Every purpose reward creates a "SoGood Ledger" entry:',
                points: [
                    'Verified participation',
                    'Visible contribution footprint',
                    'A personal record of positive choices',
                ],
            },
            {
                id: 'connect-purchase-to-charity',
                title: 'Connect Purchase to Charity',
                description: 'RDM enables a transparent "purchase-to-purpose" bridge:',
                points: [
                    'Customer donates reward tokens to a cause',
                    'Brand matches or amplifies campaigns',
                    'Community impact totals shown publicly (opt-in)',
                ],
                outcome:
                    'Loyalty becomes identity-driven, trust-driven, and impact-driven—without replacing the existing points program.',
            },
        ],
    },
]
