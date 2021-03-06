
import { Route, Redirect } from "react-router-dom"
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
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owners/OwnerDetail'
import Login from './authentication/Login'
import AnimalForm from './animal/AnimalForm';

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
            newState.employees = allEmployees
        })
            .then(() => LocationManager.all("locations").then(allLocations => {
                newState.locations = allLocations
            }))
            .then(() => OwnerManager.all("owners").then(allOwners => {
                newState.owners = allOwners
            }))
            .then(() => OwnersPets.all("ownerPets").then(allRelats => {
                newState.OwnersPets = allRelats
            }))
            .then(() => AnimalManager.all().then(allAnimals => {
                newState.animals = allAnimals
            }))
            .then(() => {
                this.setState(newState)
            })
    }


    isAuthenticated = () => (sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null)

    deleteAnimal = (id, catergory) => {
        return AnimalManager.delete(id, catergory)
            .then(animals => this.setState({
                animals: animals
            })
            )
    }

    addAnimal = animal =>
        AnimalManager.post(animal)
            .then(() => AnimalManager.all())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );


    fireEmployee = (id, catergory) => {
        return EmployeeManager.delete(id, catergory)
            .then(employees => this.setState({
                employees: employees
            }))

    }

    removeOwner = (id, catergory) => {
        return OwnerManager.delete(id, "owners")
            .then(owners => this.setState({
                owners: owners
            }))
            .then(() => fetch('http://localhost:5002/ownerPets')
                .then(r => r.json()))
            .then(OP => this.setState({ OwnersPets: OP }))

    }



    removeRelat = (id, catergory) => {
        return OwnersPets.delete(id, "ownerPets")
            .then(OwnersPets => this.setState({
                OwnersPets: OwnersPets
            }))

    }



    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                        animals={this.state.animals}
                        employees={this.state.employees}
                        OwnersPets={this.state.OwnersPets}
                        {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnersList owners={this.state.owners} removeOwner={this.removeOwner} OwnersPets={this.state.OwnersPets} removeRelat={this.removeRelat} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props} animals={this.state.animals} deleteAnimal={this.deleteAnimal} owners={this.state.owners} OwnersPets={this.state.OwnersPets} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} owners={this.state.owners} removeOwner={this.removeOwner} OwnersPets={this.state.OwnersPets} removeRelat={this.removeRelat} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} employees={this.state.employees}/>
                }} />
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}

