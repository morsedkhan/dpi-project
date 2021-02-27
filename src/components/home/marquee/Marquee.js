import React from 'react';
import { Container } from 'react-bootstrap';
// import './home.css'
import './marquee.css'
const Marquee = () => {
    return (
        
            <Container>

                <div class="row" style={{height:'200px'}}>
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <section class="last-news wow fadeInDown" style={{ backgroundColor:'#76b8cc'}}>
                            <div class="news-wrapper">
                                <span class="news-title delay-animated slidein" style={{fontSize:'17px'}}>
                                    Highlighted
                                   </span>
                              <div class="top-news"
                              ><marquee style={{marginTop:'5px', color:'#fff'}}>
                                    “ছাত্র-ছাত্রীদেরকে Digital Content ডাউনলোড করে পড়াশুনা অব্যাহত রাখার জন্য বলা যাচ্ছে”
                              </marquee>

                                </div>
                             </div>
                     </section>
                  </div>
              </div>
            </Container>
    );
};

export default Marquee;