import classNames from "classnames/bind"
import styles from './AccountPreview.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

function AccountPreview(){
    return(
    <div className={cx('wrapper')} >
            <div className={cx('header')}>    
                <img 
                    className={cx('avatar')}
                    src="https://i.pinimg.com/200x150/03/fe/31/03fe31dfb42991dae86f9a326b6eaaec.jpg"
                    alt=""
                />
                <div><Button primary small className={cx('follow-btn')}> Follow</Button></div>
            </div>
            <div className={cx('body')}>
                <p className={cx('username')}>
                    <strong>Ei_kute</strong>
                    <FontAwesomeIcon className={cx('checkIcon')} icon = {faCheckCircle} />
                </p>
                <p className={cx('name')}>
                    Raiden Shogun
                </p>
                <p className={cx('statistic')}>
                    <strong className={cx('value')}>7M</strong>
                    <span className={cx('label')}>Followers</span>

                    <strong className={cx('value')}>11M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
    </div>
    )
}

export default AccountPreview