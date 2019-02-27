import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]
    animalsFromAPI = [
        { id: 1, name: "Buddy" },
        { id: 2, name: "Tucker" },
        { id: 3, name: "Pickle" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", phoneNumber: "8675309" },
        { id: 2, name: "Emma Beaton", phoneNumber: "8675301" },
        { id: 3, name: "Dani Adkins", phoneNumber: "8675302" },
        { id: 4, name: "Adam Oswalt", phoneNumber: "8675303" },
        { id: 5, name: "Fletcher Bangs", phoneNumber: "8675304" },
        { id: 6, name: "Angela Lee", phoneNumber: "8675305" }
    ]

    ownerPetsFromAPI = [
        { id: 1, ownerId: 1, petId: 1 },
        { id: 2, ownerId: 2, petId: 2 },
        { id: 3, ownerId: 3, petId: 3 },
        { id: 4, ownerId: 4, petId: 3 },
        { id: 5, ownerId: 5, petId: 2 },
        { id: 6, ownerId: 6, petId: 1 },
        { id: 7, ownerId: 4, petId: 1 },

    ]

    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,

        OwnersPets: this.ownerPetsFromAPI,
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} OwnersPets={this.state.OwnersPets} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews