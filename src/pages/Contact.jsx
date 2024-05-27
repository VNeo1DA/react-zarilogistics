import { Form, redirect, useActionData } from 'react-router-dom';
export default function Contact(){
	const data = useActionData();
	return(
		<main>
			<div id='contact'>
				<h2>Getting in touch is easy</h2>
				<p>
					You can contact Zarilogistics and clearing services today or
					visit our offices during weekdays:
				</p>
				<h4 className="tel-num">(079)320-9844</h4>
				<h4>Email us:  
					<a 
					href="mailto: johnDOE@zarilogistics.co.za" 
					className="contact-email-link"
					>
						johnDOE@zarilogistics.co.za
                    			</a>
                		</h4>
				
                		<h4>Visit us at: Polofields Estate, 540 Block 90, Max Drive, Waterfall, Gauteng - 1684</h4>

                		<Form method="POST" action="/contact" id="form">
                			<div className="first-last">            
                				<div className="first">
                					<label>Name</label><br/>
                					<input type="text" id="name" placeholder="Full Name" />
                				</div>

                				<div className="last">
                					<label>Email</label><br/>
                					<input type="email" id="email" placeholder="e-mail" />
                				</div>
                			</div>

                			<div className="msg-area">
                				<label>Message</label><br/>
                				<textarea 
                					id="msg" 
                					name="message" 
                					rows="16" 
                					cols="50" 
                					placeholder="Your Message"
                				>
                				</textarea>
                			</div>
                			<button type="submit">Send Details</button>
                			{data && data.error && <p>{data.error}</p>}
                		</Form>
			</div>
		</main>
	);
}

export const contactAction = async({ request }) =>{
	const data = await request.formData();

	const submission = {
		name: data.get('name'),
		email: data.get('email'),
		message: data.get('message')
	}

	console.log(submission);

	//send post request not done for this project

	if(submission.name.length < 1 || submission.email.length < 1){
		return {error: 'Insufficient data, please enter required info'};
	}
	//redirect the user to Home page
	return redirect('/');
}
