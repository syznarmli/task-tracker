import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

// when props are not set, these values will be used
Header.defaultProps = {
    title: 'Task Tracker',
}

// to make code more robust, to catch error etc
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header