import './FormInput.styles.scss'

const FormInput = ({label, className = "" , ...others}) => {
  return (
    <div className='group'>
        <input className={`form-input ${className}`.trim()}  {...others} />
        <label className={`form-input-label ${others.value.length ? 'shrink' : ''}`.trim()} htmlFor={others.id}>{label}</label>
    </div>
  )
}

export default FormInput