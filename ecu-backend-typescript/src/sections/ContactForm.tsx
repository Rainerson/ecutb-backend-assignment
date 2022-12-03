import React, { useState } from 'react'
import Alert  from '../components/Alert'
import { validateEmail, validateText } from '../script/validation'

interface FormDataType {
  name: string, 
  email: string, 
  comment: string
}

const ContactForm: React.FC = () => {
  const DEFAULT_VALUES: FormDataType = {name:'', email:'', comment:''}

  const [formData, setFormData] = useState<FormDataType>(DEFAULT_VALUES)
  const [errors, setErrors] = useState<FormDataType>(DEFAULT_VALUES)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    // id blir name eller email
    setFormData({...formData, [id]: value})

    if(id === 'name') {
      setErrors({...errors, [id]: validateText(id, value)})
    } 
    if(id === 'email') {
      setErrors({...errors, [id]: validateEmail(id, value)})
    } 
  }

  // TextArea är en annan sorts element och behöver därför en egen handleChange
  const handleTAChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {id, value} = e.target

    if(id === 'comment') {
      setErrors({...errors, [id]: validateText(id, value, 5)})
    } 
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSubmitted(false)
  setFailedSubmit(false)

  if(formData.name !== '' && formData.email !=='' && formData.comment !==''){
    if(errors.name !== '' && errors.email !=='' && errors.comment !==''){
     const res = await fetch('https://win22-webpi.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if(res.status === 200) {
        setSubmitted(true)
        setFormData(DEFAULT_VALUES)
      } else {
        setSubmitted(false)
        setFailedSubmit(true)
      }


    }

  }
}


  return (
    <section className="form-div mt-5">
      <div className="container">
        
        {submitted ? (<Alert alertType='success' title='Thank you for you comment'></Alert>) : (<></>)}
        {failedSubmit ? (<Alert alertType='danger' title='Something went wrong'></Alert>) : (<></>)}
        
        
        <h2>Come in Contact with Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input id="name" className={(errors.name ? 'error': '')} value={formData.name} onChange={(e) => handleChange(e)} type="text" placeholder="Your Name" />
            <div className="errorMessage">{errors.name}</div>
          </div>
          <div>
            <input id="email" className={(errors.email ? 'error': '')} value={formData.email} onChange={(e) => handleChange(e)} type="email" placeholder="Your Mail" />
            <div className="errorMessage">{errors.email}</div>
          </div>
          <div className="textarea">
            <textarea id="comments" className={(errors.comment ? 'error': '')} style={(errors.comment ? {border: '1px solid #FF7373'}: {} )} value={formData.comment} onChange={(e) => handleTAChange(e)} placeholder="Comments"></textarea>
            <div className="errorMessage">{errors.comment}</div>
          </div>
          <div className="formBtn">
            <button type="submit" className="btn-theme">Post Comments</button>
          </div>
        </form>    
      </div>
    </section>
  )
}

export default ContactForm