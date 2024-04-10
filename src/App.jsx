import './App.css';
import Progress from "./components/Progress.jsx";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Describe from "./pages/Describe.jsx";
import Interested from "./pages/Interested.jsx";
import Math from "./pages/Math.jsx";
import OnTheWay from "./pages/OnTheWay.jsx";
import Righplace from "./pages/Rightplace.jsx";
import Learningpath from './pages/Learningpath.jsx';


// Define Layout component outside of App function

function App() {

  const Layout = () => {
    return (
      <div>
        {/* <Progress /> */}
        <div>
          <Outlet />
        </div>
      </div>
    );
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Passing Outlet as children to Layout
      children: [
        {
          path: "/",
          element: <Describe />
        },
        {
          path: "/interested",
          element: <Interested />
        },
        {
          path: "/math",
          element: <Math />
        },
        {
          path: "/ontheway",
          element: <OnTheWay />
        },
        {
          path: "/rightplace",
          element: <Righplace />
        },
        {
          path: "/learningpath",
          element: <Learningpath />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
