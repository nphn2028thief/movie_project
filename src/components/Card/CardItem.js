import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { HiPlay } from 'react-icons/hi2';

import styles from './Card.module.scss';
import { category } from '~/api/tmdbApi';
import apiConfig from '~/api/apiConfig';

const cx = classNames.bind(styles);

function CardItem({ data, cate }) {
    const link = `/${category[cate] / data.id}`;
    const backgroundImage = apiConfig.w500Image(data.poster_path || data.backdrop_path);

    return (
        <Link to={link}>
            <div className={cx('card-item')} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <button className={cx('play-btn')}>
                    <HiPlay />
                </button>
            </div>
            <h3 className={cx('name')}>{data.title || data.name}</h3>
        </Link>
    );
}

export default CardItem;
