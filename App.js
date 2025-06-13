import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'


const Header = () => {
    return <div className="header" >
        <div className="logo-container">
            <img className='logo' src="https://static.vecteezy.com/system/resources/thumbnails/002/162/648/small/pizza-fast-food-logo-or-label-free-vector.jpg" alt="navlogo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About </li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

const RestaurantCard = (props) => {
    const { resData } = props
    const { name,
        areaName,
        avgRating,
        costForTwo,
        cuisines } = resData.info

    console.log(resData)

    return (
        <div className="res-card">
            <img className="res-logo" alt='res-logo' src='https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00='></img>
            <h3>{name}</h3>

            <h4>{cuisines.join()}</h4>


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

const resObj = {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
        "id": "421108",
        "name": "Sukrutham Catering & Restaurant",
        "cloudinaryImageId": "ij5cjia84ibh5ll8pwa6",
        "locality": "Amalabhavan Road",
        "areaName": "Vyttila",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Snacks",
            "Sweets",
            "Kerala"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "234325",
        "avgRatingString": "4.6",
        "totalRatingsString": "13K+",
        "sla": {
            "deliveryTime": 50,
            "lastMileTravel": 11.2,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "11.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-06-12 23:30:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-12e03d18-ed37-4698-8403-d84babd3188f"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kochi/sukrutham-catering-and-restaurant-amalabhavan-road-vyttila-rest421108",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <h2>search</h2>
            </div>
            <div className="res-container">
                <RestaurantCard resData={resObj} />





            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="appContainer">
        <Header />
        <Body />
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)