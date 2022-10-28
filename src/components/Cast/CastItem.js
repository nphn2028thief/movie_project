import classNames from 'classnames/bind';
import apiConfig from '~/api/apiConfig';
import styles from './Cast.module.scss';

const cx = classNames.bind(styles);

function CastItem({ data }) {
    return (
        <div className={cx('cast-item')}>
            <div
                className={cx('image')}
                style={{ backgroundImage: `url(${apiConfig.w500Image(data.profile_path)})` }}
            ></div>

            <p className={cx('name')}>{data.name}</p>
        </div>
    );
}

export default CastItem;
