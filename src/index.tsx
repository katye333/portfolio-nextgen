import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import { Frame } from './components/frame';
import App from './App';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Frame />}>
                    <Route index element={<App />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
