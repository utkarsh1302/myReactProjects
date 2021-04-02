import React from "react";
import './FoodDelivery.css';

const data = [{
    title: "Up to 365 days/year",
    content: "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.",
    icon:"infinite-sharp",
},
{
    title: "Ready in 20 minutes",
    content: "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.",
    icon:"stopwatch-sharp",
}, {
    title: "100% organic",
    content: "All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!",
    icon:"nutrition-sharp",

}, {
    title: "Order anything",
    content: "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!",
    icon:"cart-sharp",
}];

function FoodDelivery(props) {
    return (
        <div className="section__FoodDelivery">
        <div className='row'>
            <h2>Get food fast — not fast food.</h2>
            <p>
                Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
            </p>
        </div>
        <div className="row">
            {data.map((data)=>{
                return(
                    <div className="col span-1-of-4">
                        <ion-icon name={data.icon}></ion-icon>
                        <h3>{data.title}</h3>
                        <p>{data.content}</p>
                </div>
                );
            })}

        </div>
        </div>    
    );
    
}

export default FoodDelivery;