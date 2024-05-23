import { Link } from "react-router-dom";
export default function NotFound(){
	
	return(
		<div>
			<h2>Page Not Found</h2>
			<p>Please not that the page you are looking for cannot be found using the current URL. <br/>
				Make sure to type the correct URL or ensure the web section or web site exists.
			</p>
			<br/>
			<p>Go to back to <strong><Link to="/">Home Page</Link></strong>.</p>
		</div>	
	);
}