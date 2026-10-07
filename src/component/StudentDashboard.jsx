import { useState } from "react";
import "../App.css";

const StudentDashboard = () => {
    const [name, setName] = useState("Posi");
    const [score, setScore] = useState(0);
    const [showDetails, setShowDetails] = useState(true);

    const [age, setAge] = useState(17);
    const [course, setCourse] = useState("Frontend Development");

    const student = {
        name: "Semilore",
        age: 16,
        GPA: 4.5,
        course: "Frontend Development"
    };

    const [std, setStd] = useState(student);

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Student Dashboard</h1>
                <p>Manage your student information and progress</p>
            </header>

            <main className="dashboard-grid">

                {/* Student Name */}
                <section className="dashboard-card student-card">
                    <div className="card-icon">👤</div>

                    <h2>Student</h2>
                    <h3 className="display-value">{name}</h3>

                    <div className="button-group">
                        <button onClick={() => setName("John")}>
                            John
                        </button>

                        <button onClick={() => setName("Max")}>
                            Max
                        </button>

                        <button onClick={() => setName("Bell")}>
                            Bell
                        </button>

                        <button onClick={() => setName("Posi")}>
                            Posi
                        </button>
                    </div>
                </section>

                {/* Score */}
                <section className="dashboard-card score-card">
                    <div className="card-icon">🏆</div>

                    <h2>Score</h2>
                    <h3 className="score-value">{score}</h3>

                    <div className="button-group">
                        <button onClick={() => setScore(score + 1)}>
                            +1
                        </button>

                        <button onClick={() => setScore(score + 5)}>
                            +5
                        </button>

                        <button onClick={() => setScore(score + 10)}>
                            +10
                        </button>

                        <button onClick={() => setScore(score + 20)}>
                            +20
                        </button>
                    </div>
                </section>

                {/* Details */}
                <section className="dashboard-card details-card">
                    <div className="card-icon">📋</div>

                    <div className="details-heading">
                        <h2>Details</h2>

                        <span className={showDetails ? "status active" : "status"}>
                            {showDetails ? "Visible" : "Hidden"}
                        </span>
                    </div>

                    {showDetails && (
                        <div className="student-details">
                            <div className="detail-item">
                                <span>Name</span>
                                <strong>{student.name}</strong>
                            </div>

                            <div className="detail-item">
                                <span>Age</span>
                                <strong>{student.age}</strong>
                            </div>

                            <div className="detail-item">
                                <span>GPA</span>
                                <strong>{student.GPA}</strong>
                            </div>

                            <div className="detail-item">
                                <span>Course</span>
                                <strong>{student.course}</strong>
                            </div>
                        </div>
                    )}

                    <button
                        className="toggle-button"
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        {showDetails ? "Hide Details" : "Show Details"}
                    </button>
                </section>

                {/* Course */}
                <section className="dashboard-card course-card">
                    <div className="card-icon">💻</div>

                    <h2>Course</h2>
                    <h3 className="course-value">{course}</h3>

                    <div className="button-group">
                        <button
                            onClick={() =>
                                setCourse("Frontend Development")
                            }
                        >
                            Frontend Development
                        </button>

                        <button
                            onClick={() =>
                                setCourse("Development")
                            }
                        >
                            Development
                        </button>

                        <button
                            onClick={() =>
                                setCourse("AI Vibe Coding")
                            }
                        >
                            AI Vibe Coding
                        </button>

                        <button
                            onClick={() =>
                                setCourse("Backend Development")
                            }
                        >
                            Backend Development
                        </button>
                    </div>
                </section>

                <section className="profile-card">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            {std.name.charAt(0)}
                        </div>

                        <div>
                            <h2>Student Profile</h2>
                            <p className="profile-subtitle">
                                Student information
                            </p>
                        </div>
                    </div>

                    <div className="profile-info">
                        <div className="info-item">
                            <span>Name</span>
                            <strong>{std.name}</strong>
                        </div>

                        <div className="info-item">
                            <span>Age</span>
                            <strong>{std.age}</strong>
                        </div>

                        <div className="info-item">
                            <span>GPA</span>
                            <strong>{std.GPA}</strong>
                        </div>

                        <div className="info-item">
                            <span>Course</span>
                            <strong>{std.course}</strong>
                        </div>
                    </div>

                    <div className="profile-actions">
                        <button onClick={() => setStd({ ...std, name: "John" })}>
                            Change Name
                        </button>

                        <button onClick={() => setStd({ ...std, age: std.age + 4 })}>
                            Add Age
                        </button>

                        <button onClick={() => setStd({ ...std, GPA: std.GPA + 0.5 })}>
                            Add GPA
                        </button>

                        <button
                            onClick={() =>
                                setStd({
                                    ...std,
                                    course: "Backend Development"
                                })
                            }
                        >
                            Change Course
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default StudentDashboard;