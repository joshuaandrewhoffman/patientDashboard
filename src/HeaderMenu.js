import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const HeaderMenu = () => (
    <Menu>
        <Menu.Item position='right'>
            <a href=''>josh.hoffman@example.com</a>
        </Menu.Item>

        <Menu.Item>
            <Button>Log out</Button>
        </Menu.Item>
    </Menu>
)

export default HeaderMenu
