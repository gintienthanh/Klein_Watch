import React from 'react';
import { Layout } from 'antd';
import { Col, Row, Divider } from "antd";
import { SocialIcon } from 'react-social-icons';
import "./footer.css";

const { Footer } = Layout;

function _Footer() {
    return (

        <Footer style={{ backgroundColor: "greenyellow", padding: 30, paddingTop: 30 }}>
            <Row className="footer-desktop">
                <Col span={3} className="footer">
                    <strong style={{ color: "black", fontSize: 20, cursor: "pointer"  }}>Tổng đài hỗ trợ</strong>
                    <p style={{ marginTop: 20, color: "orange", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>Gọi mua hàng 1900 0101</p>
                    <p style={{ marginTop: 20, color: "orange", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>Gọi khiếu nại 1900 0101</p>
                    <p style={{ marginTop: 20, color: "orange", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>Gọi bảo hành 1900 0101</p>
                </Col>
                <Col span={4} className="footer">
                    <strong style={{ color: "black", fontSize: 20, cursor: "pointer" }}>Thông tin và chính sách</strong>
                    <p style={{ marginTop: 20, color: "orange", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>Mua hàng và thanh toán Online</p>
                    <p style={{ marginTop: 20, color: "orange", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>Mua hàng trả góp Online</p>
                    <p style={{ marginTop: 20, color: "orange", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>Tra thông tin bảo hành</p>
                </Col>
                <Col span={4} className="footer">
                    <strong style={{ color: "black", fontSize: 20, cursor: "pointer"}}>Dịch vụ và thông tin khác</strong>
                    <p style={{ marginTop: 20, color: "orange", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>Ưu đãi thanh toán</p>
                    <p style={{ marginTop: 20, color: "orange", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>Quy chế hoạt động</p>
                    <p style={{ marginTop: 20, color: "orange", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>Chính sách Bảo hành</p>
                    <p style={{ marginTop: 20, color: "orange", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>Liên hệ hợp tác kinh doanh</p>
                </Col>
                <Col span={4} className="footer">
                    <strong style={{ color: "black", fontSize: 20, cursor: "pointer" }}>Địa chỉ</strong>
                    <p style={{ marginTop: 20, color: "#FFFFFF", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>
    Chi nhánh 1: <a href="https://goo.gl/maps/79wo14qfxCXLLs8H6" target="_blank" rel="noopener noreferrer">HN : Số 13 LK3 90 Nguyễn Tuân, Thanh Xuân, Hà Nội.</a>
</p>
<p style={{ marginTop: 20, color: "#FFFFFF", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>
    Chi nhánh 1: <a href="https://goo.gl/maps/79wo14qfxCXLLs8H6" target="_blank" rel="noopener noreferrer">HCM: Số 40 Lý Thái Tông, Q Tân Phú ,Tp Hồ Chí Minh</a>
</p>

                </Col>
                <Col span={4}>
    <strong style={{ color: "#FFFFFF", fontSize: 20, marginBottom: 40, cursor: "pointer", textAlign: "center" }}>Kết nối với chúng tôi</strong>
    <Row style={{ marginTop: 15 }} align="middle" justify="center">
        <Col span={6}>
            <SocialIcon url="https://www.youtube.com/channel/UCiTw8TOfcvdlrVZNznuXRpQ" style={{ height: 35, width: 35, cursor: "pointer" }} />
        </Col>
        <Col span={6}>
            <SocialIcon url="https://www.facebook.com/profile.php?id=100050436195691&locale=vi_VN" style={{ height: 35, width: 35, cursor: "pointer" }} />
        </Col>
        <Col span={6}>
            <SocialIcon url="https://www.tiktok.com/@tijenthanh02?_t=8iBx53iruJW&_r=1" style={{ height: 35, width: 35, cursor: "pointer" }} />
        </Col>
    </Row>
</Col>
            </Row>
            <div className="footer-mobile">
                <Row justify="center">
                    <strong style={{ color: "#FFFFFF", fontSize: 20, cursor: "pointer" }}>Home Page</strong>
                </Row>
                <Row justify="center">
                    <p style={{ marginTop: 20, color: "#FFFFFF", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>About Us</p>
                </Row>
                <Row justify="center">
                    <strong style={{ color: "#FFFFFF", fontSize: 20, cursor: "pointer", textAlign: "center" }}>Our Connection</strong>
                </Row>
                <Row justify="center">
                    <p style={{ marginTop: 20, color: "#FFFFFF", fontWeight: 400, fontSize: 14, cursor: "pointer" }}> KLEIN WATCH</p></Row>
                <Row justify="center">
                    <strong style={{ color: "#FFFFFF", fontSize: 20, marginBottom: 30, cursor: "pointer" }}>Follow Us</strong>
                </Row>

                <Row style={{ marginTop: 5 }} justify="center">
                    <Col >
                        <SocialIcon url="#" style={{ height: 35, width: 35, cursor: "pointer" }} />
                    </Col>
                    <Col style={{ marginLeft: 20 }}>
                        <SocialIcon url="#" style={{ height: 35, width: 35, cursor: "pointer" }} />
                    </Col>
                    <Col style={{ marginLeft: 20 }}>
                        <SocialIcon url="#" style={{ height: 35, width: 35, cursor: "pointer" }} />
                    </Col>
                    <Col style={{ marginLeft: 20 }}>
                        <SocialIcon url="#" style={{ height: 35, width: 35, cursor: "pointer" }} />
                    </Col>
                </Row>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Divider style={{ padding: 0 }} />
                <hr style={{ borderColor: "white" }}  />
                <p style={{ color: "#FFFFFF", fontSize: 13 }}>Copyright@ 2024 Created by Tiến Thành</p>
                <p style={{ color: "#FFFFFF", fontSize: 13 }}>Điện thoại: (+84) 0342 897 002 - (+84) 0876402124</p>
            </div>
        </Footer>
    );
}

export default _Footer;