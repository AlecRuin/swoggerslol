import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
// import App from './App.jsx'
import { ApolloProvider,ApolloClient,HttpLink,InMemoryCache } from '@apollo/client'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
// import client from './ApolloClient.js'
const client = new ApolloClient({
  link: new HttpLink({
      uri:"http://localhost:3000/graphql"
  }),
  cache:new InMemoryCache()
})
import About from "./About"
import Home from "./Home"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </Router>
    </ApolloProvider>
  </StrictMode>
)
