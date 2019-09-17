import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import Box from './Box'

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        color="white"
        bg="blue"
        p={[1, 2, 3]}
        width={['100%', 1 / 2, 1 / 4]}
      >
        Box
      </Box>
    </ThemeProvider>
  )
}

export default App
