import classNames from 'classnames/bind';
import { UilMultiply } from '@iconscout/react-unicons';

import Portal from '../Portal';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ isOpen = false, children }) {
    if (!isOpen) return null;

    return (
        <Portal>
            <div className={cx('modal')}>
                <div className={cx('container')}>
                    <div className={cx('close-btn')}>
                        <UilMultiply />
                    </div>
                    {children}
                </div>
            </div>
        </Portal>
    );
}

export default Modal;
