import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'


const Header = () => {
    return <div className="header" >
        <div className="logo-container">
            <img className='logo' src="https://static.vecteezy.com/system/resources/thumbnails/002/162/648/small/pizza-fast-food-logo-or-label-free-vector.jpg" alt="navlogo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About </li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

const AppLayout = () => {
    return <div className="appContainer">
        <Header />

    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)