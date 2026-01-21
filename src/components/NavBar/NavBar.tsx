import React, { useState } from 'react';
import { Burger, Text } from '@mantine/core';
import { JoinUs } from '@/components/JoinUs/JoinUs';
import styles from './NavBar.module.css';

// import {JoinUs} from "@/components/JoinUs/JoinUs";

const NavBar = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        {/*<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />*/}

        <a href="/" className="logo">
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            EveVolved
          </Text>
        </a>
      </div>
      <div className="navbar-center" />
      <div className="navbar-right">
        join us
        {/*<JoinUs/>*/}
      </div>
    </nav>
  );
};

export default NavBar;
