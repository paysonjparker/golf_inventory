import React from 'react';
// import ReactDOM from 'react-dom';

const Card = (props) => {

    

    return (
        <div className="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div className="card mb-4 box-shadow" style={{ width: '18rem', height: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{props.brand}</h6>
                            <p className="card-text">{props.description}</p>
                            <h5 className="card-title">${props.price}</h5>
                            <a href={`delete/${props.productId}`} className="card-link">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card;