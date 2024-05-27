import { 
  createBrowserRouter,
  createRoutesFromElements,  
  Route, 
  RouterProvider
} from 'react-router-dom';

//Routes
import Home, {profileLoader} from './pages/Home';
import About from './pages/About';
import Forwarding from './pages/Forwarding';
import Customs from './pages/Customs'
import NotFound from './pages/NotFound';
import Other from './pages/Other';
import Contact, {contactAction} from './pages/Contact';
//Layout Route
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route 
        index 
        element={<Home/>}
        loader={profileLoader}
      />
      <Route path="about" element={<About />} />
      <Route path="other" element={<Other />} >
        <Route path="customs" element={<Customs />} />
        <Route path="forwarding" element={<Forwarding />} />    
      </Route>
      <Route path="contact" element={<Contact />} action={contactAction}/>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
