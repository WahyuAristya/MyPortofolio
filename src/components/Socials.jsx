import React from "react";
import Link from "next/link";

import { FaLinkedinIn, FaMediumM, FaBehance, FaFigma } from "react-icons/fa";


const Socials = [
    {icon : <FaLinkedinIn />, path: ''},
    {icon : <FaMediumM />, path: ''},
    {icon : <FaBehance />, path: ''},
    {icon : <FaFigma />, path: ''},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {Socials.map((item, index)=> {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;