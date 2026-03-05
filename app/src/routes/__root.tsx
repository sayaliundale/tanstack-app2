import { Outlet, createRootRoute } from '@tanstack/react-router'
import { NotFound } from '../components/NotFound'

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
    </>
  )
}
