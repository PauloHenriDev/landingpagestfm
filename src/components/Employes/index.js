import '../Employes/Employees.css';

const Employees = ({ icon, name }) => {
    return (
        <div className='employees__card'>
            <img src={icon} alt='' />
            <h1>{name}</h1>
        </div>
    )
}

export default Employees;