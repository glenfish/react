function Employee(props) {
    return (
        <>
            <h3>{props.name}</h3>
            {props.role ? <p class="role">position: {props.role} </p> : <p class="no-role">Not an employee</p>}
        </>
    )
}

export default Employee;