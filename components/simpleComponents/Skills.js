const Tile = function ({name}) {
    return <div>
        <button>{name}</button>
    </div>
}

export default function Skills() {
    return <div>
        <div>Programming Languages - 
        <Tile name={"C++"}/>
        <Tile name={"Python"}/>
        <Tile name={"TypeScript"}/>
        <Tile name={"JavaScript"}/>
        </div>
        <div>Backend Technologies</div>
        <div>Frontend Frameworks</div>
        <div>Databases and Cloud</div>
        <div>OS and Tools</div>
        <div>Other Libraries and Frameworks</div>
    </div>
}