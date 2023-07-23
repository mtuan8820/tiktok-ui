import classNames from "classnames/bind"
import styles from "./Sidebar.module.scss"
import config from "~/configs"
import Menu,{MenuItem} from './Menu'
import { GroupUserIcon, GroupUserIconActive, HomeIcon, HomeIconActive, LiveIcon, LiveIconActive } from "~/components/Icons"
import SuggestedAccounts from "~/components/SuggestedAccounts/SuggestedAccounts"

const cx = classNames.bind(styles)

function Sidebar(){
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title ="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon = {<HomeIconActive/>} />
                <MenuItem title ="For following" to={config.routes.following} icon={<GroupUserIcon />} activeIcon = {<GroupUserIconActive/>}  />
                <MenuItem title ="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon = {<LiveIconActive/>} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    )
}
export default Sidebar