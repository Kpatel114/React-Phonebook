import Home from '../pages/Home'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'

// typescript specific 
interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const a:Number = 5


const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    }
  ]; 

  export default routes