// prisma/seed.ts

import { prisma } from "../src/db";

async function main() {
  await prisma.job.createMany({
    data : [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "Senior",
    remote: true,
    hybrid: false,
    description: "We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications using React and TypeScript.",
    responsibilities: [
      "Develop and maintain responsive web applications using React, TypeScript, and modern frontend tools",
      "Collaborate with UX/UI designers to implement designs and improve user experience",
      "Write clean, maintainable code and perform code reviews",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with emerging trends and technologies in frontend development"
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in React, TypeScript, and modern JavaScript (ES6+)",
      "Experience with state management libraries like Redux or Context API",
      "Knowledge of modern frontend build tools and workflows",
      "Understanding of responsive design principles and cross-browser compatibility",
      "Excellent problem-solving skills and attention to detail"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work schedule",
      "Remote work option",
      "Professional development budget",
      "401(k) matching"
    ],
    skills: ["React", "TypeScript", "JavaScript", "Redux", "HTML", "CSS", "Webpack", "REST API", "Git"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc.",
    location: "New York, NY",
    type: "Full-time",
    experience: "Mid level",
    remote: false,
    hybrid: true,
    description: "We're seeking a talented Full Stack Developer to work on our enterprise applications. You'll be working with both frontend and backend technologies to build scalable solutions.",
    responsibilities: [
      "Develop and maintain full-stack web applications",
      "Write clean, efficient code in JavaScript/TypeScript for frontend and Node.js for backend",
      "Design and implement database schemas and APIs",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize applications for performance and scalability"
    ],
    requirements: [
      "3+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with SQL and NoSQL databases",
      "Knowledge of RESTful API design principles",
      "Familiarity with AWS or similar cloud services",
      "Good understanding of version control systems"
    ],
    benefits: [
      "Competitive compensation package",
      "Health and wellness benefits",
      "Hybrid work model (3 days in office, 2 days remote)",
      "Learning and development opportunities",
      "Regular team events and activities",
      "Modern office in downtown location"
    ],
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Express", "AWS", "Git", "REST API"]
  },
  {
    title: "UX/UI Designer",
    company: "Creative Minds Agency",
    location: "Austin, TX",
    type: "Full-time",
    experience: "Mid level",
    remote: true,
    hybrid: false,
    description: "Join our design team to create beautiful, intuitive user experiences for our clients' products. You'll collaborate with developers and product managers to bring designs to life.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Collaborate with cross-functional teams to define and implement design solutions",
      "Establish design systems and style guides",
      "Stay up-to-date with the latest design trends and tools"
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD",
      "Strong portfolio showcasing your design process and outcomes",
      "Understanding of user-centered design principles",
      "Knowledge of HTML, CSS, and basic JavaScript is a plus",
      "Excellent communication and presentation skills"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive health benefits",
      "Fully remote work with flexible hours",
      "Design conference allowance",
      "Creative team environment",
      "Client variety for diverse experience"
    ],
    skills: ["UI Design", "UX Design", "Figma", "Sketch", "User Research", "Wireframing", "Prototyping", "Design Systems", "Adobe Creative Suite"]
  },
  {
    title: "DevOps Engineer",
    company: "Cloud Systems Corp",
    location: "Seattle, WA",
    type: "Full-time",
    experience: "Senior",
    remote: true,
    hybrid: false,
    description: "We are looking for a skilled DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines.",
    responsibilities: [
      "Design, implement, and maintain CI/CD pipelines",
      "Manage cloud infrastructure using infrastructure as code",
      "Implement monitoring and alerting solutions",
      "Optimize system performance and reliability",
      "Collaborate with development teams to streamline deployment processes"
    ],
    requirements: [
      "5+ years of experience in DevOps or similar role",
      "Strong knowledge of AWS, Azure, or GCP",
      "Experience with containerization technologies like Docker and Kubernetes",
      "Proficiency in infrastructure as code tools (Terraform, CloudFormation)",
      "Experience with CI/CD tools like Jenkins, GitHub Actions, or GitLab CI",
      "Strong scripting skills (Bash, Python)"
    ],
    benefits: [
      "Highly competitive salary",
      "Remote work from anywhere",
      "Comprehensive benefits package",
      "Professional development budget",
      "Latest equipment provided",
      "Flexible working hours"
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux", "Python", "Monitoring", "Security"]
  },
  {
    title: "Data Scientist",
    company: "Analytics Insights",
    location: "Boston, MA",
    type: "Full-time",
    experience: "Mid level",
    remote: false,
    hybrid: true,
    description: "Join our team of data scientists to help extract valuable insights from complex datasets and develop machine learning models to solve business problems.",
    responsibilities: [
      "Develop and implement machine learning models and algorithms",
      "Clean, preprocess, and analyze large datasets",
      "Collaborate with cross-functional teams to identify business opportunities",
      "Present findings and visualizations to stakeholders",
      "Stay current with the latest research and techniques in data science"
    ],
    requirements: [
      "3+ years of experience in data science or related field",
      "Strong programming skills in Python and SQL",
      "Experience with data analysis libraries (Pandas, NumPy, etc.)",
      "Knowledge of machine learning frameworks (Scikit-learn, TensorFlow, PyTorch)",
      "Background in statistics and experimental design",
      "Master's degree or PhD in a quantitative field is preferred"
    ],
    benefits: [
      "Competitive compensation",
      "Health and wellness benefits",
      "Hybrid work model",
      "Continuous learning opportunities",
      "Collaborative work environment",
      "Company-sponsored events"
    ],
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"]
  },
  {
    title: "Product Manager",
    company: "Innovative Products Inc.",
    location: "Chicago, IL",
    type: "Full-time",
    experience: "Senior",
    remote: false,
    hybrid: true,
    description: "We're looking for an experienced Product Manager to lead the development of our flagship product. You'll work closely with engineering, design, and marketing teams to define and execute the product roadmap.",
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize product requirements",
      "Work closely with engineering and design teams to deliver features",
      "Analyze market trends and competition",
      "Conduct user research and gather feedback",
      "Track and measure product performance metrics"
    ],
    requirements: [
      "5+ years of experience in product management",
      "Strong understanding of software development lifecycle",
      "Experience with agile methodologies",
      "Excellent analytical and problem-solving skills",
      "Strong communication and leadership abilities",
      "Technical background or experience working with technical teams"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Hybrid work arrangement",
      "Career advancement opportunities",
      "Professional development budget",
      "Team building activities"
    ],
    skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping", "Stakeholder Management", "Market Research", "Data Analysis", "Product Development", "User Experience"]
  },
  {
    title: "Backend Developer",
    company: "Server Solutions",
    location: "Denver, CO",
    type: "Full-time",
    experience: "Mid level",
    remote: true,
    hybrid: false,
    description: "Join our backend team to build scalable and reliable APIs and services. You'll work on designing and implementing server-side logic and database interactions.",
    responsibilities: [
      "Design and develop scalable backend services and APIs",
      "Implement database schemas and data models",
      "Optimize applications for performance and reliability",
      "Collaborate with frontend developers to integrate user-facing elements",
      "Write clean, maintainable, and well-tested code",
      "Participate in code reviews and technical discussions"
    ],
    requirements: [
      "3+ years of experience in backend development",
      "Strong proficiency in Node.js, Python, or similar backend technologies",
      "Experience with SQL and NoSQL databases",
      "Knowledge of API design principles",
      "Understanding of server security and performance optimization",
      "Familiarity with microservices architecture is a plus"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive health insurance",
      "Fully remote work environment",
      "Flexible working hours",
      "Professional development opportunities",
      "Regular virtual team events"
    ],
    skills: ["Node.js", "Python", "MongoDB", "PostgreSQL", "REST API", "GraphQL", "Microservices", "Docker", "Git"]
  },
  {
    title: "Mobile Developer",
    company: "App Creators",
    location: "Los Angeles, CA",
    type: "Contract",
    experience: "Mid level",
    remote: false,
    hybrid: true,
    description: "We are seeking a talented Mobile Developer to join our team and help build innovative mobile applications for iOS and Android platforms.",
    responsibilities: [
      "Develop and maintain mobile applications for iOS and Android",
      "Write clean, efficient, and maintainable code",
      "Collaborate with design and backend teams",
      "Implement new features and fix bugs",
      "Ensure performance, quality, and responsiveness of applications",
      "Identify and address performance bottlenecks"
    ],
    requirements: [
      "3+ years of experience in mobile app development",
      "Proficiency in React Native or Flutter",
      "Knowledge of native development (Swift for iOS, Kotlin for Android) is a plus",
      "Experience with RESTful APIs and third-party libraries",
      "Understanding of mobile UI/UX principles",
      "Ability to write testable and maintainable code"
    ],
    benefits: [
      "Competitive hourly rate",
      "Hybrid work arrangement",
      "Flexible schedule",
      "Potential for long-term contract extension",
      "Modern office space",
      "Collaborative team environment"
    ],
    skills: ["React Native", "Flutter", "iOS", "Android", "JavaScript", "Swift", "Kotlin", "REST API", "Mobile UI/UX"]
  },
  {
    title: "QA Engineer",
    company: "Quality Systems",
    location: "Portland, OR",
    type: "Full-time",
    experience: "Mid level",
    remote: true,
    hybrid: false,
    description: "Join our quality assurance team to ensure the reliability and performance of our software products. You'll design and implement test plans and automate testing processes.",
    responsibilities: [
      "Create and execute test plans and test cases",
      "Design and implement automation test frameworks",
      "Perform functional, regression, and performance testing",
      "Report and track bugs in issue tracking systems",
      "Collaborate with developers to resolve issues",
      "Continuously improve testing processes and methodologies"
    ],
    requirements: [
      "3+ years of experience in software quality assurance",
      "Experience with test automation frameworks",
      "Knowledge of test management tools and bug tracking systems",
      "Understanding of software development lifecycle",
      "Strong analytical and problem-solving skills",
      "Good communication and documentation abilities"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive health benefits",
      "Fully remote position",
      "Flexible working hours",
      "Career advancement opportunities",
      "Regular team building activities"
    ],
    skills: ["Test Automation", "Selenium", "Cypress", "API Testing", "Performance Testing", "JIRA", "Git", "CI/CD", "Agile"]
  },
  {
    title: "Technical Writer",
    company: "Documentation Experts",
    location: "Remote",
    type: "Part-time",
    experience: "Entry level",
    remote: true,
    hybrid: false,
    description: "We're looking for a Technical Writer to create clear and concise documentation for our software products. You'll work with developers and product managers to ensure accurate and helpful documentation.",
    responsibilities: [
      "Create and maintain technical documentation, including guides, tutorials, and API references",
      "Collaborate with developers and product managers to gather information",
      "Edit and proofread existing documentation",
      "Ensure documentation is up-to-date with product changes",
      "Implement documentation best practices and standards",
      "Gather feedback from users to improve documentation"
    ],
    requirements: [
      "1+ years of experience in technical writing or related field",
      "Strong writing and editing skills",
      "Ability to understand and explain technical concepts clearly",
      "Familiarity with documentation tools and formats (Markdown, reStructuredText, etc.)",
      "Basic understanding of software development processes",
      "Attention to detail and organizational skills"
    ],
    benefits: [
      "Competitive hourly rate",
      "Flexible part-time schedule (20-25 hours per week)",
      "Fully remote position",
      "Opportunity to learn about various technologies",
      "Supportive team environment",
      "Potential for full-time conversion"
    ],
    skills: ["Technical Writing", "Documentation", "Markdown", "Content Strategy", "Editing", "API Documentation", "User Guides", "Information Architecture", "HTML/CSS basics"]
  },
  {
    title: "Junior Web Developer",
    company: "Web Creations",
    location: "Austin, TX",
    type: "Full-time",
    experience: "Entry level",
    remote: false,
    hybrid: true,
    description: "We're looking for a Junior Web Developer to join our growing team. This is an excellent opportunity for someone starting their career in web development to learn and grow with our company.",
    responsibilities: [
      "Build and maintain websites using HTML, CSS, and JavaScript",
      "Implement responsive designs and ensure cross-browser compatibility",
      "Collaborate with designers to implement visual elements",
      "Work with senior developers to learn best practices",
      "Assist in troubleshooting website issues",
      "Learn and adapt to new technologies and frameworks"
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Understanding of responsive web design principles",
      "Eagerness to learn and grow as a developer",
      "Good problem-solving skills",
      "Ability to work in a team environment",
      "Portfolio or examples of previous work (can include educational projects)"
    ],
    benefits: [
      "Competitive salary for entry-level position",
      "Health and wellness benefits",
      "Hybrid work model (2-3 days in office)",
      "Mentorship from experienced developers",
      "Learning and development opportunities",
      "Fun and collaborative work environment"
    ],
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git", "Web Development", "Frontend"]
  },
  {
    title: "Blockchain Developer",
    company: "Crypto Innovations",
    location: "Miami, FL",
    type: "Full-time",
    experience: "Senior",
    remote: true,
    hybrid: false,
    description: "Join our blockchain team to develop decentralized applications and smart contracts. You'll work on cutting-edge blockchain technology and help shape the future of our platform.",
    responsibilities: [
      "Design and implement smart contracts and blockchain solutions",
      "Develop decentralized applications (DApps)",
      "Ensure security and efficiency of blockchain implementations",
      "Stay up-to-date with the latest blockchain technologies and standards",
      "Collaborate with cross-functional teams to integrate blockchain solutions",
      "Participate in code reviews and technical discussions"
    ],
    requirements: [
      "5+ years of software development experience",
      "2+ years of experience in blockchain development",
      "Proficiency in Solidity, Ethereum, and Web3.js",
      "Understanding of consensus mechanisms and blockchain architecture",
      "Experience with cryptocurrency wallets and transactions",
      "Strong security mindset and awareness of blockchain vulnerabilities"
    ],
    benefits: [
      "Highly competitive salary + crypto incentives",
      "Comprehensive health and wellness package",
      "Fully remote work environment",
      "Attendance at blockchain conferences and events",
      "Professional development opportunities",
      "Cutting-edge work in an emerging field"
    ],
    skills: ["Blockchain", "Solidity", "Ethereum", "Smart Contracts", "Web3.js", "DApps", "Cryptocurrency", "JavaScript", "Cryptography"]
  }
]
  });

  console.log(' Seeded jobs successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
