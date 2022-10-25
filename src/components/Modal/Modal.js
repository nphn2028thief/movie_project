import classNames from 'classnames/bind';

import Portal from '../Portal';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ isOpen = false, children }) {
    if (!isOpen) return null;

    return (
        <Portal>
            <div className={cx('modal')}>
                <div className={cx('container')}>{children}</div>
            </div>
        </Portal>
    );
}

export default Modal;
