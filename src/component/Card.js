import React from "react"

export default function Card(props) {
    return (
        <div className="my-digital-card">
            
           <div><img src={`../images/${props.profileImg}`} className="profile--image" alt="mypic"/></div> 
            
           <div className="info">
            <h2>{props.name}</h2>
            <h4>{props.mainTitle}</h4>
            <p>{props.Website}</p>
            </div>

            <div className="btn">
            
            <a href="mailto:mary.usaji@gmail.com"><img src={`../images/${props.btnEmail}`} className="Email" alt="Email button"/></a>
            <a href="https://www.linkedin.com/in/mary-usaji-36961aa6/"><img src={`../images/${props.btnLinkedIn}`} className="LinkedIn" alt="LinkedIn button"/></a>
            </div>

            <div className="About">
            <h3>{props.title}</h3>
            <p>{props.description}</p>

            </div>

            <div className="interest">
                
            <h3>{props.inttitle}</h3>
            <p>{props.intdescription}</p>
            </div>

            <div className="footer">            
            
            <a href="https://www.instagram.com/usajih/"><img src={`../images/${props.instagram}`} className="instagram" alt="Instagram Icon"/></a>
            <a href="https://github.com/Usajim"><img src={`../images/${props.github}`} className="github" alt="Github Icon"/></a>
            <a href="https://m.facebook.com/public/Mary-Usaji/"><img src={`../images/${props.facebook}`} className="facebook" alt="Facebook Icon"/></a>
            <a href="https://twitter.com/usajimary"><img src={`../images/${props.twitter}`} className="twitter" alt="Twitter Icon"/></a>
            </div>

        
    </div>
    )
    
}
