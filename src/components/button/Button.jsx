import {BaseButton, GoogleSignInButton, InvertesButton} from './Button.styles'
/*
~~~~~~~Default button
~~~~~~~Google button
~~~~~~~Inverted
*/

export const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  base: 'base'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertesButton
  }[buttonType]
)

const Button = ({children, buttonType, ...otherProps}) => {
  const CustomButton = getButton(buttonType)

  return (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
}

export default Button