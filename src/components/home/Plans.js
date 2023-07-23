import PlansCard from '../elements/plans-card';
import PrimaryButton from '../button/Primary-button';

import classes from './Plans.module.css';

const Plans = () => {
    return (
        <section className={classes.plans} id='plans'>
            <div className='container'>
                <div className={classes['plans-title']}>
                    <h2>Our Plans</h2>
                    <p>
                        We offer weekly sessions, schoolwork help, and homework assignments! Chose a
                        plan that works best for you, feel free to contact us!
                    </p>
                </div>
                <div className={classes['plans-grid']}>
                    <PlansCard label='Basic' title='One session' isActive={false} price='$200/mo' />
                    <PlansCard
                        label='Accelerated'
                        title='Two sessions'
                        isActive={true}
                        price='$350/mo'
                    />
                    <PlansCard
                        label='Light Speed'
                        title='Unlimited sessions'
                        isActive={false}
                        price='$450/mo'
                    />
                </div>
                <div className={classes['plans-button']}>
                    <PrimaryButton text='Try for free' />
                </div>
            </div>
        </section>
    );
};

export default Plans;
