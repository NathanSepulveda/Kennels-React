import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        
        return (
            <section className="employees">
            <h1>Employee List</h1>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <a href="#"
                                    onClick={() => this.props.fireEmployee(employee.id, "employees")}
                                    className="card-link">Fire Employee</a>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList