import React, { Component } from 'react';
import '../css/Footer.css'
import { Icon } from 'antd'
import { BackTop } from 'antd';

export default class Footer extends Component {
    render() {
        return (
            <div style={{marginTop:50}}>

                <div className="footer_row footer_row-infoLinks">
                    <div className="footer_block footer_block-infoLinks">
                        <ul className="footer_infoLinks">
                            <li className="footer_infoLink"><a href="/accountHome.account"><i><Icon type="user" /></i><span>登录 / 注册</span></a>
                            </li><li className="footer_infoLink"><a href="/info/beginners-guide.list"><i><Icon type="profile" /></i><span>购物流程</span></a>
                            </li><li className="footer_infoLink"><a href="/help-centre.list"><i><Icon type="exclamation" /></i><span>发货须知</span></a>
                            </li><li className="footer_infoLink"><a href="/help-centre.list"><i><Icon type="question" /></i><span>客服帮助</span></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer_row footer_row-bgLight">
                    <div className="footer_block footer_block-siteLinks">
                        <div className='footer_social'>
                            <div className='class="footer_qrContainer"'>
                                <img src="https://www.lookfantastic.cn/theme/china/images/wechat-qrcode.png" className="footer_qrCode" style={{
                                    verticalAlign: ' bottom',
                                    width: 130,
                                    height: 132,
                                    float: "right"
                                }} />
                            </div>
                            <div className='class="footer_qrContainer"'>
                                <img src="https://www.lookfantastic.cn/theme/china/images/weibo-qrcode.png" className="footer_qrCode" style={{
                                    verticalAlign: ' bottom',
                                    width: 130,
                                    height: 132,
                                    float: "left"
                                }} />
                            </div>
                        </div>
                        <div className="footer_linksSummary">
                            <div className="footer_linksColumn contact_us"></div>
                            <ul className="footer_levelOne">
                                <li className="footer_levelOneItem" data-toggle="expand" data-level="one" data-key="1">

                                    <span className="footer_levelOneItemTextAndIcon">
                                        <span className="footer_levelOneItemDisplayName">
                                            政策条款
</span>

                                        <span className="footer_icon" data-icon="expand" data-key="1"></span>
                                        <span className="footer_icon footer_icon-hide" data-icon="collapse" data-key="1"></span>
                                    </span>

                                    <ul className="footer_levelTwo" data-level="two" data-key="1">
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/terms-conditions.list" className="footer_levelTwoItemLink" data-link="true">
                                                条款和条件
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/refunds-returns.list" className="footer_levelTwoItemLink" data-link="true">
                                                退款与退货
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/cookie-information.list" className="footer_levelTwoItemLink" data-link="true">
                                                Cookie 信息
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/privacy-policy.list" className="footer_levelTwoItemLink" data-link="true">
                                                隐私政策
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/contact-us.list" className="footer_levelTwoItemLink" data-link="true">
                                                联系我们
</a>
                                        </li>

                                    </ul>

                                </li>
                            </ul>
                            <ul className="footer_levelOne">
                                <li className="footer_levelOneItem" data-toggle="expand" data-level="one" data-key="2">

                                    <span className="footer_levelOneItemTextAndIcon">
                                        <span className="footer_levelOneItemDisplayName">
                                            购物助手
</span>

                                        <span className="footer_icon" data-icon="expand" data-key="2"></span>
                                        <span className="footer_icon footer_icon-hide" data-icon="collapse" data-key="2"></span>
                                    </span>

                                    <ul className="footer_levelTwo" data-level="two" data-key="2">
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/delivery-information.list" className="footer_levelTwoItemLink" data-link="true">
                                                发货与配送
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/voucher-codes.list" className="footer_levelTwoItemLink" data-link="true">
                                                优惠码一览
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/packages-track.list" className="footer_levelTwoItemLink" data-link="true">
                                                快递查询
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/self-service.list" className="footer_levelTwoItemLink" data-link="true">
                                                自助服务
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/myreferrals.list" className="footer_levelTwoItemLink" data-link="true">
                                                好友推荐
</a>
                                        </li>

                                    </ul>

                                </li>
                            </ul>
                            <ul className="footer_levelOne">
                                <li className="footer_levelOneItem" data-toggle="expand" data-level="one" data-key="3">

                                    <span className="footer_levelOneItemTextAndIcon">
                                        <span className="footer_levelOneItemDisplayName">
                                            关于我们
</span>

                                        <span className="footer_icon" data-icon="expand" data-key="3"></span>
                                        <span className="footer_icon footer_icon-hide" data-icon="collapse" data-key="3"></span>
                                    </span>

                                    <ul className="footer_levelTwo" data-level="two" data-key="3">
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/about-us.list" className="footer_levelTwoItemLink" data-link="true">
                                                集团介绍
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/brands.list" className="footer_levelTwoItemLink" data-link="true">
                                                品牌一览
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/partnerships-suppliers.list" className="footer_levelTwoItemLink" data-link="true">
                                                商务合作/供应商
</a>
                                        </li>
                                        <li className="footer_levelTwoItem">

                                            <a href="/info/affiliates.list" className="footer_levelTwoItemLink" data-link="true">
                                                Affiliates
</a>
                                        </li>

                                    </ul>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="newsletterSignup newsletterSignup-cn">
                        <div className="newsletterSignup newsletterSignup-cn">
                            <form className="newsletterSignup_form" action="" method="get">
                                <fieldset>
                                    <legend>订阅我们的电子快报</legend>
                                    <a href="/emailSignUp.account?" label="" className="newsletterSignup_label-cn" style={{
                                        color: '#34b3a1'
                                    }}>成为 Lookfantastic 中文网 VIP 用户，获取第一手新品和优惠信息！</a>
                                    <a href="/emailSignUp.account?" className="newsletterSignup_button-cn">去订阅</a>
                                </fieldset>
                            </form>
                        </div>

                    </div>

                </div>

                <div className="footer_row footer_row-bg">
               
                       <div>
                        <BackTop />
             
                        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>  </strong>
                    
                       </div>

                </div>
            </div >
        )
    }
}
