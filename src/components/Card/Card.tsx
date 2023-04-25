import React from 'react'
import {
  CardBody,
  CardButton,
  CardContent,
  CardHeader,
  CardImg,
  CardWrapper
} from './Card.styles'

type CardProps = {
  image: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Card: React.FC<CardProps> = ({ image, children, onClick }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardImg src={image} />
      </CardHeader>
      <CardBody>
        <CardContent>{children}</CardContent>
        <CardButton type="button" onClick={onClick}>Info</CardButton>
      </CardBody>
    </CardWrapper>
  )
}
