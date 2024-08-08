import Image from 'next/image';
import Education from "@/components/simpleComponents/Education";
import Project from "@/components/simpleComponents/Project";
import Skills from '@/components/simpleComponents/Skills';
import Experience from '@/components/simpleComponents/Experience';

export default async function Home() {
    return (
    <div>
        <div className="profile">
            <div>
                <Image src="/github.svg" alt="GitHub Logo" width={50} height={50} />
                <h3>Rushil Patel, student and developer</h3>
                <div>name pronouciation</div>
                <div className="desc">
                    Greetings! I'm Rushil Patel, an enthusiastic tech aficionado embarking on a journey of academic and professional advancement. Currently pursuing a Master's degree in Computer Science at North Carolina State University, I am fueled by a fervent desire to apply and amplify my skills in the dynamic realm of technology.
                    My passion lies in algorithm development and solving intricate puzzles. I approach software development with a foundation rooted in algorithm design, data structures, and analytical thinking. My ultimate goal is to evolve into a highly adept software engineer, crafting solutions that leave a lasting impact on the ever-evolving tech landscape. I aspire to create something truly distinctive, making a lasting mark in the industry.
                    Armed with proficiency in languages like C++, Python, Java, Go, Ruby and JavaScript, along with a diverse skill set in databases, tools, and frameworks, I thrive on unraveling complex problems and devising innovative solutions. My academic journey has equipped me with essential skills in software engineering, algorithm design, and object-oriented development.
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
        <div className="projects">
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
        </div>
        <div className="education"> <Education/> </div>
        <div className="experience"> <Experience/> </div>
        <div className="skills"><Skills/></div>
        <div className="Contact Me"></div>
    </div>
  );
}
