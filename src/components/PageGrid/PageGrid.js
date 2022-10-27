import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PageGrid.module.scss';
import tmdbApi, { category, movieType, tvType } from '~/api/tmdbApi';
import CardItem from '../Card/CardItem';
import Button from '../Button';

const cx = classNames.bind(styles);

function PageGrid({ categoryData }) {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;

            if (keyword === undefined) {
                const params = {};
                switch (categoryData) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, params);
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popupar, params);
                }
            } else {
                const params = {
                    query: keyword,
                };

                response = await tmdbApi.search(categoryData, params);
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
            setPage(1);
        };

        getList();
    }, [categoryData, keyword]);

    const handleLoadMore = async () => {
        let response = null;

        if (keyword === undefined) {
            const params = {
                page: page + 1,
            };
            switch (categoryData) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, params);
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popupar, params);
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword,
            };

            response = await tmdbApi.search(categoryData, params);
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                {items.map((item) => (
                    <CardItem key={item.id} data={item} cate={categoryData} />
                ))}
            </div>

            {page < totalPage ? (
                <div className={cx('loadmore-btn')}>
                    <Button btn outline onClick={handleLoadMore}>
                        Load More
                    </Button>
                </div>
            ) : null}
        </>
    );
}

export default PageGrid;
