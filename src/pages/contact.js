import React from 'react';
import "../scss/styles.scss";
import Layout from '../Components/Layout';
import contactBg from "../images/contact.jpg";

const contact = () => {
    return (
        <Layout>
            <div className='contactwrap'>
                <section className='contact'>
                    <img src={contactBg} alt='contactbg' />
                </section>
                <div className='mainSpacing'>
                    <div className='container'>
                        <div className='row justify-content-center align-items-center'>
                            <div className='col-lg-10'>
                                <div className='email'><i className="bi bi-envelope"></i><span>Email: </span> <a href="mailto:rumi.deb1708@gmail.com">rumi.deb1708@gmail.com</a></div>
                                <div className='phone'><i className="bi bi-headphones"></i><span>Contact: </span> <a href="tel:+919007834847">9007834847 </a> / <a href='tel:+917979741265'>7979741265</a></div>
                                <div className='linkedin'><i className="bi bi-linkedin"></i><span>Linkedin: </span> <a href='https://www.linkedin.com/in/rumi-deb-09966878' target='_blank'>linkedin.com/in/rumi-deb-09966878</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default contact;
