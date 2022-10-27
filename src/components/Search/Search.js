import { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ keywordData, handleChange }) {
    return (
        <div className={cx('wrapper', 'section', 'mb-2')}>
            <input
                className={cx('search-input')}
                type="text"
                placeholder="Search keyword here!"
                value={keywordData}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

export default memo(Search);
