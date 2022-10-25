import classNames from 'classnames/bind';

import styles from './TrailerModal.module.scss';
import Modal from '../Modal';

const cx = classNames.bind(styles);

function TrailerModal({ id, modalIsOpen, closeModal }) {
    return (
        <Modal isOpen={modalIsOpen}>
            <div id={id} className={cx('content')}>
                Modal
            </div>
        </Modal>
    );
}

export default TrailerModal;
