import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { getAllPosts } from '../blog/posts.js'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <>
      <Head>
        <title>Blog — KR Connect Technologies</title>
        <meta
          name="description"
          content="Guides and insights on Korean visas, the KIIP and TOPIK exams, and life in Korea."
        />
      </Head>

      <main className="section">
        <div className="container">
          <span className="section__eyebrow">Blog</span>
          <h1 className="section__title">Insights &amp; Guides</h1>
          <p className="section__intro">
            Practical guides on Korean visas, exams, and settling into life in Korea.
          </p>

          <div className="blog__list">
            {posts.length === 0 && (
              <p className="blog__empty">No posts yet — check back soon.</p>
            )}
            {posts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="blog__item">
                {p.date && <time className="blog__date">{p.date}</time>}
                <h2 className="blog__item-title">{p.title}</h2>
                <p className="blog__item-desc">{p.description}</p>
                <span className="blog__more">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
