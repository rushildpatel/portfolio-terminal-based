const Tile = function ({ name }) {
    const buttonStyles = {
        padding: '8px 16px', // Reduced padding
        fontSize: '0.9rem', // Slightly smaller font size
        borderRadius: '5px',
        border: '0px solid', // No border
        backgroundColor: '#eaeaea', // Updated gray background
        color: '#000', // Black text color
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
    };

    return (
        <div style={{ marginBottom: '8px' }}> {/* Adjusted margin */}
            <button
                style={buttonStyles}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff0000'; // Bright red background on hover
                    e.currentTarget.style.color = '#fff'; // White text on hover
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#eaeaea'; // Revert to gray background
                    e.currentTarget.style.color = '#000'; // Revert to black text color
                }}
            >
                {name}
            </button>
        </div>
    );
};

export default function Skills() {
    return (
        <div style={styles.container}>
            {/* Programming Languages */}
            <div style={styles.category}>
                <div style={styles.categoryTitle}>Programming Languages</div>
                <div style={styles.tiles}>
                    <Tile name={"C++"} />
                    <Tile name={"Python"} />
                    <Tile name={"JavaScript"} />
                    <Tile name={"TypeScript"} />
                    <Tile name={"Java"} />
                    <Tile name={"Go"} />
                    <Tile name={"C"} />
                    <Tile name={"Ruby"} />
                </div>
            </div>

            {/* Backend Technologies */}
            <div style={styles.category}>
                <div style={styles.categoryTitle}>Backend Technologies</div>
                <div style={styles.tiles}>
                    <Tile name={"Node.js"} />
                    <Tile name={"Next.js"} />
                    <Tile name={"Express.js"} />
                    <Tile name={"Django"} />
                    <Tile name={"Flask"} />
                    <Tile name={"Spring Boot"} />
                </div>
            </div>

            {/* Frontend Frameworks */}
            <div style={styles.category}>
                <div style={styles.categoryTitle}>Frontend Frameworks</div>
                <div style={styles.tiles}>
                    <Tile name={"React"} />
                    <Tile name={"Angular"} />
                    <Tile name={"Tailwind"} />
                    <Tile name={"Bootstrap"} />
                    <Tile name={"Material UI"} />
                    <Tile name={"CSS"} />
                </div>
            </div>

            {/* Databases and Cloud */}
            <div style={styles.category}>
                <div style={styles.categoryTitle}>Databases and Cloud</div>
                <div style={styles.tiles}>
                    <Tile name={"MongoDB"} />
                    <Tile name={"MySQL"} />
                    <Tile name={"PostgreSQL"} />
                    <Tile name={"Firebase"} />
                    <Tile name={"Prisma"} />
                    <Tile name={"Amazon Web Services"} />
                    <Tile name={"Google Cloud Platform"} />
                    <Tile name={"Cloudflare"} />
                </div>
            </div>

            {/* OS and Tools */}
            <div style={styles.category}>
                <div style={styles.categoryTitle}>OS and Tools</div>
                <div style={styles.tiles}>
                    <Tile name={"Unix"} />
                    <Tile name={"MacOS"} />
                    <Tile name={"Windows"} />
                    <Tile name={"Virtual Machine"} />
                </div>
            </div>

            {/* Other Libraries and Frameworks */}
            <div style={styles.category}>
                <div style={styles.categoryTitle}>Other Libraries and Frameworks</div>
                <div style={styles.tiles}>
                    <Tile name={"Shell"} />
                    <Tile name={"Docker"} />
                    <Tile name={"Kubernetes"} />
                    <Tile name={"CI/CD"} />
                    <Tile name={"Git"} />
                </div>
            </div>

            {/* Data and Machine Learning */}
            <div style={styles.category}>
                <div style={styles.categoryTitle}>Data and Machine Learning</div>
                <div style={styles.tiles}>
                    <Tile name={"Keras"} />
                    <Tile name={"Tensorflow"} />
                    <Tile name={"Pytorch"} />
                    <Tile name={"Scikit-learn"} />
                    <Tile name={"Pandas"} />
                    <Tile name={"Numpy"} />
                    <Tile name={"Matplotlib"} />
                    <Tile name={"Seaborn"} />
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        color: '#000', // Black text color
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#fff', // White background
    },
    category: {
        marginBottom: '20px',
    },
    categoryTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#000', // Black for category titles
    },
    tiles: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    },
};
