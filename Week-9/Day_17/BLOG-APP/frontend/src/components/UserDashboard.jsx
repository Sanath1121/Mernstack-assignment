import React from "react";
import {
  pageBackground,
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
  divider,
} from "../styles/common.js";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../store/authStore.js";
import { useNavigate } from "react-router";
import Header from "./Header.jsx";

function UserDashboard() {
  const { handleSubmit } = useForm();
  const { logout, readArticles, currentUser } = useAuthStore();
  const navigate = useNavigate();
  const onClick = async (data) => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log("err is", err);
    }
  };
  const onRead = async () => {
    try {
      await readArticles();
      console.log("articles fetched");
    } catch (err) {
      console.log("err is", err);
    }
  };
  return (
    <div>
      <nav className='flex justify-between items-center px-10 bg-gray-800 text-white p-4'>
        <img width="50" height="50" src="data:image/png;base64,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" alt="React Logo" /> 
        <h1 className=" text-white text-5xl font-bold text-[#1d1d1f] tracking-tight leading-none mb-2 text-center">UserDashboard</h1>
        <ul className='flex justify-between p-3 gap-3'>
          <li>            
            <button onClick={onClick} className={primaryBtn}>
              Logout
            </button>
          </li>
        </ul>
    </nav>
      <div>
        
        
      </div>
      <div className="flex justify-center mt-10">
        <form action="" onSubmit={handleSubmit(onRead)}>
          <input type="submit" className="text-blue-800 cursor-pointer" value="Read Articles" />
        </form>
      </div>
      {Array.isArray(currentUser) && currentUser.length > 0 && (
        <div>
          {currentUser.map((article) => (
            <div key={article._id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
