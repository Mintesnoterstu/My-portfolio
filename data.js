/* Portfolio content — edit this file to update site content */

const PORTFOLIO = {
  name: "Mintesnot Erstu",
  headline:
    "Front-End Developer (Full-Stack Capable) | Computer Science Graduate | React • Node.js • TypeScript • Tailwind CSS | Graphics Design • Illustrator | Huawei 5G Certified",
  title: "Front-End Developer",
  tagline:
    "Building modern web applications that bridge customer needs with technical solutions.",
  email: "teklemintesnot2@gmail.com",
  phone: "+251987950887",
  location: "Addis Ababa, Ethiopia",

  social: {
    github: "https://github.com/Mintesnoterstu",
    linkedin: "https://linkedin.com/in/mintesnot-erstu-7ab4712ba",
    portfolio: "https://mintesnoterstu.github.io/My-portfolio/",
    graphics: "https://mintesnoterstu.github.io/My-Portfolio-Graphics/",
  },

  about: `Detail-oriented Computer Science graduate from Jimma University (CGPA 3.5/4.0) with expertise in data communication, networking, and software development. Huawei-certified in 5G Mobile Network Deployment and currently pursuing Huawei Datacom training.

I combine technical skills in React, Node.js, TypeScript, and MySQL with a designer's eye for brand identity and UI/UX. I bring leadership experience from serving as Class Representative for five semesters and mentoring 15+ junior students.

I am passionate about building modern web applications, bridging customer needs with technical solutions, and creating meaningful impact through technology.`,

  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Jimma University, Jimma, Ethiopia",
    period: "Graduated: June 2026",
    cgpa: "CGPA: 3.5/4.0",
    coursework: [
      "Data Communication & Computer Networks",
      "Network & System Administration",
      "Introduction to Distributed Systems",
      "Database Design",
      "Software Engineering",
      "Object-Oriented Programming",
      "Operating Systems",
    ],
  },

  skills: {
    technical: [
      {
        category: "Front-End",
        items: [
          "React",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Bootstrap",
          "Remix",
          "Vite",
        ],
      },
      {
        category: "Back-End",
        items: [
          "Node.js",
          "Express.js",
          "MySQL",
          "REST APIs",
          "Prisma",
        ],
      },
      {
        category: "Programming",
        items: ["JavaScript", "TypeScript", "C++", "Java"],
      },
      {
        category: "Networking",
        items: [
          "Data Communication",
          "Distributed Systems",
          "5G",
          "IP Networking",
        ],
      },
      {
        category: "Tools",
        items: [
          "Git",
          "GitHub",
          "Vite",
          "Adobe Illustrator",
          "Adobe Photoshop",
        ],
      },
      {
        category: "Design",
        items: [
          "Logo Design",
          "Brand Identity",
          "Social Media Graphics",
          "Promotional Flyers",
          "Adobe Creative Suite",
        ],
      },
    ],
    soft: [
      "Leadership & Team Management",
      "Cross-Functional Collaboration",
      "Problem-Solving & Adaptability",
      "Clear Communication",
      "Time Management & Accountability",
    ],
  },

  achievements: [
    "Graduated with CGPA 3.5/4.0; led multiple project teams to deliver full-stack applications on schedule",
    "Huawei Certified in 5G Mobile Network Deployment; ongoing Huawei Datacom training",
    "Class Representative for five consecutive semesters; Peer Tutor mentoring 15+ junior students",
    "Led a 5-person team on MediLink final year project",
  ],

  languages: [
    { name: "Amharic", level: "Native" },
    { name: "English", level: "Professional Working Proficiency (B2+)" },
  ],

  projects: [
    {
      title: "MediLink – Healthcare Platform",
      role: "Full-Stack Developer & Team Lead",
      timeline: "September 2025 – June 2026",
      description:
        "A secure, bilingual healthcare platform for Ethiopia connecting patients, doctors, and administrators.",
      features: [
        "AI Symptom Checker",
        "Patient-controlled Consent Management",
        "Health Records & Appointment Scheduler",
        "Medication Tracker",
        "Bilingual AI Chatbot (Amharic/English)",
      ],
      stack: [
        "React",
        "TypeScript",
        "Vite",
        "Material-UI",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Python",
        "Pinecone",
        "DeepSeek API",
      ],
      achievement:
        "Built a bilingual AI chatbot using RAG (Retrieval-Augmented Generation)",
      live: "https://medilink-fyp.onrender.com",
      github: "https://github.com/Mintesnoterstu/MediLink-FYP",
      featured: true,
      color: "#0ea5e9",
    },
    {
      title: "Green House Burger",
      role: "Full-Stack Developer",
      timeline: "2026",
      description:
        "A full-stack ordering platform for a real Addis Ababa restaurant.",
      features: [
        "Digital menu",
        "Order management system",
        "Delivery coordination tools",
      ],
      stack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MySQL",
        "JWT",
      ],
      achievement:
        "Built and deployed a production-ready system for a real business",
      live: null,
      github: "https://github.com/Mintesnoterstu/Green",
      featured: true,
      color: "#22c55e",
    },
    {
      title: "Shirsh Travel Agency",
      role: "Front-End Developer",
      timeline: "June 2025",
      description:
        "A responsive travel agency website showcasing Ethiopian destinations and travel services.",
      features: [
        "Interactive destination galleries",
        "Service listings",
        "Contact forms with validation",
        "Traveler testimonials",
        "Mobile-first design",
      ],
      stack: ["React", "JavaScript", "Bootstrap", "CSS3", "HTML5"],
      achievement:
        "Mobile-first approach with smooth animations and optimized performance",
      live: "https://mintesnoterstu.github.io/ShirshTravelAgency/",
      github: "https://github.com/Mintesnoterstu/ShirshTravelAgency",
      featured: false,
      color: "#8b5cf6",
    },
    {
      title: "CS National Exit Exam Prep",
      role: "Lead Developer & Designer",
      timeline: "2026",
      description:
        "A complete study platform with 1,000+ MCQs aligned with the Ministry of Education blueprint.",
      features: [
        "Practice mode with instant feedback",
        "Timed mock exams (100 questions, 120 minutes)",
        "Progress tracking & analytics",
        "Bookmarks & favorites",
        "Dark/light mode",
      ],
      stack: ["HTML", "CSS", "JavaScript", "Chart.js", "JSON", "Python"],
      achievement:
        "Created a Python script to generate and update the question bank from course materials",
      live: "https://mintesnoterstu.github.io/Exit-exam-question-and-answer/",
      github: "https://github.com/Mintesnoterstu/Exit-exam-question-and-answer",
      featured: false,
      color: "#f59e0b",
    },
    {
      title: "The Row Residential Hotel",
      role: "Front-End Developer",
      timeline: "2025",
      description:
        "A static, responsive hotel website for a luxury aparthotel in Addis Ababa.",
      features: [
        "5 pages: Home, Rooms, Dining, Meetings, Contact",
        "4-star upscale design",
        "41 rooms",
        "Prime Bole location",
      ],
      stack: ["HTML5", "CSS3", "JavaScript"],
      achievement:
        "Clean, professional hospitality website with focus on user experience",
      live: "https://mintesnoterstu.github.io/The-Row-Residential-Hotel/",
      github: "https://github.com/Mintesnoterstu/The-Row-Residential-Hotel",
      featured: false,
      color: "#64748b",
    },
    {
      title: "Weather Dashboard",
      role: "Full-Stack Developer",
      timeline: "2025",
      description:
        "A dynamic weather dashboard providing real-time weather data.",
      features: [
        "City search",
        "Real-time weather display",
        "Clean dashboard UI",
      ],
      stack: ["Next.js", "TypeScript", "CSS", "Weather API"],
      achievement:
        "Built with modern Next.js and TypeScript for performance and type safety",
      live: null,
      github: "https://github.com/Mintesnoterstu/WeatherDashboard",
      featured: false,
      color: "#06b6d4",
    },
  ],

  experience: [
    {
      title: "Full-Stack Developer Intern",
      company: "DIGA Technology",
      location: "Addis Ababa, Ethiopia",
      period: "July 2025 – September 2025",
      highlights: [
        "Engineered the Dreamers PLC Shareholders Management System from concept to deployment using React (Remix), TypeScript, and Node.js",
        "Implemented user authentication, Role-Based Access Control (RBAC), and audit trail for secure data management",
        "Architected development environment with Vite, configuring build tools and linters to optimize performance",
        "Managed complete project lifecycle independently",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Prodigy InfoTech",
      location: "Remote, India",
      period: "February 2025 – March 2025",
      highlights: [
        "Developed four interactive web applications using React and JavaScript",
        "Applied modern React patterns and delivered projects on schedule",
        "Earned certificate with outstanding remarks for high-quality, well-documented work",
      ],
    },
  ],

  certifications: [
    {
      name: "5G Mobile Network Deployment and Industry Applications",
      issuer: "Huawei Academy",
      status: "Completed",
      date: "March 2026",
    },
    {
      name: "Datacom (Data Communication)",
      issuer: "Huawei Academy",
      status: "Ongoing",
      date: "2026",
    },
    {
      name: "Web Developer Intern Certificate",
      issuer: "Prodigy InfoTech",
      status: "Completed",
      date: "March 2025",
    },
    {
      name: "Intro to Graphic Design with Photoshop",
      issuer: "Great Learning Academy",
      status: "Completed",
      date: "May 2024",
    },
    {
      name: "Introduction to Photoshop (Beginner to Master)",
      issuer: "AWAQI",
      status: "Completed",
      date: "2023",
    },
  ],

  references: [
    {
      name: "Dr. Suresh Kumar",
      phone: "+251 924 092 460",
      email: "pendemsuresh@gmail.com",
    },
    {
      name: "Mr. Mamo Fidano",
      phone: "+251 921 104 540",
      email: "fideno.worku@ju.edu.et",
    },
  ],
};
