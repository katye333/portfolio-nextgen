import './App.css';

const App = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, marginTop: 80}}>
            <div style={{display: 'flex', flex: 0.5, flexDirection: 'column', paddingTop: 75}}>
                <div className='image-container'>
                    <h2>[ Insert Image Here ]</h2>
                </div>
            </div>
            <div style={{display: 'flex', flex: 0.5, flexDirection: 'column', zIndex: 100}}>
                <div className='info-container'>
                    <h1>HELLO!</h1>
                    <hr />
                    <h2>[ Insert About Me Here ]</h2>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: 30, justifyContent: 'space-evenly'}}>
                    <div className='circle-button'>
                        <h2>RESUME</h2>
                    </div>
                    <div className='circle-button'>
                        <h2>PROJECTS</h2>
                    </div>
                    <div className='circle-button'>
                        <h2>CONTACT</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
