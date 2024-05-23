function ProfileItem( { companyData }){
    return(
        <div id={companyData.title.toLowerCase()}>
            <img 
                src={companyData.img} 
                className="iconProfileImage"
                alt={companyData.title + " of Company"}
                width= {70}
                height={70} 
            />
            <h2>{companyData.title}</h2>
            <p>{companyData.statement}</p>
        </div>
    )    
}
export default ProfileItem;