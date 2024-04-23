import Proptypes from 'prop-types';
import moment from 'moment';

const BlogView = ({ blog }) => {
    return (
        <div className="shadow p-4 hover:cursor-pointer">
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            <p className="text-gray-500 text-sm">By {blog.author}</p>
            <p className="text-gray-500 text-sm">{moment(blog.date).format('MMMM Do YYYY')}</p>
            <p className="pt-4 overflow-hidden overflow-ellipsis whitespace-nowrap">{blog.content}</p>
        </div>
    )
}

BlogView.propTypes = {
    blog: Proptypes.shape({
        id: Proptypes.number,
        title: Proptypes.string,
        date: Proptypes.string,
        content: Proptypes.string,
        author: Proptypes.string,
    })
}

export default BlogView;