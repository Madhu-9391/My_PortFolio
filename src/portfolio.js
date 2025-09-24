/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Puppala Madhuvenu",
  title: "Hi all, I'm Madhu",
  subTitle: emoji(
    "A passionate Full Stack/Mern Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Y9hVjMpbElTMlW_OJvyGziPAh13KBQAg/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Madhu_0301",
  linkedin: "https://www.linkedin.com/in/madhuvenu-vits/",
  gmail: "puppalamadhuvenu9391gmail.com",
  gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/madhuvenu.puppala",
  medium: "https://medium.com/@puppalamadhuvenu9391",
  stackoverflow: "https://stackoverflow.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "tailwindcss",
      fontAwesomeClassname: "fas fa-wind"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "PBR Visvodaya Institute of Technology and Science",
      logo: require("./assets/images/Pbrvitslogo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2022 - 2026",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."
    },

    {
      schoolName: "Sri Sai Co-operative Jr College",
      subHeader: "Intermediate (MPC)",
      duration: "2020 - 2022",
      desc: "Percentage: 70.6%",
      logo: require("./assets/images/SaiCooperative.png")
    },
    {
      schoolName: "AP Model School, Kondapuram",
      logo: require("./assets/images/ApModel.png"),
      subHeader: "State Board",
      duration: "2019 - 2020",
      desc: "Percentage: 89.33%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend", progressPercentage: "90%"},
    {Stack: "Backend", progressPercentage: "75%"},
    {Stack: "AI/Programming", progressPercentage: "70%"}
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Swiggy Clone (Full Stack Project)",
      company: "Self Project",
      companylogo: require("./assets/images/SelfProject.png"),
      date: "2023-2024",
      desc: "Built a Swiggy-inspired food delivery app with restaurant browsing, menu, cart & order management. Used React.js, Tailwind CSS, MongoDB & JWT."
    },
    {
      role: "AI Chatbot (Gemini API)",
      company: "Self Project",
      companylogo: require("./assets/images/SelfProject.png"),
      date: "2024",
      desc: "Developed an AI-powered chatbot integrated with React.js frontend for real-time responses and contextual interactions."
    },
    {
      role: "YOLOv8 Object Detection",
      companylogo: require("./assets/images/SelfProject.png"),

      company: "Self Project",
      date: "2023",
      desc: "Implemented YOLOv8-based object detection with scope for real-time analytics in MERN applications."
    },
    {
      role: "Portfolio Website",
      company: "Self Project",
      companylogo: require("./assets/images/SelfProject.png"),

      date: "2022",
      desc: "Designed and deployed a responsive personal portfolio using React.js & Tailwind CSS."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "A few key projects I’ve built",
  projects: [
    {
      image: require("./assets/images/Swiggy.png"),
      projectName: "Swiggy Clone",
      projectDesc: "Food delivery app clone with full-stack features.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/Madhu-9391/Swiggy-clone"}
      ]
    },
    {
      image: require("./assets/images/Chatbot.png"),
      projectName: "AI Chatbot",
      projectDesc: "Chatbot powered by Gemini API with React.js UI.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/Madhu-9391/Chat-bot"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "React Js",
      subtitle: "Certified by Scaler Academy",
      image: require("./assets/images/Scalerlogo.png"),
      imageAlt: "Scaler logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://moonshot.scaler.com/s/sl/ux5kA-lMfE?_gl=1*j3n217*_gcl_au*MTcxODAyNDk0OC4xNzUzMzU3MjQ5LjgwMjc3NTEzOC4xNzUzNDU1MjAzLjE3NTM0NTUyMTE.*FPAU*MjAzMDM2NjQ2OS4xNzUzMzU3MjQ4*_ga*ODgwNjM0OTkzLjE3MjE5MTk1Nzc.*_ga_53S71ZZG1X*czE3NTcwNTgwODYkbzQ4JGcwJHQxNzU3MDU4MTMwJGoxNiRsMCRoMzE1MTM3MDc3"
        }
      ]
    },
    {
      title: "Java Programming",
      subtitle: "Ceritified by CodeTantra",
      image: require("./assets/images/CodeTantra.png"),
      imageAlt: "CodeTantra logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Frontend",
      subtitle: "Ceritified by CodeTantra",
      image: require("./assets/images/CodeTantra.png"),
      imageAlt: "CodeTantra logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Java",
      subtitle: "Ceritified by edX",
      image: require("./assets/images/edXlogo.png"),
      imageAlt: "edX logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Python",
      subtitle: "Ceritified by Pantech E-Learning",
      image: require("./assets/images/Pantech.png"),
      imageAlt: "pantech logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9391808204",
  email_address: "puppalamadhuvenu9391@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
