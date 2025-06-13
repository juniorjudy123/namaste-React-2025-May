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
        cuisines, cloudinaryImageId } = resData?.info

    console.log(resData)

    return (
        <div className="res-card">
            <img className="res-logo" alt='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
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

const resList = [
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
            "avgRating": 4.5,
            "parentId": "2456",
            "avgRatingString": "4.5",
            "totalRatingsString": "2.8K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-13 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹119"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/dominos-pizza-jacob-road-thopumpady-rest524633",
            "type": "WEBLINK"
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
            "avgRating": 4.5,
            "favourite": true,
            "parentId": "547",
            "avgRatingString": "4.5",
            "totalRatingsString": "3.2K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹165 OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/kfc-nankelil-house-thopumpady-rest546364",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "810722",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/357ba2f6-a43f-41e1-a64c-62114e6236db_810722.JPG",
            "locality": "Mukkadan Strip Mall",
            "areaName": "Willington Island",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.7,
            "parentId": "195515",
            "avgRatingString": "4.7",
            "totalRatingsString": "121",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 6.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "6.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-13 23:59:00",
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
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/starbucks-coffee-mukkadan-strip-mall-willington-island-rest810722",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "747573",
            "name": "Wow! China",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/a604c836-56ca-4b39-900d-c1e3ccbec4a6_747573.JPG",
            "locality": "Kazhutumuttu",
            "areaName": "Thoppumpady",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "fastfood",
                "Beverages",
                "Snacks"
            ],
            "avgRating": 4.3,
            "favourite": true,
            "parentId": "226836",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.0K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 00:00:00",
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
                "header": "₹165 OFF",
                "subHeader": "ABOVE ₹549",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/wow-china-kazhutumuttu-thoppumpady-rest747573",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "240093",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/f7f5b9b0-9eaf-42e1-9cf5-ff2db542e0bd_240093.JPG",
            "locality": "Fort Kochi",
            "areaName": "Fort Kochi",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.4,
            "parentId": "721",
            "avgRatingString": "4.4",
            "totalRatingsString": "2.0K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹165 OFF",
                "subHeader": "ABOVE ₹699",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.5",
                    "ratingCount": "1.0K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/pizza-hut-fort-kochi-rest240093",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "826567",
            "name": "Pastas By Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/e77822ad-4e01-4a38-ae6b-f50cd19352dd_826567.JPG",
            "locality": "KB Jacob Rd",
            "areaName": "Fort Kochi",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pastas"
            ],
            "avgRating": 4.2,
            "parentId": "306806",
            "avgRatingString": "4.2",
            "totalRatingsString": "49",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 01:00:00",
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
                "header": "₹66 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/pastas-by-pizza-hut-kb-jacob-rd-fort-kochi-rest826567",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "64001",
            "name": "Chicking",
            "cloudinaryImageId": "86f52324ecee5fc94cbf63c4a568b672",
            "locality": "Thoppumpady",
            "areaName": "Thoppumpady",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Snacks",
                "Grill",
                "Fast Food",
                "American",
                "Pizzas",
                "Mexican",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "251",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-13 23:55:00",
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
                "subHeader": "AT ₹90"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.8",
                    "ratingCount": "1.2K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/chicking-thoppumpady-rest64001",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "53355",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/59a6c48a-e48d-485c-938b-34f0e9857c6e_53355.jpg",
            "locality": "MG Road",
            "areaName": "MG Road",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.6,
            "parentId": "166",
            "avgRatingString": "4.6",
            "totalRatingsString": "33K+",
            "sla": {
                "deliveryTime": 53,
                "lastMileTravel": 12.9,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "12.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 00:00:00",
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
                "header": "₹75 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "2.3K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/burger-king-mg-road-rest53355",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "57240",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/7f991e98-e1e4-4e38-9844-cb6fe3a8ad1a_57240.jpg",
            "locality": "MG Road",
            "areaName": "MG Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "23K+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 12.9,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "12.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 02:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "7.6K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/mcdonalds-mg-road-rest57240",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "704921",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Ravipuram",
            "areaName": "M G Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "61955",
            "avgRatingString": "4.3",
            "totalRatingsString": "2.3K+",
            "sla": {
                "deliveryTime": 49,
                "lastMileTravel": 10.2,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "10.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 01:00:00",
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
                "header": "65% OFF",
                "subHeader": "UPTO ₹125",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/chinese-wok-ravipuram-m-g-road-rest704921",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "650941",
            "name": "Plan B",
            "cloudinaryImageId": "6d57a1333281cb074256eb0934b1a2da",
            "locality": "Fort Kochi",
            "areaName": "Fort Kochi",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Continental",
                "Burgers",
                "Fast Food"
            ],
            "avgRating": 4.4,
            "parentId": "2212",
            "avgRatingString": "4.4",
            "totalRatingsString": "102",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-13 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹165 OFF",
                "subHeader": "ABOVE ₹899",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.9",
                    "ratingCount": "114"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/plan-b-fort-kochi-rest650941",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "57937",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/1417668b-f71a-45eb-a328-19330612f2eb_57937.JPG",
            "locality": "Marine Drive",
            "areaName": "MG Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Ice Cream"
            ],
            "avgRating": 4.8,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.8",
            "totalRatingsString": "429",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 13.1,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "13.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-13 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹65 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/baskin-robbins-ice-cream-desserts-marine-drive-mg-road-rest57937",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "367962",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "fallovrabd8hftqphizq",
            "locality": "Elamkulam",
            "areaName": "Elamkulam",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "4961",
            "avgRatingString": "4.4",
            "totalRatingsString": "11K+",
            "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 12.3,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "12.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-13 23:59:00",
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
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "1.0K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/la-pinoz-pizza-elamkulam-rest367962",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "57445",
            "name": "Subway",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/3ec41225-1b07-4a3b-a824-65607702b001_57445.jpg",
            "locality": "Panampilly Nagar",
            "areaName": "Elamkulam",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "sandwich",
                "Salads",
                "wrap",
                "Healthy Food"
            ],
            "avgRating": 4.5,
            "parentId": "2",
            "avgRatingString": "4.5",
            "totalRatingsString": "13K+",
            "sla": {
                "deliveryTime": 47,
                "lastMileTravel": 12.4,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "12.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 03:00:00",
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
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/subway-panampilly-nagar-elamkulam-rest57445",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "704922",
            "name": "Big Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_704922.JPG",
            "locality": "Ravipuram",
            "areaName": "M G Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.4,
            "favourite": true,
            "parentId": "434792",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.6K+",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 10.2,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "10.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 01:00:00",
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
                "header": "65% OFF",
                "subHeader": "UPTO ₹125",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/big-bowl-ravipuram-m-g-road-rest704922",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "376052",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/91bfe909-b0a6-4e37-9d81-42f8c360dfde_376052.jpg",
            "locality": "Parambithara Road",
            "areaName": "Parambithara road and K C Joseph Road",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "6249",
            "avgRatingString": "4.7",
            "totalRatingsString": "2.9K+",
            "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 10.2,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "10.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "65% OFF",
                "subHeader": "UPTO ₹125",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/nic-ice-creams-parambithara-road-parambithara-road-and-k-c-joseph-road-rest376052",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "747574",
            "name": "Wow! Momo",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/73a36377-d343-45f5-ad26-6c4bd9dc9d47_747574.JPG",
            "locality": "Kazhutumuttu",
            "areaName": "Thoppumpady",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Momos",
                "Chinese",
                "fastfood",
                "Asian",
                "Beverages"
            ],
            "avgRating": 4.5,
            "favourite": true,
            "parentId": "1776",
            "avgRatingString": "4.5",
            "totalRatingsString": "860",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 00:00:00",
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
                "header": "₹165 OFF",
                "subHeader": "ABOVE ₹649",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
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
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/wow-momo-kazhutumuttu-thoppumpady-rest747574",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "121419",
            "name": "Palaaram",
            "cloudinaryImageId": "mz69ogfrejetsashmlrz",
            "locality": "Kadavanthra",
            "areaName": "Vyttila",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Chinese",
                "Arabian",
                "Kerala"
            ],
            "avgRating": 4.6,
            "parentId": "18945",
            "avgRatingString": "4.6",
            "totalRatingsString": "24K+",
            "sla": {
                "deliveryTime": 52,
                "lastMileTravel": 12.5,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "12.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-13 22:45:00",
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
                "subHeader": "AT ₹159"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "3.8K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/palaaram-kadavanthra-vyttila-rest121419",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "73202",
            "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/2d40611e-e672-4253-aee8-2ee05dcaf7df_73202.jpg",
            "locality": "Ravipuram",
            "areaName": "Ravipuram",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Beverages",
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "5655",
            "avgRatingString": "4.3",
            "totalRatingsString": "4.1K+",
            "sla": {
                "deliveryTime": 66,
                "lastMileTravel": 10.2,
                "serviceability": "SERVICEABLE",
                "slaString": "65-70 mins",
                "lastMileTravelString": "10.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹165 OFF",
                "subHeader": "ABOVE ₹549",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "977"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/frozen-bottle-milkshakes-desserts-and-ice-cream-ravipuram-rest73202",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "337924",
            "name": "Ibaco",
            "cloudinaryImageId": "w3iwvcx2wmoj5lwihh8p",
            "locality": "Panampilly Nagar",
            "areaName": "Panampilly Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Ice Cream"
            ],
            "avgRating": 4.7,
            "parentId": "3481",
            "avgRatingString": "4.7",
            "totalRatingsString": "717",
            "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 10.8,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "10.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-14 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹75 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.5",
                    "ratingCount": "517"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-1f15077c-d2ee-4da7-9c70-8ecaf02d57da"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kochi/ibaco-panampilly-nagar-rest337924",
            "type": "WEBLINK"
        }
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <h2>search</h2>
            </div>
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
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