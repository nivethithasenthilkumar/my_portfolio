/* Change this file to get your personal Portfolio */
/* Fresher-safe version – NO build errors */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* =====================
   SPLASH SCREEN
===================== */
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

/* =====================
   ILLUSTRATION
===================== */
const illustration = {
  animated: true
};

/* =====================
   GREETING (FRESHER)
===================== */
const greeting = {
  username: "NiveNk",
  title: "Hi,I'm Nivethitha ",
  subTitle: emoji(
    "A Computer Communication Engineering student  passionate about Web Development, Software Engineering, and building real-world applications. Always learning, always improving."
  ),
  resumeLink: "https://drive.google.com/file/d/1AsAmrUxCMxTVjtpsh8tnNxooSV3tFCxF/view?usp=sharing", // add Google Drive link later
  displayGreeting: true
};

/* =====================
   SOCIAL LINKS
===================== */
const socialMediaLinks = {
  github: "https://github.com/https://github.com/nivethithasenthilkumar",
  linkedin: "https://www.linkedin.com/in/ nivethitha-senthil-kumar-a245292b2",
  gmail: "nivethitha1703senthilkumar@gmail.com",
  display: true
};



const skillsSection = {
  title: "What I Do",
  subTitle:
    "SOFTWARE ENGINEERING FOCUSED DEVELOPER WITH FULL-STACK, AI & PROBLEM-SOLVING MINDSET",

  skills: [
    emoji("⚡ Design and develop scalable software solutions using engineering principles"),
    emoji("⚡ Build full-stack web applications (Frontend + Backend + Database)"),
    emoji("⚡ Work with APIs, data handling, and system integration"),
    emoji("⚡ Apply problem-solving, DSA, and logical thinking to real-world problems"),
    emoji("⚡ Explore AI, Machine Learning, and Generative AI concepts"),
    emoji("⚡ Fast learner — adaptable to new technologies, tools, and domains")
  ],

  softwareSkills: [
    // Frontend
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },

    // Backend & Programming
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },

    // Databases
    { skillName: "SQL & Databases", fontAwesomeClassname: "fas fa-database" },

    // AI / ML
    { skillName: "Machine Learning (Basics)", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Generative AI", fontAwesomeClassname: "fas fa-brain" },

    // Tools & Cloud
    { skillName: "Git & GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "AWS (Learning)", fontAwesomeClassname: "fab fa-aws" }
  ],

  display: true
};

 
/* =====================
   EDUCATION
===================== */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "VSB Engineering College, Karur",
      logo: require("./assets/images/harvardLogo.png"), // existing safe image
      subHeader: "B.E – Computer Communication Engineering",
      duration: "2023 – 2027",
      desc: "Currently pursuing undergraduate engineering with strong academic performance.",
      descBullets: [
        "Current CGPA: 9.15",
        "Strong foundation in Computer Networks, Programming & Web Technologies",
        "Completed academic and mini projects"
      ]
    },
    {
      schoolName: "Vidya Mandir Matriculation Higher Secondary School",
      logo: require("./assets/images/images.png"),
      subHeader: "Higher Secondary Education (XII)",
      duration: "Completed in 2023",
      desc: "Completed Higher Secondary education with excellent academic performance.",
      descBullets: [
        "Percentage: 95.75%",
        "School Topper",
        "Strong performance in Mathematics and Physics"
      ]
    },
    {
      schoolName: "Vidya Mandir Matriculation Higher Secondary School",
      logo: require("./assets/images/images.png"),
      subHeader: "Secondary School Education (X)",
      duration: "Completed in 2021",
      desc: "Completed Secondary School education with strong academic foundation.",
    
    }
  ]
};


/* =====================
   SKILL BARS
===================== */
// ===============================
// SKILL PROFICIENCY SECTION
// ===============================

const techStack = {
  viewSkillBars: true, // Show skill progress bars

  experience: [
    // ---------- CORE ENGINEERING SKILLS ----------
    {
      Stack: "Frontend Development (HTML, CSS, JS, React)",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend Development (Node.js, APIs – Basics)",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming Fundamentals",
      progressPercentage: "75%"
    },
    {
      Stack: "Problem Solving & Logical Thinking",
      progressPercentage: "80%"
    },
    {
      Stack: "Database & SQL",
      progressPercentage: "70%"
    },
    

    // ---------- MODERN & AI-ORIENTED SKILLS ----------
    {
      Stack: "AI & Machine Learning (Foundations)",
      progressPercentage: "65%"
    },
    {
      Stack: "Python & Data Analysis",
      progressPercentage: "70%"
    },
    
    {
      Stack: "Web + AI Integration (Concept Level)",
      progressPercentage: "60%"
    },
   
    {
      Stack: "Cloud & Deployment (Basics)",
      progressPercentage: "65%"
    },

    // ---------- CONTINUOUS LEARNING (BOTTOM SECTION) ----------
    {
      Stack: "AWS (Udemy – Ongoing Learning)",
      progressPercentage: "50%"
    },
    {
      Stack: "Generative AI (Learning Phase)",
      progressPercentage: "40%"
    }
  ],

  displayCodersrank: false
};


/* =====================
   EXPERIENCE (PROJECT-BASED)
===================== */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Project Intern – Financial Application Development",
      company: "Infosys Springboard",
      companylogo: require("./assets/images/download.png"),
      date: "Oct 2025 – Dec 2025",
      desc:
        "Worked on a financial domain project focused on understanding real-world enterprise workflows, data handling, and application structure used in large-scale IT organizations.",
      descBullets: [
        "Analyzed financial data flow and business logic used in enterprise systems",
        "Contributed to frontend modules using react js and spring boot",
        "Gained exposure to SDLC practices followed in corporate environments",
        "Improved understanding of secure data handling and validation concepts"
      ]
    },

    {
      role: "Project Trainee – Machine Learning & RF Systems",
      company: "Mindview Technology",
      companylogo: require("./assets/images/mindview.png"),
      date: "Jun 2024 – Jul 2024",
      desc:
        "Developed a Radio Frequency–based project integrated with Machine Learning concepts to analyze signal patterns and improve system accuracy.",
      descBullets: [
        "Worked on Radio Frequency (RF) data collection and preprocessing",
        "Applied basic Machine Learning models for pattern recognition",
        "Collaborated with mentors to understand real-time signal behavior",
        "Strengthened fundamentals in ML, data analysis, and problem-solving"
      ]
    },

    {
      role: "Academic Project – Smart Crop Monitoring System",
      company: "University Academic Project",
      companylogo: require("./assets/images/harvardLogo.png"),
      date: "Aug 2025 – Sep 2025",
      desc:
        "Designed an intelligent crop monitoring and recommendation system using satellite-based NDVI values and AI-driven analysis to support data-informed agricultural decisions.",
      descBullets: [
        "Used NDVI (Normalized Difference Vegetation Index) values for crop health assessment",
        "Integrated AI-based recommendation logic for crop management insights",
        "Analyzed satellite data to detect stress patterns in crops",
        "Focused on practical application of AI for real-world environmental challenges"
      ]
    }
  ]
};

/* =====================
   OPEN SOURCE (KEEP, DISABLE)
===================== */
const openSource = {
  showGithubProfile: "false",
  display: false
};

/* =====================
   BIG PROJECTS (DISABLE)
===================== */
const bigProjects = {
  title: "",
  subtitle: "",
  projects: [],
  display: false
};

/* =====================
   ACHIEVEMENTS
===================== */
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Academic Excellence, Technical Growth & Sports Achievements",

  achievementsCards: [
    // ===============================
    // PROGRAMMING & CODING ACHIEVEMENTS
    // ===============================
    {
      title: "Competitive Programming & Problem Solving",
      subtitle:
        "Solved 125+ problems on LeetCode and 100+ problems across GeeksforGeeks & HackerRank, strengthening DSA, logic building, and coding efficiency.",
      image: require("./assets/images/coding.png"), 
      // 👉 You can replace this image later if needed
      imageAlt: "Coding Achievement",
      footerLink: [
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/u/Nivethitha_senthilkumar/" // 🔴 ADD your LeetCode profile link here
        },
        {
          name: "GeeksforGeeks Profile",
          url: "https://www.geeksforgeeks.org/profile/nivethitha1703eu4t" // 🔴 ADD your GFG profile link here
        },
        {
          name: "HackerRank Profile",
          url: "https://www.hackerrank.com/profile/nivethitha1703s1" // 🔴 ADD your HackerRank profile link here
        }
      ]
    },

    // ===============================
    // RESEARCH & PAPER PUBLICATION
    // ===============================
    {
      title: "Research Paper Publications",
      subtitle:
        "Authored and presented two technical research papers focusing on emerging technologies and applied problem-solving.",
      image: require("./assets/images/ieee.png"),
      // 👉 Replace with journal / conference logo if needed
      imageAlt: "Research Paper",
      footerLink: [
        {
          name: "Paper 1 – View Publication",
          url: "" // 🔴 ADD paper 1 link here
        },
        {
          name: "Paper 2 – View Publication",
          url: "" // 🔴 ADD paper 2 link here
        }
      ]
    },

    // ===============================
    // SPORTS ACHIEVEMENTS (NON-ACADEMIC)
    // ===============================
    {
      title: "National & State Level Sports Achievements",
      subtitle:
        "Represented at National and State levels in Kabaddi and Netball, demonstrating leadership, teamwork, discipline, and competitive spirit.",
      image: require("./assets/images/mymedals.png"),
      // 🔴 USE FULL-BACKGROUND IMAGE of your medals here
      imageAlt: "Sports Achievement",
      footerLink: [
        {
          name: "View Sports Achievements",
          url: "" // 🔴 ADD Google Drive / image gallery link here
        }
      ]
    },

    // ===============================
    // SCIENCE EXPO & QUIZ ACHIEVEMENTS
    // ===============================
    {
      title: "Junior SASTRA Expo & Academic Competitions",
      subtitle:
        "Silver Medalist at Junior SASTRA Expo for science project presentation. Also awarded in quiz and technical project presentation events.",
      image: require("./assets/images/sastra.png"),
      // 👉 Upload expo / certificate logo here
      imageAlt: "Science Expo Achievement",
      footerLink: [
        {
          name: "View Certificate",
          url: "" // 🔴 ADD certificate / proof link here
        }
      ]
    }
  ],

  display: true,
};

// ===============================
// CERTIFICATIONS SECTION
// ===============================
const certificationSection = {
  title: emoji("Certifications 🎓"),
  subtitle: "Professional Certifications & Continuous Learning",

  certifications: [
    // ===============================
    // NPTEL CERTIFICATIONS
    // ===============================
    {
      title: "NPTEL – Data Structures & Algorithms using Java",
      subtitle: "Elite Certification",
      logo: require("./assets/images/nptel.png"),
      status: "Completed",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1RfZfZ14wGElPAYt_cUfGP1v5mj6I-vvL/view?usp=sharing" // 🔴 ADD NPTEL DSA certificate link
        }
      ]
    },
    {
      title: "NPTEL – Programming in Java",
      subtitle: "Silver Certification",
      logo: require("./assets/images/nptel.png"),
      status: "Completed",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1hpZxDJFzaAvIgaCgcE4ZqiKWFN9nUxzS/view?usp=sharing" // 🔴 ADD NPTEL Java certificate link
        }
      ]
    },
    {
      title: "NPTEL – Cloud Computing",
      subtitle: "Elite Certification",
      logo: require("./assets/images/nptel.png"),
      status: "Completed",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1bYi2E8FYnyK5rRlZMozD-4xC4_sn2ueK/view?usp=sharing" // 🔴 ADD NPTEL Cloud certificate link
        }
      ]
    },

    // ===============================
    // SIMPLILEARN CERTIFICATIONS
    // ===============================
    {
      title: "SQL Certification",
      subtitle: "Database & Query Fundamentals",
      logo: require("./assets/images/simple.png"),
      status: "Completed",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1lQBaRHqGrBvNAH1d4cEZPMjjN0-nsssm/view?usp=sharing" // 🔴 ADD Simplilearn SQL certificate link
        }
      ]
    },
    {
      title: "JavaScript Certification",
      subtitle: "Core JavaScript & Web Fundamentals",
      logo: require("./assets/images/simple.png"),
      status: "Completed",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1KSwgc3k9rWWkhuq6Wlkxx4TYk9QrOadu/view?usp=sharing" // 🔴 ADD Simplilearn JS certificate link
        }
      ]
    },

    // ===============================
    // UDEMY CERTIFICATION
    // ===============================
    {
      title: "Python Programming",
      subtitle: "Python for Data Handling & Automation",
      logo: require("./assets/images/udemy.png"),
      status: "Completed",
      footerLink: [
        {
          name: "View Certificate",
          url: "" // 🔴 ADD Udemy Python certificate link
        }
      ]
    },

    // ===============================
    // SPORTS CERTIFICATES
    // ===============================
    {
      title: "Sports Certificates",
      subtitle: "National & State Level Kabaddi and Netball Participation",
      logo: require("./assets/images/sports.png"),
      status: "Completed",
      footerLink: [
        {
          name: "View Certificates",
          url: "https://drive.google.com/file/d/1c_Z5i_6-7F9J4_yI2OkwJNO1vvUkQCcN/view?usp=sharing" // 🔴 ADD Drive / gallery link
        }
      ]
    },

    // ===============================
    // ONGOING CERTIFICATIONS
    // ===============================
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Cloud Fundamentals & AWS Services",
      logo: require("./assets/images/aws.png"),
      status: "In Progress",
      footerLink: [
        {
        name:"Udemy Account Progress ",
        url:"https://www.udemy.com/user/nivethitha-senthilkumar/"
    }]
    },
    {
      title: "Generative AI – Google Cloud Platform",
      subtitle: "GenAI Concepts, LLMs & Prompt Engineering",
      logo: require("./assets/images/genai.png"),
      status: "In Progress",
      footerLink: [
        {
          name: "View Certificates",
          url: "https://drive.google.com/file/d/1QCFNuEalSLGOxkgKshdMWN8OUSDPuf4v/view?usp=sharing" // 🔴 ADD Drive / gallery link
        }

      ]
    }
  ],

  display: true,
};

/* =====================
   BLOGS (DISABLE)
===================== */
const blogSection = {
  title: "",
  subtitle: "",
  blogs: [],
  display: false
};

/* =====================
   TALKS (DISABLE)
===================== */
const talkSection = {
  title: "",
  subtitle: "",
  talks: [],
  display: false
};

/* =====================
   PODCAST (DISABLE)
===================== */
const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
  display: false
};

/* =====================
   RESUME
===================== */
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

/* =====================
   CONTACT
===================== */
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to internships and entry-level opportunities.",
  number: "+91 8489495908",
  email_address: "nivethitha1703senthilkumar@gmail.com"
};

/* =====================
   TWITTER (DISABLE)
===================== */
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

/* =====================
   EXPORTS (DO NOT TOUCH)
===================== */
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  certificationSection, 
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
