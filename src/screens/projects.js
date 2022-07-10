const Projects = () => {
    return (
        <div className='contentContainer' style={{marginBottom: '11.5%'}}>
            <div className="projectContainer">
                <img src={require('../images/findmydinnericon.png')} width={'fit-content'} height={'fit-content'} />

                <div>
                    <div className="projectImageContent">
                        <div className="project-title">Find My Dinner</div>
                        <div className="project-subtitle">Written in React Native</div>
                    </div>
                    <div className="project-links">
                        <p>Android: [Project Link]</p>
                        <p>iOS: (Coming soon)</p>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <div style={{display: 'flex', flexDirection: 'column', flex: 0.4}}>
                            <h3>Features:</h3>
                            <p className="project-paragraph">Register new users and handle sign in with Firebase Authentication.</p>
                            <p className="project-paragraph">Display a list of restaurants in a city based on user input.</p>
                            <p className="project-paragraph">Set up two firebase functions that use the Google Geocoding API and the Google Places API.</p>
                            <p className="project-paragraph">Generate a map with markes showing where each restaurant is located.</p>
                            <p className="project-paragraph">Integrate with the Stripe API via a firebase function for users to buy the special offered by each restaurant.</p>
                            <p className="project-paragraph">Allow users to upload a profile image that is stored locally with AsyncStorage.</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', flex: 0.6, border: '1px solid blue'}}>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Projects;