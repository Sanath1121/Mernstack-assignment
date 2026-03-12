
import {useEffect} from "react";
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
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const isAuthenticated=useAuthStore((state)=>state.isAuthenticated)
  const currentUser=useAuthStore((state)=>state.currentUser)
  // console.log("isAuthenticated is", isAuthenticated);
  // console.log("currentUser is", currentUser);
  const onSubmit = async (data) => {
    try {
      await login(data);
    } catch (err) {
      console.log("err is", err);
    }
    // reset();
  };

  useEffect(() => {
    console.log(currentUser);
    if(isAuthenticated){
      if(currentUser.role=="USER"){
        navigate("/user-profile");
      }
      if(currentUser.role=="AUTHOR"){
        navigate("/author-profile");
      }
    }},[isAuthenticated, currentUser])

  return (
    <div>
      <h1 className={pageTitleClass}>Login</h1>
      <div className={formCard}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label className={labelClass}>Email: </label>         
          <input
            type="text"
            placeholder="Email"
            className={inputClass}
            {...register("email")}
            autoFocus
          />
          <br />
          <label className={labelClass}>Password: </label>
          <input
            type="password"
            placeholder="Password"
            className={inputClass}
            {...register("password")}
          />
          <br />
          <button
            type="submit"
            className={submitBtn}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
