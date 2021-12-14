import { Box, Flex, Text, Img } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'
import { motion, MotionConfig } from "framer-motion"

export const Navbar = () => (
    <Box bg="white" color="black" py="3" position="sticky" top="0" zIndex="100" >
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
                            src="https://i.imgur.com/1FmyWBP.png"
                            h="3rem"
                            display="inline"
                            mr="3"
                            mt="-1"
                        />
                        <Text
                            as="h1"
                            fontSize="3xl"
                            fontWeight="extrabold"
                            maxW="48rem"
                            display="inline"
                            color="#F79B4C"
                        >Valence</Text>
                        <Text
                            as="h1"
                            fontSize="3xl"
                            fontWeight="extrabold"
                            maxW="48rem"
                            display="inline"
                        > Robotics</Text>
                    </motion.a>


                    <NavContent.Desktop
                        display={{
                            base: 'none',
                            md: 'flex',
                        }}
                        color="#6F6F6F"
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