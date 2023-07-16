import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-kujou-sara/sticker_1.png?00d37622b88b0f2f0995f6d5197abd83&d=200x200" alt="nothing" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hello</span>
                    {<FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>asdasdasd</span>
            </div>
        </div>
    );
}


export default AccountItem;