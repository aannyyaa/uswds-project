import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
} from '@trussworks/react-uswds'

const Team = ({name, info}) => {
  return (
    <Card
    gridLayout={{desktop: {col: 4}}}
    containerProps={{ className: 'bg-base-lightest border-0' }}>
        <CardHeader>{name}</CardHeader>
        <CardBody>{info}</CardBody>
    </Card>
  )
 }

export default Team