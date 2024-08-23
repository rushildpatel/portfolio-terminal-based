    import Image from 'next/image';

    export default function Experience() {
        return (
            <div style={styles.container}>
                {/* PTC Experience */}
                <div style={styles.experienceTile}>
                    <div style={styles.leftColumn}>
                        <Image src="/ptcInc-logo.png" alt="PTC Logo" layout="responsive" width={200} height={200} style={styles.logo} />
                    </div>
                    <div style={styles.rightColumn}>
                        <div style={styles.companyName}>PTC</div>
                        <div style={styles.jobTitle}>Software Engineering Intern</div>
                        <div style={styles.duration}>May 2024 - Aug 2024</div>
                        <ul style={styles.responsibilities}>
                            <li>Developed modifications to industry leading cloud CAD software name OnShape, by adding features and executing an overhaul in a fullstack development Agile SDLC</li>
                            <li>Implemented end to end changes to TypeScript frontend (Angular, VueJS), Java server, and C++ geometry backend to introduce the new "midpointline" sketch tool, and released in live production in the latest sprint release</li>
                            <li>Developed Unit testing and Playwright tests for my client-side code and integrated it into the CI/CD automated tests</li>
                        </ul>
                    </div>
                </div>
                <br />

                {/* Nutanix Experience */}
                <div style={styles.experienceTile}>
                    <div style={styles.leftColumn}>
                        <Image src="/nutanix-logo.png" alt="Nutanix Logo" layout="responsive" width={200} height={200} style={styles.logo} />
                    </div>
                    <div style={styles.rightColumn}>
                        <div style={styles.companyName}>Nutanix</div>
                        <div style={styles.jobTitle}>Open Source Contributor</div>
                        <div style={styles.duration}>Oct 2023 – Dec 2023</div>
                        <ul style={styles.responsibilities}>
                            <li>Collaborated with the Nutanix team to extend the NDB operator's capabilities, focusing on supporting Postgres High Availability (HA) databases using Go, Kubernetes, and Docker</li>
                            <li>Coded adapter design OOPS pattern class to facilitate seamless bridging of client messages to backend containers in Go</li>
                        </ul>
                    </div>
                </div>
                <br />

                {/* Smollan Experience */}
                <div style={styles.experienceTile}>
                    <div style={styles.leftColumn}>
                        <Image src="/smollan-logo.png" alt="Smollan Logo" layout="responsive" width={200} height={200} style={styles.logo} />
                    </div>
                    <div style={styles.rightColumn}>
                        <div style={styles.companyName}>Smollan</div>
                        <div style={styles.jobTitle}>Software Development Intern</div>
                        <div style={styles.duration}>Sept 2022 – Oct 2022</div>
                        <ul style={styles.responsibilities}>
                            <li>Developed Python scripts using Selenium, BeautifulSoup, Google Cloud Platform, and Pandas to collect data for 150+ Google Pixel Phone competitors and set up a MySQL database for streamlined data collection and retrieval</li>
                            <li>Automated web crawling process and implemented error handling to reduce stoppages due to failovers by 75%</li>
                        </ul>
                    </div>
                </div>
                <br />

                {/* Skinzy Software Solutions Experience */}
                <div style={styles.experienceTile}>
                    <div style={styles.leftColumn}>
                        <Image src="/skinzy-logo.png" alt="Skinzy Logo" layout="responsive" width={200} height={200} style={styles.logo} />
                    </div>
                    <div style={styles.rightColumn}>
                        <div style={styles.companyName}>Skinzy Software Solutions</div>
                        <div style={styles.jobTitle}>Software Development Intern</div>
                        <div style={styles.duration}>Oct 2021 – Jun 2022</div>
                        <ul style={styles.responsibilities}>
                            <li>Employed ResNet-based transfer learning to achieve an 85% accuracy rate in identifying unhealthy skin conditions</li>
                            <li>Developed and deployed APIs on AWS EC2 instances for image segmentation models like Mask-RCNN and ResNet</li>
                            <li>Revamped website exposing the APIs live and storing all the user-uploaded images securely in AWS S3</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        margin: '0 auto',
        maxWidth: '1000px', 
        padding: '20px',
    },
    experienceTile: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0px', // Reduced from 20px to 10px
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
    companyName: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    jobTitle: {
        fontSize: '1rem',
        fontStyle: 'italic',
        marginBottom: '5px',
    },
    duration: {
        fontSize: '0.9rem',
        color: '#777',
        marginBottom: '10px',
    },
    responsibilities: {
        paddingLeft: '25px', 
        listStyleType: 'circle', 
        lineHeight: '1.6',
        fontSize: '0.95rem',
        color: '#555',
    },
};
