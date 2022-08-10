import React, { useState} from 'react';
import Avatar from '../assets/avatar.jpg'
import FormSteps from '../components/NewAccount/FormSteps'

const MultistepForm = (props) => {
    const [currentStep, setCurrentStep] = useState(1)

	return (
		<div>
			<div className='form-header'>
				{props.formDetail?.map((item) => (
					<div
						className='form-header-content'
						key={item.id}
						onClick={() => setCurrentStep(item.id)}
					>
						{currentStep > item.id ? (
							<div className='checked'>
								<i class="fa-solid fa-check"></i>
							</div>
							) : (
							<div className={currentStep === item.id ? 'active-tag tag' : 'tag'}>
								{item.id}
							</div>
						)}
						<p className={currentStep === item.id ? 'active' : ''}>{item.title.toUpperCase()}</p>
					</div>
				))}
			</div>

			<div className='form-body'>
				<div className='form-body-header'>
					<img src={Avatar} alt='avatar' />
					<div className='header-detail'>
						<h4>Tomiwa Ogunremi</h4>
						<p>BVN: 393939393939</p>
					</div>
				</div>
				<FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
			</div>
		</div>
	);
};

export default MultistepForm;
