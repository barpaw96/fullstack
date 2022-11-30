import axios from "axios";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    comment: "",
    sex: "",
  });

  const { name, username, email, comment, sex } = user;

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8080/user/${id}`, user);

      navigate("/list");

      const toastLiveExample = document.getElementById("toastUserEdyt");
      const toast = new bootstrap.Toast(toastLiveExample);
      toast.show();
    } catch (error) {
      console.log(error);

      if (error.response.status === 409) {
        const toastLiveExample = document.getElementById("toastUserNotEmail");
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
      } else if (error.response.status === 410) {
        const toastLiveExample = document.getElementById("toastNotUser");
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
      }
    }
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUsers(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)} novalidate>
            <div className="mb-3">
              <label htmlFor="validationServer03" className="forma-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="forma-label">
                UserName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="E-Mail" className="forma-label">
                E-Mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="forma-label">
                Comment
              </label>

              <textarea
                id="exampleFormControlTextarea1"
                rows="3"
                type={"text"}
                className="form-control"
                placeholder="Enter your comment"
                name="comment"
                value={comment}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Plec" className="forma-label">
                Płeć
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="sex"
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Wybierz płeć</option>
                <option
                  type={"text"}
                  className="form-control"
                  name="Facet"
                  value={"Men"}
                  onChange={(e) => onInputChange(e)}
                >
                  Men
                </option>
                <option
                  type={"text"}
                  className="form-control"
                  name="kobita"
                  value={"Woman"}
                  onChange={(e) => onInputChange(e)}
                >
                  Woman
                </option>
              </select>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/list">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
