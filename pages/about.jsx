import Image from 'next/image';
import styles from '../styles/AboutPage.module.css';
import AllSkills from "../components/AllSkills";

const AboutPage = () => {

    const handleMouseMove = (e) => {
        var target = e.target;
        while(target && target.tagName != "MAIN"){
            target = target.parentElement;
        }
        if(!target || target.tagName != "MAIN") return;

        for(const card of target.querySelectorAll('div[class*="CertInfo_container"]')) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };

    };

    return (
        <div className={styles.container} onMouseMove={handleMouseMove}>
            <div className={styles.col1}>
                <h1 className={styles.heading}>ABDULLAH KHAN - ABOUT ME </h1>
                <p>
                    A self-driven, quick-learning, and passionate sophomore who is majoring in computer science, and
                    actively looking for opportunities in tech.
                </p>
                <br></br>
                <br></br>
                <h2 className={styles.education}> EDUCATION </h2>
                <p>
                    <br/>
                    Farmingdale State College – B.S. Computer Science, Farmingdale, NY (EXPECTED MAY 2026)
                    <br/><br/>Cumulative GPA: 3.75/4.0
                    <br/><br/>
                    <ul>
                        <h3>Relevant Courses:</h3>
                        <li>Computer Programming II</li>
                        <li>Calculus II</li>
                        <li>Data Structures & Algorithms I</li>
                        <li>Computer Architecture & Organization</li>
                        <li>Professional & Technical Speech</li>
                        <li>Linear Algebra</li>
                        <li>Advanced Programming</li>
                        <li>Software Engineering</li>
                        <li>Discrete Structures</li>
                    </ul>
                </p>
            </div>
            <div className={styles.col2}>
                <h1 className={styles.heading2}>EXPERIENCE</h1>
                <div className={styles.experience}>
                    <div>
                        <h3 className = {styles.ex1}> ENGAGEathon – Software Engineer Intern, New York, NY (JANUARY 2024 – PRESENT)</h3>
                        <br></br>
                        <ul>
                            <li>Boosted web application functionality built with React.js and TypeScript by implementing
                                a new user dashboard, increasing daily active users by 15%.
                            </li>
                            <br></br>
                            <li>Authored JavaScript, HTML, and CSS code across 4 web platforms, boosting company-wide
                                engagement and enabling new user services.
                            </li>
                            <br></br>
                            <li>Optimized web applications using SEO best practices to improve website performance by
                                20% in speed and scalability.
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <div>
                        <h3 className = {styles.ex1}>Pongspace – UX/UI Design Intern, New York, NY (JUNE 2023 – AUGUST 2023)</h3>
                        <br></br>
                        <ul>
                            <li>Designed 15+ technical solutions for project leaders, boosting team productivity by 30%
                                and cutting website defects like reservation errors by 40%.
                            </li>
                            <br></br>
                            <li>Drove UI/UX enhancements for reservation workflow in collaboration with a team,
                                simplifying the booking process and reducing customer support tickets by 25%.
                            </li>
                            <br></br>
                            <li>Identified and fixed over 20 UI bugs using React and JavaScript, enhancing platform
                                reliability and user experience.
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <div>
                        <h3 className = {styles.ex1} >CVS Health – Shift Manager, Massapequa, NY (SEPTEMBER 2021 – APRIL 2023)</h3>
                        <br></br>
                        <ul>
                            <li>Executed efficient task scheduling and workload prioritization strategies, resulting in
                                a 20% increase in team productivity.
                            </li>
                            <br></br>
                            <li>Provided comprehensive training and mentorship for 7 team members, enabling 4 to be
                                promoted to higher positions.
                            </li>
                            <br></br>
                            <li>Managed inventory control and loss prevention measures, minimizing losses by 10% over 6
                                months.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.col3}>
                <h1 className={styles.heading3}>SKILLS</h1>
                <div className={styles.skillContainer}>
                    <AllSkills/>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'About' },
    };
}
export default AboutPage;
