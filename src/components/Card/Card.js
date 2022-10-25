import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

/* Import Swiper React components */
import { Swiper, SwiperSlide } from 'swiper/react';

/* Import Swiper styles */
import 'swiper/css';
import 'swiper/css/pagination';

/* import required modules */
import { Autoplay } from 'swiper';

import Button from '../Button';
import styles from './Card.module.scss';
import tmdbApi from '~/api/tmdbApi';
import CardItem from './CardItem';

const cx = classNames.bind(styles);

function Card({ title, category, type, id, delay }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (type !== 'similar') {
                switch (category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(type, params);
                        break;
                    default:
                        response = await tmdbApi.getTvList(type, params);
                }
            } else {
                response = await tmdbApi.similar(category, id);
            }
            // console.log(response);
            setItems(response.results);
        };

        getList();
    }, [category, type, id]);

    return (
        <div className="container">
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2 className={cx('title')}>{title}</h2>
                    <Button to="/movie" btn outline small>
                        View more
                    </Button>
                </div>

                <div className={cx('trending-list')}>
                    <Swiper
                        slidesPerView={'auto'}
                        speed={1000}
                        spaceBetween={10}
                        modules={[Autoplay]}
                        grabCursor={true}
                        autoplay={{ delay: delay, disableOnInteraction: false }}
                    >
                        {items.map((item) => (
                            <SwiperSlide key={item.id} className={cx('swiper-slide')}>
                                <CardItem data={item} cate={category} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Card;
