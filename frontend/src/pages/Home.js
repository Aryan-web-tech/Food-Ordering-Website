import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Navbar from '../components/Navbar';


export default function Home() {
    const [search, setSearch] = useState('')
    const [foodItem, setFooditem] = useState([]);
    const [foodCat, setFoodcat] = useState([]); // we pass array as we want to use map func which can be used only on array and not obj({})

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/foodData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            response = await response.json();

            setFooditem(response.food_items);
            setFoodcat(response.food_category);
            console.log(foodItem.length);

        } catch (error) {
            console.error("Error fetching data:", error);
            alert("An error occurred while fetching data");
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar/>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-caption" style={{ zIndex: '10' }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://i.ytimg.com/vi/jx4AhF_KPOs/maxresdefault.jpg" className="d-block w-100" alt="..." style={{ height: '800px', objectFit: 'contain !important', filter: "brightness(30%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://ranveerbrar.com/wp-content/uploads/2022/06/Veg-crispy.jpg" className="d-block w-100" alt="..." style={{ height: '800px', objectFit: 'contain !important', filter: "brightness(30%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.dailymail.co.uk/i/pix/2017/11/08/16/4623608900000578-0-image-a-9_1510156892900.jpg" className="d-block w-100" alt="..." style={{ height: '800px', objectFit: 'contain !important', filter: "brightness(30%)" }} />
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


            <div className='container'>
                {
                    foodCat.length ? foodCat.map((data) => {
                        return (
                            <div className='row mb-3'>
                                <div key={data._id} className="fs-3 m-3">
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {
                                    foodItem.length ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && item.name && (item.name.toLowerCase().includes(search.toLowerCase()))).map(
                                        filterItems => {
                                            return (
                                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                    <Card
                                                        foodItem={filterItems}
                                                        options={filterItems.options}
                                                    />
                                                </div>
                                            )
                                        }
                                    ) : <div>No such data</div>
                                }
                            </div>
                        )
                    }) : <div>No categories</div>
                }
            </div>
            <Footer />
        </div>
    )
}
//internall css is passed as object
//<hr/> gives line
