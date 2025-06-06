  import React from 'react'
  import { Box, Flex, Link, Button, Stack } from '@chakra-ui/react'
  import Logo from './logo'
  import { HStack } from "@chakra-ui/react";

  interface MenuItem {
    link?: string
    onClick?: () => void
  }

  const MenuItems: React.FC<MenuItem> = ({ children, link, onClick }) => (
    <Link
      href={link}
      onClick={onClick}
      mt={[4, 4, 0, 0]}
      mr={'36px'}
      display="block"
      fontWeight="medium"
      fontSize="md"
      cursor="pointer"
      _hover={{ color: '#0D74FF' }}
    >
      {children}
    </Link>
  )

  const Nav = props => {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    return (
      <Flex
        as="nav"
        position="fixed"
        top="0"
        zIndex="999"
        width="100%"
        align="center"
        justify="space-between"
        wrap="wrap"
        paddingX={['1.5em', '1.5em', '1.5em', '15%']}
        paddingY="1.5em"
        bg="rgba(255,255,255,1)"
        color="black"
        boxShadow="md"
        textTransform="uppercase"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>

        <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
          <svg
            fill="#FBA442"
            width="22px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={[
            show ? 'block' : 'none',
            show ? 'block' : 'none',
            'flex',
            'flex'
          ]}
          width={['full', 'full', 'auto', 'auto']}
          marginTop={['20px', '20px', 'auto', 'auto']}
          textAlign="center"
          alignItems="center"
        >
          <MenuItems onClick={() => scrollToSection('home')}>Home</MenuItems>
          <MenuItems onClick={() => scrollToSection('about-us')}>About Us</MenuItems>

          <MenuItems onClick={() => scrollToSection('services')}>Services</MenuItems>
          <MenuItems link="/intake">New clients : Contact Us</MenuItems>

          {/* <MenuItems onClick={() => scrollToSection('contact-us')}>Contact Us</MenuItems> */}




          <Stack direction="row" align="center" marginLeft={20}>
              <Button colorScheme="blue" borderRadius="0">
                  EXISTING CLIENTS: LEAVE A MESSAGE
              </Button>
          </Stack>
        </Box>
      </Flex> 
    )
  }

  export default Nav