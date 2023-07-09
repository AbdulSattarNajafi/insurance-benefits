import { Outlet } from 'react-router-dom';
import { useContext } from 'react';

import { StepContext } from '../context/step-context';
import useWindowDimensions from '../hooks/windowDimensions';
import Header from './header';
import Footer from './footer';
import FooterButton from '../components/buttons/footer-button';

const Layout = () => {
    const { height } = useWindowDimensions();
    const { step } = useContext(StepContext);

    return (
        <>
            <div
                className={`layout ${step !== 4 && step !== 5 ? 'layout-padding' : ''} `}
                style={{ minHeight: `${height}px` }}
            >
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
            {step !== 4 && step !== 5 && <FooterButton />}
        </>
    );
};

export default Layout;
