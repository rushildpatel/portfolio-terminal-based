"use client";
const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "Education",
  },
  {
    command: "experience",
    description: "Real Life Work Experince"
  },
  {
    command: "skills",
    description: "Tech Skills",
  },
  {
    command: "projects",
    description: "Tech Projects",
  },
  {
    command: "resume",
    description: "Resume",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "clear",
    description: "Clear terminal",
  },
];

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}

const githubUrl = "github.svg";
const emailUrl = "email.svg";
const linkedinUrl = "linkedin.svg";
const instagramUrl = "instagram.svg";

const iconsHTML = `
  <br/>Or click on any of the icons below: <br/>
  <div style="display: inline-block; background-color: white; padding: 2px; border-radius: 4px; padding-top: 1px">
    <a class="meaning" href="https://github.com/rushildpatel" target="_blank"><img src="${githubUrl}" alt="GitHub" style="width: 20px; height: 20px;"></a>
  </div>
  <div style="display: inline-block; background-color: white; padding: 2px; border-radius: 4px;">
    <a class="meaning" href="mailto:rushildineshpatel2000@gmail.com" target="_blank"><img src="${emailUrl}" alt="Email" style="width: 20px; height: 20px;"></a>
  </div>
  <div style="display: inline-block; background-color: white; padding: 2px; border-radius: 4px;">
    <a class="meaning" href="https://www.linkedin.com/in/rushilpatel07/" target="_blank"><img src="${linkedinUrl}" alt="LinkedIn" style="width: 20px; height: 20px;"></a>
  </div>
   <div style="display: inline-block; background-color: white; padding: 2px; border-radius: 4px;">
    <a class="meaning" href="https://www.instagram.com/rushil______/" target="_blank"><img src="${instagramUrl}" alt="Instagram" style="width: 20px; height: 20px;"></a>
  </div><br/>
  `;


const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("")
    +`${iconsHTML} <br/>`;
};

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML = projects
    .map(
      (project) => `
      <div style="border-radius: 8px; padding: 16px; margin-bottom: 16px; background-color: var(--background-color);">
        <h2 style="color: var(--primary); margin: 0;">
          <a href="${project.link}" target="_blank" style="text-decoration: none; color: var(--primary);">${project.name}</a>
        </h2>
        <div style="margin-bottom: 8px; margin-top: 8px;">
          ${project.stack
            .map(
              (tech) => `
              <span style="
                display: inline-block;
                padding: 4px 8px;
                margin: 4px;
                background-color: var(--extra-color);
                color: black;
                border-radius: 4px;
                transition: all 0.3s ease;
                font-size: 12px;
              " 
              onmouseover="this.style.backgroundColor = 'var(--text-color)'; this.style.color = 'var(--extra-color)';"
              onmouseout="this.style.backgroundColor = 'var(--extra-color)'; this.style.color = 'black';">
                ${tech}
              </span>`
            )
            .join("")}
        </div>
        <p style="color: var(--text-color); margin: 0;">
          ${project.description}
        </p>
        <a href="${project.github}" target="_blank" style="
          display: inline-block; 
          margin-top: 8px; 
          padding: 4px 8px; 
          background-color: var(--extra-color); 
          color: black; 
          border: none; 
          border-radius: 4px; 
          text-decoration: none; 
          font-size: 12px; 
          line-height: 1;
        ">GitHub</a>
      </div>`
    )
    .join("");
  return projectHTML;
};


const ncsuLogo = "ncsu-logo.png";
const muLogo = "muni-logo.png"


const getEducation = () => `
  <div style="border-radius: 8px; padding: 16px; margin-bottom: 16px; background-color: var(--background-color);">
    
    <div style="display: flex; align-items: center; margin-bottom: 16px;">
      <img src=${ncsuLogo} alt="NC State Logo" style="width: 80px; height: auto; margin-right: 16px;">
      <div>
        <h2 style="color: var(--primary); margin: 0;">
          North Carolina State University, NC, US
        </h2>
        <p style="margin: 0;">
          Master of Computer Science | (GPA: 3.94/4)
          <br/>Expected: Dec 2024
        </p>
      </div>
    </div>
    
    <div style="display: flex; align-items: center;">
      <img src=${muLogo} alt="MU Logo" style="width: 80px; height: auto; margin-right: 16px;">
      <div>
        <h2 style="color: var(--primary); margin: 0;">
          Mumbai University, India
        </h2>
        <p style="margin: 0;">
          Bachelors in Technology – Information Technology | (GPA: 9.20/10)
          <br/>Aug 2019 – May 2023
        </p>
      </div>
    </div>
    
  </div>
`;



const ptc = "ptcInc-logo.png";
const nutanix = "nutanix-logo.png";
const smollon = "smollan-logo.png";
const skinzy = "skinzy-logo.png";

const getExperience = () => `
  <div style="border-radius: 8px; padding: 16px; margin-bottom: 16px; background-color: var(--background-color);">
    
    <div style="display: flex; align-items: flex-start; margin-bottom: 16px;">
      <img src=${ptc} alt="PTC Logo" style="width: 80px; height: auto; margin-right: 16px;">
      <div>
        <h2 style="color: var(--primary); margin: 0;">
          PTC, Boston, United States
        </h2>
        <p style="margin: 0;">
          Software Engineering Intern | May 2024 – Aug 2024
        </p>
        <ul style="padding-left: 16px; margin: 8px 0 0; color: white;">
          <li>Developed modifications to industry leading cloud CAD software OnShape, by adding features and executing an overhaul in a fullstack development Agile SDLC.</li>
          <li>Implemented end to end changes to TypeScript frontend (Angular, VueJS), Java server, and C++ geometry backend to introduce the new "midpointline" sketch tool, and released it in live production in the latest sprint release.</li>
          <li>Developed Unit testing and Playwright tests for my client-side code and integrated it into the CI/CD automated tests.</li>
        </ul>
      </div>
    </div>
    
    <div style="display: flex; align-items: flex-start; margin-bottom: 16px;">
      <img src=${nutanix} alt="Nutanix Logo" style="width: 80px; height: auto; margin-right: 16px;">
      <div>
        <h2 style="color: var(--primary); margin: 0;">
          Nutanix, United States
        </h2>
        <p style="margin: 0;">
          Open Source Contributor | Oct 2023 – Dec 2023
        </p>
        <ul style="padding-left: 16px; margin: 8px 0 0; color: white;">
          <li>Collaborated with the Nutanix team to extend the NDB operator's capabilities, focusing on supporting Postgres High Availability (HA) databases using Go, Kubernetes, and Docker.</li>
          <li>Coded adapter design OOPS pattern class to facilitate seamless bridging of client messages to backend containers in Go.</li>
        </ul>
      </div>
    </div>
    
    <div style="display: flex; align-items: flex-start; margin-bottom: 16px;">
      <img src=${smollon} alt="Smollan Logo" style="width: 80px; height: auto; margin-right: 16px;">
      <div>
        <h2 style="color: var(--primary); margin: 0;">
          Smollan, India
        </h2>
        <p style="margin: 0;">
          Software Development Intern | Sept 2022 – Oct 2022
        </p>
        <ul style="padding-left: 16px; margin: 8px 0 0; color: white;">
          <li>Developed Python scripts using Selenium, BeautifulSoup, Google Cloud Platform, and Pandas to collect data for 150+ Google Pixel Phone competitors and set up MySQL database for streamlined data collection and retrieval.</li>
          <li>Automated web crawling process and implemented Error Handling to reduce stoppages due to failovers by 75%.</li>
        </ul>
      </div>
    </div>
    
    <div style="display: flex; align-items: flex-start;">
      <img src=${skinzy} alt="Skinzy Logo" style="width: 80px; height: auto; margin-right: 16px;">
      <div>
        <h2 style="color: var(--primary); margin: 0;">
          Skinzy Software Solutions, Mumbai, India
        </h2>
        <p style="margin: 0;">
          Machine Learning Development Intern | Oct 2021 – Jun 2022
        </p>
        <ul style="padding-left: 16px; margin: 8px 0 0; color: white;">
          <li>Employed ResNet-based transfer learning to achieve an 85% accuracy rate in identifying unhealthy skin conditions.</li>
          <li>Developed and deployed APIs on AWS EC2 instances for image segmentation models like Mask-RCNN and ResNet.</li>
          <li>Revamped website exposing the APIs live and storing all the user-uploaded images securely in AWS S3.</li>
        </ul>
      </div>
    </div>
    
  </div>
`;


const getAbout = () => `
  <div style="border-radius: 8px; padding: 16px; background-color: var(--background-color);">
    <h1 style="color: var(--primary); margin-top: 0;">About Me</h1>
    <p style="margin: 0;">
      Greetings! I’m Rushil Patel, a passionate and driven Master’s candidate in Computer Science at North Carolina State University. My journey in technology is fueled by a deep-seated interest in algorithm development and solving complex problems. With a solid foundation in algorithm design, data structures, and analytical thinking, I am dedicated to crafting impactful solutions in the tech industry.
    </p>
    <p style="margin: 16px 0;">
      Proficient in a range of programming languages including C++, Python, Java, Go, Ruby, and JavaScript, I bring a diverse skill set to the table. My technical expertise spans web technologies, databases, and cloud platforms, enabling me to tackle challenges across various domains. I am well-versed in using modern tools and frameworks to develop innovative solutions and improve existing systems.
    </p>
    <p style="margin: 16px 0;">
      Throughout my career, I've had the opportunity to contribute as an Open Source Contributor at Nutanix, a Software Development Intern at Smollan, and a Machine Learning Development Intern at Skinzy Software Solutions. These experiences have honed my skills and provided me with a comprehensive understanding of full-stack development, cloud computing, and machine learning.
    </p>
    <p style="margin: 16px 0;">
      Starting in May 2024, I am eager to embark on full-time internships in software engineering or data, where I can apply my skills to real-world challenges and contribute to dynamic projects. Feel free to connect with me at <a href="mailto:rdpate24@ncsu.edu" style="color: var(--primary); text-decoration: none;">rdpate24@ncsu.edu</a>. I firmly believe that working in an environment where people truly believe in their mission makes the journey all the more exciting!
    </p>
  </div>
`;



export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div><br/>`,

  about: getAbout,
  education: getEducation,
  skills: () => `<body style="background-color: var(--background-color); color: var(--text-color);">
  <div>
    <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--secondary);">
      <tr style="background-color: var(--text-color);">
        <th style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; color: var(--background-color);">Category</th>
        <th style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; color: var(--background-color);">Skills</th>
      </tr>
      <tr>
        <td style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; color: var(--text-color);">Core</td>
        <td style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; color: var(--text-color);">HTML, CSS, Node.js</td>
      </tr>
      <tr>
        <td style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; color: var(--text-color);">Frameworks</td>
        <td style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; color: var(--text-color);">React, NextJS, Express, Angular</td>
      </tr>
      <tr>
        <td style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; color: var(--text-color);">Database</td>
        <td style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; color: var(--text-color);">MongoDB, PostgreSQL, MySQL</td>
      </tr>
    </table>
  </div>
  <br/>
  `,
  projects: getProjects,
  experience: getExperience,
  contact: getContacts,
  resume: () => {
    window.open("https://drive.google.com/file/d/11mLnjl9vz8ghTB--4Ex0nuNgZfoE5lPy/view?usp=drive_link", "_blank");
    return "";
  },
  error: (input) => `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info<br/>`,
};
