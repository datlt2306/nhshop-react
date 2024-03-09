import React from "react";

const Header = () => {
    return (
        <header>
            <div className="container">
                <a href="#">Logo</a>
                <nav className="main-menu">
                    <ul className="main-menu__list">
                        <li className="main-menu__item">
                            <a href="" className="main-menu__link">
                                menu 1
                            </a>
                        </li>
                        <li className="main-menu__item">
                            <a href="" className="main-menu__link">
                                menu 1
                            </a>
                        </li>
                        <li className="main-menu__item">
                            <a href="" className="main-menu__link">
                                menu 1
                            </a>
                        </li>
                        <li className="main-menu__item">
                            <a href="" className="main-menu__link">
                                menu 1
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="block">
                    <div className="user">
                        <span>User</span>
                    </div>
                    <div className="search">
                        <span>User</span>
                    </div>
                    <div className="wishlist">
                        <span>Wishlist</span>
                    </div>
                    <div className="cart">
                        <span>Wishlist</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
