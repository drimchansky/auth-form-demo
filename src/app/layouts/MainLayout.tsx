import { Outlet } from 'react-router-dom'

import { Toast } from '@/entities/toast'

export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Toast />
    </>
  )
}
