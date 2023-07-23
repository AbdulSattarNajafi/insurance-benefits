import HeroImage from './../../assets/images/about-hero.png';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className='container'>
                <div className={classes['hero__content']}>
                    <div className={classes['hero__content-text']}>
                        <h1>About Us</h1>
                        <p>
                            We believe that math is an essential tool for success in life and aim to
                            equip children with the necessary skills and mindset to excel as
                            independent thinkers.
                        </p>
                        <p>
                            This is why we started PrepBox -to fulfil fulfill our mission to build
                            confidence and first-principled thinking in children.
                        </p>
                    </div>

                    <div className={classes['hero__content-image']}>
                        <div className={classes['hero__image']}>
                            <img
                                src={HeroImage}
                                width='auto'
                                height='auto'
                                alt='PrepBox Founders'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
