import { grid } from '@mui/system';
import React from 'react';
import './App.css';
import { About } from "./screens/about";
import { Skills } from './screens/skills';

const App = () => {
    return (
        <main>
            <About />

            <div style={{display: 'grid'}}>
                <Skills />
            </div>
        </main>
    )
}

export default App;
