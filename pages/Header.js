import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

import banner from "@/public/banner.jpg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close
    const head = ["About", "Career", "Menu", "Contact Us"];

    return (
        <>
            <div className="head">
                <div className="container header">
                    <div className="toggle-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={isMenuOpen ? "menu open" : "menu"}> 
                    <Link href={'/'}>Home</Link>
                        {head.map((item, index) => (
                            <li key={index}>
                                <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}> {/* Link to each page */}
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="banner">
                <Image src={banner} alt="banner"></Image> 
            </div>

            <div className="container">
                
            <i class="fa-solid fa-cart-shopping cart"></i>
           </div>
        </>
    );
};

export default Header;
