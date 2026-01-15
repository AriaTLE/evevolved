import React from 'react';
import './NavBar.module.css';
import {Text} from "@mantine/core";
// import {JoinUs} from "@/components/JoinUs/JoinUs";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                        EveVolved
                    </Text>
                </a>
            </div>
            <div className="navbar-center">

            </div>
            <div className="navbar-right">
              join us
                {/*<JoinUs />*/}
            </div>
        </nav>
    );
};

export default NavBar;
