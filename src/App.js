import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from '~/routes';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((publicRoute, index) => {
                            const Page = publicRoute.component;
                            let Layout = DefaultLayout;

                            return (
                                <Route
                                    key={index}
                                    path={publicRoute.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </ScrollToTop>
        </Router>
    );
}

export default App;
