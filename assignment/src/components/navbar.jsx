import React from "react";
import "./navBar.css";
import $ from "jquery";

const NavBar = () => {

        $(function(){
            window.onscroll = function(){
                let x = $(".nav_subscribe_btn").offset().top
                if(x > 233){
                    $(".nav_subscribe_btn span").fadeOut()
                }
                else{
                    $(".nav_subscribe_btn span").fadeIn()
                }
            }
        })
      
    return (
        <nav className="nav">
            <div className="row  py-2 px-1 m-auto" style={{ display:"flex", justifyContent:"center", width:"100%", maxWidth:"640px" }}>
                <div className="col" style={{display:"flex", justifyContent:"space-between"}}>

                <button className="nav_share_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-box-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z" />
                        <path fillRule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                    </svg>
                </button>

                <button className="nav_subscribe_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                    <span>SUBSCRIBE</span>
                </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar