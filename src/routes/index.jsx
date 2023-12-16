import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllFood from "../Components/AllFood";
import Home from "../Components/Home";
import Blog from "../Components/Blog";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddFoodItem from "../Pages/AddFoodItem";
import FoodDetails from "../Pages/FoodDetails";
import PurchaseFood from "../Pages/PurchaseFood";
import MyaddedItem from "../Pages/MyaddedItem";
import MyOrderItem from "../Pages/MyOrderItem";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../Components/Error";
import Menu from "../Pages/Menu";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<Error/>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'allfood',
                element:<AllFood></AllFood>,
                loader:()=>fetch('https://assignment-11-server-zeta-blush.vercel.app/allFoodItemCount')
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'addFoodItem',
                element:<AddFoodItem></AddFoodItem>
            },
            {
                path:"/details/:_id",
                element:<FoodDetails></FoodDetails>,
                loader:()=>fetch("https://assignment-11-server-zeta-blush.vercel.app/allFoodItem")
              },
              {
                path:'/order/:id',
                element:<PrivateRoutes><PurchaseFood></PurchaseFood></PrivateRoutes>,
                loader:({params})=>fetch(`https://assignment-11-server-zeta-blush.vercel.app/allFoodItem/${params.id}`)
              },
              {
                path:'myFood',
                element:<MyaddedItem></MyaddedItem>
              },
              {
                path:'myOrder',
                element:<MyOrderItem></MyOrderItem>,
                
              },
              {
                path:'menu',
                element:<Menu></Menu>
              }
        ],
    },
    
    {
        path:'/register',
        element:<Register></Register>
    }
]);
export default routes;