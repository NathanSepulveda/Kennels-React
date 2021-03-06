

// import React, { Component } from 'react'
// import dog from "./DogIcon.png"
// import "./Animal.css"
// import { Link } from "react-router-dom";

// export default class AnimalList extends Component {
//     render () {
//         return (
//             <React.Fragment>
//             <div className="animalButton">
//             <button type="button"
//                     className="btn btn-success"
//                     onClick={() => {
//                         this.props.history.push("/animals/new")}
//                     }>
//                 Admit Animal
//             </button>
//         </div>
//             <section className="animals">
//             {
//                 this.props.animals.map(animal =>
//                     <div key={animal.id} className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">
//                                 <img src={dog} className="icon--dog" />
//                                 {animal.name}
//                                 <br />
//                                 Owner(s): {this.props.OwnersPets.filter(relat => relat.petId === animal.id)
//                                     .map(ao => this.props.owners.find(o => o.id === ao.ownerId).name).join(",   ")}
//                                 <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
//                                 <a href="#"
//                                     onClick={() => this.props.deleteAnimal(animal.id, "animals")}
//                                     className="card-link">Delete</a>
//                             </h5>
//                         </div>
//                     </div>
//                 )
//             }
//             </section>
//             </React.Fragment>
//         )
//     }
// }

import React, { Component } from "react"
import "./Animal.css"
import AnimalCard from "./AnimalCard"

export default class AnimalList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/animals/new")}
                            className="btn btn-success">
                        Admit Animal
                    </button>
                </div>
                <section className="animals">
                {
                    this.props.animals.map(animal =>
                        <AnimalCard key={animal.id} animal={animal} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}