import React, { useState } from 'react'

const ContactForm: React.FC = () => {

  const [contactForm, setContactForm] = useState({ name: '', email: '', comment: '' });
  const [formErrors, setFormErrors] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);

  const regex_email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  return (
    <div>ContactForm</div>
  )
}

export default ContactForm