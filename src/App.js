import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from "./layouts/AdminLayout";
import { routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          {routes.map(
            (route, index) =>
              <Route key={index} element={route.component} path={route.path} />
          )}
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  )
}

export default App