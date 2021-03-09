// import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Footer from '../home/footer/Footer';
import NavigationBar from '../home/navbar/NavigationBar';
import newImage from '../../assets/departmentImg.jpeg'
import { Col, Row, Container, Button} from 'react-bootstrap';
import education from '../../assets/education.jpeg'
import styles from './news.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// import { Container, Row Col} from 'react-bootstrap';
const NewsAndEvent = () => {
    return (
        <>
            <NavigationBar />
            <div style={{ marginBottom: '50px', backgroundColor: '#F7F7F7',}}>
                <Container spacing={3}>
                    <Row>
                        <Col xs={12} md={8}>
                            <div style={{padding:'30px', backgroundColor: '#fff',}}>
                                <img width="100%"  src={newImage} alt="" />
                                <p style={{fontSize:'11px', marginTop:'10px'}}>
                                    বাংলাদেশ সচিবালয়ের অর্থ বিভাগের সভা কক্ষে অর্থ মন্ত্রণালয়ের অর্থ বিভাগ ও অগ্রণী ব্যাংকের সঙ্গে যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের ত্রিপক্ষীয় সমঝোতা স্মারক চুক্তি সই হয়। ছবি: সংগৃহীত
                                </p>
                                <br/>
                                <h3 style={{fontWeight:'700', color:'#000', fontSize:'20px'}}>গৃহ নির্মাণ ঋণের জন্য যবিপ্রবির ত্রিপক্ষীয় চুক্তি সই</h3>
                                
                                <span>Mar 01, 2021</span>

                                <hr/>

                                <div style={{display: 'flex', alignItems: 'center',}}>
                                    <FacebookIcon  style={{marginTop: '-11px', marginRight:'7px'}}/>
                                    <p style={{marginRight:'10px'}}>facebook</p>
                                    <LinkedInIcon style={{ marginTop: '-11px', marginRight:'7px'}} />
                                    <p style={{ marginRight: '10px' }}>linkedin</p>
                                    <TwitterIcon style={{ marginTop: '-11px', marginRight:'7px'}}/>
                                    <p style={{ marginRight: '10px' }}>twitter</p>
                                </div>

                                <p>
                                    <strong>(যশোর: ১ মার্চ, ২০২১ খ্রি.):</strong>   শিক্ষক, কর্মকর্তা ও কর্মচারীদের ৪ শতাংশ সরল সুদে গৃহ নির্মাণ ঋণের জন্য অর্থ মন্ত্রণালয়ের অর্থ বিভাগ ও অগ্রণী ব্যাংকের সাথে যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের (যবিপ্রবি) একটি ত্রিপক্ষীয় সমঝোতা স্মারক চুক্তি সই হয়েছে। গতকাল রোববার বাংলাদেশ সচিবালয়ের অর্থ বিভাগের সভা কক্ষে এ চুক্তি সই হয়। 
                                </p>
                                <br/>
                                <p>
                                    দেশের পাবলিক বিশ্ববিদ্যালয়সমূহের জন্য ব্যাংকিং ব্যবস্থার মাধ্যমে গৃহ নির্মাণ ঋণ নীতিমালার ২০১৯-এর আওতায় গৃহ নির্মাণ ঋণ প্রদান কার্যক্রম শুরু হয়েছে। এরই প্রেক্ষিতে বাংলাদেশ সচিবালয়ের অর্থ বিভাগের সভা কক্ষে অর্থ মন্ত্রণালয়ের অর্থ বিভাগ ও অগ্রণী ব্যাংকের সঙ্গে যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের ত্রিপক্ষীয় সমঝোতা স্মারক চুক্তি সই হয়। 
                                </p>

                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div style={{ padding: '30px', }}>
                                <h3 style={{ backgroundColor: '#F4E90A', padding:'10px', fontSize:'18px', fontWeight:'700'}}>অন্যান্য সংবাদ</h3>
                                <div style={{display:'flex', alignItems:'center' }}>
                                    <img style={{ width: '110px', height: '70px', marginRight: '18px'}} src={education} alt="" />
                                    <h3 style={{ fontSize: '16px' }}>শিক্ষক, কর্মকর্তা ও কর্মচারীদের ৪ শতাংশ <br />
                                        <span style={{fontSize: '11px'}}> 04 mar. 2021</span> </h3>
                                    
                                </div>
                                <Button className={styles.buttonDesign}> Load More</Button>
                            </div>

                            <div style={{ padding: '30px', }}>
                                <h3 style={{ backgroundColor: '#F4E90A', padding: '10px', fontSize: '18px', fontWeight: '700' }}>অন্যান্য সংবাদ</h3>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ width: '110px', height: '70px', marginRight: '18px' }} src={education} alt="" />
                                    <h3 style={{ fontSize: '16px' }}>শিক্ষক, কর্মকর্তা ও কর্মচারীদের ৪ শতাংশ <br />
                                        <span style={{ fontSize: '11px' }}> 04 mar. 2021</span> </h3>

                                </div>
                                <Button className={styles.buttonDesign}> Load More</Button>
                            </div>

                            <div style={{ padding: '30px', }}>
                                <h3 style={{ backgroundColor: '#F4E90A', padding: '10px', fontSize: '18px', fontWeight: '700' }}>অন্যান্য সংবাদ</h3>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ width: '110px', height: '70px', marginRight: '18px' }} src={education} alt="" />
                                    <h3 style={{ fontSize: '16px' }}>শিক্ষক, কর্মকর্তা ও কর্মচারীদের ৪ শতাংশ <br />
                                        <span style={{ fontSize: '11px' }}> 04 mar. 2021</span> </h3>

                                </div>
                                <Button className={styles.buttonDesign}> Load More</Button>
                            </div>

                            <div style={{ padding: '30px', }}>
                                <h3 style={{ backgroundColor: '#F4E90A', padding: '10px', fontSize: '18px', fontWeight: '700' }}>অন্যান্য সংবাদ</h3>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ width: '110px', height: '70px', marginRight: '18px' }} src={education} alt="" />
                                    <h3 style={{ fontSize: '16px' }}>শিক্ষক, কর্মকর্তা ও কর্মচারীদের ৪ শতাংশ <br />
                                        <span style={{ fontSize: '11px' }}> 04 mar. 2021</span> </h3>

                                </div>
                                <Button className={styles.buttonDesign}> Load More</Button>
                            </div>

                            <div style={{ padding: '30px', }}>
                                <h3 style={{ backgroundColor: '#F4E90A', padding: '10px', fontSize: '18px', fontWeight: '700' }}>অন্যান্য সংবাদ</h3>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ width: '110px', height: '70px', marginRight: '18px' }} src={education} alt="" />
                                    <h3 style={{ fontSize: '16px' }}>শিক্ষক, কর্মকর্তা ও কর্মচারীদের ৪ শতাংশ <br />
                                        <span style={{ fontSize: '11px' }}> 04 mar. 2021</span> </h3>

                                </div>
                                <Button className={styles.buttonDesign}> Load More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <Grid container spacing={4}>
                    <Grid xs={12} md={6}>
                        <div style={{marginTop: '10px'}}>
                            <img width="100%" height="auto"src={newImage} alt=""/>
                        </div>
                        <h1>This is NewsAndEvent component</h1>

                    </Grid>
                    <Grid xs={12} md={6}>
                        <div style={{ marginTop: '10px' }}>
                            <h1>This is NewsAndEvent component</h1>

                        </div>
                    </Grid>
                </Grid> */}

            </div>
            
            <Footer />

        </>
    );
};

export default NewsAndEvent;