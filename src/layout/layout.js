import { Outlet } from 'react-router-dom';

import useWindowDimensions from '../hooks/windowDimensions';
import Header from './header';
import Footer from './footer';

const Layout = () => {
    const { height } = useWindowDimensions();

    return (
        <div className='layout' style={{ minHeight: `${height}px` }}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
