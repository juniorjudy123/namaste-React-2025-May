import React from 'react'
import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
    const { resData } = props
    const { name,
        areaName,
        avgRating,
        costForTwo,
        cuisines, cloudinaryImageId } = resData?.info

    return (
        <div className="res-card">
            <img className="res-logo" alt='res-logo' src={`${CDN_URL}${cloudinaryImageId}`}></img>
            <h3>{name}</h3>

            <h4 className="cuisines">{cuisines.join(' , ')}</h4>


            <ul>
                <li>
                    <h4>rating: {avgRating}</h4>
                </li>
                <li>
                    <h4>{costForTwo}</h4>
                </li>
            </ul>

        </div>
    )
}

export default RestaurantCard