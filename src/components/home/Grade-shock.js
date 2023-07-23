import GradeImage1 from './../../assets/images/grade-1.png';
import GradeImage2 from './../../assets/images/grade-2.png';

import classes from './Grade-shock.module.css';

const GradeShock = () => {
    return (
        <section className={classes.grade}>
            <div className='container'>
                <div className={classes['grade-content']}>
                    <div className={classes['grade__text']}>
                        <h2 className='secondary-title'>“Grade-shock” is real.</h2>
                        <p>
                            The vast majority of students see their grades drop from As in middle
                            school to Bs and Cs in high school.
                        </p>
                    </div>
                    <div className={classes['grade__image']}>
                        <div className={classes['grade__image-img']}>
                            <img src={GradeImage1} width='auto' height='auto' alt='Grade' />
                        </div>
                        <div className={classes['grade__image-img']}>
                            <img src={GradeImage2} width='auto' height='auto' alt='Grade' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GradeShock;
