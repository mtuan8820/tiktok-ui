import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import {Wrapper as PopperWrapper} from '~/components/Popper'
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

const defaultFn = () => {}

function Menu({children, items = [], hideOnClick = false, onChange = defaultFn}){
    const [submenu, setSubmenu] = useState([{data: items}])
    const current = submenu[submenu.length-1]

    const renderItems = () => {
        
        return current.data.map((item,index) => {
            const isParent = !!item.children;
            return <MenuItem 
                key={index} 
                data ={item} 
                onclick={() => {
                    if(isParent){
                        setSubmenu(prev => [...prev,item.children])
                    }
                    else {
                        onChange(item);
                    }
                }}
            />
        })
    }
    

    return ( 
        <Tippy
            delay={[0,500]}
            interactive = 'true'
            offset={[10,10]}
            placement='bottom-end'
            hideOnClick={hideOnClick}
            render={(attrs) =>(
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {submenu.length > 1 && <Header title={current.title} onBack={() =>{
                            setSubmenu( prev => prev.slice(0,prev.length-1))
                        }} />}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setSubmenu(prev => prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}
export default Menu;