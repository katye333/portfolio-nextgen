import React from "react";
import '../App.css'

export const About = () => {
    return (
        <div className='info-container'>
            <p style={{marginBottom: -15, color: '#000'}}>HELLO! My name is </p>
            <h1 style={{color: '#000'}}>Kaitlin Stevens</h1>
            <hr />

            <div className='inner-scroll-info-container'>
                <h4 style={{color: '#000'}}>
                    I am currently working in Florida as a mobile app developer.
                </h4>
                <h4 style={{color: '#000'}}>
                    [Blah blah blah]
                </h4>
            </div>
        </div>
    );
}