import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import CardList from './CardList';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CardList />
    </StrictMode>)

reportWebVitals();



