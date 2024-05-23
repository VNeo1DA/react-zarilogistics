import { Outlet, Link } from "react-router-dom";
function Other(){
    return(
        <div className="others-layout">
            {/*insert hero image*/}
			<div id="hero" className="tablet-desktop other-services2">
				<img 
                    src="assets/sea-port-hero.jpg" 
                    alt="Sea port at night"
                />
			</div>
            <p>
                All goods that are imported or exported into Southern Africa and other countries 
                require freight fowarding and customs clearance services. At Zarilogistics we 
                ensure that storage for cargo is organized for goods, we distribute the cargo 
                when the time arises to its destination from our storage facilities, and make sure
                 we handle documentation and processes for customs clearing to help clear your cargo.
            </p>

            <nav>
                <Link to="customs">Customs Clearance</Link>
                <Link to="forwarding">Forward Cargo</Link>
            </nav>
            <Outlet />
        </div>
    );
}
export default Other;