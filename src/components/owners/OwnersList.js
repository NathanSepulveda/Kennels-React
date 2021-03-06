import React, { Component } from 'react'
import { Link } from "react-router-dom";

// export default class LocationList  extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Location List</h1>
//                 <section>North Nashville 2000 North Way</section>
//                 <section>South Nashville 2000 South Way</section>
//             </article>
//         );
//     }
// }

// let filter = () => {
//     console.log(this.props.OwnersPets.filter(relat => relat.ownerId === owner.id))
// }



class OwnersList extends Component {
    removeAllRelats = (o) => {
        this.props.OwnersPets.filter(relat => relat.ownerId === o.id).forEach(relat => {
            this.props.removeRelat(relat.id) })
    }
    render() {
        
        return (
            <section className="locations">
            <h1>Owners List</h1>
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        {owner.name} <br />
                        {owner.phoneNumber}
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                        <a href="#"
                                    onClick={() => this.props.removeOwner(owner.id)
                                    //     .then(() => {
                                    //     // removeAllRelats(owner)
                                    //     console.log('hi')
                                    //     // this.props.OwnersPets.filter(relat => relat.ownerId === owner.id).forEach(relat => {
                                    //     //     this.props.removeRelat(relat.id)
                                    //     //     console.log("hi")
                                    //     //     // this.props.removeOwner(owner.id)
                        
                                    //     // });
                                        
                                    // })
                                    }
                                    className="card-link">Remove Owner</a>
                    </div>
                    
                )
            }
            </section>
        )
    }
}



export default OwnersList