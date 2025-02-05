import axios from "axios";

const myaxios = axios.create({
  // baseURL: "http://localhost:5000",
  //   baseURL: "https://mywebwhatsapp16.herokuapp.com",
  // baseURL: "https://whatsappvercel.vercel.app",
  // baseURL: "https://whatsappsendnoti-production.up.railway.app",
  // baseURL: "https://whatsapp-dwle.onrender.com",
  // baseURL: "http://whatsapp-env.eba-awwm7mmk.ap-south-1.elasticbeanstalk.com",
  // baseURL: "https://fir-auth-dc185.uc.r.appspot.com",
  // baseURL: "http://whatsapp.eu-north-1.elasticbeanstalk.com",
  baseURL: import.meta.env.VITE_API_URL,
});

// export const BACKEND_URL = "http://localhost:5000";
// export const BACKEND_URL = "https://mywebwhatsapp16.herokuapp.com";
// export const BACKEND_URL = "https://whatsappvercel.vercel.app";
// export const BACKEND_URL = "https://whatsappsendnoti-production.up.railway.app";
// export const BACKEND_URL = "https://whatsapp-dwle.onrender.com";
// export const BACKEND_URL = "https://fir-auth-dc185.uc.r.appspot.com";
// export const BACKEND_URL = "http://whatsapp.eu-north-1.elasticbeanstalk.com";
export const BACKEND_URL = import.meta.env.VITE_API_URL;
// export const BACKEND_URL =
//   "http://whatsapp-env.eba-awwm7mmk.ap-south-1.elasticbeanstalk.com";
export const MYSECRETPASSPHRASE =
  "deune652378390r34nr47t48tfnh48t483h84bdefbhoief2+++-*/=-0987654234567";
export const FIREBASE_NOTIFICATION_KEY =
  "key=AAAABHxkom4:APA91bHjO_0r40AT6Xieei5T9c0so77p0oxzTOZxkQ2Ra7uqBDtavELhuXzLP19CWn8_87MZiQS73unRgeDBHx5AOCqJMhZKBCL_xKdOAXjg72X_zhILM8vMnK0I0Uos0r5ZigfYP__5";

export default myaxios;
