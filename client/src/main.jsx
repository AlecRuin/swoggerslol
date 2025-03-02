import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import "./index.css"
import { ApolloProvider,ApolloClient,HttpLink,InMemoryCache } from '@apollo/client'
const client = new ApolloClient({
  link: new HttpLink({
      uri:"http://localhost:3000/graphql"
  }),
  cache:new InMemoryCache(),
  connectToDevTools:true
})
import Index from "./index"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Index/>
    </ApolloProvider>
  </StrictMode>
)
