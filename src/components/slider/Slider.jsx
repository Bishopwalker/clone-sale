import {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import {sliders} from './sliders';
import {Link} from "react-router-dom";

function ImageSlider() {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [defaultImage, setDefaultImage] = useState({
        linkDefault:""
    });
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 100000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const truncateDescription = (description, limit = 20) => {
        const words = description.split(" ");
        if (words.length > limit) {
            return words.slice(0, limit).join(" ") + "...";
        }
        return description;
    };

    return (
        <div className="sliders">
            <Slider {...settings}>
                {sliders.map((item, index) => {


                    return (
                        <div className="sliderCard" key={index}>
                            <Link to={`/dumpster/${item.productId}`}>
                                <img
                                    style={{
                                        width: '375px',
                                        height: '300px',
                                    }}
                                    src={defaultImage[item.title] === item.title ? defaultImage.linkDefault : item.linkImg}
                                    alt={item.alt}
                                />
                            </Link>
                            <div className="sliderInfo">
                                <h3>{item.title}</h3>
                                <p style={{ color: 'white' }}>
                                    {showFullDescription ? item.description : truncateDescription(item.description)}
                                </p>
                                <button onClick={() => setShowFullDescription(!showFullDescription)}>
                                    {showFullDescription ? "Show Less" : "Show More"}
                                </button>
                                <div className="price">
                                    <span>${item.price}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}




export default ImageSlider;

