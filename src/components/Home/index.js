import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'E', 'm', 'e', 'r', 's', 'o', 'n', ','];
    const jobArray = ['s', 't', 'u', 'd', 'e', 'n', 't', '.'];

    const hoverLetter = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    };

    useEffect(() => {
        hoverLetter();
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            index={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            index={24} />
                    </h1>
                    <h2>Student @ Langara College / Game Master @ Zero Latency</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
};

export default Home;
