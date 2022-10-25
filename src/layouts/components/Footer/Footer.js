import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${images.footer})` }}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} className={cx('logo-image')} alt="logo" />
                    <Link to="/" className={cx('logo-text')}>
                        tMovies
                    </Link>
                </div>

                <div className={cx('menu')}>
                    <div className={cx('menu-item')}>
                        <Link to="/" className={cx('menu-item-link')}>
                            Home
                        </Link>
                        <Link to="/" className={cx('menu-item-link')}>
                            About us
                        </Link>
                        <Link to="/" className={cx('menu-item-link')}>
                            Contact us
                        </Link>
                        <Link to="/" className={cx('menu-item-link')}>
                            Term of Services
                        </Link>
                    </div>

                    <div className={cx('menu-item')}>
                        <Link to="/" className={cx('menu-item-link')}>
                            Live
                        </Link>
                        <Link to="/" className={cx('menu-item-link')}>
                            FAQs
                        </Link>
                        <Link to="/" className={cx('menu-item-link')}>
                            Premium
                        </Link>
                        <Link to="/" className={cx('menu-item-link')}>
                            Privacy Policy
                        </Link>
                    </div>

                    <div className={cx('menu-item')}>
                        <Link to="/" className={cx('menu-item-link')}>
                            You must watch
                        </Link>
                        <Link to="/" className={cx('menu-item-link')}>
                            Recent release
                        </Link>
                        <Link to="/" className={cx('menu-item-link')}>
                            Top IMDB
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
