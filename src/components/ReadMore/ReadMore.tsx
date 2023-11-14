import React from 'react'
import {
  ReadMoreSection,
  ReadMoreTitle,
  ReadMoreSubtitle,
  ReadMoreCardWrapper,
  ReadMoreCardTitle,
  ReadMoreCard,
  ReadMoreCardContent
} from './ReadMore.styles'

export const ReadMore: React.FC = () => {
  const array = new Array(3).fill(0)

  return (
    <ReadMoreSection>
      <ReadMoreTitle>Read More...</ReadMoreTitle>
      <ReadMoreSubtitle>Get to know more features, guides and information</ReadMoreSubtitle>
      <ReadMoreCardWrapper>
        {array.map((_, index) => (
          <ReadMoreCard key={index}>
            <ReadMoreCardTitle>Title</ReadMoreCardTitle>
            <ReadMoreCardContent>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </ReadMoreCardContent>
          </ReadMoreCard>
        ))}
      </ReadMoreCardWrapper>
    </ReadMoreSection>
  )
}
