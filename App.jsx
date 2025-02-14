import React , {useEffect} from 'react'
import AOS from "aos" ;
import "aos/dist/aos.css" ;
import NavBar from "./Components/NavBar/navBar" ;
export const App = () => {
  useEffect (() => {
    AOS.init({
      offset: 100 ,
      duration: 700 ,
      easing: "easy-in" ,
      delat: 100 ,
    });

  } )
  return (
    <div className="overflow-x-hidden">
    <NavBar />
    { /* <HOME />
        <ABOUT />
        <MENU />
        <CONTACT />
        */

    }


    </div>
  )
}

export default App ;
