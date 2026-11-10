export const profile = {
  name: 'Tsion Zekaryas',
  title: 'Junior Web Developer',
  email: 'tsionzekaryas49@gmail.com',
  phone: '+251 962 633 441',
  location: 'Addis Ababa, Ethiopia',
  github: 'https://github.com/zionzekk',
  linkedin: 'https://www.linkedin.com/',
  cvUrl: '/cv.pdf',
}

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'REST API Integration', 'Responsive Web Design'],
  },
  {
    category: 'Soft Skills',
    items: ['Team Collaboration', 'Problem Solving', 'Communication', 'Time Management', 'Adaptability'],
  },
]

export const experience = [
  {
    role: 'Frontend Development Intern',
    company: 'Ethronics',
    period: 'Internship',
    description:
      'Contributed to frontend development of web applications, building responsive and user-friendly interfaces. Collaborated with the team on feature implementation, debugging, and improving UI/UX quality.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
  },
  {
    role: 'Student Forum Information Management System',
    company: 'Academic Project',
    period: 'Project',
    description:
      'Designed and developed a full-stack forum platform for students to share information, discussions, and resources. Implemented authentication, CRUD operations, and a clean responsive interface.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Haramaya University',
    period: '2022 – 2026',
    cgpa: 'CGPA: 3.3/4.00',
  },
]

export const projects = [
  {
    name: 'Ethiopian Talent Network (ETN)',
    type: 'MERN Stack Recruitment Platform',
    description:
      'A team project that connects job seekers and employers through a recruitment platform.',
    role: null,
    features: ['Talent profiles', 'Job recommendations', 'Recruitment management'],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/ethiopian-talent-network/ETN',
    demo: '#',
    color: 'from-blue-600 to-cyan-500',
    icon: 'Briefcase',
  },
  {
    name: 'Chatify',
    type: 'MERN Stack Real-Time Chat Application',
    description:
      'A modern messaging application designed to provide users with a smooth communication experience.',
    role: null,
    features: ['Real-time messaging', 'User authentication', 'Responsive chat UI'],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/zionzekk/chatify',
    demo: '#',
    color: 'from-sky-500 to-cyan-500',
    icon: 'MessageCircle',
  },
  {
    name: 'Student Forum Information Management System',
    type: 'Internship Project',
    description:
      'A web-based platform developed to manage student forum information.',
    role: 'Frontend and backend development as part of a collaborative team.',
    features: ['Forum management', 'Information sharing', 'Team collaboration'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Ethronics/student-portal',
    demo: '#',
    color: 'from-emerald-500 to-teal-500',
    icon: 'GraduationCap',
  },
  {
    name: 'TasteTrack',
    type: 'Food Tracking Web Application',
    description:
      'A web application that helps users log meals, track nutrition, and monitor eating habits with an intuitive dashboard.',
    role: null,
    features: ['Meal logging', 'Nutrition tracking', 'Progress dashboard'],
    tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
    github: '#',
    demo: '#',
    color: 'from-amber-500 to-orange-500',
    icon: 'UtensilsCrossed',
  },
]

export const languages = [
  { name: 'English', level: 'Professional / Fluent' },
  { name: 'Amharic', level: 'Native' },
]
