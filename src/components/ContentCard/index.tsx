import {
  Card,
  CardBody,
  CardBodyProps,
  CardHeader,
  type CardProps,
  Divider,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

interface BoxProps extends Omit<CardProps, 'title'> {
  title?: string;
  titleAfter?: React.ReactNode;
  bodyProps?: CardBodyProps;
}

export default function ContentCard({
  title,
  titleAfter,
  children,
  variant = 'outline',
  bodyProps,
  rounded,
  ...props
}: React.PropsWithChildren<BoxProps>) {
  return (
    <Card
      as={'article'}
      variant={variant}
      rounded={rounded}
      overflow={'hidden'}
      {...props}
    >
      {(!!title || !!titleAfter) && (
        <CardHeader>
          {!!title && (
            <Heading as='h2' size='md' fontWeight={'700'}>
              {title}
            </Heading>
          )}
          {titleAfter}
        </CardHeader>
      )}

      <CardBody {...bodyProps}>{children}</CardBody>
    </Card>
  );
}
