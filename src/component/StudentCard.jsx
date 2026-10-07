import "../App.css"


const StudentCard = (props) => {
    const saySubmited = () => {
        alert("We Have Your Detils")
    }
    return (
        <>
            <div className="card">
                <h2>
                    Name:{props.name}
                </h2>

                <p>
                    Age:{props.age}
                </p>

                <p>
                    Course: {props.course}
                </p>

                <button onClick={saySubmited}>
                    {props.btn}
                </button>
            </div>
        </>
    );
};

export default StudentCard;