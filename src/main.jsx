import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes.jsx'
import './index.css'

// vite-react-ssg handles both static generation (build) and client mounting.
export const createRoot = ViteReactSSG({ routes })
