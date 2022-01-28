import React from 'react';
import * as CgIcons from 'react-icons/cg';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/user',
        icon: <CgIcons.CgProfile />,
        className: 'nav-text'
    }
]