import Image from 'next/image';
export default function Education() {
    return <div>
        <div>
            <Image src="/github.svg" alt="GitHub Logo" width={50} height={50} /> // NCSu logo
            <div>North Carolina State University</div>
            <div>Master of Science in Computer Science</div>
            <div>Aug 2023 - Dec 2024</div>
            <div>GPA: 3.9/4</div>
            <div>
                Courses: OODD, Software Engineering
            </div>
        </div>
        <div>
            <Image src="/github.svg" alt="GitHub Logo" width={50} height={50} /> // SPIT logo
            <div>University of Mumbai</div>
            <div>Bachelors in Computer Science</div>
            <div>Aug 2019 - May 2023</div>
            <div>GPA: 9.3/10</div>
            <div>
                Courses: Computer Networks
            </div>
        </div>
    </div>
}