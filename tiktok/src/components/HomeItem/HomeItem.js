import classNames from "classnames/bind";
import styles from './HomeItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";
import OnlyIconButton from "~/components/OnlyIconButton/OnlyIconButton";
import { CommentIcon, HeartIcon, PinIcon, ShareIcon } from "~/components/Icons";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const cx = classNames.bind(styles)

function HomeItem({data}){
    return (
        <div className={cx("item")}>
            <img 
                className={cx("avatar")} 
                alt=""
                src={data.user.avatar}
            />

            <div className={cx('ml-12')}>
                {/* header */}
                <div className={cx("header")}>
                    <div className={cx('info')}>
                        <div className={cx('user-info')}>
                            <p className={cx('username')}>{data.user.nickname}</p>
                            
                            {data.user.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                            <p className={cx('name')}>{data.user.nickname}</p>
                        </div>
                        <div className={cx('video-desc')}>
                            <div className={cx('video-cap')}>
                                {data.description}
                            </div>
                            <div className={cx('video-music')}>
                                {data.music}
                            </div>
                        </div>
                    </div>
                    <Button small outline>Follow</Button>
                </div>
                {/* body */}
                <div className={cx("body")}>
                    <div className={cx('video')}>
                        <VideoPlayer data={{
                            poster:data.thumb_url,
                            src: data.file_url,
                            type: data.meta.mime_type
                            }}  />
                    </div>
                    <div className={cx('buttons')}>
                        <div className={cx('button-item')}>
                            <OnlyIconButton icon={<HeartIcon />}/> 
                            <div className={cx('quantity')}>{data.likes_count}</div>
                            <OnlyIconButton icon={<CommentIcon/>}/> 
                            <div className={cx('quantity')}>{data.comments_count}</div>
                            <OnlyIconButton icon={<PinIcon />}/> 
                            <div className={cx('quantity')}>{data.views_count}</div>
                            <OnlyIconButton icon={<ShareIcon />}/> 
                            <div className={cx('quantity')}>{data.shares_count}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeItem;