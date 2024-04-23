import MainLayout from "../../../layout/main"
// import { useParams } from 'react-router-dom';
// import useFetchBlogId from "../../../hooks/useFetchBlogId"
import BlogDetails from "../../../section/blog/BlogDetails";

function BlogDetailsRoute() {
  // const { id } = useParams()
  // const { data, isLoading } = useFetchBlogId(id)

  // if (isLoading || !data) {
  //   return <div>Loading...</div>
  // }

  const data = {
    id: 1,
    title: "Post Title 1",
    date: new Date().toISOString(),
    author: "Author 1",
    content: "This is the blog Post",
  }

  return (
    <MainLayout>
      <BlogDetails data={data} />
    </MainLayout>
  )
}

export { BlogDetailsRoute }
