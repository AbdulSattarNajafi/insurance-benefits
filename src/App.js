import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StepContextProvider from './context/step-context';

import Layout from './layout/layout';
import Home from './pages/home';
import NotFound from './pages/noFound';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [{ index: true, element: <Home /> }],
    },
    { path: '*', element: <NotFound /> },
]);

function App() {
    return (
        <StepContextProvider>
            <RouterProvider router={routes} />
        </StepContextProvider>
    );
}

export default App;
