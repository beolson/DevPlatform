import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { ProductCode } = router.query

  return <p>Post: {ProductCode}</p>
}

export default Post