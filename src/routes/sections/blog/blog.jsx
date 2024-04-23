import MainLayout from "../../../layout/main"
import { generateDummyBlogPostData } from "../../../../dummy"
import BlogList from "../../../components/BlogList"
// import useFetchBlog from "../../../hooks/useFetchBlog"

function BlogRoute() {
  const dummyData = generateDummyBlogPostData(50)
  // const { data, isLoading } = useFetchBlog()

  // if (isLoading || !data) {
  //   return <div>Loading...</div>
  // }

  return (
    <MainLayout>
      <BlogList blogList={dummyData} />
    </MainLayout>
  )
}

export { BlogRoute }
