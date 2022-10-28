import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import tmdbApi from '~/api/tmdbApi';
import styles from './Cast.module.scss';
import CastItem from './CastItem';

const cx = classNames.bind(styles);

function Cast({ movieId }) {
    const [casts, setCasts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, movieId);
            console.log(response);
            setCasts(response.cast.slice(0, 5));
        };

        getCredits();
    }, [category, movieId]);

    return (
        <div className={cx('wrapper')}>
            {casts.map((cast) => (
                <CastItem key={cast.id} data={cast} />
            ))}
        </div>
    );
}

export default Cast;
