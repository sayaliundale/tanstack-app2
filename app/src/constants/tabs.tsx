import employeeImg from '@/assets/who_is_for_employee.png'
import customerImg from '@/assets/who_is_for_customer.png'
import studentImg from '@/assets/who_is_for_student.png'
import citizenImg from '@/assets/who_is_for_citizen.png'
import fanImg from '@/assets/who_is_for_fan.png'
import attendeeImg from '@/assets/who_is_for_attendee.png'

export const WHO_IS_FOR_TABS = [
    {
        id: 'employee',
        label: 'Employee',
        headline:
            'Inspire and educate your workforce by transforming corporate culture into a truly shared, immersive experience.',
        paragraph:
            'We help you align every team member with your core mission, fostering a sense of purpose that significantly boosts productivity and long-term employee loyalty.',
        image: employeeImg,
        title: 'Employee Engagement',
    },
    {
        id: 'customer',
        label: 'Customer',
        headline:
            'Through conscious challenges and purposeful rewards, we help your brand build an authentic bond with consumers,',
        paragraph: 'turning everyday actions into a journey of shared value.',
        image: customerImg,
        title: 'Customer Engagement',
    },
    {
        id: 'student',
        label: 'Student',
        headline: 'Make sustainability a journey worth taking.',
        paragraph:
            'Through our gamified learning paths, we empower the next generation to bridge the gap between theory and action, actively contributing to global well-being through ethical and conscious personal growth.',
        image: studentImg,
        title: 'Student Engagement',
    },
    {
        id: 'citizen',
        label: 'Citizen',
        headline: 'Mobilize your community toward a future of shared value.',
        paragraph:
            'We turn civic duty into a seamless, interactive, and motivating experience, providing you with engagement tools that reward participation and drive measurable, real-world impact within the local territory.',
        image: citizenImg,
        title: 'Citizen Engagement',
    },
    {
        id: 'fan',
        label: 'Fan',
        headline:
            'Bridge the gap between the stands and the field by connecting your audience to the core values of your event.',
        paragraph:
            'With AWorld, you turn passive spectators into active players through interactive challenges that keep the momentum and the impact alive long after the curtains close.',
        image: fanImg,
        title: 'Fan Engagement',
    },
    {
        id: 'attendee',
        label: 'Attendee',
        headline:
            'Make your audience the true stars of the show by turning events into participatory landmarks.',
        paragraph:
            'Through interactive learning paths and collective challenges, we drive high-level networking and continuous engagement, ensuring your event leaves a lasting, measurable footprint.',
        image: attendeeImg,
        title: 'Attendee Engagement',
    },
]
