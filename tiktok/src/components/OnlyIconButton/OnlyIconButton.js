import classNames from 'classnames/bind'
import styles from './OnlyIconButton.module.scss'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

function OnlyIconButton(
    {   
        
        className,
        to,
        href,
        onClick,
        icon,
        backgroundTransperent=false,
        whiteIcon=false,
        ...passProps
    }
    ){
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    };

    const classes = cx('wrapper',{
        [className]:className,
        backgroundTransperent,
        whiteIcon,
    })

    if(to){props.to = to; Comp = 'Link'}
    else if(href){props.href = href; Comp = 'a'}
    return (
        <Comp className={classes} {...props}>
            <span className={cx('icon')}>{icon}</span>
        </Comp>
    )
}

OnlyIconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default OnlyIconButton