interface FormProps {
  label?: string
  name?: string
}

const Forms = ({ label, name }: FormProps) => {
  return (
    <div className="field relative">
      <label htmlFor="email">{label}</label>
      <input type={name} name={name} placeholder="" required />
    </div>
  )
}

export default Forms
