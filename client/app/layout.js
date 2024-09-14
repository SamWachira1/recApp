<<<<<<< HEAD
import '../styles/globals.css'

const RootLayout = ({children})=>{
    return(<>
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
=======
// client/app/layout.js (Next.js 13)
"use client";
>>>>>>> google-auth

import { Provider } from 'react-redux';
import store from '../store';

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider store={store}>
        {children}
      </Provider>
    </body>
  </html>
);

export default RootLayout;
