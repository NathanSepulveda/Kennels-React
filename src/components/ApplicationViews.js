// import { Route } from 'react-router-dom'
// import React, { Component } from "react"
// import AnimalList from './animal/AnimalList'
// import LocationList from './location/LocationList'
// import EmployeeList from './employee/EmployeeList'
// import OwnersList from './owners/OwnersList'


// class ApplicationViews extends Component {




//     state = {
//         locations: [],
//         animals: [],
//         employees: [],
//         owners: [],
//         OwnersPets: []
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <Route exact path="/" render={(props) => {
//                     return <LocationList locations={this.state.locations} />
//                 }} />
//                 <Route path="/animals" render={(props) => {
//                     return <AnimalList animals={this.state.animals} owners={this.state.owners} OwnersPets={this.state.OwnersPets} />
//                 }} />
//                 <Route path="/employees" render={(props) => {
//                     return <EmployeeList employees={this.state.employees} />
//                 }} />
//                 <Route path="/owners" render={(props) => {
//                     return <OwnersList owners={this.state.owners} />
//                 }} />
//             </React.Fragment>
//         )
//     }
// }
import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import { throws } from 'assert';
import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import Employee from "../modules/EmployeeManager"
import EmployeeManager from '../modules/EmployeeManager';
import OwnerManager from '../modules/OwnerManager';
import OwnersPets from '../modules/OwnersPets';


export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: [],
        OwnersPets: []
    }

    componentDidMount() {
        const newState = {}

        EmployeeManager.all("employees").then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
            .then(() => LocationManager.all("locations").then(allLocations => {
                this.setState({
                    locations: allLocations
                })
            }))
            .then(() => OwnerManager.all("owners").then(allOwners => {
                this.setState({
                    owners: allOwners
                })
            }))
            .then(() => OwnersPets.all("ownerPets").then(allRelats => {
                this.setState({
                    OwnersPets: allRelats
                })
            }))
            .then(() => AnimalManager.all("animals").then(allAnimals => {
                this.setState({
                    animals: allAnimals
                })
            }))
    }

    // deleteAnimal = id => {
    //     return fetch(`http://localhost:5002/animals/${id}`, {
    //         method: "DELETE"
    //     })
    //         .then(e => e.json())
    //         .then(() => fetch(`http://localhost:5002/animals`))
    //         .then(e => e.json())
    //         .then(animals => this.setState({
    //             animals: animals
    //         })
    //         )
    // }

    deleteAnimal = (id) => {
        return AnimalManager.removeAndList(id)
        .then(animals => this.setState({
            animals: animals
          })
        )
      }


    fireEmployee = (id) => {
        return EmployeeManager.fireEmployee(id)
        .then(employees => this.setState({
            employees: employees
        }))
        
    }

    removeOwner = (id) => {
        fetch(`http://localhost:5002/owners/${id}`, {
            "method": "DELETE"
        })
        .then(r => r.json())
        .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
        .then(owners => this.setState({ owners: owners }))
        .then(() => fetch('http://localhost:5002/ownerPets')
            .then(r => r.json()))
        .then(OP => this.setState({ OwnersPets: OP }))

    }

    removeRelat = id => {
        return fetch(`http://localhost:5002/ownerPets/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/ownerPets`))
            .then(e => e.json())
            .then(OP => this.setState({
                OwnersPets: OP
            })
            )

    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} fireEmployee={this.fireEmployee} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} removeOwner={this.removeOwner} OwnersPets={this.state.OwnersPets} removeRelat={this.removeRelat} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal} owners={this.state.owners} OwnersPets={this.state.OwnersPets} />
                }} />
            </React.Fragment>
        )
    }
}

