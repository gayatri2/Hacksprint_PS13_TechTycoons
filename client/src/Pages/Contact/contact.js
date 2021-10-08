import React, { useState } from 'react';
import './contact.css';
import logo from '../../assets/Hackathon-logo.jpg';
import emailjs from 'emailjs-com';
// import Noty from 'noty';
import{ init } from 'emailjs-com';
init("user_tFK8rtrT8kBLvFV9RBwGB");

const service =  "service_mwlfloi";
const templateId = "template_jrqcqwf";
const userId = process.env.REACT_APP_USERID;

export default function Contact() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm(service, templateId, '#requestform', userId).then(
			function (response) {
				setName();
				setEmail();
				setMessage('');
				// setTimeout(function () {
				// 	new Noty({
				// 		text: 'Thank you for contacting us. Our team will get back to you soon.',
				// 		type: 'virtuate-success',
				// 		theme: 'mint',
				// 		timeout: 5000,
				// 	}).show();
				// }, 100);
                alert("Thank you for contacting us. Our team will get back to you soon.")
                console.log('send')
			},
			function (error) {
				// setTimeout(function () {
				// 	new Noty({
				// 		text: 'Something went wrong!',
				// 		type: 'virtuate-error',
				// 		theme: 'mint',
				// 		timeout: 5000,
				// 	}).show();
				// }, 100);
                alert("Something went wrong!")
                console.log(error)
			}
		);
		e.target.reset();
	};

	return (
		<div className='contactus' id='requestdemo'>
			<div className='contact__box'>
				<h1>Contact Details</h1>
				<div className='contact'>
					<div className='contact__left'>
						<img src={logo} alt='logo' />
						<div className='contact__detail'>
							<h5>Contact Us On</h5>
							<a href='mailto:gayatri.godbole02@gmail.com' target='blank'>
								<p>
									<i className='fa fa-at' />
									<span>gayatri.godbole02@gmail.com</span>
								</p>
							</a>
							<a href='tel:+918888888888' target='blank'>
								<p>
									<i className='fas fa-mobile' />
									<div className='ph-no'>
									<span>+918888888888, </span> <span>+917777777777</span>
									</div>
								</p>
							</a>
							<a href='https://goo.gl/maps/Kgmu2DkRqgRs18b19' target='blank'>
								<p>
									<i className='fa fa-map-marker' />
									<span>C-309, M3M Urbana, Sector 67, Pune, 122102</span>
								</p>
							</a>
						</div>
					</div>

					<form
						className='contact__form'
						id='requestform'
						onSubmit={handleSubmit}>
						<label>
							<p className='input__label'>Full Name</p>
							<input
								type='text'
								value={name}
								name='name'
								onChange={(e) => setName(e.target.value)}
								placeholder='Your Name'
								required
							/>
						</label>
						<label>
							<p className='input__label'>Email ID</p>
							<input
								type='email'
								name='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='abc@xyz.com'
								required
							/>
						</label>
						<label>
							<p className='input__label'>Leave Your Message Here</p>
							<textarea
								name='message'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder='Enter Text Here...'
								required></textarea>
						</label>
						<button type='submit' className='submit'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}