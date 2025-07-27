import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./routes/Layout.jsx"
import CreatePage from "./routes/CreatePage.jsx"
import GalleryPage from "./routes/GalleryPage.jsx"
import EditPage from './routes/EditPage.jsx'
import CrewmatePage from './routes/CrewmatePage.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/create" element = {<CreatePage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/gallery/:id" element={<CrewmatePage/>} />
        <Route path={"/edit/:id"} element={<EditPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
