import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <h1>Hello Milo!!</h1>
    </ChakraProvider>
  );
}

export default App;
