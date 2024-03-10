import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../components/Layout";
import Home from "../components/pages/Home";
import Edit from "../components/edit/EditFile";
import Footer from "../components/footer/Footer";
import Card from "../components/filecard/FileCard";
import NewItem from "../components/newfile/NewFile";


export const router = createBrowserRouter([
  {
      path: "/",
      element: <LayoutPublic />,
      children: [
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "/footer",
      element: <Footer/>
    },
    {
      path: "/NewFile",
      element: <NewItem/>,
    },
    {
      path: "/Edit/:id",
      element: <Edit/>
    },
    {
      path: "/card/:id",
      element: <Card/>
    }
  ],
  }
  ]);

export default router;