import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles);

function MenuItem({title, to, icon ,activeIcon ,className}){
    return(
        <NavLink to={to} className={(nav) => cx(className,'menu-item' ,{active: nav.isActive})}>
            <span className={cx('menu-icon')}>{icon}</span>
            <span className={cx('menu-active-icon')}>{activeIcon}</span>
            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node,
    title: PropTypes.string.isRequired,
    to: PropTypes.string
}

export default MenuItem