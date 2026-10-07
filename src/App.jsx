import StudentCard from "./component/StudentCard";
import StudentDashboard from "./component/StudentDashboard";


function App() {

  const name = "Semilore";
  const age = 16;
  const course = "Frontend Development"

  const students = [
    {
      name: "Semilore",
      age: 16,
      course: "Frontend Development"
    },
    {
      name: "Max",
      age: 18,
      course: "Ai Vibe Coding"
    },
    {
      name: "bolu",
      age: 17,
      course: "Backend Development"
    },
    {
      name: "Blaze",
      age: 15,
      course: "Summer Class"
    }
  ]

  return (
    <>
      <div>
        <h1>
          Student Management App
        </h1>

        <div>
          <p>
            My name is {name}.
          </p>

          <p>
            I am {age} years old.
          </p>

          <p>
            I am in {course} Class.
          </p>
        </div>

        <div>
          {students.map((student) => {
            return (
              <div key={student.id}>
                <h1 >{student.name}</h1>
                <h2>my Age: {student.age} </h2>
                <h3>My course: {student.course}</h3>
              </div>
            )
          })}
        </div>
        <div>
          <StudentCard 
            name="John"
            age={25}
            course="Fullstack Development"
            btn='submit'
           />
          <StudentCard 
            name={students[0].name}
            age={students[0].age}
            course={students[0].course}
            btn='submit'
           />
        </div>

        <div>
          <StudentDashboard />
        </div>
      </div>
    </>
  )
}
export default App;