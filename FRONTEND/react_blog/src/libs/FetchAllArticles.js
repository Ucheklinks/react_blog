import axios from "axios";

export async function FetchAllArticles() {
  try {
    const response = await axios.get(`http://localhost:3000/api/articles`);
    console.log("front end fetch all articlles")
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
