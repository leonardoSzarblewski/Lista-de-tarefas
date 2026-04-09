import { BrowserRouter, Route, Routes, Navigate } from "react-router";

import { About } from "./pages/about";
import { Home } from "./pages/home";
import { AppLayout } from "./shared/layout/AppLayout";
import { Detail } from "./pages/detail";
import { Login } from "./pages/public/Login";
import { useIsAuthenticated } from "./shared/contexts/AuthContext";

export function AppRoutes() {
  const isAuthenticad = useIsAuthenticated()

  return (
    <BrowserRouter>
      {isAuthenticad && (
        <AppLayout>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/detalhe/:id" element={<Detail />} />

            <Route path="*" element={<Navigate to='/' />} />

          </Routes>
        </AppLayout>
      )}

      {!isAuthenticad && (
        <Routes>
          <Route path="*" element={<Login />} />

        </Routes>
      )}


    </BrowserRouter>

  )
}