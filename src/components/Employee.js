function Employee(props) {
    return (
        <>
            <h3>{props.name}</h3>
            {props.role ? <p className="role">position: {props.role} </p> : <p className="no-role">Not an employee</p>}
        </>
    )
}

export default Employee;