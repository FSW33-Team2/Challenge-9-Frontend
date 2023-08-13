import React, {useEffect} from "react";
import '../../assets/css/gamelist.css';

export default function IndexGamelist() {
    return (
        <div className="wrapper">

            <div className="section-1-wrapper">  
                <h1>ACTION GAMES</h1>
                <br />
                <div className="section-1-img">
                    <a href="#"><div className="img img-1"></div></a>
                    <a href="#"><div className="img img-2"></div></a>
                    <a href="#"><div className="img img-3"></div></a>
                    <a href="#"><div className="img img-4"></div></a>
                    <a href="#"><div className="img img-5"></div></a>
                    <a href="#"><div className="img img-6"></div></a>
                    <a href="#"><div className="img img-2"></div></a>
                    <a href="#"><div className="img img-3"></div></a>
                </div>
            </div>

            <div className="game-categories">
            <h1>GAME CATEGORIES</h1>
                <div className="game-wrapper">
                    <a href="#"><div className="gw gw-1"></div></a>
                    <a href="#"><div className="gw gw-2"></div></a>
                    <a href="#"><div className="gw gw-3"></div></a>
                    <a href="#"><div className="gw gw-4"></div></a>
                    <a href="#"><div className="gw gw-5"></div></a>
                </div>


                <div class="game-wrapper left">
                    <a href="#"><div class="gw gw-6"></div></a>
                    <a href="#"><div class="gw gw-7"></div></a>
                    <a href="#"><div class="gw gw-8"></div></a>
                    <a href="#"><div class="gw gw-9"></div></a>
                    <a href="#"><div class="gw gw-10"></div></a>
                </div>
            </div>
        </div>

    );
} 
