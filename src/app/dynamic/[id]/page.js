import { AbsoluteCenter, Heading, Text, VStack } from '@chakra-ui/react'

export async function generateStaticParams() {
  return [1, 2, 3].map((i) => ({
    id: `${i}`
  }))
}

export default async function Dynamic({ params }) {
  const { id } = await params
  return (
    <main>
      <AbsoluteCenter as={VStack}>
        <Heading>Dynamic Page</Heading>
        <Text>This is a dynamic page id = {id}</Text>
      </AbsoluteCenter>
    </main>
  )
}
