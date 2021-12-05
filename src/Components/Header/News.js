import clsx from 'clsx';
import { useEffect, useState } from 'react';
import style from './news.module.css';



const News = () => {
    const data = [
        'FREE SHIPPING VỚI HÓA ĐƠN TỪ 800K!!!!!!!!!!!!',
        'HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH',
        'BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE'];
    const [news, setNews] = useState(data[0]);

    useEffect(() => {
        const arr = [
            'FREE SHIPPING VỚI HÓA ĐƠN TỪ 800K!!!!!!!!!!!!',
            'HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH',
            'BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE'];
        setInterval(() => {
            setNews((prev) => arr.indexOf(prev) === arr.length - 1 ? arr[0] : arr[arr.indexOf(prev) + 1]);
        }, 6000);

    }, [])

    function handlePreviousdButton() {
        setNews(prev => data.indexOf(prev)===0 ? data[data.length-1] : data[data.indexOf(prev)-1])
    }
    function handleNextdButton() {
        setNews(prev => data.indexOf(prev)===data.length-1 ? data[0] : data[data.indexOf(prev)+1])
    }

    return (
        <>
            <div className={clsx(style.space_news)}>
                <div className={clsx(style.slick_news)}>
                    <button onClick={handlePreviousdButton} className={clsx(style.slick_prev, style.button_slick)}></button>
                    <div className={clsx(style.news, { [style.slick_left]: false })}>{news}</div>
                    <button onClick={handleNextdButton} className={clsx(style.slick_next, style.button_slick)}></button>
                </div>
            </div>
        </>
    )
}

export default News;