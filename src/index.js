import './index.css';
import React from 'react';
import App from './App';
import {createRoot}  from 'react-dom/client';
import { AuthContextProvider } from './context/AuthContext';
import { SelectProvider } from './context/SelectContext';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <AuthContextProvider>
        <SelectProvider>
            <App tab="home" />
        </SelectProvider>
    </AuthContextProvider>
    );

// // ReactDOM.render(
// //     <App/>,
// //     document.getElementById('app')
// // );

