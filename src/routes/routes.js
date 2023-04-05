
import {
  createBrowserRouter,
} from "react-router-dom";
import Posts from "../features/posts/Posts";
import SinglePost from "../features/posts/SinglePost";



// create browser router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />
  },
  {
    path: "/:id",
    element: <SinglePost />
  },
]);



export default router;
