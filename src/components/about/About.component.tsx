import imageAbout from '@/assets/imageAbout.png';

import styles from './about.module.css';

const AboutComponent = () => (
    <div className={styles.about_container}>
        <h1 className={styles.about_title}>About me</h1>
        <div className={styles.about_description}>
            <p>
                Hi! My name is [Name] and I&#39;m a Junior Frontend Developer. I am already familiar with main Web Technologies like React,
                HTML, CSS, JavaScript and Git version control system.
            </p>
            <p>This page was developed during the course &#39;Intro to React&#39; from Masters Academy in 2024.</p>
            <p>
                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                small project for the portfolio.
            </p>
            <p>You can contact me via [social network name] and check out my GitHub.</p>
        </div>
        <div className={styles.about_image}>
            <img src={imageAbout} alt="me" />
        </div>
    </div>
);

export default AboutComponent;
