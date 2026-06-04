import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes.jsx'
import './index.css'

// Router base path. '/' locally, '/kr-connect-website' on GitHub Pages.
const base = import.meta.env.BASE_URL
const basename = base === '/' ? undefined : base.replace(/\/$/, '')

// vite-react-ssg handles both static generation (build) and client mounting.
export const createRoot = ViteReactSSG({ routes, basename })
