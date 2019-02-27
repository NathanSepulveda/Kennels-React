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

class OwnersList extends Component {
    render() {
        
        return (
            <section className="locations">
            <h1>Owners List</h1>
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        {owner.name} <br />
                        {owner.phoneNumber}

                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnersList