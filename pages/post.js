import { useRouter } from 'next/router'
import Layout from '../components/MyLayout'

const Content = () => {
  const router = useRouter();

  return(
    <div>
      <h1>{router.query.title}</h1>
      <p>Page content found here...</p>
    </div>
  )
}

const BlogPost = () => (
  <Layout>
    <Content />
  </Layout>
)

export default BlogPost;