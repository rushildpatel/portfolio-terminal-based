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
        `<table style="width: 100%; border-collapse: collapse; border: 1px solid var(--extra-color); table-layout: fixed;">
          <tr style="background-color: var(--primary);">
            <th style="border: 1px solid var(--extra-color); padding: 8px; text-align: left;">Project Name</th>
            <th style="border: 1px solid var(--extra-color); padding: 8px; text-align: left;">Stack</th>
            <th style="border: 1px solid var(--extra-color); padding: 8px; text-align: left;">Description</th>
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
        `</table>`;
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
  `,
  projects: getProjects,
  contact: getContacts,
  resume: () => {
    window.open("https://drive.google.com/file/d/11mLnjl9vz8ghTB--4Ex0nuNgZfoE5lPy/view?usp=drive_link", "_blank");
    return "";
  },
  error: (input) => `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};

