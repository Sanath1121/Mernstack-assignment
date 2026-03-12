import React from "react";
import {pageBackground,
    pageWrapper,
    section,
    cardClass,
    pageTitleClass,
    headingClass,
    subHeadingClass,
    bodyText,
    mutedText,
    linkClass,
    primaryBtn,
    secondaryBtn,
    ghostBtn,
    formCard,
    formTitle,
    labelClass,
    inputClass,
    formGroup,
    submitBtn,
    navbarClass,
    navContainerClass,
    navBrandClass,
    navLinksClass,
    navLinkClass,
    navLinkActiveClass,
    articleGrid,
    articleCardClass,
    articleTitle,
    articleExcerpt,
    articleMeta,
    articleBody,
    timestampClass,
    tagClass,
    errorClass,
    successClass,
    loadingClass,
    emptyStateClass,
    divider
} from "../styles/common.js"
import { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";

function Register() {
  // let inputRef=useRef(null)
  let { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [] = useState();
  //next step is to handle form submission and send data to backend
  const onSubmit = async (data) => {
    console.log(data);
    // make API req to user/author registration endpoint
    try {
      let { role, ...user } = data;
      if (role == "user") {
        //make api req to user api
        let resObj = await axios.post("http://localhost:4000/user-api/users", user);
        if(resObj.status==201){
          alert("User registered successfully")
          navigate("/login")
        }
      }
      if (role == "admin") {
        //make api req to admin api
        let resObj = await axios.post("http://localhost:4000/author-api/users", user);
        if(resObj.status==201){
          alert("Author registered successfully")
          navigate("/login")
        }
      }
    } catch (error) {
      console.log("err in registration is", error);
      setError(error.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
    reset();
  };
  // useEffect(()=>{
  //   inputRef.current.focus()
  // },[])
  return (
    <div>
      <h1 className={pageTitleClass}>Register</h1>
      <div className={formCard}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label className={labelClass}>Select Role </label>
          <input
            type="radio"
            className="ml-3"
            value="user"
            id="user"
            {...register("role")}
          />
          <label htmlFor="user">User</label>
          <input
            type="radio"
            className="ml-3"
            value="admin"
            id="admin"
            {...register("role")}
          />
          <label htmlFor="admin">Admin</label>
          <br />
          <input
            type="text"
            placeholder="First name"
            className={inputClass}
            {...register("firstName")}
            autoFocus
          />
          <input
            type="text"
            placeholder="Last name"
            className={inputClass}
            {...register("lastName")}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            className={inputClass}
            {...register("email")}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className={inputClass}
            {...register("password")}
          />
          <br />
          <label className={labelClass}>Upload profile image URL</label>
          <input
            type="text"
            name="profileImageUrl"
            placeholder="Profile URL"
            className={inputClass}
            {...register("profileImageUrl")}
          />
          <br />
          <button
            type="submit"
            className={submitBtn}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
