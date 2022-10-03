import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';
import styles from '../styles/About.module.css';
import Carousel from '../components/Carousel';
import { slideByIndex } from '../public/aboutGallery';

const SLIDE_COUNT = 6;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const props = {
    slides: slides,
    images: slideByIndex
  }

const About = () => {
    return (
        <>
        <div className={styles.introContainer}>
        <h1>Rock and Wings Experience</h1>
        <div className={styles.imageContainer}>
             
        <Image src={logo} layout="fill" className={styles.image}/>
        </div>
        <p className={styles.aboutText} >
        Come and ROCK ON watch your favorite games & music videos. Get the feel of a ROCK STAR.
We have a selection of burgers, wings, salads, wraps and beer.
 
        </p>
        </div>

<Carousel {...props}/>
        <div>
            <h1 className="bg-black">hello</h1>
        </div>
        </>
    );
}

export default About;