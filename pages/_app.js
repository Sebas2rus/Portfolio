/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import '../styles/globals.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;