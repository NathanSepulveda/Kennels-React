// import React, { Component } from 'react'
// import { Link } from "react-router-dom";


// class EmployeeList extends Component {
//     render() {
        
//         return (
//             <section className="employees">
//             <h1>Employee List</h1>
//             {
//                 this.props.employees.map(employee =>
//                     <div key={employee.id}>
//                         {employee.name}
//                         <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
//                         <a href="#"
//                                     onClick={() => this.props.fireEmployee(employee.id, "employees")}
//                                     className="card-link">Fire Employee</a>
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }

// export default EmployeeList

import React, { Component } from "react"
import person from "./person.png"
import "./Employee.css"
import AnimalCard from "../animal/AnimalCard"


export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card card--employee">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={person} className="icon--employee" />
                                {employee.name}
                            <a href="#"
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</a>
                            </h5>

                            <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {console.log(this.props.animals)}
                        {
                            this.props.animals
                                .filter(anml => anml.employeeId === employee.id)
                                .map(anml => <AnimalCard
                                        key={anml.id}
                                        animal={anml}
                                        {...this.props} />)
                        }
                        </div>

                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}