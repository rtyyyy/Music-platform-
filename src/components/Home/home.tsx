import React from "react";
import { Card } from "@material-ui/core";
import "./home.css";
function Home(){
    return(

        <div className="wrapper__playlist">
        <p className="title__playlist--main">Что-то новенькое</p>
        <div className="wrapper__playlist--new">
            
        <Card className="card" style={{background:'#34063a'}}>
            <img src="https://images.unsplash.com/photo-1666419936225-416393805604" alt=""  style={{padding:10 , width:210 , height:180}}/>
            <h6 className="title__playlist">Today's top hits</h6>
            <p className="description__playlist">The weekend is top  of the Hottest 50.</p>
        </Card>

        <Card className="card" style={{background:'#34063a'}}>
            <img src="https://images.unsplash.com/photo-1666353709650-f35203fba875" alt="" style={{padding:10 , width:210 , height:180}} />
            <h6 className="title__playlist">Cardio</h6>
            <p className="description__playlist">Upbeat dance pop to keep your heart pumping.</p>
        </Card>

        <Card className="card" style={{background:'#34063a'}}>
            <img src="https://images.unsplash.com/photo-1666437257762-f693c28cb24d" alt="" style={{padding:10 , width:210 , height:180}} />
            <h6 className="title__playlist">Топ треков </h6>
            <p className="description__playlist">Во всем мире: треки, популярные прямо сейчас</p>
        </Card>
        <Card className="card" style={{background:'#34063a'}}>
            <img src="https://images.unsplash.com/photo-1666287415044-2b28ebd6f96f" alt="" style={{padding:10 , width:210 , height:180}} />
            <h6 className="title__playlist">Sleep</h6>
            <p className="description__playlist">Gentle ambient piano to help you fall asleep.</p>
        </Card>
        </div>
        <p className="title__playlist--main">Выбор редакции(чарты)</p>
        <div className="wrapper__playlist--recomend">
        <Card className="card" style={{background:'#34063a'}}>
            <img src="https://s1.1zoom.ru/big7/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_2560x1600.jpg" alt="" style={{padding:10 , width:210 , height:180}} />
            <h6 className="title__playlist">Топ-50 (Беларусь)</h6>
            <p className="description__playlist">Треки, популярные сейчас в Беларуси</p>
        </Card>
        <Card className="card" style={{background:'#34063a'}}>
            <img src="https://mobimg.b-cdn.net/v3/fetch/4a/4af0bcc2b0c34fd573eca9f1be9ab245.jpeg?w=1470&r=0.5625" alt="" style={{padding:10 , width:210 , height:180}} />
            <h6 className="title__playlist">Топ-50 (в мире)</h6>
            <p className="description__playlist">Треки популярные сейчас во всём мире</p>
        </Card>
        <Card className="card" style={{background:'#34063a'}}>
            <img src="https://mobimg.b-cdn.net/v3/fetch/a3/a34c8080eae52f4c2ef90d98e0ce3879.jpeg" alt="" style={{padding:10 , width:210 , height:180}} />
            <h6 className="title__playlist">Beast mode</h6>
            <p className="description__playlist">Get your beast mode on!</p>
        </Card>
        </div>
        <footer className="line"/>
        </div>
    )
}

export default Home