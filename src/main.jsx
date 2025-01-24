import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutPage from './Pages/AboutPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import PortfolioPage from './Pages/PortfolioPage.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Resume from './Pages/Resume.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true, 
        element: <HomePage />
      },
      {
        path: '/about', 
        element: <AboutPage />
      },
      {
        path: '/contact', 
        element: <ContactPage />
      },
      {
        path: '/portfolio', 
        element: <PortfolioPage />
      },
      {
        path: '/resume', 
        element: <Resume />
      },
    ]
  }
])



  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  )
