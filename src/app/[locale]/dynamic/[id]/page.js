import { setRequestLocale } from 'next-intl/server'

import { Heading, Text } from '@chakra-ui/react'

import ProjectStyles from './project-styles'

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const loadDynamic = async (id) => {
  await sleep(2000)
  return {
    description: `This is a dynamic page id = ${id}`
  }
}

export async function generateStaticParams() {
  return [1, 2, 3].map((i) => ({
    locale: 'en',
    id: `${i}`
  }))
}

export default async function Dynamic({ params }) {
  const { id, locale } = await params

  // Enable static rendering
  setRequestLocale(locale)

  const result = await loadDynamic(id)
  const { description } = result

  return (
    <>
      <ProjectStyles bgColor={'#ea6a44'} />
      <Heading fontSize={'2xl'}>Dynamic Page</Heading>
      <Text>{description}</Text>
    </>
  )
}
