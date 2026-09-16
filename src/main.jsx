import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { AuthLayout } from './components/AuthLayout.jsx'
import Home from './pages/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/Addpost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
  

  const router = createBrowserRouter([
    {
      path : '/',
      element: <App/>,
      children:[
        {
          path : '/',
          element : <Home/>
        },{
          path:'/login',
          element:(
            <AuthLayout authenticated={false}>
              <Login/>
            </AuthLayout>
          )
        },
        {
          path : '/signup',
          element :(
            <AuthLayout authenticated = {false}>
              <Signup/>
            </AuthLayout>
          )
        },
        {
          path : '/all-posts',
          element:(
            <AuthLayout>
              <AllPost/>
            </AuthLayout>
          )
        },
        {
          path :'/add-post',
          element :(
            <AuthLayout>
              <AddPost/>
            </AuthLayout>
          )
        },
        {
          path :'/edit-post/:slug',
          element:(
              <AuthLayout>
                <EditPost/>
              </AuthLayout>
          )
        },
        {
          path :'/post/:slug',
          element :(
            <AuthLayout>
              <Post/>
            </AuthLayout>
          )
        }
      ]

    }
  ])

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>  
      <RouterProvider router={router}/>
    </Provider>
 
)
