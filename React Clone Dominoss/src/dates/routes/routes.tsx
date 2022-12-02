import {FaPizzaSlice} from 'react-icons/fa'
import {GiFamilyHouse} from 'react-icons/gi'
import {BsClipboardCheck} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'

export const links = [
    {   
        id: 0,
        link: '/',
        title: 'Products',
        img: <FaPizzaSlice/>
    },
    {
        id: 1,
        link: '/restaraunts',
        title: 'Restaraunts',
        img: <GiFamilyHouse/>
    },
    {
        id: 2,
        link: '/orders',
        title: 'Orders',
        img: <BsClipboardCheck/>
    },
    {
        id: 3,
        link: '/user',
        title: 'User',
        img: <FaUserAlt/>
    },
]