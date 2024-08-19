import Image from 'next/image';
export default function Experience() {
    return <div>
        <div>
            <Image src="/github.svg" alt="GitHub Logo" width={50} height={50} /> // PTC logo
            <div>
                <div>PTC</div>
                <div>Software Engineering Intern</div>
                <div>May 2024 - Aug 2024</div>
                <ul>
                    <li>Developed modifications to industry leading cloud CAD software name OnShape, by adding features and executing an overhaul in a fullstack development Agile SDLC</li>
                    <li>Implemented end to end changes to TypeScript frontend (Angular, VueJS), Java server, and C++ geometry backend to introduce the new "midpointline" sketch tool, and released in live production in the latest sprint release</li>
                    <li>Developed Unit testing and Playwright tests for my client-side code and integrated it into the CI/CD automated tests</li>
                </ul>
            </div>
        </div>
        <br></br>
        <div>
            <Image src="/github.svg" alt="GitHub Logo" width={50} height={50} /> // Nutanix logo
            <div>
                <div>Nutanix</div>
                <div>Open Source Contributor</div>
                <div>Oct 2023 – Dec 2023</div>
                <ul>
                    <li>Collaborated with the Nutanix team to extend the NDB operator's capabilities, focusing on supporting Postgres High Availability (HA) databases using Go, Kubernetes and Docker</li>
                    <li>Coded adapter design OOPS pattern class to facilitate seamless bridging of client message to backend containers in Go</li>
                </ul>
            </div>
        </div>
        <br></br>
        <div>
            <Image src="/github.svg" alt="GitHub Logo" width={50} height={50} /> // Smollan logo
            <div>
                <div>Smollan</div>
                <div>Software Development Intern</div>
                <div>Sept 2022 – Oct 2022</div>
                <ul>
                    <li>Developed Python scripts using Selenium, BeautifulSoap, Google Cloud Platform, and Pandas to collect data for 150+ Google Pixel Phone competitors and setup MySQL database for streamlined data collection and retrieval</li>
                    <li>Automated web crawling process and implemented Error Handling to reduce stoppages due to failovers by 75%</li>
                </ul>
            </div>
        </div>
        <br></br>
        <div>
            <Image src="/github.svg" alt="GitHub Logo" width={50} height={50} /> // skinzy logo
            <div>
                <div>Skinzy Software Solutions</div>
                <div>Software Development Intern</div>
                <div>Oct 2021 – Jun 2022</div>
                <ul>
                    <li>Employed ResNet-based transfer learning to achieve an 85% accuracy rate in identifying unhealthy skin conditions</li>
                    <li>Developed and deployed APIs on AWS EC2 instances for image segmentation models like Mask-RCNN and ResNet</li>
                    <li>Revamped website exposing the APIs live and storing all the user uploaded images securely in AWS S3</li>
                </ul>
            </div>
        </div>
    </div>
}