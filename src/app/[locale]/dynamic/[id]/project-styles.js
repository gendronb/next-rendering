'use client'
import { Global, css } from '@emotion/react'

const ProjectStyles = ({ bgColor }) => {
  const styles = css`
    body {
      color: ${bgColor ? 'white' : 'inherit'};
      background-color: ${bgColor || 'inherit'};
    }
  `

  return (
    <Global styles={styles} />
  )
}

export default ProjectStyles
