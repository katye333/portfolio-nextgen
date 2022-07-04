import { Frame } from "../components/navbar";
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Button } from "primereact/button";

import { ReactComponent as LogoEFX } from '../images/logo-efx.svg';
import { ReactComponent as LogoCHHJ } from '../images/logo-chhj.svg';
import { ReactComponent as LogoMJT } from '../images/logo-mjobtime.svg';

const Resume = () => {
    const jobInfo = [
        {
            logo: <LogoEFX width={'90%'} height={250} />,
            companyName: 'EFX Financial Services',
            jobTitle: 'Mobile Application/Full Stack Developer',
            startDate: 'June 2020',
            endDate: 'Current Employee',
            city: 'Largo',
            state: 'FL',
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
            logo: <LogoCHHJ width={'fit-content'} height={250} />,
            companyName: 'College Hunks Hauling Junk and Moving HQ',
            jobTitle: 'Mobile Application Developer',
            startDate: 'June 2018',
            endDate: 'April 2020',
            city: 'Tampa',
            state: 'FL',
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
            logo: <LogoMJT width={'fit-content'} height={250} />,
            companyName: 'mJobTime',
            jobTitle: 'Full Stack Developer',
            startDate: 'December 2013',
            endDate: 'December 2017',
            city: 'Beaumont',
            state: 'TX',
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
    ]

    const itemTemplate = (job) => {
        console.log("JOB LOGO URL: ", job.logo)
        const header = job.logo;
        const footer = <span>
            <Button className='p-button p-button-gradient' label='Read More' />
        </span>
        return (
            <Card style={{width: '100%', display: 'flex', flexDirection: 'column'}} title={job.companyName} subTitle={job.jobTitle} header={header} footer={footer}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p>{job.startDate} - {job.endDate}</p> 
                    <p style={{marginTop: -10}}>{job.city}, {job.state}</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', borderColor: '#000', borderWidth: 2}}>
                    <p>Blahblahblah</p>
                </div>
            </Card>
        );
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, marginTop: 50, zIndex: 1000}}>
            <div className='carousel-container'>
                <Carousel 
                    containerClassName='carouselContainer'
                    value={jobInfo} 
                    itemTemplate={itemTemplate} 
                    numVisible={1} 
                    numScroll={1}></Carousel>
            </div>
        </div>
    )
}

export default Resume;