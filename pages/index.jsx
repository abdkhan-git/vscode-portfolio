import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/HomePage.module.css';
import greetingsData from './greetings.json'

const resume = '/resume.pdf';
const greetings = greetingsData.greetings;

export default function HomePage() {
  const [showResume, setShowResume] = useState(false);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
      <>
        <div className={styles.container}>
          <div className={styles.background}>
            <h1>{greetings[currentGreetingIndex]}</h1>
          </div>
          <div className={styles.foreground}>
            <div className={styles.content}>
              <h1 className={styles.name}>Abdullah Khan</h1>
              <h6 className={styles.bio}>Full-Stack Developer</h6>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <Link href={resume}>
                  <button
                      className={styles.button}
                      onClick={() => setShowResume(true)}
                  >
                    View Resume
                  </button>
                </Link>
                {showResume && (
                    <Image src={resume} alt="Resume" />
                )}
              </a>
              <Link href="/contact">
                <button className={styles.outlined}>Contact Me</button>
              </Link>
            </div>
            <img src="illustration.svg" className={styles.illustration} alt="illustration" />
          </div>
        </div>
      </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
