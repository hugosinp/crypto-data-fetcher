import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      bg: mode('white', '#1A202C')(props),
    }
  })
}

// const fonts = {
//   heading: 'Poppins',
//   body: 'Poppins',
// }

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles })
export default theme