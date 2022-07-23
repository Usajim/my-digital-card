import React from "react";
import Card from "./component/Card"
import data from "./component/data";


export default function App () {
    const myCard = data.map(items => {
        return (
            <Card 
            profileImg={items.profileImg}
            name={items.bio.name}
            mainTitle={items.bio.mainTitle}
            Website={items.bio.Website}
            btnEmail={items.buttons.btnEmail}
            btnLinkedIn={items.buttons.btnLinkedIn}
            title={items.jobDescription.title}
            description={items.jobDescription.description}
            inttitle={items.interests.inttitle}
            intdescription={items.interests.intdescription}
            instagram={items.footer.instagram}
            github={items.footer.github}
            facebook={items.footer.facebook}
            twitter={items.footer.twitter}

            />
        )
    }
        )
    return (
        <div>
            <section className="cardElement">
                {myCard}
            </section>
        </div>
    )
}
