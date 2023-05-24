import React from "react";

export default function Card(props){

    return(
        <div className="col">
            <div className="card item-card">
                <div className="card-body item-body" style={{backgroundImage: `url(${props.image})`}}>
                    <h5 className="card-title item-name">{props.title}</h5>
                </div>
            </div>
        </div>
    )
}