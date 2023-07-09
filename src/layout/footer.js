import classes from './footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className='container'>
                <div className={classes['footer-line']}></div>

                <div className={classes['footer-content']}>
                    <h5>Privacy Policy | Terms of Use | Licenses & Disclosure </h5>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                        porro quisquam est, qui dolorem ipsum quia dolor sit amet
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
