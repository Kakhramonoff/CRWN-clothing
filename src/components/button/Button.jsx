import './Button.styles.scss'
/*
~~~~~~~Default button
~~~~~~~Google button
~~~~~~~Inverted
*/

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    undefined: ''
}


const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <button className={`buttons-container ${BUTTON_TYPE_CLASSES[buttonType]}`.trim()} {...otherProps}>{children}</button>
  )
}

export default Button