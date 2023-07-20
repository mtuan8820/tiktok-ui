import classNames from "classnames";
import {useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from './Image.module.scss'
import PropTypes from 'prop-types'

const Image = forwardRef(({src, alt,className,fallback:customFallback = images.noImage,...props},ref) => {
    const [fallback,setFallback] = useState('')

    const handleError = () => {
        setFallback(customFallback)
    }

    return (
        <img
            className={classNames(className, styles.wrapper)}
            src={fallback || src}
            alt={alt}  
            ref ={ref}
            onError={handleError}
            {...props}
        />
    );
})

Image.propTypes = {
    src: PropTypes.string, 
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string
}

export default Image;