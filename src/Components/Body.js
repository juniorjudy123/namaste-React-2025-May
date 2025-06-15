import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { resList } from '../utils/mockData'

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([
        {
            "info": {
                "id": "524633",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/5/fbc26167-021e-4780-bb3d-bf503e0cc978_524633.JPG",
                "locality": "Jacob Road",
                "areaName": "Thopumpady",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.5

            }
        },

        {
            "info": {
                "id": "546364",
                "name": "KFC",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c9480848-b381-4771-9c45-74a2eb3a7cb5_546364.JPG",
                "locality": "Nankelil House",
                "areaName": "Thopumpady",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Fast Food",
                    "Rolls & Wraps"
                ],
                "avgRating": 3,

            }
        }
    ])
    return (
        <div className="body">
            <div className="filter">
                <button
                    className='filter-btn'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4)
                        setListOfRestaurants(filteredList)
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}
export default Body