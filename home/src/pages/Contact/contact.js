import React, { useState, useEffect } from "react";
import "./contact.css";
import { DatePicker, Input } from 'antd';
import { Card, Table, Space, Tag, PageHeader, Divider, Form, Button, notification } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined, AimOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import axiosClient from "../../apis/axiosClient";

const { Search } = Input;

const Contact = () => {
    const [delivery, setDelivery] = useState([]);
    let history = useHistory();

    return (
        <div className="wrap-categories">
            <div className="container mb-4">
                <div className="product-contact">
                    <div className="text-center mb-3">
                        <div style={{ marginTop:"20px",color: "#000", fontSize:"18px" }} className="title-content">
                            <img src={`${process.env.PUBLIC_URL}/client/img/dot-title-left.png`} alt="" /> Thông tin liên hệ <img src={`${process.env.PUBLIC_URL}/client/img/dot-title-right.png`} alt="" />
                            <hr style={{ borderColor: "black" }}  />
                            <p align="justify" style={{ fontSize: "16px", color: "blue" }}>KLEIN STORE là một trong những doanh nghiệp hàng đầu hoạt động trong lĩnh vực kinh doanh các sản phẩm dồng hồ đeo tay. Thành lập từ năm 2020 đến nay, Công ty đã tạo được chỗ đứng vững chắc trên thị trường bán buôn, bán lẻ, trở thành thương hiệu quen thuộc và là đối tác tin cậy của nhiều bạn hàng trong nước và Quốc tế. Luôn lấy yếu tố hài hòa về lợi ích làm nền tảng, lãnh đạo Công ty hiểu rằng, niềm tin của khách hàng về giá thành, chất lượng và dịch vụ là sự sống còn của Công ty. Do vậy, mọi hoạt động kinh doanh của Công ty luôn hướng tới mục tiêu tôn trọng và bảo đảm quyền lợi cho khách hàng, chinh phục khách hàng bằng chất lượng sản phẩm và dịch vụ tối ưu. Để được phục vụ tốt nhất, Quý khách vui lòng liên hệ với chúng tôi theo các thông tin sau:</p>
                            <hr style={{ borderColor: "black" }}  />
                        </div>
                    </div>
                    <div className="pro-contact-content">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <p style={{ fontSize: "20px",textAlign:"center" }} className="title-content">KLEIN WATCH</p>
                                <p>Địa chỉ: <span><a href="https://goo.gl/maps/XXXD2vTa9Yfwjok36">Số 13 LK3 90 Nguyễn Tuân
                                Thanh Xuân, Hà Nội.</a></span></p>
                                <p>Hotline: <span><a href="tel: 0876402124">0876 402 124 -</a><a href="tel: 0342 897 002"> 0342 897 002</a></span></p>
                                <p>Email: <span><a href="mailto: pvlinh.20it9@vku.udn.vn">tloven473@gmail.com</a></span></p>
                                <p>Fanpage: <span><a href="https://www.facebook.com/profile.php?id=100050436195691&locale=vi_VN">KLEIN WATCH</a></span></p>
                                <p>Website: <span><a href="#">KLEINWATCH</a></span></p>
                            </div>
                            <div className="col-sm-12 col-md-6 text-center">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14899.664631753694!2d105.8067335!3d20.9959977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adf890dc06e7%3A0x1332a2ad013e5022!2sKleinwatches%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1728277237749!5m2!1svi!2s" 
                                width="100%" height="300" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
