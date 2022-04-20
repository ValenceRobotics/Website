import { Box, Flex, Text, Img } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'
import { motion } from "framer-motion"
import Logo from "../../assets/logo_dark.png"

export const Navbar = (props) => (
    <Box bg="black" color="white" py="3" position="sticky" top="0" zIndex="100" >
        <Box as="header" height="16" position="relative">
            <Box
                height="100%"
                // mx="auto"
                px={{
                    base: '8',
                    md: '8',
                }}
                pe={{
                    base: '8',
                    md: '8',
                }}
            >
                <Flex
                    as="nav"
                    aria-label="Site navigation"
                    align="center"
                    justify="space-between"
                    height="100%"
                >
                    <motion.a href="/" whileHover={{ scale: 1.1 }}>
                        <Img
                            src={Logo}
                            h="3rem"
                            display="inline"
                            mr="3"
                            mt="-1"
                        />
                        <Text
                            className="font-heading"
                            as="h1"
                            fontSize="3xl"
                            fontWeight="extrabold"
                            maxW="48rem"
                            display="inline"
                            color="#F79B4C"
                            fontFamily={['Orbitron', 'sans-serif']}
                        >Valence</Text>
                        <Text
                            className="font-heading"
                            as="h1"
                            fontSize="3xl"
                            fontWeight="extrabold"
                            maxW="48rem"
                            display="inline"
                            fontFamily={['Orbitron', 'sans-serif']}
                        > Robotics</Text>
                    </motion.a>


                    <NavContent.Desktop
                        display={{
                            base: 'none',
                            md: 'flex',
                        }}
                        color="#6F6F6F"
                        active={props.active}
                    />
                    <NavContent.Mobile
                        display={{
                            base: 'flex',
                            md: 'none',
                        }}
                    />
                </Flex>
            </Box>
        </Box>
    </Box>
)