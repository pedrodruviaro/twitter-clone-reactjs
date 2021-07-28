import React from 'react'
import styled from 'styled-components'
import { BsHouseDoor, BsHash, BsBell, BsEnvelope, BsBookmark, BsCardText, BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const Menu = styled.section`
    grid-area: menu;
    background-color: lightblue;
`

export default function index() {

    const menuLinks = [
        {
            label: "Home",
            icon: <BsHouseDoor />,
        },
        {
            label: "Explore",
            icon: <BsHash />,
        },
        {
            label: "Notifications",
            icon: <BsBell />,
        },
        {
            label: "Messages",
            icon: <BsEnvelope />,
        },
        {
            label: "Bookmarks",
            icon: <BsBookmark />,
        },
        {
            label: "Lists",
            icon: <BsCardText />,
        },
        {
            label: "Profile",
            icon: <BsPerson />,
        },
        {
            label: "More",
            icon: <CgMoreO />,
        },
    ]

    return (
        <Menu>
            LOGO TWITTER

            <ul>
                {menuLinks.map((link, i) => (
                    <li key={i}>
                        {link.icon}
                        <a href="#">{link.label}</a>
                    </li>
                ))}
            </ul>

            BOTAO
        </Menu>
    )
}
