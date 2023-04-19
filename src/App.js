import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import { routes } from "./routes";

const App = () => {
  const getAuthRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getAuthRoutes(prop.views)
      }
      if (prop.layout === '/auth') {
        return (
          <Route key={key} element={prop.component} path={prop.layout + prop.path} />
        )
      } else {
        return null
      }
    })
  }

  const getAdminRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getAdminRoutes(prop.views)
      }
      if (prop.layout === '/admin') {
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
          {getAdminRoutes(routes)}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          {getAuthRoutes(routes)}
          <Route path="/auth" element={<Navigate to="/auth/login" />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App