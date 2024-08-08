export async function GET(request) {
  const projects = [
    {
      name: "NCSUstainability",
      description: "I developed NCSUstainability, a web application designed to predict student footfall at NC State dining halls using ARIMA time series modeling on real-world data. To achieve this, I engineered a backend using Node.js and Express.js, which facilitated RESTful APIs and spawned child processes in the Node.js environment to execute Python analysis and prediction scripts concurrently. Additionally, I integrated the ChatGPT-4 API to enhance user comprehension of predictive analytics derived from the time series models, providing users with clear and actionable insights.",
      stack: ["Javascript", "React", "Node.js", "Express.js", "Python", "ChatGPT APIs", "MongoDB"],
      link: "https://github.com/rushildpatel/NCSUstainability",
      image: "xyz.png",
    },
    {
      name: "Audio Video Chat App",
      description: "I built a real-time video chat app using Node.js, Socket.io, ReactJS, and WebRTC for seamless peer-to-peer communication, audio/video streaming, and chatting through socket programming. I implemented Socket.io to ensure efficient peer connections, delivering low-latency and high-quality video calls. Additionally, I leveraged PeerJS to integrate WebRTC technology, facilitating direct and secure connections between users.",
      stack: ["Javascript", "Node.js", "React", "WebRTC", "PeerJS"],
      link: "https://github.com/rushildpatel/audio-video-chat-app",
      image: "xyz.png",
    },
    {
      name: "LAN Chat App",
      description: "I developed a Java-based client-server chat application, similar to WhatsApp Desktop, utilizing TCP/IP protocols for communication. The backend was designed with offline user messaging capabilities, incorporating a backup functionality where messages are stored in JSON files for reliable data persistence.",
      stack: ["Java", "Spring Boot", " TCP/IP protocols"],
      link: "https://github.com/rushildpatel/LAN-Chat-App",
      image: "xyz.png",
    },{
      name: "Decentralized Expense Tracking WebApp",
      description: "I created a decentralized full-stack expense tracker using Blockchain, NextJS, and ReactJS, powered by Ethereum. I developed unit tests and staging tests for the smart contract using the Chai and Mocha frameworks, achieving 100% coverage. Additionally, I devised APIs to support user input in the form of text or speech data and utilized Postman for thorough API testing.",
      stack: ["NextJS", "React", "Blockchain", "Chai and Mocha", "MongoDB", "Postman"],
      link: "https://github.com/rushildpatel/Decentralized-Expense-Tracking-WebApp",
      image: "xyz.png",
    },{
      name: "Bookshop Management",
      description: "I designed a robust CLI database management system, creating models, relationships, and UML diagrams. Implementing the database in MySQL, I used C++ for the backend, following object-oriented programming (OOP) concepts.",
      stack: ["C++", "MySQL", "CLI"],
      link: "https://github.com/rushildpatel/Bookshop-Management-Cpp",
      image: "xyz.png",
    },
  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
