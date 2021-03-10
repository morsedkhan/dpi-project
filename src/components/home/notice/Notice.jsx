// 










import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import News from '../news/News';
import NewsDialoug from '../newsDialoug/NewsDialoug';
// import '../../home/'
import notice from './notice.module.css'

const Notice = () => {
    const noticeData = [
        {
            date: '13 feb',
            title: '২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)'
        },

         {
            date: '15 feb',
             title: 'ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং ১ম পর্ব ক্লাশের বিষয়ভিত্তিক ZOOM আইডি ও পাসকোড যা ১৭/০১/২০২১ তারিখ থেকে কার্যকর'
        },

         {
            date: '17 feb',
             title: '৪র্থ ও ৬ষ্ঠ পর্ব কম্পিউটার ছাত্র-ছাত্রীদের অনলাইন ক্লাশ রুটিন'
        },
        {
            date: '27 feb',
            title: '৮ম পর্ব(কম্পিউটার) শিক্ষার্থীদের জুম মিটিং এর নোটিশ'
        },
        {
            date: '29 feb',
            title: 'Practical Exam. Routine (8th Sem. Computer Technology)'
        },

        {
            date: '12 feb',
            title: 'ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং ১ম পর্ব ক্লাশের বিষয়ভিত্তিক ZOOM আইডি ও পাসকোড যা ১৭/০১/২০২১ তারিখ থেকে কার্যকর'
        },

         {
            date: '16 feb',
             title: '৪র্থ ও ৬ষ্ঠ পর্ব কম্পিউটার ছাত্র-ছাত্রীদের অনলাইন ক্লাশ রুটিন'
        },
        {
            date: '16 feb',
            title: '৪র্থ ও ৬ষ্ঠ পর্ব কম্পিউটার ছাত্র-ছাত্রীদের অনলাইন ক্লাশ রুটিন'
        }

    ]
    return (

        <div className={notice.BgImageInNtc} style={{ backgroundColor: '#f7f7f7', marginTop: '-10px', padding: '20px' ,width:'100%' }}>
            <Container>
                <Row>

                    <Col xs={12} md={7}>
                        <div style={{}}>
                            <News />
                        </div>
                    </Col>
                    <Col xs={12} md={5}>
                        <br/>
                        <h3 style={{ color: '#007BFF' }}>Notices</h3>
                        {
                            noticeData.map((data, i) => {
                                return (
                                    <NewsDialoug output={data.dialoug}>
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginBottom: '7px' }}>
                                        <h3 className={notice.noticesCss1}>{data.date}</h3>
                                        <h5 className={notice.maineNotice}>{data.title}</h5>
                                    </div>
                                    </NewsDialoug>
                                )
                               
                            })
                        }
                        {/* <div style={{display: 'flex', alignItems: 'center',backgroundColor: '#fff', padding:'10px', borderRadius:'5px', marginBottom:'7px'}}>
                            <h3 className={notice.noticesCss1}>13 Feb</h3>
                            <h5 className={notice.maineNotice}>২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>
                            <h3 className={notice.noticesCss6}>13 Feb</h3>
                            <h5 className={notice.maineNotice}> ২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px'}}>
                            <h3 className={notice.noticesCss1}>13 Feb</h3>
                            <h5 className={notice.maineNotice}>ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং ১ম পর্ব ক্লাশের বিষয়ভিত্তিক ZOOM আইডি ও পাসকোড যা ১৭/০১/২০২১ তারিখ থেকে কার্যকর</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px' }}>
                            <h3 className={notice.noticesCss6}>21 Feb</h3>
                            <h5 className={notice.maineNotice}>৪র্থ ও ৬ষ্ঠ পর্ব কম্পিউটার ছাত্র-ছাত্রীদের অনলাইন ক্লাশ রুটিন</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px' }}>
                            <h3 className={notice.noticesCss1}>20 Feb</h3>
                            <h5 className={notice.maineNotice}>২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px' }}>
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
                        </div> */}

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', marginTop:'10px'}}>
                            <Button size="small" color="primary">Next</Button>
                            <Button size="small" color="primary">Previous</Button>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Notice;






// import React from 'react';
// import { Col, Container, Row, Button } from 'react-bootstrap';
// import News from '../news/News';
// // import '../../home/'
// import notice from './notice.module.css'
// import {

//     Link
// } from "react-router-dom";
// import NewsDialoug from '../newsDialoug/NewsDialoug';

// const Notice = () => {

//     const Notice = () => {
//         const noticeData = [
//             {
//                 date: '13 feb',
//                 title: '২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)'
//             },

//             {
//                 date: '15 feb',
//                 title: '২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)'
//             },

//             {
//                 date: '17 feb',
//                 title: '২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)'
//             },
//             {
//                 date: '27 feb',
//                 title: '২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)'
//             },
//             {
//                 date: '16 feb',
//                 title: '২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)'
//             },
//         ]


//     return (
//         <div className={notice.BgImageInNtc} style={{ backgroundColor: '#f7f7f7', marginTop: '-10px', padding: '20px' ,width:'100%' }}>
//             <Container>
//                 <Row>

//                     <Col xs={12} md={7}>
//                         <div style={{}}>
//                             <News />
//                         </div>
//                     </Col>
//                     <Col xs={12} md={5}>
//                         <br />
//                         <h3 style={{ color: '#007BFF' }}>Notices</h3>

//                         {/* {
//                             noticeData.map((data, i) => {
//                                 <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginBottom: '7px' }}>
//                                     <h3 className={notice.noticesCss1}>13 Feb</h3>
//                                     <h5 className={notice.maineNotice}>২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
//                                 </div>
//                             })
//                         }; */}

//                         {/* <NewsDialoug></NewsDialoug> */}
//                         {/* <div style={{display: 'flex', alignItems: 'center',backgroundColor: '#fff', padding:'10px', borderRadius:'5px', marginBottom:'7px'}}>
//                             <h3 className={notice.noticesCss1}>13 Feb</h3>
//                             <h5 className={notice.maineNotice}>২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
//                         </div>

//                         <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>
//                             <h3 className={notice.noticesCss6}>13 Feb</h3>
//                             <h5 className={notice.maineNotice}> ২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
//                         </div>

//                         <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px'}}>
//                             <h3 className={notice.noticesCss1}>13 Feb</h3>
//                             <h5 className={notice.maineNotice}>ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং ১ম পর্ব ক্লাশের বিষয়ভিত্তিক ZOOM আইডি ও পাসকোড যা ১৭/০১/২০২১ তারিখ থেকে কার্যকর</h5>
//                         </div>

//                         <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px' }}>
//                             <h3 className={notice.noticesCss6}>21 Feb</h3>
//                             <h5 className={notice.maineNotice}>৪র্থ ও ৬ষ্ঠ পর্ব কম্পিউটার ছাত্র-ছাত্রীদের অনলাইন ক্লাশ রুটিন</h5>
//                         </div>

//                         <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px' }}>
//                             <h3 className={notice.noticesCss1}>20 Feb</h3>
//                             <h5 className={notice.maineNotice}>২য় পর্বের ব্যবহারিক পরীক্ষার রুটিন ( কম্পিউটার, ইলেক্ট্রিক্যাল, সিভিল এবং আর্কিটেকচার)</h5>
//                         </div>

//                         <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop:'7px' }}>
//                             <h3 className={notice.noticesCss6}>18 Feb</h3>
//                             <h5 className={notice.maineNotice}>৮ম পর্ব(কম্পিউটার) শিক্ষার্থীদের জুম মিটিং এর নোটিশ</h5>
//                         </div>

//                         <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '7px' }}>
//                             <h3 className={notice.noticesCss1}>17 Feb</h3>
//                             <h5 className={notice.maineNotice}>Practical Exam. Routine (8th Sem. Computer Technology)</h5>
//                         </div>

//                         <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '7px' }}>
//                             <h3 className={notice.noticesCss6}>17 Feb</h3>
//                             <h5 className={notice.maineNotice}>Practical Exam. Routine (8th Sem. Computer Technology)</h5>
//                         </div>
//                          */}
//                         <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', marginTop:'10px'}}>

//                             <Button size="small" color="primary">Previous</Button>
//                             <Link to="/allNotic">
//                                 <Button size="small" color="primary">Next</Button>
//                             </Link>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>


//         </div>
//     );
// };

// export default Notice;
