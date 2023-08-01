import React,{ useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from'./VideoPlayer.module.scss';


import { PauseIcon, PlayIcon, VolumnOffIcon, VolumnOnIcon } from '../Icons';
import OnlyIconButton from '../OnlyIconButton/OnlyIconButton';

const cx = classNames.bind(styles)

function VideoPlayer({data}){
    const [isPlaying,setIsPlaying] = useState(false);
    const [volumeValue,setVolumeValue] = useState(1);

    const [currentTime, setCurrentTime] = useState([0, 0]); // current time of the video in array. The first value represents the minute and the second represents seconds.
    const [currentTimeSec, setCurrentTimeSec] = useState(0); //current time of the video in secondscl
    const videoRef= useRef();

    useEffect(() => {
        const interval = setInterval(() => {
        const { min, sec } = sec2Min(videoRef.current.currentTime);
        setCurrentTimeSec(videoRef.current.currentTime);
        setCurrentTime([min, sec]);
        }, 100);
        return () => clearInterval(interval);
    }, [isPlaying]);

    const sec2Min = (sec) => {
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        return {
          min: min,
          sec: secRemain,
        };
    };

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

    const handleOnTimeUpdate = () => {
    }
    
    return(
        <div className={cx('wrapper')}>
            <video className={cx('video')}
            onTimeUpdate={handleOnTimeUpdate}
            autoPlay={false}
            loop={true}
            volume={1}
            ref={videoRef}
            src={data.src}
            />
            <div className={cx('controll-buttons')}>
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
            <div className={cx('time')}>
                <input 
                    className={cx('timeline')}
                    type='range'
                    min={0}
                    max={data.duration}
                    value={currentTimeSec}
                    onChange={(e) => {
                        videoRef.current.currentTime = e.target.value;
                    }}
                />
                <span className={cx('time-current')}>
                    {currentTime[0]>9?currentTime[0]:`0${currentTime[0]}`}:{ currentTime[1]>9?currentTime[1]:`0${currentTime[1]}`} 
                    <span>/</span>
                    {data.duration_string.length>5?data.duration_string:`0${data.duration_string}`}  
                </span>
            </div>
        </div>
    )
}

export default VideoPlayer