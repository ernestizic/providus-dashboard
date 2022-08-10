import React from 'react'

const ContactDetail = ({currentStep, setCurrentStep}) => {
  return (
    <div className='contact-detail'>
      <h5>BVN DETAILS</h5>

      <div className='details'>
        <div className='detail-content'>
          <h4>FIRST NAME</h4>
          <p>Tomiwa</p>
        </div>
        <div className='detail-content'>
          <h4>LAST NAME</h4>
          <p>Ogunremi</p>
        </div>
        <div className='detail-content'>
          <h4>EMAIL ADDRESS</h4>
          <p>Ogunremi</p>
          <div className='edit'>
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </div>
        </div>
        <div className='detail-content'>
          <h4>MAILING ADDRESS</h4>
          <p>Ogunremi</p>
          <div className='edit'>
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </div>
        </div>
        <div className='detail-content'>
          <h4>PHONE 1</h4>
          <p>09012345678</p>
          <div className='edit'>
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </div>
        </div>
        <div className='detail-content'>
          <h4>PHONE 2</h4>
          <p>08012345678</p>
          <div className='edit'>
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </div>
        </div>
        <div className='detail-content'>
          <h4>STATE</h4>
          <p>Lagos</p>
        </div>
        <div className='detail-content'>
          <h4>CITY/TOWN</h4>
          <p>Ikeja</p>
        </div>
        <div className='detail-content'>
          <h4>LGA</h4>
          <p>Ikeja</p>
        </div>
        <div className='detail-content'>
          <h4>LANDMARK</h4>
          <p>Eti-Osa</p>
        </div>
        <div className='detail-content'>
          <h4>STATE OF ORIGIN</h4>
          <p>2015/20/08</p>
        </div>
        <div className='detail-content'>
          <h4>DATE OF BIRTH</h4>
          <p>2015/20/08</p>
        </div>
        <div className='detail-content'>
          <h4>OCUPATION SECTOR</h4>
          <p>
            Agriculture
            <i className="fa-solid fa-angle-down" style={{marginLeft: '5px'}}></i>
          </p>
        </div>
      </div>

      <div className='buttons'>
        <button className='generate-no'>GENERATE ACC NO.</button>
        <button className='next' onClick={()=> setCurrentStep(currentStep + 1)}>NEXT</button>
      </div>
    </div>
  )
}

export default ContactDetail