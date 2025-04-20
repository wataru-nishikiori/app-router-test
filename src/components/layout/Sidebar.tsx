'use client';

import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import Link from 'next/link';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <List subheader={<ListSubheader>事前登録</ListSubheader>}>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/auditions">
            <ListItemText primary="オーディション情報" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/auditions/form">
            <ListItemText primary="エントリーフォーム" />
          </ListItemButton>
        </ListItem>
      </List>

      <List subheader={<ListSubheader>設定</ListSubheader>}>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/users">
            <ListItemText primary="参加ユーザー" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
