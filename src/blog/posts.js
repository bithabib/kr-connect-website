import { marked } from 'marked'

// Load every .md file in ./posts at build time as raw text.
const modules = import.meta.glob('./posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

// Tiny frontmatter parser (handles the simple `key: value` block at the top of
// each post, between the --- lines). No external dependency needed.
function parseFrontmatter(raw) {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    value = value.replace(/^["']|["']$/g, '') // strip surrounding quotes
    data[key] = value
  }
  return { data, content: match[2] }
}

// Internal links written as "/..." in markdown need the site base prefix so
// they work on GitHub Pages (served from a sub-path). External links (https://)
// are untouched.
const base = import.meta.env.BASE_URL
function withBase(html) {
  if (base === '/') return html
  return html.replace(/href="\/(?!\/)/g, `href="${base}`)
}

const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const { data, content } = parseFrontmatter(raw)
    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'KR Connect Technologies',
      html: withBase(marked.parse(content)),
    }
  })
  // Newest first.
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getAllPosts() {
  return posts
}

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs() {
  return posts.map((p) => p.slug)
}
