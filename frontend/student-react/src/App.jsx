import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Login = React.lazy(() => import("./login"))
const Resources = React.lazy(() => import("./resources"))
const SubmitResource = React.lazy(() => import("./submitresource"))
const Experiences = React.lazy(() => import("./experiences"))
const ShareExperience = React.lazy(() => import("./shareexperience"))

function App() {

    return (
        <BrowserRouter>
            <Suspense fallback={<div style={{ textAlign: 'center', padding: '20px' }}>Loading page...</div>}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/submitresource" element={<SubmitResource />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/shareexperience" element={<ShareExperience />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App