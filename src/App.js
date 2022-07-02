import './App.css';
import SimpleImageSlider from "react-simple-image-slider";

const App = () => {
    const images = [
        {url: require('./images/1.jpg')},
        {url: require('./images/2.jpg')},
        {url: require('./images/3.jpg')}
    ];

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, marginTop: 50}}>
            <div style={{display: 'flex', flex: 0.5, flexDirection: 'column', paddingTop: 75}}>
                <div className='image-container'>
                    <SimpleImageSlider 
                        width={550} 
                        height={550} 
                        images={images} 
                        showBullets={true} 
                        showNavs={true} />
                </div>
            </div>
            <div style={{display: 'flex', flex: 0.5, flexDirection: 'column', zIndex: 100}}>
                <div className='info-container'>
                    <h1>HELLO!</h1>
                    <hr />
                    <h2>[ Insert About Me Here ]</h2>
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
