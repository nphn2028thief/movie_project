import config from '~/config';

/* Pages */
import HomePage from '~/pages/HomePage';
import CatalogPage from '~/pages/CatalogPage';
import DetailPage from '~/pages/DetailPage';

const publicRoutes = [
    {
        path: config.routes.home,
        component: HomePage,
    },
    {
        path: config.routes.category,
        component: CatalogPage,
    },
    {
        path: config.routes.categorySearch,
        component: CatalogPage,
    },
    {
        path: config.routes.detail,
        component: DetailPage,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
