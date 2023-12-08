'use client'

import { useEffect } from 'react';
import { gsap } from 'gsap';
import style from './navbar.module.css'

export default function Navbar() {
    useEffect(() => {
        let lastScrollTop = 0;
        console.log("c")
        const handleScroll = () => {
          let st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop) {
            console.log("a")
            // 向下滚动
            gsap.to(".navbar", { top: "-100px", duration: 0.5 });
          } else {
            console.log("b")
            // 向上滚动
            gsap.to(".navbar", { top: "0px", duration: 0.5 });
          }
          lastScrollTop = st <= 0 ? 0 : st;
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return (
        <>
            <div>
                <nav className={style.navbar}>
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