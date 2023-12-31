import {Dispatch, FC} from "react";
import Input, {InputStyle} from "../../ui/input/Input";
import {RiSettings4Line} from "react-icons/ri";
import cls from './Header.module.scss'
import {MdOutlineNotificationsActive, MdOutlineNotificationsNone} from "react-icons/md";
import {FiSearch} from "react-icons/fi";
import avatar from '../../../assets/avatars/avatar.png'

interface HeaderProps {
    setSearchQuery: Dispatch<string>
}

const Header: FC<HeaderProps> = ({setSearchQuery}) => {
    return (
        <div className={cls.header}>
            <div className={cls.search}>
                <FiSearch/>
                <Input onChange={setSearchQuery} placeholder={'Search'} type={'text'} inputStyle={InputStyle.GRAY}/>
            </div>
            <div className={cls.headerController}>

                <div className={cls.profile}>
                    <RiSettings4Line/>
                    {'1' === '1' ?
                        <MdOutlineNotificationsNone/>
                        :
                        <MdOutlineNotificationsActive/>
                    }
                    <div className={cls.avatar}>
                        <img width={60} src={avatar} alt={'avatar'}/>
                    </div>
                    <h3 className={cls.profileName}>Alison Haper</h3>
                </div>
            </div>
        </div>
    )
}

export default Header
