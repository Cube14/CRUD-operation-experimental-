import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const API = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editUserId, setEditUserId] = useState(null);

  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const fetchUsers = async () => {
    const res = await axios.get(`${API}/user`);
    setUsers(res.data);
  };

  const addUser = async () => {
    if (editUserId) {
      await axios.put(`${API}/user/${editUserId}`, { name });
      setEditUserId(null);
    } else {
      await axios.post(`${API}/user`, { name });
    }
    setName("");
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API}/user/${id}`);
    fetchUsers();
  };

  const editUser = (u) => {
    setName(u.name);
    setEditUserId(u._id);
  };

  const fetchPosts = async () => {
    const res = await axios.get(`${API}/post`);
    setPosts(res.data);
  };

  const addPost = async () => {
    await axios.post(`${API}/post`, {
      title: postTitle,
      userId: selectedUser
    });
    setPostTitle("");
    fetchPosts();
  };

  const deletePost = async (id) => {
    await axios.delete(`${API}/post/${id}`);
    fetchPosts();
  };

  const fetchStudents = async () => {
    const res = await axios.get(`${API}/student`);
    setStudents(res.data);
  };

  const fetchCourses = async () => {
    const res = await axios.get(`${API}/course`);
    setCourses(res.data);
  };

  const addStudent = async () => {
    await axios.post(`${API}/student`, { name: studentName });
    setStudentName("");
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`${API}/student/${id}`);
    fetchStudents();
  };

  const addCourse = async () => {
    await axios.post(`${API}/course`, { title: courseName });
    setCourseName("");
    fetchCourses();
  };

  const deleteCourse = async (id) => {
    await axios.delete(`${API}/course/${id}`);
    fetchCourses();
  };

  const enroll = async () => {
    await axios.post(`${API}/enroll`, {
      studentId: selectedStudent,
      courseId: selectedCourse
    });
    fetchStudents();
    fetchCourses();
  };

  const unenroll = async () => {
    await axios.post(`${API}/unenroll`, {
      studentId: selectedStudent,
      courseId: selectedCourse
    });
    fetchStudents();
    fetchCourses();
  };

  useEffect(() => {
    fetchUsers();
    fetchPosts();
    fetchStudents();
    fetchCourses();
    // Data should load once when the page opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <h1>Full CRUD With Relations</h1>

      <section className="panel">
        <h2>User CRUD</h2>
        <div className="form-row">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter user name"
          />
          <button onClick={addUser}>{editUserId ? "Update User" : "Add User"}</button>
        </div>

        <div className="list">
          {users.length === 0 && <p className="empty">No users added yet.</p>}
          {users.map((u) => (
            <div className="list-item" key={u._id}>
              <span>{u.name}</span>
              <div>
                <button className="secondary" onClick={() => editUser(u)}>Edit</button>
                <button className="danger" onClick={() => deleteUser(u._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Posts</h2>
        <div className="form-row">
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
            <option value="">Select User</option>
            {users.map((u) => (
              <option key={u._id} value={u._id}>{u.name}</option>
            ))}
          </select>
          <input
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Post title"
          />
          <button onClick={addPost}>Add Post</button>
        </div>

        <div className="list">
          {posts.length === 0 && <p className="empty">No posts added yet.</p>}
          {posts.map((p) => (
            <div className="list-item" key={p._id}>
              <span>{p.title} - {p.userId?.name || "No user"}</span>
              <button className="danger" onClick={() => deletePost(p._id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Students & Courses</h2>
        <div className="form-row">
          <input
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Student name"
          />
          <button onClick={addStudent}>Add Student</button>
          <input
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Course title"
          />
          <button onClick={addCourse}>Add Course</button>
        </div>

        <div className="form-row">
          <select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
            <option value="">Select Student</option>
            {students.map((s) => (
              <option key={s._id} value={s._id}>{s.name}</option>
            ))}
          </select>

          <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
            <option value="">Select Course</option>
            {courses.map((c) => (
              <option key={c._id} value={c._id}>{c.title}</option>
            ))}
          </select>

          <button onClick={enroll}>Enroll</button>
          <button className="secondary" onClick={unenroll}>Unenroll</button>
        </div>
      </section>

      <div className="grid">
        <section className="panel">
          <h3>Students</h3>
          <div className="list">
            {students.length === 0 && <p className="empty">No students added yet.</p>}
            {students.map((s) => (
              <div className="list-item" key={s._id}>
                <span>{s.name} - {s.courses.map((c) => c.title).join(", ") || "No course"}</span>
                <button className="danger" onClick={() => deleteStudent(s._id)}>Delete</button>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <h3>Courses</h3>
          <div className="list">
            {courses.length === 0 && <p className="empty">No courses added yet.</p>}
            {courses.map((c) => (
              <div className="list-item" key={c._id}>
                <span>{c.title} - {c.students.map((s) => s.name).join(", ") || "No student"}</span>
                <button className="danger" onClick={() => deleteCourse(c._id)}>Delete</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
