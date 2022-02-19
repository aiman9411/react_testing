import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    const onClick = (e) => {
        console.log("hello")
    }  

    return (
    <button
        onClick = {onClick}
        style={{ backgroundColor: color }} 
        className="btn">{text}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button
