import React, { memo, useCallback, useEffect, useState } from 'react';
import { FacebookSvgIcon } from './FacebookSvgIcon';
import { InstagramSvgIcon } from './InstagramSvgIcon';
import { TwitterSvgIcon } from './TwitterSvgIcon';
import { MenuSvgIcon } from './MenuSvgIcon';
import { CloseMenuSvgIcon } from './CloseMenuSvgIcon';
import { ExpandMenuSvgIcon } from './ExpandMenuSvgIcon';
import { Top50GastropubsSvgLogo } from './Top50GastropubsSvgLogo';
import { useWindowSize } from './../hooks/useWindowSize';
import { useScrollPosition } from '../hooks/useScrollPosition';

const menuItemsLabels = {
    list: 'The List',
    recipes: 'Recipes',
    chefs: 'Chefs',
    stories: 'Stories',
    findMyGastropub: 'Find my Gastropub',
    sponsors: 'Sponsors',
    theEvent: 'The Event',
    howTheListIsCreated: 'How the list is created',
    about: 'About',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    follow: 'Follow'
}

const MenuItem = ({label, linkUrl}) => {
    return (
        <li className="menu-item">
            <a href={linkUrl}>
                {label}
            </a>
        </li>
    );
};

const MenuItemContainer = ({children, linkUrl}) => {
    return (
        <li className="menu-item">
            <a href={linkUrl}>
                {children}
            </a>
        </li>
    );
};

const NestedMenuItem = ({children, label, linkUrl, onClickHandler, menuId, selectedMenuId, subMenuClasses, width}) => {

    const parentClasses = `menu-item menu-item-has-children${menuId === selectedMenuId ? ' active' : ''}`;

    const subMenuClassesList = `sub-menu${subMenuClasses ? ' ' + subMenuClasses : ''}`;

    const collapsedMenu = width < 1375;

    return (
        <li className={parentClasses} data-menuid={menuId}>
            <a href={linkUrl} data-toggle="sub-menu" onClick={onClickHandler}>
                {label}
                <i className="expand">
                    <ExpandMenuSvgIcon />
                </i>
            </a>
            {collapsedMenu ? (
                <div className="sub-menu-wrapper">
                    <ul className={subMenuClassesList}>
                        {children}
                    </ul>
                </div>
            ) : (
                <ul className={subMenuClassesList}>
                    {children}
                </ul>
            )}
        </li>
    );
};

const Header = memo(({ catchNavMenuHandler }) => {

    const [openMenu, setOpenMenu] = useState(false);
    const { width } = useWindowSize();
    const scrollPosition = useScrollPosition();

    const [headerClass, setHeaderClass] = useState('header');

    const [openSubMenu, setOpenSubMenu] = useState('');

    const handleOpenMenu = () => {
        catchNavMenuHandler();
        setOpenMenu(true);
    }

    const handleCloseMenu = () => {
        catchNavMenuHandler();
        setOpenMenu(false);
    }

    const handleOpenSubMenu = (e) => {
        e.preventDefault();
        if (width <= 1375) {
            const parent = e.target.closest('li');
            const val = parent.dataset.menuid;
            if (openSubMenu === val) {
                setOpenSubMenu('');
            } else {
                setOpenSubMenu(val);
            }
        }
    }

    const handleCloseSubMenus = (e) => {
        setOpenSubMenu('');
    };

    const handelFixHeader = useCallback(() => {
            setHeaderClass('header fixed');
            window.document.body.classList.add('fixed');
    }, []);

    const handelUnFixHeader = useCallback(() => {
        setHeaderClass('header');
        window.document.body.classList.remove('fixed');
    }, []);

    useEffect(() => {
        if (width >= 1375) {
            if (scrollPosition > 200) {
                handelFixHeader();
            } else {
                handelUnFixHeader();
            }
            handleCloseSubMenus();
        }
        if (width > 1375) {
            handleCloseSubMenus();
        }
    }, [handelFixHeader, handelUnFixHeader, scrollPosition, width]);

    const isActiveClass = `${openMenu ? ' active' : ''}`;
    const overlayClassList = `overlay${isActiveClass}`;
    const navbarClasslist = `navbar${isActiveClass}`;

    return (
        <header className={headerClass}>

            <section className="row">
                <a href="/#" className="brand" title="Top 50 Gastropubs">
                    <Top50GastropubsSvgLogo />                    
                </a>
                <button type="button" className="opened-menu" onClick={handleOpenMenu}>
                    <MenuSvgIcon />
                </button>
                <div className={overlayClassList} onClick={handleCloseMenu}></div>
                <nav className={navbarClasslist}>
                    <button type="button" className="closed-menu" onClick={handleCloseMenu}> 
                        <CloseMenuSvgIcon />
                    </button>
                    <ul className="menu">
                        <li className="menu-item menu-logo">
                            <a href="/#">
                                <Top50GastropubsSvgLogo width={248} height={35} />
                            </a> 
                        </li>
                        <MenuItem label={menuItemsLabels.list} linkUrl="/#" />
                        <MenuItem label={menuItemsLabels.recipes} linkUrl="/#" />
                        <MenuItem label={menuItemsLabels.chefs} linkUrl="/#" />
                        <MenuItem label={menuItemsLabels.stories} linkUrl="/#" />
                        <MenuItem label={menuItemsLabels.findMyGastropub} linkUrl="/#" />
                        <MenuItem label={menuItemsLabels.sponsors} linkUrl="/#" />
                        <NestedMenuItem
                            label={menuItemsLabels.theEvent}
                            linkUrl="/#"
                            menuId='1'
                            width={width}
                            selectedMenuId={openSubMenu}
                            onClickHandler={handleOpenSubMenu}
                        >
                            <MenuItem label={menuItemsLabels.howTheListIsCreated} linkUrl="/#" />
                        </NestedMenuItem>
                        <NestedMenuItem
                            label={menuItemsLabels.about}
                            linkUrl="/#"
                            menuId='2'
                            width={width}
                            selectedMenuId={openSubMenu}
                            onClickHandler={handleOpenSubMenu}
                        >
                            <MenuItem label={menuItemsLabels.aboutUs} linkUrl="/#" />
                            <MenuItem label={menuItemsLabels.contactUs} linkUrl="/#" />
                        </NestedMenuItem>
                        <NestedMenuItem
                            label={menuItemsLabels.follow}
                            linkUrl="/#"
                            menuId='3'
                            width={width}
                            selectedMenuId={openSubMenu}
                            onClickHandler={handleOpenSubMenu}
                            subMenuClasses="social"
                        >
                            <MenuItemContainer linkUrl="/#">
                                <FacebookSvgIcon />
                            </MenuItemContainer>
                            <MenuItemContainer linkUrl="/#">
                                <InstagramSvgIcon />
                            </MenuItemContainer>
                            <MenuItemContainer linkUrl="/#">
                                <TwitterSvgIcon />
                            </MenuItemContainer>
                        </NestedMenuItem>
                    </ul>
                </nav>
            </section>

        </header>
    );
});

export { Header };