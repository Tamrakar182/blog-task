import MainLayout from "../../layout/main"
import { generateDummyBlogPostData } from "../../../dummy"
import BlogList from "../../components/BlogList"
// import useFetchBlog from "../../hooks/useFetchBlog"

function Root() {
  const dummyData = generateDummyBlogPostData(50)

  // const { blog, loading, error } = useFetchBlog()

  return (
    <MainLayout>
      <BlogList blogList={dummyData} />
    </MainLayout>
  )
}

export default Root
