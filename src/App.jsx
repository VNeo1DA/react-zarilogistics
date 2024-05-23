/*import './index.css'*/
import { 
  createBrowserRouter,
  createRoutesFromElements,  
  Route, 
  RouterProvider
} from 'react-router-dom';
//data needed by Routes
import profileData from './data/company-profile.json'

//Routes
import Home, {profileLoader} from './pages/Home';
import About from './pages/About';
import Forwarding from './pages/Forwarding';
import Customs from './pages/Customs'
import NotFound from './pages/NotFound';
import Other from './pages/Other';
import Contact, {contactAction} from './pages/Contact';
//Layout Routes
import RootLayout from './layouts/RootLayout';

//import Other from './layouts/OthersLayout';

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