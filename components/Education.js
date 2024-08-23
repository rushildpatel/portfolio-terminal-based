import Image from 'next/image';

export default function Education() {
    return (
        <div style={styles.container}>
            <div style={styles.educationTile}>
                <div style={styles.leftColumn}>
                    <Image src="/ncsu-logo.png" alt="NCSU Logo" layout="responsive" width={200} height={200} style={styles.logo} />
                </div>
                <div style={styles.rightColumn}>
                    <div style={styles.universityName}>North Carolina State University</div>
                    <div style={styles.degree}>Master of Science in Computer Science</div>
                    <div style={styles.duration}>Aug 2023 - Dec 2024</div>
                    <div style={styles.gpa}>GPA: 4/4</div>
                    <div style={styles.courses}>
                        <strong>Courses:</strong> Advanced Algorithms, Object Oriented Design, Software Engineering, Computer Networks, Computer Network Security, Cloud Computing, Game Engine Development, Data Analysis
                    </div>
                </div>
            </div>
            <div style={styles.educationTile}>
                <div style={styles.leftColumn}>
                    <Image src="/muni-black-logo.png" alt="Mumbai University Logo" layout="responsive" width={180} height={200} style={styles.logo} />
                </div>
                <div style={styles.rightColumn}>
                    <div style={styles.universityName}>University of Mumbai</div>
                    <div style={styles.degree}>Bachelor of Science in Computer Science</div>
                    <div style={styles.duration}>Aug 2019 - May 2023</div>
                    <div style={styles.gpa}>GPA: 9.3/10</div>
                    <div style={styles.courses}>
                        <strong>Courses:</strong> Operating System, Database Management, Data Analytics, Machine Learning, Natural Language Processing
                    </div>
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
    educationTile: {
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
    universityName: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    degree: {
        fontSize: '1rem',
        fontStyle: 'italic',
        marginBottom: '5px',
    },
    duration: {
        fontSize: '0.9rem',
        color: '#777',
        marginBottom: '10px',
    },
    gpa: {
        fontSize: '0.9rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    courses: {
        fontSize: '0.9rem',
    },
};
