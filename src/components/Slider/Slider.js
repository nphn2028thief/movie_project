import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { UilMultiply } from '@iconscout/react-unicons';

/* Import Swiper React components */
import { Swiper, SwiperSlide } from 'swiper/react';

/* Import Swiper styles */
import 'swiper/css';
import 'swiper/css/pagination';

/* import required modules */
import { Autoplay } from 'swiper';

import styles from './Slider.module.scss';
import tmdbApi, { category, movieType } from '~/api/tmdbApi';
// import apiConfig from '~/api/apiConfig';
import SliderItem from './SliderItem';
import Modal from '../Modal';

const cx = classNames.bind(styles);

function Slider() {
    const [movieItems, setMovieItems] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [srcVideo, setSrcVideo] = useState('');

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

    const openModal = async (id) => {
        const videos = await tmdbApi.getVideos(category.movie, id);

        if (videos.results.length > 0) {
            const videoSrc = 'https://youtube.com/embed/' + videos.results[0].key;
            setSrcVideo(videoSrc);
        }

        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className={cx('wrapper')}>
            <Swiper
                slidesPerView={1}
                speed={1000}
                spaceBetween={0}
                modules={[Autoplay]}
                grabCursor={true}
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {movieItems.map((movieItem) => (
                    <SwiperSlide key={movieItem.id}>
                        {({ isActive }) => (
                            <SliderItem data={movieItem} isActive={isActive} onClick={() => openModal(movieItem.id)} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            <Modal isOpen={modalIsOpen}>
                <div className={cx('close-btn')} onClick={closeModal}>
                    <UilMultiply size="28" />
                </div>
                {srcVideo ? (
                    <iframe
                        title="trailer"
                        className={cx('trailer-video')}
                        src={srcVideo}
                        width="100%"
                        height="400px"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <h3 className={cx('trailer-text')}>No Trailer</h3>
                )}
            </Modal>
        </div>
    );
}

export default Slider;
