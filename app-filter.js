import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    all employees
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    promotion 
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                   salary increase 
            </button>
        </div>
    )
}

export default AppFilter;