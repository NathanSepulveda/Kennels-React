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

        fetch("http://localhost:5002/employees")
            .then(r => r.json())
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations")
                .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners")
                .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => fetch("http://localhost:5002/ownerPets")
                .then(r => r.json()))
            .then(OwnersPets => newState.OwnersPets = OwnersPets)
            .then(() => fetch("http://localhost:5002/animals")
                .then(r => r.json()))
            .then(animals => newState.animals = animals)
            .then(() => this.setState(newState))
            .then(() => this.setState(newState))
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} OwnersPets={this.state.OwnersPets} />
                }} />
            </React.Fragment>
        )
    }
}

