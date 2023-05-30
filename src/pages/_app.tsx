import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
import 'styles/app.css';

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export const AppContext = createContext({ firebase, auth });

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
    return (
        <AppContext.Provider value={{ firebase, auth }}>
            <Component {...pageProps} />
        </AppContext.Provider>
    );
};

export default App;