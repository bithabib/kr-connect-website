import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

// When building for GitHub Pages, the site is served from a sub-path
// (https://bithabib.github.io/kr-connect-website/). Locally it stays at '/'.
const base = process.env.GITHUB_PAGES ? '/kr-connect-website/' : '/'

// Folder where blog posts (.md files) live.
const postsDir = fileURLToPath(new URL('./src/blog/posts', import.meta.url))

function getPostSlugs() {
  if (!fs.existsSync(postsDir)) return []
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  // Static site generation options (used by `vite-react-ssg build`).
  ssgOptions: {
    entry: 'src/main.jsx',
    dirStyle: 'nested', // /blog/post -> /blog/post/index.html (clean URLs)
    // Tell the generator which pages to pre-render to static HTML.
    includedRoutes(paths) {
      const staticPaths = paths.filter((p) => !p.includes(':'))
      const postPaths = getPostSlugs().map((slug) => `/blog/${slug}`)
      return [...staticPaths, ...postPaths]
    },
  },
})
