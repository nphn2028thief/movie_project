import classNames from 'classnames/bind';
import styles from './PageHeader.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function PageHeader({ children }) {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${images.footer})` }}>
            <h2 className={cx('title')}>{children}</h2>
        </div>
    );
}

export default PageHeader;
