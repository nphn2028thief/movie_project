import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';

const navMenu = [
    {
        id: 1,
        name: 'Home',
        path: '/',
    },
    {
        id: 2,
        name: 'Movies',
        path: '/movie',
    },
    {
        id: 3,
        name: 'TV Series',
        path: '/tv',
    },
];

const cx = classNames.bind(styles);

function Header() {
    const headerRef = useRef();
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                headerRef.current.style.backgroundImage = 'linear-gradient(to top, #0f0f0f, #000)';
            } else {
                headerRef.current.style.backgroundImage = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const active = navMenu.findIndex((e) => e.path === pathname);

    return (
        <div ref={headerRef} className={cx('wrapper')}>
            <div className={cx('container', 'header-container')}>
                <div className={cx('logo')}>
                    <img src={images.logo} className={cx('logo-image')} alt="logo" />
                    <Link to="/" className={cx('logo-text')}>
                        tMovies
                    </Link>
                </div>

                <ul className={cx('nav-menu')}>
                    {navMenu.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={item.id === active + 1 ? cx('nav-menu-item', 'active') : cx('nav-menu-item')}
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
