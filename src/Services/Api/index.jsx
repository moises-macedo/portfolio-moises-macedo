import axios from "axios";

export const apiHtml = axios.create({
    baseURL: "https://api-portfolio-theta.vercel.app/api/html/html.json"
});

export const apiReact = axios.create({
    baseURL: "https://api-portfolio-theta.vercel.app/api/react/react.json"
});
