import classNames from "classnames/bind";
import styles from './HomeItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";
import OnlyIconButton from "~/components/OnlyIconButton/OnlyIconButton";
import { CommentIcon, HeartIcon, PinIcon, ShareIcon } from "~/components/Icons";

const cx = classNames.bind(styles)

function HomeItem(){
    return (
        <div className={cx("item")}>
            <img 
                className={cx("avatar")} 
                alt=""
                src="https://i.pinimg.com/564x/b4/2a/ea/b42aeac8b64fece1a4c0be331af13c6d.jpg"
            />

            <div className={cx('ml-12')}>
                {/* header */}
                <div className={cx("header")}>
                    <div className={cx('info')}>
                        <div className={cx('user-info')}>
                            <p className={cx('username')}>Raiden Shogun</p>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                            <p className={cx('name')}>raiden cute</p>
                        </div>
                        <div className={cx('video-desc')}>
                            <div className={cx('video-cap')}>
                                EI dances with the trend
                            </div>
                            <div className={cx('video-hashtag')}>
                                #genshinimpact #ei #raidenshogun #dance #CapCut
                            </div>
                            <div className={cx('video-music')}>
                                Sea Of Problems - Glichery
                            </div>
                        </div>
                    </div>
                    <Button primary>Follow</Button>
                </div>
                {/* body */}
                <div className={cx("body")}>
                    <div className={cx('video')}>
                        <img
                            className={cx('video-thumbnail')}
                            src="https://pbs.twimg.com/media/Fq-_1WMaMAAjLfJ?format=jpg&name=900x900"
                            alt=""
                        />
                    </div>
                    <div className={cx('buttons')}>
                        <div className={cx('button-item')}>
                            <OnlyIconButton icon={<HeartIcon />}/> 
                            <div className={cx('quantity')}>477.5K</div>
                            <OnlyIconButton icon={<CommentIcon/>}/> 
                            <div className={cx('quantity')}>477.5K</div>
                            <OnlyIconButton icon={<PinIcon />}/> 
                            <div className={cx('quantity')}>477.5K</div>
                            <OnlyIconButton icon={<ShareIcon />}/> 
                            <div className={cx('quantity')}>477.5K</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeItem;