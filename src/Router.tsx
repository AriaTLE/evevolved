import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { EveShell } from './EveShell';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EveShell />
  },
  // {
  //   path: '/joinus',
  //   element: <Join
  // }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
