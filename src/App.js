
import React, {useContext} from "react"
import "./Components/Others/styles/main.scss"
import Header from "./Components/Others/Header"
import Footer from "./Components/Others/Footer"
import Content from "./Components/Others/Content"
import Help from "./Components/Others/Components/SubComponents/Help/Help"
import Settings from "./Components/Others/Components/SubComponents/Settings/Settings"
import AboutUs from "./Components/Others/Components/SubComponents/AboutUs/AboutUs"
import Docs from "./Components/Others/Components/SubComponents/Docs/Docs"
import OurProject from "./Components/Others/Components/SubComponents/OurProject/OurProject"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./Components/Others/Components/SubComponents/User"
import RegisterPage from "./Components/Others/Components/Users/RegisterPage"
import {UserContextProvider} from "./Components/Others/Context/UserContext"
import LoginPage from "./Components/Others/Components/Users/LoginPage"

import RegistrationEmailSentPage from "./Components/Others/Components/Users/RegistrationEmailSentPage";
import ProjectsCotnextProvider from "./Components/Others/Context/ProjectsContext"
import { ThemeContextProvider } from "./Components/Others/Context/ThemeContext"
import {ProjectsHandlerContextProvider} from "./Components/Others/Context/ProjectsHandlerContext"
import ProjectHandler from "./Components/Editor/ProjectsSection/ProjectHandler"
import AdminPage from "./Components/Admin/AdminPage"
import Error from "./Components/Others/globalPages/Error"
import SideMenuBar from "./Components/Editor/ProjectsSection/SideMenuBar"
import {ContentContextProvider} from "./Components/Others/Context/ContentContext"

function App() {
  return (
  <BrowserRouter>
    <UserContextProvider>
    <ContentContextProvider>
      <ThemeContextProvider>
          <ProjectsCotnextProvider>
            <ProjectsHandlerContextProvider>
               <div className='App'>
                
                <Routes>
                  <Route path="/" element={<Header/>} />
                  <Route path='/user/profile' element={<Profile />} />
                  <Route path='/categories/:category/:subcategory' />

                  <Route path='categories/help/*' element={<Help />} />
                  <Route path='categories/about-us/*' element={<AboutUs />} />
                  <Route path='categories/docs/*' element={<Docs />} />
                  <Route path='categories/our-project/*' element={<OurProject />} />
                  <Route path='settings' element={<Settings />} />
                  <Route path='*' element={<Error />} />
                  <Route path='users/register' element={<RegisterPage />} />
                  <Route path='users/login' element={<LoginPage />} />
                  <Route path='users/verified-registration-email' element={<RegistrationEmailSentPage/>} />
                  <Route path="/editor/dashboard">
                    <Route index element={<ProjectHandler />} />
                  </Route>
                  <Route path="/admin" element={<AdminPage/>}/>
                </Routes>
          </div>
          </ProjectsHandlerContextProvider>
          </ProjectsCotnextProvider>
      </ThemeContextProvider>
      </ContentContextProvider>
    </UserContextProvider>
  </BrowserRouter>
  )
}
export default App