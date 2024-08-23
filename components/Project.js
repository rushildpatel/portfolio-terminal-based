import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            name: "NCSUstainability",
            description: "I developed NCSUstainability, a web application designed to predict student footfall at NC State dining halls using ARIMA time series modeling on real-world data. To achieve this, I engineered a backend using Node.js and Express.js, which facilitated RESTful APIs and spawned child processes in the Node.js environment to execute Python analysis and prediction scripts concurrently. Additionally, I integrated the ChatGPT-4 API to enhance user comprehension of predictive analytics derived from the time series models, providing users with clear and actionable insights.",
            stack: ["Javascript", "React", "Node.js", "Express.js", "Python", "ChatGPT APIs", "MongoDB"],
            link: "https://github.com/rushildpatel/NCSUstainability",
            image: "/ncsustainibilty.png",
        },
        {
            name: "Audio Video Chat App",
            description: "I built a real-time video chat app using Node.js, Socket.io, ReactJS, and WebRTC for seamless peer-to-peer communication, audio/video streaming, and chatting through socket programming. I implemented Socket.io to ensure efficient peer connections, delivering low-latency and high-quality video calls. Additionally, I leveraged PeerJS to integrate WebRTC technology, facilitating direct and secure connections between users.",
            stack: ["Javascript", "Node.js", "React", "WebRTC", "PeerJS"],
            link: "https://github.com/rushildpatel/audio-video-chat-app",
            image: "/audiovideo_chatapp.png",
        },
        {
            name: "LAN Chat App",
            description: "I developed a Java-based client-server chat application, similar to WhatsApp Desktop, utilizing TCP/IP protocols for communication. The backend was designed with offline user messaging capabilities, incorporating a backup functionality where messages are stored in JSON files for reliable data persistence.",
            stack: ["Java", "Spring Boot", " TCP/IP protocols"],
            link: "https://github.com/rushildpatel/LAN-Chat-App",
            image: "/lan_chat.png",
        },{
            name: "Decentralized Expense Tracking WebApp",
            description: "I created a decentralized full-stack expense tracker using Blockchain, NextJS, and ReactJS, powered by Ethereum. I developed unit tests and staging tests for the smart contract using the Chai and Mocha frameworks, achieving 100% coverage. Additionally, I devised APIs to support user input in the form of text or speech data and utilized Postman for thorough API testing.",
            stack: ["NextJS", "React", "Blockchain", "Chai and Mocha", "MongoDB", "Postman"],
            link: "https://github.com/rushildpatel/Decentralized-Expense-Tracking-WebApp",
            image: "/expense_tracker.png",
        },{
            name: "Bookshop Management",
            description: "I designed a robust CLI database management system, creating models, relationships, and UML diagrams. Implementing the database in MySQL, I used C++ for the backend, following object-oriented programming (OOP) concepts.",
            stack: ["C++", "MySQL", "CLI"],
            link: "https://github.com/rushildpatel/Bookshop-Management-Cpp",
            image: "/bookshop.png",
        },
    ];

    return (
        <div style={styles.container}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    style={styles.projectTile}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div style={styles.leftColumn}>
                        <Image
                            src={project.image}
                            alt={`${project.name} Image`}
                            layout="responsive"
                            width={200}
                            height={200}
                            style={styles.logo}
                        />
                    </div>
                    <div style={styles.rightColumn}>
                        <div style={styles.projectName}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
                                {project.name}
                            </a>
                        </div>
                        <div style={styles.techStack}>
                            {project.stack.map((tech, idx) => (
                                <span key={idx} style={styles.techBadge}>{tech}</span>
                            ))}
                        </div>
                        <p style={styles.description}>{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={hoveredIndex === index ? { ...styles.githubLink, ...styles.githubLinkHover } : styles.githubLink}
                        >
                            GitHub Repo
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        color: '#000',
        margin: '0 auto',
        maxWidth: '1000px',
        padding: '20px',
        backgroundColor: '#fff', // White background
    },
    projectTile: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: 'none',
        width: '100%',
        boxSizing: 'border-box',
    },
    leftColumn: {
        flex: '1 1 20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightColumn: {
        flex: '1 1 80%',
        paddingLeft: '15px',
    },
    logo: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '5px',
    },
    projectName: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#000', // Set heading color to black
    },
    projectLink: {
        color: '#000', // Set link color to black
        textDecoration: 'none',
    },
    techStack: {
        marginBottom: '10px',
    },
    techBadge: {
        display: 'inline-block',
        padding: '4px 8px',
        margin: '4px',
        backgroundColor: '#eaeaea',
        borderRadius: '4px',
        fontSize: '0.85rem',
    },
    description: {
        fontSize: '0.95rem',
        color: '#555',
        marginBottom: '10px',
    },
    githubLink: {
        display: 'inline-block',
        marginTop: '8px',
        padding: '8px 16px',
        backgroundColor: '#ff0000', // Bright red background
        color: '#fff', // White text
        border: '1px solid #ff0000', // Bright red border
        borderRadius: '4px',
        textDecoration: 'none',
        fontSize: '0.85rem',
        lineHeight: '1',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    githubLinkHover: {
        backgroundColor: '#fff', // White background
        color: '#ff0000', // Bright red text
    },
};

// Note: Inline styles don't support pseudo-classes like `:hover`, so we used state to simulate hover effect.
