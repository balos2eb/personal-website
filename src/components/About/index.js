import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const hoverLetter = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    };

    useEffect(() => {
        hoverLetter();
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            index={15}
                        />
                    </h1>
                    <p>
                        I'm a second-year student at Langara College studying Computer Science.
                        I currently work at Zero Latency as a Game Master, guiding people
                        through unique and immersive Virtual Reality experiences.
                    </p>
                    <p>
                        During my free time, I like to pursue distance running, code and study Japanese.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;
