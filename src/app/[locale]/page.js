import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'

import { AbsoluteCenter, Heading, Text, VStack } from '@chakra-ui/react'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function Home({ params }) {
  const { locale } = await params
 
  // Enable static rendering
  setRequestLocale(locale)

  return (
    <main>
      <AbsoluteCenter as={VStack}>
        <Heading fontSize={'2xl'}>Home</Heading>
        <Text>This is the home page, statically rendered...</Text>
      </AbsoluteCenter>
    </main>
  )
}
