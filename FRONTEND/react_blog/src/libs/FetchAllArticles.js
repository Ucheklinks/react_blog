import axios from "axios";

async function FetchAllArticles() {
  let BlogArray = [];

  let FinalBlogArray;
  try {
    const response = await axios.get(`http://localhost:3000/api/articles`);

    BlogArray = response.data;

    FinalBlogArray = BlogArray.data;
    console.log(FinalBlogArray);
    console.log("function called");
    return FinalBlogArray;
  } catch (error) {
    console.log(error.message);
  }
}

export { FetchAllArticles };
