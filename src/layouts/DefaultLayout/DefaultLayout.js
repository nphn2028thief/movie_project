import classnames from 'classnames/bind';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';

const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
