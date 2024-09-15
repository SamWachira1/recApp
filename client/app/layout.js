// client/app/layout.js (Next.js 13)
"use client";

import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css'

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
