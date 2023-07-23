import TutorsAreaImage from './../../assets/images/tutors-area.png';
import classes from './Tutors-area.module.css';

const TutorsArea = () => {
    return (
        <section className={classes.tutors}>
            <div className='container'>
                <div className={classes['tutors-content']}>
                    <div className={classes['tutors__image']}>
                        <img src={TutorsAreaImage} width='auto' height='auto' alt='Tutors Area' />
                    </div>
                    <div className={classes['tutors__text']}>
                        <h2 className='secondary-title'>
                            Good tutors are rare. Are you wasting time trying to find a tutor who:
                        </h2>

                        <ul className={classes['tutors__list']}>
                            <li>are experienced and vetted </li>
                            <li>can teach your curriculum</li>
                            <li>graduated from your dream universities?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TutorsArea;
