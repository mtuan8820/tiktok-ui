import React,{ useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from'./VideoPlayer.module.scss';
import { PauseIcon, PlayIcon, VolumnOffIcon, VolumnOnIcon } from '../Icons';
import OnlyIconButton from '../OnlyIconButton/OnlyIconButton';

const cx = classNames.bind(styles)


function VideoPlayer({data}){
    const [isPlaying,setIsPlaying] = useState(false);
    const [volumeValue,setVolumeValue] = useState(1);
    const videoRef= useRef();

    function handlePlayPause() {
        if(isPlaying){
            videoRef.current.pause();
            setIsPlaying(false);
        }
        else{
            videoRef.current.play();
            setIsPlaying(true);
        }
    }

    const handleMutedButton = () => {
    }
    
    return(
        <div className={cx('wrapper')}>
            <video className={cx('video')}
            autoPlay={false}
            loop={true}
            volume={1}
            ref={videoRef}
            src={data.src}
            />
            <div className={cx('controller')}>
                <OnlyIconButton backgroundTransperent whiteIcon 
                    icon={isPlaying?<PauseIcon/>:<PlayIcon/>} 
                    onClick={handlePlayPause}
                />
                <div className={cx('volume')}>
                    <OnlyIconButton backgroundTransperent whiteIcon
                        className={cx('volume-icon')}
                        icon={!!videoRef.current?.volume?<VolumnOnIcon />:<VolumnOffIcon/>}
                        onClick={handleMutedButton}
                    />
                    <div className={cx('control-volume')}>
                        <input 
                            className={cx('input-volume')} 
                            type='range'
                            min={0}
                            max={1}
                            step={0.1}
                            value={volumeValue}
                            onChange={(e)=>{
                                setVolumeValue(e.target.value);
                                videoRef.current.volume = e.target.value;
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer