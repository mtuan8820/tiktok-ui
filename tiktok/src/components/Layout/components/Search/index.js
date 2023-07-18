import styles from './Search.module.scss'
import classNames from 'classnames/bind'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '~/hooks';
import { ManifyingGlassIcon } from '~/components/icons';
const cx = classNames.bind(styles);

function Search () { 
    const [searchValue,setSearchValue] = useState('');
    const [searchResult,setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounce = useDebounce(searchValue,500)

    const inputRef = useRef();

    useEffect(() => {
        if(!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch(() =>{
                setLoading(false)
            })
    },[debounce])

    const handleClearInput = () => {setSearchValue('');inputRef.current.focus()}

    return (
    <HeadlessTippy
        interactive = 'true'
        visible = {showSearchResult && searchResult.length > 0 }
        onClickOutside={() => setShowSearchResult(false)}
        render={attrs =>(
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result}/>
                        ) )}
                        
                        
                    </PopperWrapper>
                </div>
        )}
    >
        <div className={cx('search')}>
            <input 
                ref={inputRef}
                value={searchValue}
                placeholder='Search accounts and videos' 
                spellCheck={false} 
                onChange={e => setSearchValue(e.target.value)} 
                onFocus={() => setShowSearchResult(true)}
            />
            {
                !!searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handleClearInput}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )
            }
            
            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            
            <button className={cx('search-btn')}>
                <ManifyingGlassIcon />
            </button>
        </div>
    </HeadlessTippy>
)}

export default Search