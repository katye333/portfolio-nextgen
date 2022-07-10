import React from "react";

import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { Chart } from 'primereact/chart';

import { ReactComponent as LogoEFX } from '../images/logo-efx.svg';
import { ReactComponent as LogoCHHJ } from '../images/logo-chhj.svg';
import { ReactComponent as LogoMJT } from '../images/logo-mjobtime.svg';

import mapEFX from '../images/map-efx.png';
import mapCHHJ from '../images/map-chhj.png';
import mapMJT from '../images/map-mjobtime.png';

const Resume = () => {
    const [showBack, setShowBack] = React.useState(false);
    
    const [options] = React.useState({
        plugins: {
            legends: {
                labels: {
                    color: '#000000'
                }
            }
        }
    });
   
    const [jobInfo] = React.useState([
        {
            logo: <LogoEFX width={300} height={200} />,
            companyName: 'EFX Financial Services',
            jobTitle: 'Mobile Application/Full Stack Developer',
            startDate: 'June 2020',
            endDate: 'Current Employee',
            city: 'Largo',
            state: 'FL',
            map: mapEFX,
            icon: 'fas fa-laptop-mobile',
            chartData: {
                labels: ['JavaScript', 'HTML5', 'CSS3', 'C#/Asp.Net', 'SQL'],
                datasets: [
                    {
                        data: [40, 25, 10, 15, 10],
                        backgroundColor: [
                            '#eeaf61', '#fb9062', '#ee5d6c', '#ce4993', '#6a0d83'
                        ],
                        hoverBackgroundColors: [
                            '#eeaf61', '#fb9062', '#ee5d6c', '#ce4993', '#6a0d83'
                        ]
                    }
                ]
            },
            responsibilities: [
                {
                    id: 0,
                    text: 'Upgraded the UI on their current web application through the use of Bootstrap, FlexBox, and principles from the Material UI guidelines.',
                }, 
                {
                    id: 1,
                    text: 'Created a mobile application with React Native for rental properties to collect payment from their residents.',
                },
                {
                    id: 2,
                    text: 'Wrote and deployed API endpoints with C# and SQL for use on the mobile application.',
                }, 
                {
                    id: 3,
                    text: 'Implement bug tracking and reporting through the use of Google Analytics and Bugsnag.',
                }
            ]
        },
        {
            logo: <LogoCHHJ width={250} height={200} />,
            companyName: 'College Hunks Hauling Junk and Moving HQ',
            jobTitle: 'Mobile Application Developer',
            startDate: 'June 2018',
            endDate: 'April 2020',
            city: 'Tampa',
            state: 'FL',
            map: mapCHHJ,
            icon: 'fas fa-mobile-screen',
            chartData: {
                labels: ['React Native', 'iOS', 'Android'],
                datasets: [
                    {
                        data: [60, 20, 20],
                        backgroundColor: [
                            '#fb9062', '#ee5d6c', '#ce4993'
                        ],
                        hoverBackgroundColors: [
                            '#fb9062', '#ee5d6c', '#ce4993'
                        ]
                    }
                ]
            },
            responsibilities: [
                {
                    id: 0,
                    text: 'Developed a React Native application for use on the respective app stores.',
                }, 
                {
                    id: 1,
                    text: 'Integrated technologies such as Firebase for notifications and analytics, Square Reader for credit card processing, and PSPDFKit for generating, annotating and signing PDFs.',
                },
                {
                    id: 2,
                    text: 'Responsible for app deployments via the store front and using AppCenter’s code push tool.',
                }, 
                {
                    id: 3,
                    text: 'Configured Jest with Enzyme to facilitate testing throughout the development process.',
                },
                {
                    id: 4,
                    text: 'Followed the Material UI guidelines set by Google to create a truly beautiful application.'
                }
            ]
        },
        {
            logo: <LogoMJT width={200} height={175} />,
            companyName: 'mJobTime',
            jobTitle: 'Full Stack Developer',
            startDate: 'December 2013',
            endDate: 'December 2017',
            city: 'Beaumont',
            state: 'TX',
            map: mapMJT,
            icon: 'fas fa-laptop-code',
            chartData: {
                labels: ['React Native', 'iOS', 'Android', 'C#/Asp.Net', 'SQL'],
                datasets: [
                    {
                        data: [40, 5, 5, 45, 5],
                        backgroundColor: [
                            '#eeaf61', '#fb9062', '#ee5d6c', '#ce4993', '#6a0d83'
                        ],
                        hoverBackgroundColors: [
                            '#eeaf61', '#fb9062', '#ee5d6c', '#ce4993', '#6a0d83'
                        ]
                    }
                ]
            },
            responsibilities: [
                {
                    id: 0,
                    text: 'Developed a web application using AppCache and Service Workers in conjunction with C# to facilitate offline capabilities.',
                }, 
                {
                    id: 1,
                    text: 'Solely responsible for changes to the application interface using Bootstrap, FlexBox and custom CSS.',
                },
                {
                    id: 2,
                    text: 'Created stored procedures using Sybase and MSSQL.',
                }, 
                {
                    id: 3,
                    text: 'Implemented GPS Geo-tracking using a REST web API to let businesses monitor employee and equipment movement on the job site.',
                }
            ]
        }
    ]);

    const customizedCard = (job) => {

        if (showBack === false) {
            const header = job.logo;
            return (
                <Card style={{width: '100%', height: '85%'}} header={header}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div>
                            <div className="p-card-title">{job.companyName}</div>
                            <div className="p-card-subtitle">{job.jobTitle}</div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p>{job.startDate} - {job.endDate}</p> 
                                <p style={{marginTop: -10}}>{job.city}, {job.state}</p>
                            </div>
                        </div>
                        <span>
                            <Button className='p-button p-button-gradient' label='Read More' onClick={() => setShowBack(true)} />
                        </span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#000', borderWidth: 2}}>
                        <img src={job.map} width={200} height={200} />
                    </div>
                </Card>
            );
        }
        else {
            const header = <div style={{marginTop: 10}}>
                <div className="p-card-title">{job.companyName}</div>
                <div className="p-card-subtitle">{job.jobTitle}</div>
            </div>

            return (
                <Card style={{width: '100%', height: 'fit-content'}} header={header}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div>
                            {
                                job.responsibilities.map((item, index) => {
                                    let key = index;
                                    return (
                                        <p key={key}>{item.text}</p>
                                    )
                                })
                            }
                        </div>
                        <span>
                            <Button className='p-button p-button-gradient' label='Back' onClick={() => setShowBack(false)} />
                        </span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div>
                            <Chart type="doughnut" data={job.chartData} options={options} />
                        </div>
                    </div>
                </Card>
            )
        }
    }

    const getJobDates = (job) => {
        return job.startDate + ' through ' + job.endDate;
    }

    return (
        <div className="work-container">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '2%'}}>
                <h1>Timeline of past jobs</h1>
            </div>
            <Timeline value={jobInfo} align="alternate" className="customized-timeline" content={customizedCard} opposite={getJobDates} />
        </div>
    )
}

export default Resume;