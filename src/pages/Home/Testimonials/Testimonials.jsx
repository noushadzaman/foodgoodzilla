import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://foodgoodzilla-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"What our client say"}
                heading={"Testimonials"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center m-16 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8">{review.details}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;