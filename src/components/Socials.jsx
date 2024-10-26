import React from "react";
import Link from "next/link";

import { FaLinkedinIn, FaMediumM, FaGithub, FaGitlab } from "react-icons/fa";


const Socials = [
    {icon : <FaLinkedinIn />, path: 'https://linkedin.com/in/WahyuAristya'},
    {icon : <FaMediumM />, path: 'https://medium.com/@wahyuaristya08'},
    {icon : <FaGithub />, path: 'https://github.com/WahyuAristya'},
    {icon : <FaGitlab />, path: 'https://gitlab.com/WahyuAristya'},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {Socials.map((item, index)=> {
                return (
                    <Link key={index} href={item.path} target="_blank" className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;