// import React, { Component } from 'react'

// // export default class LocationList  extends Component {
// //     render() {
// //         return (
// //             <article>
// //                 <h1>Location List</h1>
// //                 <section>North Nashville 2000 North Way</section>
// //                 <section>South Nashville 2000 South Way</section>
// //             </article>
// //         );
// //     }
// // }

// class AnimalList extends Component {
//     render() {
//         let owners = this.props.owners
//         let ownersPets = this.props.OwnersPets
//         let animals = this.props.animals
//         return (
//             <section className="animals">
            
//             {
//                 this.props.OwnersPets.map(relat =>
                    
//                         <div key={relat.id}>
//                         Owner: {this.props.owners.find(owner => owner.id === relat.ownerId).name} <br/>
//                         Pet: {this.props.animals.find(animal => animal.id === relat.petId).name}
//                         </div>
                    
//                 )
//             }
//             </section>
//         )
//     }
// }

// export default AnimalList

import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"

export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {animal.name}
                                <br />
                                Owner(s): {this.props.OwnersPets.filter(relat => relat.petId === animal.id).map(ao => this.props.owners.find(o => o.id === ao.ownerId).name).join(",   ")}
                                <a href="#"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}