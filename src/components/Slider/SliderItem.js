import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import apiConfig from '~/api/apiConfig';
import Button from '../Button';

const cx = classNames.bind(styles);

function SliderItem({ data, isActive, onClick }) {
    const sliderItemRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        sliderItemRef.current.style.backgroundImage = `url(${apiConfig.originalImage(
            data.backdrop_path ? data.backdrop_path : data.poster_path,
        )})`;
    });

    const handleNavigate = (id) => {
        navigate('/movie/' + id);
    };

    return (
        <div ref={sliderItemRef} className={isActive ? cx('active', 'slider-item') : cx('slider-item')}>
            <div className={cx('container', 'slider-item-container')}>
                <div className={cx('info')}>
                    <h2 className={cx('title')}>{data.title}</h2>
                    <div className={cx('overview')}>{data.overview}</div>
                    <div className={cx('action-btn')}>
                        <Button
                            btn
                            primary
                            className={cx('watch-btn', 'act-btn')}
                            onClick={() => handleNavigate(data.id)}
                        >
                            Watch Now
                        </Button>
                        <Button btn outline onClick={onClick} className={cx('act-btn')}>
                            Watch Trailer
                        </Button>
                    </div>
                </div>
                <div className={cx('poster')}>
                    <img src={apiConfig.w500Image(data.poster_path)} className={cx('poster-img')} alt="poster-img" />
                </div>
            </div>
        </div>
    );
}

export default SliderItem;
