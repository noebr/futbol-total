
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { logout, update } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "../Shopping.css";

function ProfileScreen(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {userInfo ? (
        <div className="lista-sidebar">
        <Link to="/">
          <button type="button" onClick={handleLogout} className="sesion">
            <p>Cerrar sesión</p><br/>
          </button>
        </Link>
        </div>
      ) : (
        <div className="lista-sidebar">
        <Link to="/signin">
          <p>Iniciar sesión</p>
        </Link>
        
        </div>
      )}
    </div>
  );
}

export default ProfileScreen;