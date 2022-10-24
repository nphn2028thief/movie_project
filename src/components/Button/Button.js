import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    btn = false,
    primary = false,
    outline = false,
    small = false,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const _props = {
        onClick,
        ...passProps,
    };

    if (to) {
        _props.to = to;
        Component = Link;
    } else if (href) {
        _props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        btn,
        primary,
        outline,
        small,
    });

    return (
        <Component className={classes} {..._props}>
            <span className={cx('title')}>{children}</span>
        </Component>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
