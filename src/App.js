import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import { routes } from "./routes";

const App = () => {
  const getRoutes = (routes, layout) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views, layout)
      }
      if (prop.layout === layout) {
        return (
          <Route key={key} element={prop.component} path={prop.layout + prop.path} />
        )
      } else {
        return null
      }
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          {getRoutes(routes, '/admin')}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          {getRoutes(routes, '/auth')}
          <Route path="/auth" element={<Navigate to="/auth/login" />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App