import PropTypes from 'prop-types';

const LoginLayout = ({ children }) => {
    return (
        <div className="min-h-[100vh] w-full bg-slate-200">
            {children}
        </div>
    );
}

LoginLayout.propTypes = {
    children: PropTypes.node,
};

export default LoginLayout;