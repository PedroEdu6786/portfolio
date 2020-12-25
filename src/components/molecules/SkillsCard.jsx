import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Wrap,
  WrapItem,
  Heading,
  Text,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react'
import { LIGHT_BLUE } from '../../utils/colors'

const SkillsCard = ({ icon, title, skills }) => {
  return (
    <SimpleGrid
      columns={2}
      templateColumns="100px auto"
      spacing={1}
      maxW={{ base: '400px', md: '300px', lg: '400px' }}
    >
      {/*-------------- SIDE ICON -------------- */}
      <Box>{icon}</Box>

      {/*-------------- SKILLS DESCRIPTION -------------- */}
      <Stack>
        <Heading as="h3" size="lg" fontWeight="semibold">
          {title}
        </Heading>

        {/*-------------- SKILLS -------------- */}
        <Wrap spacing={1}>
          {skills.map((skill, key) => (
            <WrapItem key={key}>
              <Text
                fontSize=".85rem"
                bg={LIGHT_BLUE}
                borderRadius={15}
                p={1}
                px={3}
              >
                {skill}
              </Text>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </SimpleGrid>
  )
}

SkillsCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
}

export default SkillsCard
