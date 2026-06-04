import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import BlogIndex from './pages/BlogIndex.jsx'
import BlogPost from './pages/BlogPost.jsx'

// All site routes. The blog post pages are pre-rendered to static HTML
// at build time (see vite.config.js -> ssgOptions.includedRoutes).
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'blog', element: <BlogIndex /> },
      { path: 'blog/:slug', element: <BlogPost /> },
    ],
  },
]
