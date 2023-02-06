import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Flex, Spacer, Box, Heading, ButtonGroup } from '@chakra-ui/react'

const NavBar = () => {
  return (
<Menu isLazy> 
        <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
            <Heading size='md'>Coder Pet Shop</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
            <MenuButton>
                Categories
            </MenuButton>
            <MenuList>
                <MenuItem>Toys</MenuItem>
                <MenuItem>Clothes</MenuItem>
                <MenuItem>Food</MenuItem>
            </MenuList>
        </ButtonGroup>
        <Box w='100px'>
            <CartWidget />
        </Box>
        <Spacer />
        </Flex>
    </Menu>
  )
}

export default NavBar