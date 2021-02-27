import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import News from '../news/News';
// import '../../home/home.css'

const Notice = () => {
    return (
        <div style={{ backgroundColor: '#D2D2D2', marginTop: '-10px', padding: '20px' }}>

            <>
                <Row>

                    <Col xs={12} md={6}>
                        <div style={{}}>
                            <News />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <br/>
                        <h3>Notices</h3>
                        <div style={{display: 'flex', alignItems: 'center',backgroundColor: '#fff', padding:'10px', borderRadius:'5px', marginBottom:'7px'}}>
                            <h3 className="noticesCss">13 Feb</h3>
                            <h5 className="maineNotice">২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>
                            <h3 className="noticesCss2">13 Feb</h3>
                            <h5 className="maineNotice"> ২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px'}}>
                            <h3 className="noticesCss3">13 Feb</h3>
                            <h5 className="maineNotice">ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং ১ম পর্ব ক্লাশের বিষয়ভিত্তিক ZOOM আইডি ও পাসকোড যা ১৭/০১/২০২১ তারিখ থেকে কার্যকর</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px' }}>
                            <h3 className="noticesCss4">21 Feb</h3>
                            <h5 className="maineNotice">৪র্থ ও ৬ষ্ঠ পর্ব কম্পিউটার ছাত্র-ছাত্রীদের অনলাইন ক্লাশ রুটিন</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px' }}>
                            <h3 className="noticesCss5">20 Feb</h3>
                            <h5 className="maineNotice">২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px' }}>
                            <h3 className="noticesCss">18 Feb</h3>
                            <h5 className="maineNotice">৮ম পর্ব(কম্পিউটার) শিক্ষার্থীদের জুম মিটিং এর নোটিশ</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '7px' }}>
                            <h3 className="noticesCss6">17 Feb</h3>
                            <h5 className="maineNotice">Practical Exam. Routine (8th Sem. Computer Technology)</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '7px' }}>
                            <h3 className="noticesCss6">17 Feb</h3>
                            <h5 className="maineNotice">Practical Exam. Routine (8th Sem. Computer Technology)</h5>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', marginTop:'10px'}}>
                            <Button size="small" color="primary">Next</Button>
                            <Button size="small" color="primary">Previous</Button>
                        </div>
                    </Col>
                </Row>
            </>


        </div>
    );
};

export default Notice;