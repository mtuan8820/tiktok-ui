import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "~/components/Popper";
import classNames from "classnames/bind"
import styles from './VideoOptions.module.scss'
import OnlyIconButton from '../OnlyIconButton/OnlyIconButton';
import { EllipsisIcon, FlagIcon, HeartCrackIcon } from '../Icons';
import Menu from '~/layout/components/Sidebar/Menu/Menu';
import { MenuItem } from '~/layout/components/Sidebar/Menu';



const cx = classNames.bind(styles);

function VideoOptions(){
    const renderOptions = (props) =>{
        return (
            <div tabIndex="-1" {...props} className={cx('wrapper')} >
                <PopperWrapper>
                    <Menu className={cx('menu')}>
                        <MenuItem to='dontcare' className={cx('option')} title="Không quan tâm" icon={<HeartCrackIcon/>}/>
                        <MenuItem to='report' className={cx('option')} title="Báo cáo" icon={<FlagIcon />}/>
                    </Menu>
                </PopperWrapper>
            </div>
        )
    }

    return(
        <div>
            <Tippy
                interactive = 'true'
                placement='right'
                delay={[100,100]}
                render={renderOptions}
                popperOptions={{
                    modifiers: [
                      {
                        name: 'flip',
                        options: {
                            fallbackPlacements: []
                        },
                      },
                    ],
                }}
            >
                <div>
                    <OnlyIconButton backgroundTransperent whiteIcon icon={<EllipsisIcon />} />
                </div>
            </Tippy>
        </div>
    )
}

export default VideoOptions