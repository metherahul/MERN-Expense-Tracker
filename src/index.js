import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
let Root = createRoot(document.getElementById('root'));
Root.render(<App/>);