import React from 'react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { Flex, Image, Text } from '@chakra-ui/react';
import avatarPic from '../../../assets/logo.png';

const AboutComponent = () => {

  return (
    <>
      <Flex>
        <Image borderRadius="500px" src={avatarPic}/>
        <Text>My name is Theodore Yamit</Text>
      </Flex>
    </>
  )
}

export default AboutComponent