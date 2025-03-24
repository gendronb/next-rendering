import { AbsoluteCenter, Heading, Text, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <AbsoluteCenter as={VStack}>
        <Heading fontSize={'2xl'}>Home</Heading>
        <Text>This is the home page, statically rendered...</Text>
      </AbsoluteCenter>
    </main>
  )
}
