const Tile = function ({name}) {
    return <div>
        <button>{name}</button>
    </div>
}

export default function Skills() {
    return <div>
        <div>Programming Languages - 
            <Tile name={"C++"}/><Tile name={"Python"}/><Tile name={"JavaScript"}/><Tile name={"TypeScript"}/>
            <Tile name={"Java"}/><Tile name={"Go"}/><Tile name={"C"}/><Tile name={"Ruby"}/>
        </div>
        <div>Backend Technologies -
            <Tile name={"Node.js"}/><Tile name={"Next.js"}/>
            <Tile name={"Express.js"}/><Tile name={"Django"}/><Tile name={"Flask"}/><Tile name={"Spring Boot"}/>
        </div>
        <div>Frontend Frameworks -
            <Tile name={"React"}/><Tile name={"Angular"}/><Tile name={"Tailwind"}/><Tile name={"Bootstrap"}/>
            <Tile name={"Material UI"}/><Tile name={"CSS"}/>
        </div>
        <div>Databases and Cloud -
            <Tile name={"MongoDB"}/><Tile name={"MySQL"}/><Tile name={"PostgreSQL"}/><Tile name={"Firebase"}/><Tile name={"Prisma"}/>
            <Tile name={"Amazon Web Services"}/><Tile name={"Google Cloud Platform"}/><Tile name={"Cloudflare"}/>
        </div>
        <div>OS and Tools -
            <Tile name={"Unix"}/><Tile name={"MacOS"}/><Tile name={"Windows"}/><Tile name={"Virtual Machine"}/>
        </div>
        <div>Other Libraries and Frameworks -
            <Tile name={"Shell"}/><Tile name={"Docker"}/><Tile name={"Kubernetes"}/><Tile name={"CI/CD"}/>
            <Tile name={"Git"}/><Tile name={"CI/CD"}/>
        </div>
        <div>Data and Machine learning  -
            <Tile name={"Keras"}/><Tile name={"Tensorflow"}/><Tile name={"Pytorch"}/><Tile name={"Scikit-learn"}/>
            <Tile name={"Pandas"}/><Tile name={"Numpy"}/><Tile name={"Matplotlib"}/><Tile name={"Seaborn"}/>
        </div>
    </div>
}