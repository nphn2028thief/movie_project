import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

/* Import Swiper React components */
import { Swiper, SwiperSlide } from 'swiper/react';

/* Import Swiper styles */
import 'swiper/css';
import 'swiper/css/pagination';

/* import required modules */
import { Autoplay } from 'swiper';

import styles from './Slider.module.scss';
import tmdbApi, { category, movieType } from '~/api/tmdbApi';
import apiConfig from '~/api/apiConfig';
import SliderItem from './SliderItem';

const cx = classNames.bind(styles);

function Slider() {
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };

            try {
                const response = await tmdbApi.getMoviesList(movieType.popupar, params);

                /* Trích xuất 1 phần trong mảng results khi response trả về */
                setMovieItems(response.results.slice(0, 4));
                // console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        getMovies();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                modules={[Autoplay]}
                grabCursor={true}
                // autoplay={{ delay: 2000 }}
            >
                {movieItems.map((movieItem) => (
                    <SwiperSlide key={movieItem.id}>
                        {({ isActive }) => <SliderItem data={movieItem} isActive={isActive} />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
