import { create } from "zustand";
import axios from "axios";
export const useAuthStore = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,
  login: async (userCredObj) => {
    try {
      //set loading true
      set({ loading: true, error: null });
      //make api request
      let response = await axios.post(
        "http://localhost:4000/common-api/login",
        userCredObj,
        { withCredentials: true },
      );
      let res = response.data;

      console.log("res is", res);
      //update state
      set({
        loading: false,
        isAuthenticated: true,
        currentUser: res.payload,
      });
      //   console.log("currentUser after login is", useAuthStore.getState().currentUser);
    } catch (err) {
      console.log("err is", err);
      set({
        loading: false,
        error: err.response?.data?.error || "Login failed",
        isAuthenticated: false,
        currentUser: null,
      });
    }
  },

  logout: async () => {
    try {
      // set loading true
      set({ loading: true, error: null });
      //make logout api req
      let response = await axios.post(
        "http://localhost:4000/common-api/logout",
        {
          withCredentials: true,
        },
      );
      let res = response.data;
      set({ loading: false, isAuthenticated: false, currentUser: res.payload });
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.error || "Logout failed",
        isAuthenticated: false,
        currentUser: null,
      });
    }
  },
  readArticles: async()=>{
    try{
        //set loading true
        set({ loading: true, error: null });
        //make request to read all articles
        let response=await axios.get("http://localhost:4000/admin-api/articles",{withCredentials:true})
        let res=response.data;
        console.log(res.articles)
        //update state
        set({loading:false, isAuthenticated:true, currentUser:res.articles})
        
    } catch(err){
        set({
        loading: false,
        error: err.response?.data?.error || "Failed to read articles",
        });
    }
  }
}));
