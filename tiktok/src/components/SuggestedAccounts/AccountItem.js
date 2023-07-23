import classNames from "classnames/bind"
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import AccountPreview from "./AccountPreview/AccountPreview";
import { Wrapper as PopperWrapper } from "~/components/Popper";

// import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function AccountItem(){ 
    const renderPreview = (props) =>{
        return (
            <div tabIndex="-1" {...props} >
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <div>
            <Tippy
                interactive = 'true'
                delay={[800,0]}
                placement="bottom"
                offset={[-20,0]}
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                  <img
                        className={cx('account-avatar')}
                        src="https://i.pinimg.com/originals/6c/54/c8/6c54c8002807fdd790aa73f50200a61c.jpg"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('username')}>
                            <strong>Ei_kute</strong>
                            <FontAwesomeIcon className={cx('checkIcon')} icon = {faCheckCircle} />
                        </p>
                        <p className={cx('name')}>
                            Raiden Shogun
                        </p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

export default AccountItem;