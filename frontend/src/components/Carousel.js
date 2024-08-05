import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-caption" style={{zIndex:'10'}}>
                            <form className="d-flex">
                               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                            </form>
                        </div>
                    <div className="carousel-item active">
                        <img src="https://i.ytimg.com/vi/jx4AhF_KPOs/maxresdefault.jpg" className="d-block w-100" alt="..." style={{ height: '800px', objectFit: 'contain !important',filter:"brightness(30%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://ranveerbrar.com/wp-content/uploads/2022/06/Veg-crispy.jpg" className="d-block w-100" alt="..." style={{ height: '800px', objectFit: 'contain !important',filter:"brightness(30%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.dailymail.co.uk/i/pix/2017/11/08/16/4623608900000578-0-image-a-9_1510156892900.jpg" className="d-block w-100" alt="..." style={{ height: '800px', objectFit: 'contain !important',filter:"brightness(30%)" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

// !important  -->> is used to override pre-existing css properties
