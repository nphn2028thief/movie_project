import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import tmdbApi, { category, movieType } from '~/api/tmdbApi';
import apiConfig from '~/api/apiConfig';

const cx = classNames.bind(styles);

function Slider() {
    // const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };

            try {
                const response = await tmdbApi.getMoviesList(movieType.popupar, { params });
                console.log(response);
            } catch (error) {
                console.log(error);
            }

            // const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiConfig.apiKey}`);
            // const data = await response.json();
            // console.log(data.results);
        };

        getMovies();
    }, []);

    return <div className={cx('wrapper')}>Slider</div>;
}

export default Slider;
