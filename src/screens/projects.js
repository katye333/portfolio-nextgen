import React, { useState, useEffect } from 'react';
// import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';

const Projects = () => {

    const [images, setImages] = useState([
        {
            original: require('../images/original/account.png'),
            thumbnail: require('../images/thumbnails/account_tn.jpg')
        },
        {
            original: require('../images/original/register.png'),
            thumbnail: require('../images/thumbnails/register_tn.jpg')
        },
        {
            original: require('../images/original/login.png'),
            thumbnail: require('../images/thumbnails/login_tn.jpg')
        },
        {
            original: require('../images/original/restaurantList.png'),
            thumbnail: require('../images/thumbnails/restaurantList_tn.jpg')
        },
        {
            original: require('../images/original/restaurantDetails.png'),
            thumbnail: require('../images/thumbnails/restaurantDetails_tn.jpg')
        },
        {
            original: require('../images/original/pay.png'),
            thumbnail: require('../images/thumbnails/pay_tn.jpg')
        },
        {
            original: require('../images/original/maps.png'),
            thumbnail: require('../images/thumbnails/maps_tn.jpg')
        },
        {
            original: require('../images/original/settings.png'),
            thumbnail: require('../images/thumbnails/settings_tn.jpg')
        }
    ]);

    const itemTemplate = (item) => {
        return <img src={`${item.original}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '30%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={`${item.thumbnail}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} />
    }

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    return (
        <div className="projectContainer">
            <div style={{paddingLeft: 15, paddingRight:15, paddingBottom: 15, paddingTop: 25, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={require('../images/findmydinnericon.png')} width={'100%'} height={'60%'} />
                <div style={{marginTop: 25}}>
                    <div className="project-title">Find My Dinner</div>
                    <div className="project-subtitle">Written in React Native</div>
                    <hr />

                    <div className="project-links">
                        <div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <p>Android: <a className='project-link' href="https://play.google.com/store/apps/details?id=com.project.tourguide">Google Play Link</a></p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <p>iOS: <a className='project-link' href="#">App Store Link</a></p>
                            </div>
                        </div>
                        

                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <p>Expo: <a className='project-link' href="exp://exp.host/@katye333/findmydinner?release-channel=default">Click Here</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginTop: 20}}>
                <div style={{}}>
                    <h3>Features:</h3>
                    <p className="project-paragraph">Register new users and handle sign in with Firebase Authentication.</p>
                    <p className="project-paragraph">Display a list of restaurants in a city based on user input.</p>
                    <p className="project-paragraph">Set up two firebase functions that use the Google Geocoding API and the Google Places API.</p>
                    <p className="project-paragraph">Generate a map with markes showing where each restaurant is located.</p>
                    <p className="project-paragraph">Integrate with the Stripe API via a firebase function for users to buy the special offered by each restaurant.</p>
                    <p className="project-paragraph">Allow users to upload a profile image that is stored locally with AsyncStorage.</p>
                </div>
            </div>

            <div style={{border: '0.5px solid #ccc'}}>
                <div className="card">
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '80%' }}
                        item={itemTemplate} thumbnail={thumbnailTemplate} circular={true} />
                </div>
            </div>
        </div>
    )
}

export default Projects;