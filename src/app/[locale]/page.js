import { routing } from '@/i18n/routing'

import { AbsoluteCenter, Heading, Text, VStack } from '@chakra-ui/react'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

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
