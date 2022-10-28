import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '~/api/tmdbApi';
import styles from './Video.module.scss';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);

function Video({ movieId }) {
    const [videos, setVideos] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        const getVideos = async () => {
            const response = await tmdbApi.getVideos(category, movieId);
            setVideos(response.results.slice(0, 5));
            console.log(response);
        };

        getVideos();
    }, [category, movieId]);

    return (
        <div className={cx('wrapper')}>
            {videos.map((video) => (
                <VideoItem key={video.id} data={video} />
            ))}
        </div>
    );
}

export default Video;
