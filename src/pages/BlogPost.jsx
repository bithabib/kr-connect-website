import { useParams, Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { getPost } from '../blog/posts.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <main className="section">
        <div className="container">
          <h1 className="section__title">Post not found</h1>
          <Link to="/blog" className="blog-post__back">← Back to blog</Link>
        </div>
      </main>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} — KR Connect Technologies</title>
        <meta name="description" content={post.description} />
      </Head>

      <main className="section">
        <article className="container blog-post">
          <Link to="/blog" className="blog-post__back">← Back to blog</Link>
          <h1 className="blog-post__title">{post.title}</h1>
          <p className="blog-post__meta">
            {post.date && <time>{post.date}</time>}
            {post.author && <span> · {post.author}</span>}
          </p>
          <div
            className="blog-post__body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </main>
    </>
  )
}
