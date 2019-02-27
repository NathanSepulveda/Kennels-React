import React, { Component } from 'react'

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

class AnimalList extends Component {
    render() {
        let owners = this.props.owners
        let ownersPets = this.props.OwnersPets
        let animals = this.props.animals
        return (
            <section className="animals">
            
            {
                this.props.OwnersPets.map(relat =>
                    
                        <div key={relat.id}>
                        Owner: {this.props.owners.find(owner => owner.id === relat.ownerId).name} <br/>
                        Pet: {this.props.animals.find(animal => animal.id === relat.petId).name}
                        </div>
                    
                )
            }
            </section>
        )
    }
}

export default AnimalList