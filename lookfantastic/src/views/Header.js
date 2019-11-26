import React, { Component } from 'react';
import '../css/header.css';
import { Input,Icon,Carousel,Tabs,AutoComplete } from 'antd';
import '../css/mohu-input.css';


const { Option, OptGroup } = AutoComplete;

const dataSource = [
  {
    title: 'HOT',
    children: [
      {
        title: '精华液',
        count: 10000,
      },
      {
        title: ' 面膜',
        count: 10600,
      },
    ],
  },
  {
    title: '精选',
    children: [
      {
        title: '按摩仪',
        count: 60100,
      },
      {
        title: '全身护理',
        count: 30010,
      },
    ],
  },
  {
    title: '礼品',
    children: [
      {
        title: '全身按摩',
        count: 100000,
      },
    ],
  },
];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
      >
        more
      </a>
    </span>
  );
}

const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count">{opt.count} people</span>
        </Option>
      ))}
    </OptGroup>
  ))
 
const { Search } = Input;
export default class Header extends Component {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    next(){
        this.slider.slick.slickNext();
    }
    prev(){
        this.slider.slick.slickPrev();
    }
    render() {
        const lunboSetting = {
            dots:true,
            lazyLoad:true,
            autoplay:true,
        };
        return (
            <div>
                <div className="head">
                    <section className="top1">
                        <p className="tit1">您好<a className="Tologin" href="/login" title="请登陆您的账户">请登录</a></p>
                        <ul className="tit2">
                            <li><a className="one1" href="#">英国直邮</a></li>
                            <li><a className="one1" href="#">阳光清道</a></li>
                            <li><img src={require('../img/54.png')}/></li>
                            <li><img src={require('../img/57.png')}/></li>
                        </ul>
                        <ul className="tit3">
                            <li><a href="#">帮助</a></li>
                            <li>
                                <a href="#">我的账户</a>
                                <div className="myset">
                                <div className="triangle"></div>
                                  <a href="#">您的订单</a><br/>
                                  <a href="#">您的设置</a>
                                </div>
                            </li>
                            <li>关注公众号
                                 <div className="erweima">
                                 <div className="triangle"></div>
                                 <img className="ewm" src={require('../img/14.png')}/>
                                 </div>
                            </li>
                            <img src={require('../img/24.png')}/>
                            <li><a href="#">CN-￥</a><div className="circle"></div></li>
                        </ul>
                      
                    </section>
                     <section className="top2">
                        <div className="logo1"><img src={require('../img/220.png')}/></div>
                        <div className="search1">
                           
                             <div className="certain-category-search-wrapper" style={{ width: 250 }}>
                                <AutoComplete
                                    className="certain-category-search"
                                    dropdownClassName="certain-category-search-dropdown"
                                    dropdownStyle={{ width: 300 }}
                                    size="large"
                                    style={{ width: '100%' }}
                                    dataSource={options}
                                    placeholder="热销产品"
                                    optionLabelProp="value"
                                >
                                    <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                                </AutoComplete>
                                </div>
                         

                        </div>
                        <div className="search2">
                            <input type="text" placeholder="搜索" className="ipt"/>
                            <div className="fdj1">
                            <Icon type="zoom-in" className="icon2"/>
                            </div>
                        </div>
                        <div className="cart"><a href="#"><Icon type="shopping-cart" />购物车</a></div>
                     </section>

                     <div className="nav-row">
                         <nav className="nav-container">
                             <div className="yhhd">
                               <a href="#">优惠活动</a>
                               <div className="yhhd-top">
                                   <div className="yhhd-top-o">
                                        <h4 className="tit5">7折优惠</h4>
                                        <h4 className="tit5">两件75折优惠</h4>
                                        <h4 className="tit5">8折优惠</h4>
                                        <h4 className="tit5">折扣码清单</h4>
                                        <h4 className="tit5">限时出清</h4>
                                   </div>
                               </div>
                             </div>
                             <ul className="nav-one">
                                 <li><a href="#">圣诞市集</a></li>
                                 <li><a href="#">品牌一览</a>
                                   <div className="complete">
                                     
                                         <section className="logo-top1">
                                            <img src={require('../img/logo1.png')}/>
                                            <img src={require('../img/logo2.png')}/>
                                            <img src={require('../img/logo3.png')}/>
                                            <img src={require('../img/logo4.png')}/>
                                         </section>
                                         <ul className="wordabc">
                                           
                                             <li><a href="#">A</a>
                                                <section className="logo-btn1">
                                                3INA
                                                </section>
                                             </li>
                                             <li><a href="#">B</a> </li>
                                             <li><a href="#">C</a>
                                                 <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> Ckin<br/>Dok
                                                </section>
                                             </li>
                                             <li><a href="#">D</a>
                                                 <section className="logo-btn1">
                                               Dehilnad<br/>Dots<br/>Default<br/>Dell
                                                </section>
                                             </li>
                                             <li><a href="#">E</a>
                                                 <section className="logo-btn1">
                                                   Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> Ckin<br/>
                                                </section>
                                             </li>
                                             <li><a href="#">F</a>
                                                 <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> 
                                                </section>
                                             </li>
                                             <li><a href="#">G</a></li>
                                             <li><a href="#">H</a></li>
                                             <li><a href="#">I</a>
                                                  <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> Ckin<br/>
                                                </section>
                                             </li>
                                             <li><a href="#">J</a></li>
                                             <li><a href="#">K</a></li>
                                             <li><a href="#">L</a></li>
                                             <li><a href="#">M</a>
                                                <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> 
                                                </section>
                                             
                                             </li>
                                             <li><a href="#">N</a></li>
                                             <li><a href="#">O</a>
                                               <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> Ckin<br/>Dok<br/>hello
                                                </section>
                                             </li>
                                             <li><a href="#">P</a>
                                               <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> Ckin<br/>Dok<br/>hello<br/>hi
                                                </section>
                                             </li>
                                             <li><a href="#">Q</a></li>
                                             <li><a href="#">R</a>
                                                <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> Ckin<br/>Dok
                                                </section>
                                             </li>
                                             <li><a href="#">S</a></li>
                                             <li><a href="#">T</a>
                                                  <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/>
                                                </section>
                                             </li>
                                             <li><a href="#">U</a></li>
                                             <li><a href="#">V</a>
                                                      <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> Ckin
                                                </section>
                                             </li>
                                             <li><a href="#">W</a>
                                                  <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> Ckin<br/>Dok<br/>gitmoll
                                                </section>
                                             </li>
                                             <li><a href="#">x-z</a> 
                                                  <section className="logo-btn1">
                                                Ckin/艾肯<br/>CcnEase<br/>Clanld<br/> Ckin<br/>Dok<br/>kity王
                                                </section>
                                             </li>
                                          
                                         </ul>
                                         
                                     </div>
                                 </li>
                                 <li><a href="#">新品上市</a>
                                    <div className="new-product">
                                        <section className="pro-left">
                                            <b>查看全部</b><hr/><br/>
                                            <b>新品推荐</b><br/>
                                            <p>彩妆</p>
                                            <p>护发</p>
                                            <p>护肤</p>
                                            <p>男士</p>
                                            <b>流行大势</b><br/>
                                            <p>护体</p>
                                            <p>美容</p>
                                            <p>天然有机</p>
                                            <p>必备</p>
                                        </section>
                                        <section className="pro-right">
                                        <b>美妆礼盒</b><hr/><br/>
                                        <p>圣诞倒数日历</p>
                                        <b>畅销品牌</b><br/>
                                        <p>Aesop</p>
                                        <p>AHAVA</p>
                                        <p>Philosophy自然哲理</p>
                                        <p>Terry</p>
                                        </section>
                                    </div>
                                 </li>
                                 <li><a href="#">美容护肤</a>
                                    <section className="mrhf">
                                        <div className="mrhf-top">
                                            <img src={require('../img/logo8.png')}/>
                                            <img src={require('../img/logo5.png')}/>
                                            <img src={require('../img/logo6.png')}/>
                                            <img src={require('../img/logo7.png')}/>
                                        </div>
                                        <div className="mrhf-bot">
                                            <div className="mrhf-left1">
                                                <b>护肤品</b><br/>
                                                <b>护肤新品</b><br/>
                                                <b>礼盒童装</b><br/>
                                                <b>护肤品旅行装</b><br/>
                                                <b>面部清洁</b><br/>
                                                <i style={{'fontStyle':'normal'}}>洗面奶</i><br/>
                                                <i style={{'fontStyle':'normal'}}>爽肤水</i><br/>
                                                <i style={{'fontStyle':'normal'}}>去角质|磨砂</i><br/>
                                                <b>卸妆</b><br/>
                                                <b>流行大势</b><br/>
                                                <i style={{'fontStyle':'normal'}}>皮肤营养补充</i><br/>
                                                <i style={{'fontStyle':'normal'}}>天然有机</i><br/>
                                            </div>
                                            <div className="mrhf-left2">
                                                <b>礼盒童装</b><br/>
                                                <b>护肤品旅行装</b><br/>
                                                <b>面部清洁</b><br/>
                                                <b>礼盒童装</b><br/>
                                                <b>护肤品旅行装</b><br/>
                                                <b>面部清洁</b><br/>
                                                <i style={{'fontStyle':'normal'}}>洗面奶</i><br/>
                                                <i style={{'fontStyle':'normal'}}>爽肤水</i><br/>
                                                <i style={{'fontStyle':'normal'}}>去角质|磨砂</i><br/>
                                                <b>卸妆</b><br/>
                                                <b>礼盒童装</b><br/>
                                                <b>护肤品旅行装</b><br/>
                                                <b>面部清洁</b><br/>
                                                <i style={{'fontStyle':'normal'}}>皮肤营养补充</i><br/>
                                                <i style={{'fontStyle':'normal'}}>天然有机</i><br/>
                                            </div>
                                            <div className="mrhf-left3">
                                           
                                                <b>礼盒童装</b><br/>
                                                <b>护肤品旅行装</b><br/>
                                        
                                                <i style={{'fontStyle':'normal'}}>洗面奶</i><br/>
                                                <i style={{'fontStyle':'normal'}}>爽肤水</i><br/>
                                                <i style={{'fontStyle':'normal'}}>去角质|磨砂</i><br/>
                                                <b>卸妆</b><br/>
                                                <b>流行大势</b><br/>
                                                <i style={{'fontStyle':'normal'}}>皮肤营养补充</i><br/>
                                            
                                            </div>
                                            <div className="mrhf-left4">
                                                <b>护肤品</b><br/>
                                                <b>护肤新品</b><br/>
                                                <b>礼盒童装</b><br/>
                                                <b>护肤品旅行装</b><br/>
                                                <b>面部清洁</b><br/>
                                                <i style={{'fontStyle':'normal'}}>洗面奶</i><br/>
                                                <i style={{'fontStyle':'normal'}}>爽肤水</i><br/>
                                                <i style={{'fontStyle':'normal'}}>去角质|磨砂</i><br/>
                                                <b>卸妆</b><br/>
                                                <b>流行大势</b><br/>
                                                <i style={{'fontStyle':'normal'}}>皮肤营养补充</i><br/>
                                                <i style={{'fontStyle':'normal'}}>天然有机</i><br/>
                                            </div>
                                            <div className="mrhf-left5">
                                                <b>护肤品</b><br/>
                                          
                                                <i style={{'fontStyle':'normal'}}>洗面奶</i><br/>
                                                <i style={{'fontStyle':'normal'}}>爽肤水</i><br/>
                                                <i style={{'fontStyle':'normal'}}>去角质|磨砂</i><br/>
                                            
                                                <b>流行大势</b><br/>
                                                <i style={{'fontStyle':'normal'}}>皮肤营养补充</i><br/>
                                                <i style={{'fontStyle':'normal'}}>天然有机</i><br/>
                                            </div>
                                        </div>                         
                                    </section>
                                 </li>
                                 <li><a href="#">美发护发</a></li>
                                 <li><a href="#">美容彩妆</a></li>
                                 <li><a href="#">美容仪</a>
                                    <div className="skg">
                                        <div className="skg-top">
                                              <img src={require('../img/logo5.png')}/>
                                              <img src={require('../img/logo6.png')}/>
                                        </div>
                                        <div className="skg-bot">
                                            <div className="skg-bot-left">
                                                <b>所有美容仪</b><br/>
                                                <i style={{'fontStyle':'normal'}}>BeGlow</i><br/>
                                                <i style={{'fontStyle':'normal'}}>BeGlow</i><br/>
                                                <b>畅销品牌</b><br/>
                                                <i style={{'fontStyle':'normal'}}>BeGlow</i><br/>
                                                <i style={{'fontStyle':'normal'}}>BeGlow</i><br/>
                                                <i style={{'fontStyle':'normal'}}>BeGlow</i><br/>
                                                <b>护肤电器</b><br/>
                                                <i style={{'fontStyle':'normal'}}>BeGlow</i><br/>
                                                <b>吹风机</b><br/>
                                                
                                                <b>直发器</b><br/>
                                                <i style={{'fontStyle':'normal'}}>BeGlow</i><br/>
                                                <b>卷发器</b><br/>
                                              
                                                <b>发型修剪</b><br/>
                                                <i style={{'fontStyle':'normal'}}>BeGlow</i><br/>
                                                <b>脱毛仪</b><br/>   
                                                <i style={{'fontStyle':'normal'}}>BeGlow</i><br/>                     
                                            </div>
                                            <div className="skg-bot-right">
                                                <b>健身器材</b>
                                            </div>
                                        </div>
                                    </div>
                                 </li>
                                 <li><a href="#">身体护理</a></li>
                                 <li><a href="#">男士</a></li>
                                 <li><a href="#">美妆礼盒</a>
                                    <div className="mzlh">
                                        <div className="mzlh-box">
                                            <strong>限量版礼盒</strong><br/>
                                            <strong>正在发售的礼盒</strong><br/>
                                            <strong>已发售礼盒</strong><br/>
                                            <strong>所有产品</strong>
                                           
                                        </div>    
                                    </div>                                 
                                 </li>
                                 <li><a href="#">阳光清关</a>
                                        <div className="sunclear">
                                            <div className="sunclear-box">
                                            <strong>阳光清关使用方式</strong><br/>
                                            <strong>阳光清关单品</strong><br/>
                                            </div>
                                        </div>
                                 </li>
                                 <li><a href="#">博客</a></li>
                             </ul>
                         </nav>
                         <section className="uspBanner">
                              <div className="stripBanner">
                                  <b>购买即可享受8折优惠，折扣码:LFCN20<br/>
                        全场购满￥666即可减￥46，折扣自动在购买车内折减！(*部分商品除外)</b>
                              </div>
                         </section>
                         <div className="lunbotu">
                              <Carousel {...lunboSetting} ref={el =>(this.slider = el)}>
                                <div key={1}>                                
                                <h3><img src={require('../img/32.jpg')}/></h3>
                                </div>
                                <div key={2}>
                                <h3><img src={require('../img/x26.jpg')}/></h3>
                                </div>
                                <div key={3}>
                                <h3><img src={require('../img/x434.jpg')}/></h3>
                                </div>
                                <div key={4}>
                                <h3><img src={require('../img/07.jpg')}/></h3>
                                </div>
                            </Carousel>
                            <Icon type="left-circle"onClick={this.prev} className="prev"/>
                            <Icon type="right-circle" onClick={this.next} className="next"/>
                         </div>
                        
                     </div>
                </div>
            </div>
        )
    }
}
