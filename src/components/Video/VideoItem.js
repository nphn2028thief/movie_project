import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function VideoItem({ data, id }) {
    const iframeRef = useRef();

    useEffect(() => {
        const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
        // console.log(iframeRef.current.offsetWidth);
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className={cx('video-item')}>
            {id ? (
                <>
                    <h2 className={cx('title')}>Movie Official</h2>
                    <iframe
                        ref={iframeRef}
                        title="Video"
                        src={`https://2embed.cc/embed/${id}`}
                        width="100%"
                        allowFullScreen
                    ></iframe>
                </>
            ) : (
                <>
                    <h2 className={cx('title')}>{data.name}</h2>
                    <iframe
                        ref={iframeRef}
                        title="Video"
                        src={`https://www.youtube.com/embed/${data.key}`}
                        width="100%"
                        allowFullScreen
                    ></iframe>
                </>
            )}
        </div>
    );
}

export default VideoItem;
