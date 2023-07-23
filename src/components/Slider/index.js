import Slider from 'react-slick';
import SliderItem from './Slider-item';
import SliderImg1 from './../../assets/images/slider-1.png';
import SliderImg2 from './../../assets/images/slider-2.png';
import SliderImg3 from './../../assets/images/slider-3.png';
import SliderImg4 from './../../assets/images/slider-4.png';
import SliderImg5 from './../../assets/images/slider-5.png';
import SliderImg6 from './../../assets/images/slider-6.png';

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <Slider {...settings}>
                <SliderItem
                    label='1'
                    title='Syllabus matching'
                    text='We design the courses based on curriculum needs'
                    image={SliderImg1}
                />
                <SliderItem
                    label='2'
                    title='Watch mini-lectures'
                    text='Learn core concepts through our short mini-lectures'
                    image={SliderImg2}
                />

                <SliderItem
                    label='3'
                    title='Solve questions'
                    text='Students begin solving questions on our whiteboard while our tutors monitor'
                    image={SliderImg3}
                />

                <SliderItem
                    label='4'
                    title='Submit & get marked  '
                    text='Our tutors immediately grade and gives feedback within minutes'
                    image={SliderImg4}
                />

                <SliderItem
                    label='5'
                    title='Ask questions'
                    text='When students needs clarification, our tutors answer in real-time'
                    image={SliderImg5}
                />

                <SliderItem
                    label='6'
                    title='Review and master'
                    text='Generate similar questions of the ones you got wrong until you master the subject'
                    image={SliderImg6}
                />
            </Slider>
        </>
    );
};

export default SliderComponent;
