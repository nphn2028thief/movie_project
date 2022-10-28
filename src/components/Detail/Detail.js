import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import tmdbApi from '~/api/tmdbApi';
import apiConfig from '~/api/apiConfig';
import Cast from '../Cast';
import Video from '../Video';
import Card from '../Card';

const cx = classNames.bind(styles);

function Detail() {
    const [item, setItem] = useState();

    const { category, id } = useParams();

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });
            // console.log(response);
            setItem(response);
        };

        getDetail();
    }, [category, id]);

    return (
        <>
            {item && (
                <>
                    <div
                        className={cx('background-image')}
                        style={{
                            backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`,
                        }}
                    ></div>

                    <div className={cx('container', 'mb-3', 'content')}>
                        <div className={cx('poster')}>
                            <div
                                className={cx('poster-img')}
                                style={{
                                    backgroundImage: `url(${apiConfig.originalImage(
                                        item.poster_path || item.backdrop_path,
                                    )})`,
                                }}
                            ></div>
                        </div>

                        <div className={cx('info')}>
                            <div className={cx('title')}>{item.title || item.name}</div>

                            <div className={cx('genres')}>
                                {item.genres &&
                                    item.genres.slice(0, 5).map((genre) => (
                                        <span key={genre.id} className={cx('genre-item')}>
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>

                            <p className={cx('overview')}>{item.overview}</p>

                            <div className={cx('casts')}>
                                <h2 className={cx('section-header')}>Casts</h2>

                                <Cast movieId={item.id} />
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="section mb-3">
                            <Video movieId={item.id} />
                        </div>

                        <div className="mb-3">
                            <Card title="Similar" to="" category={category} type="similar" id={item.id} delay={2000} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Detail;
