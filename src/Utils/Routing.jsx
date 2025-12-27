import React from 'react'
import { Route } from 'lucide-react'
import { BrowserRouter, Routes } from 'react-router-dom'
import UploadVideo from '../Components/UploadVideo'

const Routing = () => {
       return (
              <div>
                     <Routes>
                            <Route path='/' element={<div>Home Page</div>} />
                            <Route path='/upload' element={<div><UploadVideo /></div>} />
                     </Routes>

              </div>
       )
}

export default Routing
