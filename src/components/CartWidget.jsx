import React from 'react'
import { FaOpencart } from "react-icons/fa";
import { Button } from '@chakra-ui/react'
const CartWidget = () => {
  return (
<Button colorScheme='teal' size='md' variant='outline'>
        <FaOpencart />
            <p> 5</p>
        </Button>
  )
}

export default CartWidget