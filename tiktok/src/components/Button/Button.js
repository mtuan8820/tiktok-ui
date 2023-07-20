import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import PropTypes from 'prop-types'
const cx = classNames.bind(styles)

function Button(
    {
        className,
        to,
        href,
        disabled = false, 
        rounded = false,
        primary = false, 
        outline = false, 
        underline = false, 
        small = false, 
        large = false, 
        children, 
        leftIcon,
        rightIcon,
        onClick, 
        ...passProps
    }){
        let Comp = 'button'
        const props = {
            onClick,
            ...passProps
        };

        if(to){props.to = to; Comp = 'Link'}
        else if(href){props.href = href; Comp = 'a'}

        const classes = cx('wrapper',{
            [className]:className,
            disabled,
            rounded,
            primary, 
            outline,
            small,
            large,
            underline
        })
        

        if(disabled){
            Object.keys(props).forEach((key) => {
                if(key.startsWith('on') && typeof[key] === 'function')
                    delete props[key];
            })
        }

        

        return(
            <Comp className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>} 
            </Comp>
        );
    }

Button.propsTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    underline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button