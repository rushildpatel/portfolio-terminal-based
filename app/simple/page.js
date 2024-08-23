"use client";
import Image from 'next/image';
import Education from "@/components/Education";
import Project from "@/components/Project";
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import { useState } from 'react';

export default function Home() {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (icon) => setHoveredIcon(icon);
    const handleMouseLeave = () => setHoveredIcon(null);

    const iconStyles = {
        email: hoveredIcon === 'email' ? { filter: 'invert(30%) sepia(80%) saturate(400%) hue-rotate(360deg) brightness(100%) contrast(100%)' } : {},
        github: hoveredIcon === 'github' ? { filter: 'invert(30%) sepia(80%) saturate(400%) hue-rotate(360deg) brightness(100%) contrast(100%)' } : {},
        linkedin: hoveredIcon === 'linkedin' ? { filter: 'invert(30%) sepia(80%) saturate(400%) hue-rotate(360deg) brightness(100%) contrast(100%)' } : {},
        instagram: hoveredIcon === 'instagram' ? { filter: 'invert(30%) sepia(80%) saturate(400%) hue-rotate(360deg) brightness(100%) contrast(100%)' } : {},
        resume: hoveredIcon === 'resume' ? { filter: 'invert(30%) sepia(80%) saturate(400%) hue-rotate(360deg) brightness(100%) contrast(100%)' } : {},
    };

    return (
        <div style={styles.container}>
            {/* Left Navbar */}
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><a href="#profile" style={styles.navLink}>Profile</a></li>
                    <li style={styles.navItem}><a href="#experience" style={styles.navLink}>Experience</a></li>
                    <li style={styles.navItem}><a href="#education" style={styles.navLink}>Education</a></li>
                    <li style={styles.navItem}><a href="#projects" style={styles.navLink}>Projects</a></li>
                    <li style={styles.navItem}><a href="#skills" style={styles.navLink}>Skills</a></li>
                    <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
                    <li style={styles.navItem}>
                        <a
                            href="https://drive.google.com/file/d/11mLnjl9vz8ghTB--4Ex0nuNgZfoE5lPy/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.navLink}
                        >
                            See Resume
                        </a>
                    </li>
                </ul>
            </nav>

            <div style={styles.content}>
                <div id="profile" style={styles.profile}>
                    <div style={styles.profileColumns}>
                        {/* Left Column */}
                        <div style={styles.leftColumn}>
                            <h3 style={styles.heading}>Rushil Patel</h3>
                            <p style={styles.subHeading}>Student and Developer</p>
                            <p style={styles.desc}>
                                Greetings! I'm Rushil Patel, a Master's student in Computer Science at North Carolina State University, passionate about algorithm development and problem-solving. I aim to become a skilled software engineer, crafting impactful solutions with proficiency in languages like C++, Python, Java, Go, Ruby, and JavaScript. My background in algorithm design, data structures, and software engineering drives me to tackle complex challenges and innovate in the tech landscape.
                            </p>
                            <div style={styles.links}>
                                <a
                                    href="mailto:rushildineshpatel2000@gmail.com"
                                    style={styles.link}
                                    onMouseEnter={() => handleMouseEnter('email')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Image src="/email.svg" alt="Email Icon" width={24} height={24} style={iconStyles.email} />
                                </a>
                                <a
                                    href="https://github.com/rushildpatel"
                                    style={styles.link}
                                    onMouseEnter={() => handleMouseEnter('github')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Image src="/github.svg" alt="GitHub Icon" width={24} height={24} style={iconStyles.github} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/rushilpatel07/"
                                    style={styles.link}
                                    onMouseEnter={() => handleMouseEnter('linkedin')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Image src="/linkedin.svg" alt="LinkedIn Icon" width={24} height={24} style={iconStyles.linkedin} />
                                </a>
                                <a
                                    href="https://www.instagram.com/rushil______/"
                                    target="_blank"
                                    style={styles.link}
                                    onMouseEnter={() => handleMouseEnter('instagram')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Image src="/instagram.svg" alt="Insta Icon" width={24} height={24} style={iconStyles.instagram} />
                                </a>
                                <a
                                    href="https://drive.google.com/file/d/11mLnjl9vz8ghTB--4Ex0nuNgZfoE5lPy/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.link}
                                    onMouseEnter={() => handleMouseEnter('resume')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Image src="/resume.svg" alt="Resume Icon" width={24} height={24} style={iconStyles.resume} />
                                </a>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div style={styles.rightColumn}>
                            <Image src="/profile_img.png" alt="profile pic" width={300} height={400} style={styles.profileImage} />
                        </div>
                    </div>
                </div>
                <div id="experience" style={styles.section}>
                    <h3 style={styles.heading}>EXPERIENCE</h3>
                    <Experience />
                </div>
                <div id="education" style={styles.section}>
                    <h3 style={styles.heading}>EDUCATION</h3>
                    <Education />
                </div>
                <div id="projects" style={styles.section}>
                    <h3 style={styles.heading}>PROJECTS</h3>
                    <Project />
                </div>
                <div id="skills" style={styles.section}>
                    <h3 style={styles.heading}>SKILLS</h3>
                    <Skills />
                </div>
                <div id="contact">
                    <h3 style={styles.heading}>CONTACT ME</h3>
                    <div style={styles.links}>
                        <a
                            href="mailto:rushildineshpatel2000@gmail.com"
                            style={styles.link}
                            onMouseEnter={() => handleMouseEnter('email')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image src="/email.svg" alt="Email Icon" width={24} height={24} style={iconStyles.email} />
                        </a>
                        <a
                            href="https://github.com/rushildpatel"
                            style={styles.link}
                            onMouseEnter={() => handleMouseEnter('github')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image src="/github.svg" alt="GitHub Icon" width={24} height={24} style={iconStyles.github} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rushilpatel07/"
                            style={styles.link}
                            onMouseEnter={() => handleMouseEnter('linkedin')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image src="/linkedin.svg" alt="LinkedIn Icon" width={24} height={24} style={iconStyles.linkedin} />
                        </a>
                        <a
                            href="https://www.instagram.com/rushil______/"
                            target="_blank"
                            style={styles.link}
                            onMouseEnter={() => handleMouseEnter('instagram')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image src="/instagram.svg" alt="Insta Icon" width={24} height={24} style={iconStyles.instagram} />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/11mLnjl9vz8ghTB--4Ex0nuNgZfoE5lPy/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                            onMouseEnter={() => handleMouseEnter('resume')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image src="/resume.svg" alt="Resume Icon" width={24} height={24} style={iconStyles.resume} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        color: '#000', // Black for text
        backgroundColor: '#fff', // White background
    },
    navbar: {
        position: 'fixed',
        top: '0',
        left: '0',
        height: '100%',
        width: '200px',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        boxSizing: 'border-box',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    navList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    navItem: {
        marginBottom: '15px',
    },
    navLink: {
        textDecoration: 'none',
        color: '#000',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    resumeItem: {
        marginTop: 'auto',
    },
    content: {
        marginLeft: '220px',
        padding: '20px',
        width: '100%',
    },
    section: {
        marginBottom: '50px',
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '50px',
    },
    profileColumns: {
        display: 'flex',
        width: '100%',
    },
    leftColumn: {
        width: '50%',
    },
    rightColumn: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        borderRadius: '10px',
        maxWidth: '100%',
        height: 'auto',
    },
    heading: {
        fontSize: '32px',
        color: '#808080',
        fontWeight: 'bold',
    },
    subHeading: {
        fontSize: '24px',
        color: '#808080',
        marginBottom: '10px',
    },
    desc: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#000',
    },
    links: {
        display: 'flex',
        gap: '10px',
    },
    link: {
        display: 'block',
        transition: 'transform 0.2s',
    },
};
