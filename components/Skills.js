const Tile = function ({ name }) {
    const buttonStyles = {
        padding: '8px 16px',
        fontSize: '0.9rem', 
        borderRadius: '5px',
        border: '0px solid', 
        backgroundColor: '#eaeaea',
        color: '#000', 
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
    };

    return (
        <div style={{ marginBottom: '8px' }}> 
            <button
                style={buttonStyles}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff0000'; 
                    e.currentTarget.style.color = '#fff'; 
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#eaeaea';
                    e.currentTarget.style.color = '#000'; 
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

            <div style={styles.category}>
                <div style={styles.categoryTitle}>OS and Tools</div>
                <div style={styles.tiles}>
                    <Tile name={"Unix"} />
                    <Tile name={"MacOS"} />
                    <Tile name={"Windows"} />
                    <Tile name={"Virtual Machine"} />
                </div>
            </div>

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
        fontFamily: 'monospace, Courier New, Arial, sans-serif',
        color: '#000', 
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#fff',
    },
    category: {
        marginBottom: '20px',
    },
    categoryTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#000', 
    },
    tiles: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    },
};
