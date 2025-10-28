// 📝 PORTFOLIO EDITOR - Edit your information here
// This file contains all your portfolio data. Simply update the values below!

export const portfolioData = {
  // ========================================
  // 🏠 ABOUT SECTION (Slide 1)
  // ========================================
  about: {
    name: "EniyaAkash",
    title: "Your Professional Title",
    bio: "Replace this with your personal bio. Tell visitors about yourself, your passion, and what makes you unique in your field. Keep it concise and engaging!",
    avatar: "/logo.png", // Add your photo to /public/ folder and update path here
    skills: [
      "Your Skill 1", 
      "Your Skill 2", 
      "Your Skill 3", 
      "Your Skill 4"
    ]
  },

  // ========================================
  // 🎓 EDUCATION SECTION (Slide 2)
  // ========================================
  education: [
    {
      degree: "Your Degree Name",
      school: "Your University/College",
      year: "2018-2020",
      gpa: "3.8/4.0", // Optional: remove if not needed
      description: "Describe your education, focus areas, achievements, or special projects."
    },
    {
      degree: "Another Degree or Certificate",
      school: "Another Institution",
      year: "2014-2018",
      gpa: "3.9/4.0",
      description: "Add details about this educational experience."
    }
    // Add more education entries if needed
  ],

  // ========================================
  // 💼 EXPERIENCE SECTION (Slide 3)
  // ========================================
  experience: [
    {
      position: "Your Job Title",
      company: "Company Name",
      period: "2020-Present",
      description: "Brief description of your role and responsibilities.",
      achievements: [
        "Key achievement or accomplishment 1",
        "Key achievement or accomplishment 2", 
        "Key achievement or accomplishment 3"
      ]
    },
    {
      position: "Previous Job Title",
      company: "Previous Company",
      period: "2018-2020",
      description: "Description of your previous role.",
      achievements: [
        "Previous achievement 1",
        "Previous achievement 2"
      ]
    }
    // Add more experience entries if needed
  ],

  // ========================================
  // 🛠️ TECHNICAL SKILLS SECTION (Slide 4)
  // ========================================
  technicalSkills: [
    {
      category: "Frontend",
      skills: [
        "React", 
        "Vue.js", 
        "TypeScript", 
        "Tailwind CSS",
        "HTML/CSS"
      ]
    },
    {
      category: "Backend", 
      skills: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "REST APIs"
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Agile/Scrum"
      ]
    }
    // Add more skill categories if needed
  ],

  // ========================================
  // 🚀 PROJECTS SECTION (Slide 5)
  // ========================================
  projects: [
    {
      title: "Project Name 1",
      description: "Brief description of what this project does and the problem it solves.",
      tech: ["Technology1", "Technology2", "Technology3"],
      link: "https://your-project-link.com" // Add your project URL
    },
    {
      title: "Project Name 2", 
      description: "Description of your second project and its key features.",
      tech: ["Tech1", "Tech2"],
      link: "https://another-project.com"
    },
    {
      title: "Project Name 3",
      description: "Description of your third project.",
      tech: ["Technology1", "Technology2", "Technology3", "Technology4"],
      link: "https://third-project.com"
    }
    // Add more projects if needed
  ],

  // ========================================
  // 🤝 SERVICES SECTION (Slide 6)
  // ========================================
  services: [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: "Code" // Don't change this - it's the icon name
    },
    {
      title: "Mobile Development", 
      description: "Cross-platform mobile apps for iOS and Android devices.",
      icon: "FolderOpen" // Don't change this
    },
    {
      title: "Technical Consulting",
      description: "Expert advice on architecture, technology stack, and development strategies.",
      icon: "Handshake" // Don't change this
    }
    // Add more services if needed
  ],

  // ========================================
  // 📧 CONTACT SECTION (Slide 7)
  // ========================================
  contact: {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567", // Optional: remove if not needed
    location: "Your City, Country",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile", 
      twitter: "https://twitter.com/yourusername" // Optional: remove if not needed
    }
  }
}

// ========================================
// 🎨 THEME CUSTOMIZATION (Optional)
// ========================================
export const themeConfig = {
  // Change colors by updating these Tailwind classes
  backgroundGradient: "from-slate-900 via-purple-900 to-slate-900",
  primaryColor: "purple",
  secondaryColor: "pink",
  
  // Animation settings (in milliseconds)
  animationDuration: 300,
  staggerDelay: 200,
  
  // Layout settings
  maxContentWidth: "max-w-4xl",
  cardPadding: "p-6"
}

// ========================================
// 📝 EDITING INSTRUCTIONS
// ========================================
/*
HOW TO EDIT YOUR PORTFOLIO:

1. 📝 TEXT UPDATES:
   - Simply replace the text in quotes with your information
   - Keep descriptions concise (2-3 sentences max)
   - Use professional language

2. 🖼️ ADD YOUR PHOTO:
   - Place your photo in the /public/ folder
   - Update avatar path: "/your-photo-name.jpg"
   - Recommended size: 400x400px
   - Supported formats: .jpg, .png, .webp

3. ➕ ADD MORE ITEMS:
   - Copy and paste existing entries
   - Follow the same structure
   - Add commas between entries

4. ❌ REMOVE ITEMS:
   - Delete the entire entry including the comma
   - Make sure to keep the array structure intact

5. 🎨 CHANGE COLORS:
   - Edit themeConfig.backgroundGradient
   - Available colors: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

6. 💾 SAVE & REFRESH:
   - Save this file (Ctrl+S or Cmd+S)
   - Your website will update automatically at http://127.0.0.1:3000

7. 🔗 LINKS:
   - Make sure all URLs start with https://
   - Test all links before publishing
   - Use real project URLs when available

TIPS:
• Keep it professional but authentic
• Use action verbs in descriptions
• Quantify achievements when possible (numbers, percentages)
• Check spelling and grammar
• Test on mobile devices
• Keep skill names consistent with industry standards
*/
