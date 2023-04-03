import './App.css';
import Navbar from "./components/navbar.jsx";
import CookieConsent from "react-cookie-consent";
import {
  useState,
  useRef,
} from 'react';
import {
  Outlet
}from 'react-router-dom';



function App() {

    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }




  return (
    <div className="App">
        <Navbar/>
         
        <Outlet/>
        {/* Footer*/}
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
        <CookieConsent
            location="bottom"
            buttonText="Ok"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
            // onAccept={(acceptedByScrolling) => {
            //     if (acceptedByScrolling) {
            //       // triggered if user scrolls past threshold
            //       alert("Accept was triggered by user scrolling");
            //     } else {
            //       alert("Accept was triggered by clicking the Accept button");
            //     }
            // }}
        >
            Este sitio usa cookies para mejorar sus expriencia.{" "}
            <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
        </CookieConsent>
    </div>

  );
}

export default App;
