import React from 'react'
import MultistepForm from '../components/MultistepForm'

const NewAccountScreen = () => {
  const form = [
    {
      id: 1,
      title: 'Contact Details'
    },
    {
      id: 2,
      title: 'Account Service Required'
    },
    {
      id: 3,
      title: 'Means of Identification'
    },
    {
      id: 4,
      title: 'Mandate Card'
    },
    {
      id: 5,
      title: 'Checklist'
    },
    {
      id: 6,
      title: 'Review'
    },
  ]
  
  return (
    <div className='new-account-screen-container'>
      <div className="screen-header">
        <h2>New Account (Individual)</h2>
        <div className='tag draft'>DRAFT</div>
        <div className='tag restricted'>RESTRICTED</div>
      </div>
      <MultistepForm formDetail={form} />
    </div>
  )
}

export default NewAccountScreen