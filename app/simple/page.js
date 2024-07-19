import Project from "@/components/simpleComponents/project";

export default async function Home() {
  const contactMediums = await (await fetch("http://localhost:3000/api/contacts")).json();

  return (
    <div>
        <div className="leftColumn">
            <div className="profile">
                <img></img>
                <h3><strong>Rushil Patel</strong>, student and developer</h3>
                <div className="desc">
                    My name is <strong>Rushil</strong> and I am a fullstack developer. I currently pursuing my masters in CS from NCSU.
                </div>
            </div>
            <div className="links">
                <a href="mailto:rushildineshpatel2000@gmail.com">Email</a>
                <a href="https://github.com/rushildpatel">Github</a>
                <a href="https://www.linkedin.com/in/rushilpatel07/">LinkedIn</a>
                <a href="https://www.linkedin.com/in/rushilpatel07/">Twitter</a>
                <a href="https://drive.google.com/file/d/11mLnjl9vz8ghTB--4Ex0nuNgZfoE5lPy/view?usp=drive_link" target="_blank">Resume</a>
            </div>
        </div>
        <div className="rightColumn">
            <Project></Project>
            <Project></Project>
        </div>
    </div>
  );
}
