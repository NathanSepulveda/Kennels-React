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

class LocationList extends Component {
    render() {
        
        return (
            <section className="locations">
            <h1>Location List</h1>
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name}
                        {location.address}

                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList