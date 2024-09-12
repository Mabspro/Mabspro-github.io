import PropTypes from 'prop-types';

const Animate = ({ children }) => {
    // Animate component logic here
    return children;
};

Animate.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
    // Add other prop types as needed
};

export default Animate;