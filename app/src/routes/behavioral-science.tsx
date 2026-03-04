import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/behavioral-science')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/behavioral-science"!</div>
}
