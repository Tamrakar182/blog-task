import BlogView from "./BlogView";
import PropTypes from "prop-types";
import Container from '../components/Container';

const BlogList = ({ blogList }) => {

    return (
        <div className="blog-list">
            <div className="flex items-center justify-center p-8">
                <h2 className="text-3xl font-bold">Welcome to the Blog List...</h2>
            </div>

            <Container>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 py-6">
                    {blogList.map((blog) => (
                        <BlogView key={blog.id} blog={blog} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

BlogList.propTypes = {
    blogList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            date: PropTypes.string,
            content: PropTypes.string,
            author: PropTypes.string,
        })
    ),
};

export default BlogList;