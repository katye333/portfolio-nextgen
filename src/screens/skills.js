import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import ReactDOM from 'react-dom';

import React, { useState } from "react";
import { Chart } from 'primereact/chart';

export const Skills = () => {
    const [data] = React.useState({
        datasets: [
            { label: 'JavaScript', value: '9', color: '#eeaf61' },
            { label: 'React Native', value: '5', color: '#FB9062' },
            { label: 'Java/Kotlin', value: '4', color: '#F2671F' },
            { label: 'Swift', value: '3', color: '#F0614A' },
            { label: 'ReactJS', value: '5', color: '#ee5d6c' },
            { label: 'Asp.NET/C#', value: '9', color: '#60047a' },
            { label: 'SQL', value: '9', color: '#160a47' },
            { label: 'HTML5', value: '9', color: '#ce4993' },
            { label: 'CSS3', value: '7', color: '#9c0f5f' },
        ]
    });

    

    return (
        <div style={{display: 'grid'}}>
            <div className='skills-container'>
                <h2>Skills</h2>
                
                <div style={{padding: 20, height: 400, overflowY: 'scroll'}}>
                {
                    data.datasets.map((item, index) => {
                        let width = 50 * item.value;
                        return (
                            <div key={index} style={{marginBottom: 5, width: `${width}px`, backgroundColor: `${item.color}`, flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                                <p style={{fontSize: 16, color: 'white', padding: 5, marginLeft: 10}}>
                                    {item.label}
                                </p>
                                <p style={{fontSize: 16, color: "white", padding: 5, marginRight: 10}}>
                                    {item.value} Years
                                </p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}