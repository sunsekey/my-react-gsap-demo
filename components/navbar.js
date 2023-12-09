'use client'

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import style from './navbar.module.css'

export default function Navbar() {
    const elementRef = useRef(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollDown, setScrollDown] = useState(true);

    useEffect(() => {
        const element = elementRef.current;

        const handleScroll = () => {
            const currentScrollTop = element.scrollTop;
            console.log(currentScrollTop, lastScrollTop)
            if (currentScrollTop > lastScrollTop) {
                setScrollDown(true);
            } else if (currentScrollTop < lastScrollTop) {
                setScrollDown(false);
            }
            setLastScrollTop(currentScrollTop);
            
            if(scrollDown && currentScrollTop != 0){
                gsap.to(element, { y: currentScrollTop * 1 - 100, duration:1});
            }else{
                gsap.to(element, { y: currentScrollTop * 1 , duration:1});
            }

        };

        if (element) {
            element.addEventListener('scroll', handleScroll);
        }
    
        // 清理函数
        return () => {
            if (element) {
                element.removeEventListener('scroll', handleScroll);
            }
        };
    }, [lastScrollTop, scrollDown]); // 将 lastScrollTop 加入依赖数组

    return (
        <>
            <div className={style.navBar} ref={elementRef}>
                <nav>
                    <ul className={style.navList}>
                        <li>
                            <div>
                                <a><span>WORK</span></a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a><span>INFO</span></a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a><span>CONTACT</span></a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}