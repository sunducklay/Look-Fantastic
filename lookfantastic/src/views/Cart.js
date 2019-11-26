import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../css/Cart.css';
import { Button,Icon,BackTop,Collapse,InputNumber,Modal } from 'antd';

const { Panel } = Collapse;
const { confirm } = Modal;
const prise = `5252.40`;

function onChange(value) {
    console.log('changed', value);
  }

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

function showConfirm() {
    confirm({
      title: '您确定要删除么?',
      content: '单击“确定”按钮时，此框将在1秒后关闭',
      okType: 'danger',
      cancelText: '取消',
      okText: '确定',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 2000);
        }).catch(() => console.log('OK!'));
      },
      onCancel() {},
    });
  }


export default class Cart extends Component {
    del(){
        alert('确要删除么？')
    }
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Header/>
                <div style={{marginTop:850}}>
                     <div className="title">
                        <h3>您的购物车</h3>
                        <Button type="primary" className="btn1">
                        <Icon type="lock" />
                            安全支付
                            </Button>
                     </div>
                     <section className="txt-one">
                     <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" className="icon-1"/>&nbsp;
                     您使用的优惠:&emsp;
                        <b>全场购满￥666立减￥46</b>
                     </section>
                     <section className="txt-one">
                     <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" className="icon-1"/>&nbsp;
                     您已获得&emsp;
                        <b>购满￥400即可自选1样赠品，购满￥800即可自选2样赠品。</b>
                        -请记得在下面选择您的礼品
                     </section>
                     <div className="list-x">
                        <section className="list-left">
                            <ul className="list-product">
                            <p className="mo-ji"><b>商品</b><b>价格</b><b>数量</b><b>小计</b><b>~\~</b></p>
                                <li>
                                    <img src="https://s2.thcdn.com/productimg/70/70/11219032-7364711567321689.jpg"/>
                                    <i style={{fontStyle:'normal',marginLeft:'10px'}}>香缇卡钻石面膜 50ml</i>         
                                    &emsp;<i style={{fontStyle:'normal'}}>￥1324.60</i>
        <InputNumber className="ipt-no" size="large" min={1} max={100000} defaultValue={3} onChange={onChange} /><b className="prise">￥{prise}</b>
                                  <b className="del">
                                  <Button onClick={showConfirm} type="danger">删除</Button>
                                  </b>
                                </li>
                                <li>
                                    <img src="https://s2.thcdn.com/productimg/70/70/12062673-1204710025155423.jpg"/>
                                    <i style={{fontStyle:'normal',marginLeft:'10px'}}>ESPA Shower Hydrate   </i>         
                                    &emsp;<i style={{fontStyle:'normal'}}>￥322.20</i>
        <InputNumber className="ipt-no" size="large" min={1} max={100000} defaultValue={3} onChange={onChange} /><b className="prise"> ￥960.93</b>
                                  <b className="del">
                                  <Button onClick={showConfirm} type="danger">删除</Button>
                                  </b>
                                </li>
                               <div className="total">购物车合计：
                                    <b>￥6213.33</b>
                               </div>
                            </ul>
                        </section>
                        <section className="list-right">
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                        >
                            <Panel header="赠品区【1】" key="1" style={customPanelStyle}>
                            <p>购满￥400即可自选1样赠品，购满￥800即可自选2样赠品。</p>
                            <section className="txt-two">
                                <b>请自选喜爱的赠品</b>&nbsp;&nbsp;
                     <Icon type="check-circle" theme="twoTone" 
                     twoToneColor="#52c41a" className="icon-1"/>
                         &nbsp;   (over￥400.00spent)
                     </section>0/1 已挑选的赠品
                        <div className="pic1">
                            <img className="tu1" src="https://s2.thcdn.com/productimg/70/70/11531023-2464584604901004.jpg"/>
                            <p>Christophe Robin Cleansing Volumizing Paste with Pure Rassoul Clay and Rose Extracts 12ml (Free Gift)</p>

                        </div>
                        <div className="pic1">
                            <img className="tu1" src="https://s2.thcdn.com/productimg/70/70/11531152-5754535929318023.jpg"/>
                            <p>Christophe Robin Cleansing Volumizing Paste with Pure Rassoul Clay and Rose Extracts 12ml (Free Gift)</p>

                        </div>
                        <div className="pic1">
                            <img className="tu1" src="https://s2.thcdn.com/productimg/70/70/11531023-2464584604901004.jpg"/>
                            <p>Christophe Robin Cleansing Volumizing Paste with Pure Rassoul Clay and Rose Extracts 12ml (Free Gift)</p>

                        </div>
                            </Panel>
                            <Panel header="赠品区【2】" key="2" style={customPanelStyle}>
                            <p>购满￥400即可自选1样赠品，购满￥800即可自选2样赠品。</p>
                            <section className="txt-two">
                                <b>请自选喜爱的赠品</b>&nbsp;&nbsp;
                     <Icon type="check-circle" theme="twoTone" 
                     twoToneColor="#52c41a" className="icon-1"/>
                         &nbsp;   (over￥400.00spent)
                     </section>0/1 已挑选的赠品
                        <div className="pic1">
                            <img className="tu1" src="https://s2.thcdn.com/productimg/70/70/11531023-2464584604901004.jpg"/>
                            <p>Christophe Robin Cleansing Volumizing Paste with Pure Rassoul Clay and Rose Extracts 12ml (Free Gift)</p>

                        </div>
                        <div className="pic1">
                            <img className="tu1" src="https://s2.thcdn.com/productimg/70/70/11531152-5754535929318023.jpg"/>
                            <p>Christophe Robin Cleansing Volumizing Paste with Pure Rassoul Clay and Rose Extracts 12ml (Free Gift)</p>

                        </div>
                        <div className="pic1">
                            <img className="tu1" src="https://s2.thcdn.com/productimg/70/70/11531023-2464584604901004.jpg"/>
                            <p>Christophe Robin Cleansing Volumizing Paste with Pure Rassoul Clay and Rose Extracts 12ml (Free Gift)</p>

                        </div>
                            </Panel>
                            <Panel header="赠品区【3】" key="3" style={customPanelStyle}>
                            <p>购满￥400即可自选1样赠品，购满￥800即可自选2样赠品。</p>
                            <section className="txt-two">
                                <b>请自选喜爱的赠品</b>&nbsp;&nbsp;
                     <Icon type="check-circle" theme="twoTone" 
                     twoToneColor="#52c41a" className="icon-1"/>
                         &nbsp;   (over￥400.00spent)
                     </section>0/1 已挑选的赠品
                        <div className="pic1">
                            <img className="tu1" src="https://s2.thcdn.com/productimg/70/70/11531023-2464584604901004.jpg"/>
                            <p>Christophe Robin Cleansing Volumizing Paste with Pure Rassoul Clay and Rose Extracts 12ml (Free Gift)</p>

                        </div>
                        <div className="pic1">
                            <img className="tu1" src="https://s2.thcdn.com/productimg/70/70/11531152-5754535929318023.jpg"/>
                            <p>Christophe Robin Cleansing Volumizing Paste with Pure Rassoul Clay and Rose Extracts 12ml (Free Gift)</p>

                        </div>
                        <div className="pic1">
                            <img className="tu1" src="https://s2.thcdn.com/productimg/70/70/11531023-2464584604901004.jpg"/>
                            <p>Christophe Robin Cleansing Volumizing Paste with Pure Rassoul Clay and Rose Extracts 12ml (Free Gift)</p>

                        </div>
                            </Panel>
                        </Collapse>
                        </section>
                        <div className="list-bot">
                            <b>节省：</b><br/>
                            <h4 className="jiesheng"><e>全场购满￥666立减￥46</e><e>-￥46.02</e></h4>
                        </div>
                        <section className="input-A">
                            <input type="text" placeholder="请输入折扣代码：" className="ipt"/>
                            <Button type="primary" className="btn">添加</Button>
                        </section>
                        <section className="input-B">
                        <Button type="primary" className="btn1">继续购物</Button>
                        <Button type="primary" className="btn2">
                        <Icon type="lock"  className="key2"/>安全支付</Button> 
                        </section>
                        <h3><img src={require('../img/logo53.png')} className="imgs"/></h3>
                     </div>
                </div>
               <Footer/>
            </div>
        )
    }
}
