import { Suspense } from 'react'

import { AbsoluteCenter, VStack } from '@chakra-ui/react'

export default async function Layout({ children, params }) {
  const { id, locale } = await params
  return (
    <main>
      <AbsoluteCenter as={VStack}>
        <Suspense fallback={<div>Loading...</div>} key={id}>
          {children}
        </Suspense>
      </AbsoluteCenter>
    </main>
  )
}