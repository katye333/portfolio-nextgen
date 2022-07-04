import React from 'react';
import { Button } from 'primereact/button';
import SimpleImageSlider from "react-simple-image-slider";
import './App.css';

const App = () => {
    const [trivia, setTriviaFact] = React.useState(null);
    const images = [
        {url: require('./images/1.jpg')},
        {url: require('./images/2.jpg')},
        {url: require('./images/3.jpg')}
    ];

    const generateTriviaFact = () => {
        //'A hummingbird beats its wings 12 times per second'
        const randomFact = "Lobster was originally considered a garbage food. It was fed to prisoners in the northeast (and there were regulations specifying that"
            + " they couldn't be fed too much lobster, lest it become cruel)." 
            + " This all changed with the advent of crosscountry rail, which brought wealthier travelers" 
            + " from outside the area. Enterprising fishermen and restaurateurs began to offload their extra lobster on the poor fools, treating it as a delicacy."
        setTriviaFact(randomFact);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, marginTop: 50}}>
            <div style={{display: 'flex', flex: 0.5, flexDirection: 'column', paddingTop: 75}}>
                <div className='image-container'>
                </div>
            </div>
            <div style={{display: 'flex', flex: 0.5, flexDirection: 'column', zIndex: 100}}>
                <div className='info-container'>
                    <h4 style={{marginBottom: -15}}>HELLO! My name is </h4>
                    <h1>Kaitlin Stevens</h1>
                    <hr />

                    <div className='inner-scroll-info-container' style={trivia ? {overflowY: 'scroll'} : {overflowY: 'hidden'}}>
                        <h4>
                            I am currently working in Florida as a mobile app developer.
                        </h4>
                        <h4>
                            I usually work with React Native and Typescript with 
                            some kotlin  and swift thrown in for good measure, though I 
                            have been known to throw together some c# when needed. 
                        </h4>

                        <h4>I am full of random bits of trivia. Click the button below to see.</h4>

                        {
                            trivia !== null &&
                            <h5>{trivia}</h5>
                        }
                    </div>
                    <Button 
                        label='New Trivia Fact' 
                        className='p-button-raised p-button-rounded p-button-block p-button-gradient p-button-trivia' 
                        onClick={generateTriviaFact} />
                    
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: 30, justifyContent: 'space-evenly'}}>
                    <a className='circle-button' href='/resume'>
                        <h2>RESUME</h2>
                    </a>
                    <a className='circle-button' href='/projects'>
                        <h2>PROJECTS</h2>
                    </a>
                    <a className='circle-button' href='/contact'>
                        <h2>CONTACT</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App;
