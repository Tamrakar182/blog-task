import MainLayout from "../../../layout/main"
import { generateDummyBlogPostData } from "../../../../dummy"
import BlogList from "../../../components/BlogList"

function BlogRoute() {
  const dummyData = generateDummyBlogPostData(50)

  return (
    <MainLayout>
      <BlogList blogList={dummyData} />
    </MainLayout>
  )
}

export { BlogRoute }
