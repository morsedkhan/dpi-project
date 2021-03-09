import React from 'react';
import Footer from '../home/footer/Footer';
import NavigationBar from '../home/navbar/NavigationBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
// import notice from '../../components/'
// import Notice from '../home/notice/Notice';
import notice from '../../components/home/notice/notice.module.css'
// import notice from './notice.module.css'





const AllNotic = () => {
    return (
        <div>
            <NavigationBar />
            <div style={{ marginBottom: '50px', backgroundColor: '#F7F7F7', textAlign: 'center', }}>
                <br />
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <br />
                            <h3 style={{ color: '#007BFF' }}>Notices</h3>
                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginBottom: '7px' }}>
                                <h3 className={notice.noticesCss1}>13 Feb</h3>
                                <h5 className={notice.maineNotice}>২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>
                                <h3 className={notice.noticesCss6}>13 Feb</h3>
                                <h5 className={notice.maineNotice}> ২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '7px' }}>
                                <h3 className={notice.noticesCss1}>13 Feb</h3>
                                <h5 className={notice.maineNotice}>ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং ১ম পর্ব ক্লাশের বিষয়ভিত্তিক ZOOM আইডি ও পাসকোড যা ১৭/০১/২০২১ তারিখ থেকে কার্যকর</h5>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '7px' }}>
                                <h3 className={notice.noticesCss6}>21 Feb</h3>
                                <h5 className={notice.maineNotice}>৪র্থ ও ৬ষ্ঠ পর্ব কম্পিউটার ছাত্র-ছাত্রীদের অনলাইন ক্লাশ রুটিন</h5>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '7px' }}>
                                <h3 className={notice.noticesCss1}>20 Feb</h3>
                                <h5 className={notice.maineNotice}>২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '7px' }}>
                                <h3 className={notice.noticesCss6}>18 Feb</h3>
                                <h5 className={notice.maineNotice}>৮ম পর্ব(কম্পিউটার) শিক্ষার্থীদের জুম মিটিং এর নোটিশ</h5>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '7px' }}>
                                <h3 className={notice.noticesCss1}>17 Feb</h3>
                                <h5 className={notice.maineNotice}>Practical Exam. Routine (8th Sem. Computer Technology)</h5>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '7px' }}>
                                <h3 className={notice.noticesCss6}>17 Feb</h3>
                                <h5 className={notice.maineNotice}>Practical Exam. Routine (8th Sem. Computer Technology)</h5>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                                <Button size="small" color="primary">Previous</Button>
                                {/* <Button size="small" color="primary">Previous</Button> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br />

              </div>
            <Footer />

        </div>
    );
};

export default AllNotic;