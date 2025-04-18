import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/app/layouts/MainLayout'
import { Home } from '@/pages/Home'

export const App = () => (
  <BrowserRouter basename="/auth-form-demo">
    <Routes>
      <Route element={<MainLayout />} path="/">
        <Route element={<Home />} index />
      </Route>
    </Routes>
  </BrowserRouter>
)
