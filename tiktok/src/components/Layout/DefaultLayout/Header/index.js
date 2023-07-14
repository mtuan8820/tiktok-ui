import styles from './Header.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function Header(){
    return (
        <Header className={cx('wrapper')}>
            <div className={cx('inner')}>

            </div>
        </Header>
    )
}
export default Header
