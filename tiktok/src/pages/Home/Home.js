import { useEffect, useState } from "react";
import HomeItem from "~/components/HomeItem/HomeItem";
import { getListVideo } from "~/services/getListVideoService";

import classNames from "classnames/bind";
import styles from './Home.module.scss'

const cx = classNames.bind(styles);

function Home(){
    const [contentData,setContentData] = useState([])
    const [page,setPage] = useState(1);
    useEffect(()=>{
        const fetchApi = async () => {
            const result = await getListVideo('for-you',page)
            setContentData((prev) => [...prev,...result]);
        };
        fetchApi();
    },[page])
    useEffect(()=>{
        function handleScroll(){
            if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
                setPage((page) => page + 1);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    },[])
    return(
        
        <div className={cx('wrapper')}>
            {
                contentData.map((item,index)=>(
                    <HomeItem data={item} key={index} />
                ))
            }
        </div>
    )
}

export default Home;