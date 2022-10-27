import { memo } from 'react';
import { UilSearch } from '@iconscout/react-unicons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ keywordData, handleChange }) {
    return (
        <div className={cx('wrapper', 'section', 'mb-2')}>
            <div className={cx('content')}>
                <input
                    className={cx('search-input')}
                    type="text"
                    placeholder="Search keyword here!"
                    value={keywordData}
                    onChange={(e) => handleChange(e)}
                />
                <span className={cx('icon')}>
                    <UilSearch size="20" />
                </span>
            </div>
        </div>
    );
}

export default memo(Search);
