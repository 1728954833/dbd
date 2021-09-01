import './index.less'
import React, { useState } from 'react'
import cn from 'classnames'
export interface MenuItem {
    icon?: React.ReactElement
    label: string
    value: string | number | undefined | null
}

export interface IMenuProps {
    title: string
    menus: MenuItem[]
    handleSwitch?: (menu: MenuItem) => void
};

const Menu: React.FC<IMenuProps> = ({ menus, title, handleSwitch }) => {
    const [active, setActive] = useState<MenuItem>()
    const handleActive = (menu: MenuItem) => {
        setActive(menu)
        handleSwitch && handleSwitch(menu)
    }
    return (
        <div>
            <div className="menu-title">{title}</div>
            {
                menus.map(menu => {
                    return <div key={menu.value} className={cn('flex menu-item', {
                        active: menu.value === active?.value
                    })} onClick={() => { handleActive(menu) }}>
                        <span className='mr-1'>{menu.icon}</span>
                        <span>{menu.label}</span>
                    </div>
                })
            }
        </div>
    );
}

export default Menu;

