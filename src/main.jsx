import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import About from './components/About/About.jsx'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobile from './components/Mobile/Mobile.jsx'
import Laptop from './components/Laptop/Laptop.jsx'
const router = createBrowserRouter([
  {
    path:"main",
    element: <Root/>,
    children:[
      {index:true, Component:Home},
      {path:"about", Component:About},
      {path:"mobile", Component: Mobile},
      {path:'laptop', Component: Laptop}
    ]
  },
  {
    path:'/',
    Component: App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
