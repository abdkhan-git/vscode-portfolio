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
        }
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
                <h1 className={styles.education}> EDUCATION </h1>
                <p>
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
                        <br/>
                        <h3>Activities and Societies</h3>
                        <li>ACM Technology Club</li>
                        <li>Coding 4 All Club</li>
                        <li>AI and Machine Learning CLub</li>
                        <li>Google Student Developer Club</li>
                        <li>Muslim Student Association</li>
                    </ul>
                </p>
            </div>
            <div className={styles.col2}>
                <h1 className={styles.heading2}>EXPERIENCE</h1>
                <div className={styles.experience}>
                    <div>
                       <h3 className={styles.ex1}> International Cricket Council – Technology Intern, Nassau County, NY
                            (May 2024 - Aug 2024)</h3>
                    </div>
                    <br></br>
                    <div>
                        <h3 className={styles.ex1}> CodePath – Technical Interview Prep Apprentice, Remote
                            (May 2024 - Aug 2024)</h3>
                    </div>
                    <br></br>
                    <div>
                        <h3 className={styles.ex1}> Engageathon – Software Engineer Intern, New York, NY (Jan 2024 –
                            May 2024)</h3>
                    </div>
                    <br></br>
                    <div>
                        <h3 className={styles.ex1}> AT&T – Technology Academy Apprentice, Remote
                            (July 2024 - Aug 2024)</h3>
                    </div>
                    <br></br>
                    <div>
                        <h3 className={styles.ex1}>Pongspace – Web Developer Intern, New York, NY (JUNE 2023 – AUGUST
                            2023)</h3>
                    </div>
                    <br></br>
                    <div>
                        <h3 className={styles.ex1}>CVS Health – Shift Manager, Massapequa, NY (SEPTEMBER 2021 – APRIL
                            2023)</h3>
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
        props: {title: 'About'},
    };
}

export default AboutPage;
