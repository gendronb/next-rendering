import { AbsoluteCenter, Heading, Text, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <AbsoluteCenter as={VStack}>
        <Heading>Title</Heading>
        <Text>This is a description</Text>
      </AbsoluteCenter>
    </main>
  )
}
