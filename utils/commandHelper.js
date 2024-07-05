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
  const projectHTML =
        `<table style="width: 100%; border-collapse: collapse; border: 1px solid var(--extra-color); table-layout: fixed;">
            <colgroup>
            <col style="width: 20%;">
            <col style="width: 20%;">
            <col style="width: 60%;">
          </colgroup>
          <tr style="background-color: var(--text-color);">
            <th style="border: 1px solid var(--background-color); padding: 8px; text-align: left; color: var(--background-color);">Project Name</th>
            <th style="border: 1px solid var(--background-color); padding: 8px; text-align: left; color: var(--background-color);">Stack</th>
            <th style="border: 1px solid var(--background-color); padding: 8px; text-align: left; color: var(--background-color);">Description</th>
          </tr>` +
        projects
          .map(
            (project) => `<tr>
              <td style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; word-wrap: break-word;">
                <a href="${project.link}" target="_blank" style="color: var(--primary);">${project.name}</a>
              </td>
              <td style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; word-wrap: break-word;">${project.stack.join(", ")}</td>
              <td style="border: 1px solid var(--extra-color); padding: 8px; text-align: left; word-wrap: break-word;">${project.description}</td>
            </tr>`
          )
          .join("") +
        `</table><br/>`;
  return projectHTML;
};

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

  about: () => `My name is Rushil. I am ${getAge("January 29, 2000")} and I\'m a Software Developer
    <br/><br/>
    I love coding in Javascript, Typescript, Python, C++ and Go and have worked with frameworks like ReactJS, Express, and NextJS.
    <br />
  `,
  education: () => `I am a CS Grad Student from <a href="https://www.ncsu.edu/" target="_blank">NC State, Raleigh, NC</a>`,
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
  contact: getContacts,
  resume: () => {
    window.open("https://drive.google.com/file/d/11mLnjl9vz8ghTB--4Ex0nuNgZfoE5lPy/view?usp=drive_link", "_blank");
    return "";
  },
  error: (input) => `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info<br/>`,
};

