import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './PageGrid.module.scss';
import tmdbApi, { category, movieType, tvType } from '~/api/tmdbApi';
import CardItem from '../Card/CardItem';
import Button from '../Button';
import Search from '../Search';
import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(styles);

function PageGrid({ categoryData }) {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [keywordSearch, setKeywordSearch] = useState('');

    const debounceValue = useDebounce(keywordSearch, 1000);

    const navigate = useNavigate();

    /* Get List movie/tv */
    useEffect(() => {
        const getList = async () => {
            let response = null;

            if (!debounceValue.trim()) {
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
                    query: debounceValue,
                };

                response = await tmdbApi.search(categoryData, params);
                navigate(`/${category[categoryData]}/search/${debounceValue}`);
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
            setPage(1);
        };

        getList();
    }, [categoryData, debounceValue, navigate]);

    /* Load more function */
    const handleLoadMore = async () => {
        let response = null;

        if (!keywordSearch.trim()) {
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
                query: keywordSearch,
            };

            response = await tmdbApi.search(categoryData, params);
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    };

    // const handleChange = (e) => {
    //     setKeywordSearch(e.target.value);
    //     document.title = e.target.value;
    // };

    return (
        <>
            <Search keywordData={keywordSearch} handleChange={(e) => setKeywordSearch(e.target.value)} />

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
