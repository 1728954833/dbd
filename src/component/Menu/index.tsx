import './index.less'

export interface MenuItem {
    icon?: string
    label: string
    value: string | number | undefined | null
}

export interface IMenuProps {
    title: string
    menus: MenuItem[]
};

const Menu: React.FC<IMenuProps> = ({ menus, title }) => {
    return (
        <div>
            <div>{title}</div>
            {
                menus.map(menu => {
                    return <div>{menu.label}</div>
                })
            }
        </div>
    );
}

export default Menu;

