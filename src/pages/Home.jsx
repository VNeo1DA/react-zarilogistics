
import {NavLink, useLoaderData} from "react-router-dom";
import ProfileItem from '../components/ProfileItem';
function Home(){
//load company profile data here
	const profileData = useLoaderData();
	return(
        <>
            <div id="hero" className="tablet-desktop">
                <img src="./assets/hero-image.jpg" alt="Logistics Staff lady at her work desk" />
            </div>
            <main className="home">
                <div className="tablet-desktop">
                    <div id="opening-header">
                        <p>Welcome to our website</p>
			    <h1>ZARILOGISTICS &amp; CLEARING SERVICES ARE DRIVEN BY<br/>
				    <span id="bold-header">passion and customized service offerings</span>
			    </h1>
                    </div>
                    <div id="body-content">
						<h1>
							We combine compassion with delivering on-time and client satisfaction.
						</h1>
						<p>
							Our company is an established logistics and clearing company located in 
							Johannesburg South Africa. We are a dedicated and passion driven company, 
							offering a wide spectrum of logistics needs that will be satisfactory to 
							our clients at a fair market rate at all times.
							Our attentiveness to detail results in effective supply chain solutions.
							Even though we are located in Johannesburg, we have outstanding relations 
							with shipping lines and airlines globally.
						</p>
					</div>
	
					<section className="company-profile">
						{profileData.map((item) => {
							return(
								<ProfileItem key={item.id} companyData={item}/>
							);								
						})}	
					</section>
				</div>
                <div className="call-to-action">
						<p>
							We provide a range of standardized and customized logistics services 
							that will certainly benefit your organisation by making sure your 
							goods & material reach their destination in the best possible time 
							and in a cost efficient manner. To find out more about our assortment 
							of services see our <NavLink to="about">about us</NavLink> section.
						</p>
					</div>
            </main>
        </>
    );
}
export default Home;
//loader function
export const profileLoader = async() =>{
	const res = await fetch('http://localhost:4000/profile');

	return res.json();	
}
