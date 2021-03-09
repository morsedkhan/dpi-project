import React from 'react';
import Footer from '../home/footer/Footer';
import NavigationBar from '../home/navbar/NavigationBar';

const ContactUs = () => {
    return (
        <div>
            <NavigationBar />
            <div style={{ marginBottom: '50px', backgroundColor: '#F7F7F7', textAlign: 'center', }}>
                <br />
            <h1>Contact Us</h1>
            <pre>
                Shahid Tajuddin Ahmed Sorony, Tejgaon Industrial Area, Dhaka – 1208
                <br/>
                E-mail : info@dpi.gov.bd, principal_dpi54@yahoo.com
                <br />
                URL : www.dpi.gov.bd
                <br />
                Phone : 02-58151880
            </pre>
        </div>
            <Footer />
        </div>
    );
};

export default ContactUs;