function About(){
	return(
		<>
			<div id="hero" className="tablet-desktop frame">
				<img
					src="./assets/services-hero-img.jpg"
					alt="image of supply chain transport modes" 
				/>
				<h1 className="overlay-Title">Zarilogistics Services<br/>
					offers a wide spectrum<br/>
					of logistics services<br/>
					and below are the core ones:
				</h1> 
			</div>
			<main>
				<section className="logistics-services">
					<div className="imports">
						<h4>IMPORTS AND EXPORTS</h4>
						<img
							src="assets/import-export-icon.png"
							alt="Import and Export Logistics Icon Poster"
							className="logistics-imgs"
						/>
						<p>
							We control all aspects of cargo to and from anywhere in the world, 
							so there is no need to worry or stress as our detailed-focused team will 
							manage all logistics aspects regarding your cargo.
						</p>
					</div>

					<div className="warehousing">
						<h4>WAREHOUSING</h4>
						<img 
							src="assets/warehousing-icon.png" 
							alt="Warehousing Icon Poster" 
							className="logistics-imgs" 
						/>
						<p>
							We supply general warehousing facilities, but consider ourselves as an exclusive 
							bond facility that is equipped to lay out any warehousing facilities.
						</p>
					</div>

					<div className="road-freight">
						<h4>ROAD FREIGHT SERVICES</h4>
						<img 
							src="assets/road-freight-icon.png" 
							alt="Logistics Delivery Truck Icon Poster" 
							className="logistics-imgs"
						/>
						<p>
							We offer cost effective road transportion with the aim of giving our customers 
							a competitve advantage. With this service, we offer both normal and 
							abnormal road transportation for your convenience. We deliver throughout 
							South Africa including Swaziland, Lesotho, Botswana, Mozambique, Namibia and Zimbabwe.
						</p>
						<br/>
						<p>Road freight services offered include:</p>
						<ul className="services-offered">
							<li>Full consolidation cargo</li>
							<li>Full truck load</li>
							<li>Bulk delivery</li>
							<li>Containerised cargo</li>
							<li>Out-of-gauge cargo</li>
						</ul>
					</div>

					<div className="sea-freight">
						<h4>SEA FREIGHT SERVICES</h4>
						<img 
							src="assets/sea-ship-poster.png" 
							alt="Cargo Ship Icon Poster" 
							className="logistics-imgs"
						/>
						<p>
							We offer reliable and expedient ways to ship your goods, which work on 
							well planned scheduled sailings to ensure that your supply chain is reliable 
							and consistent. No matter the volume of your freight being shipped 
							our container-oriented way of shipping is key and ensures your customers 
							get their goods on time.
						</p>
						<br/>
						<p>Sea freight services offered include:</p>
						<ul className="services-offered">
							<li>FCL - Full Container Load</li>
							<li>LCL - Low Container Load</li>
							<li>Break Bulk Cargo</li>							
							<li>RORO - Roll On/Roll Off</li>
							<li>Abnormal Cargo</li>
						</ul>
					</div>

					<div className="air-freight">
						<h4>AIR FREIGHT SERVICES</h4>
						<img 
							src="assets/air-plane-poster.png" 
							alt="Large Cargo Aeroplane Icon Poster" 
							className="logistics-imgs"
						/>
						<p>
							We provide custom-oriented air freight forwarding solutions on 
							an international scale. Our talented team ensures that they handle your cargo 
							in the most secure manner and ensure that efficient routes are utilized to 
							ensure cost effectiveness always.
						</p>
						<br/>
						<p>Air freight services offered:</p>
						<ul className="services-offered">
							<li>Fragile/valuable cargo</li>
							<li>Dangerous/harzardous cargo</li>
							<li>Full or partial charters</li>
							<li>Express services</li>
						</ul>
					</div>

                    
					<div className="rail-freight">
                        			<h4>RAIL FREIGHT SERVICES</h4>
                        			<img 
							src="assets/rail-icon-poster.png" 
							alt="Rail freight Icon Poster" 
							className="logistics-imgs"
						/>
						<p>
							Letting us handle your rail freight transportation ensures you are provided with 
							great flexibility in pricing and transit time. Additionally it ensures that 
							both parties you and us collaborate on an environmentally-friendly solution 
							for the delivery of goods.
						</p>
						<br/>
						<p>Rail freight services offered:</p>
						<ul className="services-offered">
							<li>Rail Transportation</li>
							<li>Custom and transit clearance</li>
							<li>Destination deliverance</li>
						</ul>
                    			</div>
				</section>
			</main>
		</>
	);
}
export default About;
