import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem(){
    return( <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-kujou-sara/sticker_1.png?00d37622b88b0f2f0995f6d5197abd83&d=200x200" />
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>
                Kujou Sara
                </span>
                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
            </p>
            <span className={cx('username')}>kujousara</span>
        </div>
    </div> ) 
}

export default AccountItem;