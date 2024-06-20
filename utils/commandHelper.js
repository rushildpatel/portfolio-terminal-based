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

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${project.name}</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
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
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,

  about: () => `My name is Rushil. I am ${getAge("January 29, 2000")} and I\'m a Software Developer
    <br/><br/>
    I love coding in Javascript, Typescript, Python, C++ and Go and have worked with frameworks like ReactJS, Express, and NextJS.
    <br /><br />
  `,
  education: () => `I am a CS Grad Student from <a href="https://www.ncsu.edu/" target="_blank">NC State, Raleigh, NC</a>`,
  skills: () => `
  I am experienced with Javascript, Typescript and Python and the web technologies dominating at the time:<br />
  <div class="skill"><b>core</b>: HTML, CSS, Node.js and PHP<br /></div>
  <div class="skill"><b>frameworks</b>: React, NextJS, Express, Angular<br /></div>
  <div class="skill"><b>database</b>: MongoDB, PostgreSQL, MySQL<br /></div>
  I also have knowledge of basic shell scripting and my dotfiles can be found <a href="https://github.com/rushildpatel" target="_blank">here</a>.
<br /><br />
  I also have experience with Mobile Development with Flutter.
  `,
  projects: getProjects,
  contact: getContacts,
  resume: () => {
    window.open("https://drive.google.com/file/d/11mLnjl9vz8ghTB--4Ex0nuNgZfoE5lPy/view?usp=drive_link", "_blank");
    return "";
  },
  error: (input) => `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};

