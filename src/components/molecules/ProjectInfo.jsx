import React from 'react'
import Subtitle from '../atoms/Subtitle'
import Description from '../atoms/Description'

const ProjectInfo = ({ title, description }) => {
  return (
    <>
      <Subtitle minW="12rem" pb=".5rem" fontSize="2rem">
        {title}
      </Subtitle>
      <Description fontSize={{ base: '1rem', lg: '1.25rem' }}>
        {description}
      </Description>
    </>
  )
}

export default ProjectInfo
