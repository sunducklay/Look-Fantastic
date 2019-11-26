import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../css/Detail.css'
import Axios from 'axios';
import { Button, Radio, Icon } from 'antd';
import {Prompt} from "react-router-dom";




export default class Detail extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    tap(){
        window.location.href="/Home"
    }
    render() {
        const { size } = this.state;
        return (
            <div>
                <Header/>
                <div className="detail-x" style={{marginTop:850}}>
                <Prompt message="您确定要添加么?" when={true} />
               {
                   <div>
                       <ul className="detail-z">
                         <li>
                            <img src={this.state.list.coverImg} style={{width:'500px'}}/>
                         </li>  
                          <li className="set-tit">
                               <b>价格：{this.state.list.price}元</b><br/>
                               <div>名字：{this.state.list.name}</div><br/>
                              <p>数量:{this.state.list.quantity}</p>
                              <p>ID：{this.state.list._id}</p>
                               <p>描述：{this.state.list.descriptions}</p>
                                
                               <Button type="primary" icon="shopping" shape="round"  size={size}>
                                  <NavLink to="/Cart" className="add-cart"> 添加购物车</NavLink>
                                   </Button>
                             
                                &emsp;&emsp;
                                <Button type="primary" shape="round" icon="bank" size={size} onClick={()=>this.tap()}>  返回</Button>
         
                          </li>
                            
                        </ul>
                          <p className="txt">商品推荐</p>
                        <div className="list">
                            <dl  className="list-one">
                                <dd><img src={require('../img/nan1.png')}/></dd>
                                <b>ESPA</b>
                                <dt>ESPA男士系列上线，多合一的配方，保持肌肤柔软补水。</dt>
                                <Button type="primary" onClick={()=>this.tap()}>立即购买</Button>
                            </dl>
                            <dl className="list-one">
                                <dd><img src={require('../img/nan2.jpg')}/></dd>
                                <b>ESPA</b>
                                <dt>ESPA男士系列上线，多合一的配方，保持肌肤柔软补水。</dt>
                                <Button type="primary" onClick={()=>this.tap()}>立即购买</Button>
                            </dl>
                            <dl className="list-one">
                                <dd><img src={require('../img/nan3.jpg')}/></dd>
                                <b>ESPA</b>
                                <dt>ESPA男士系列上线，多合一的配方，保持肌肤柔软补水。</dt>
                                <Button type="primary" onClick={()=>this.tap()}>立即购买</Button>
                            </dl><br/>
                            <dl className="list-one">
                                <dd><img src={require('../img/nan4.jpg')}/></dd>
                                <b>ESPA</b>
                                <dt>ESPA男士系列上线，多合一的配方，保持肌肤柔软补水。</dt>
                                <Button type="primary" onClick={()=>this.tap()}>立即购买</Button>
                            </dl>
                            <dl className="list-one">
                                <dd><img src={require('../img/nan5.jpg')}/></dd>
                                <b>ESPA</b>
                                <dt>ESPA男士系列上线，多合一的配方，保持肌肤柔软补水。</dt>
                                <Button type="primary" onClick={()=>this.tap()}>立即购买</Button>
                            </dl>
                            <dl className="list-one">
                                <dd><img src={require('../img/nan1.png')}/></dd>
                                <b>ESPA</b>
                                <dt>ESPA男士系列上线，多合一的配方，保持肌肤柔软补水。</dt>
                                <Button type="primary" onClick={()=>this.tap()}>立即购买</Button>
                            </dl>
                            <dl className="list-one">
                                <dd><img src={require('../img/nan3.jpg')}/></dd>
                                <b>ESPA</b>
                                <dt>ESPA男士系列上线，多合一的配方，保持肌肤柔软补水。</dt>
                                <Button type="primary" onClick={()=>this.tap()}>立即购买</Button>
                            </dl>
                            <dl className="list-one">
                                <dd><img src={require('../img/nan2.jpg')}/></dd>
                                <b>ESPA</b>
                                <dt>ESPA男士系列上线，多合一的配方，保持肌肤柔软补水。</dt>
                                <Button type="primary" onClick={()=>this.tap()}>立即购买</Button>
                            </dl>
                            <dl className="list-one">
                                <dd><img src={require('../img/nan4.jpg')}/></dd>
                                <b>ESPA</b>
                                <dt>ESPA男士系列上线，多合一的配方，保持肌肤柔软补水。</dt>
                                <Button type="primary" onClick={()=>this.tap()}>立即购买</Button>
                            </dl>
                         
                        </div>
                   </div>
                     
               }
                
             


                 </div>
                <Footer/>
                
            </div>
        )
    }
    componentDidMount(){
        //console.log(this.props.location.state)
        Axios({
            url:'http://api.cat-shop.penkuoer.com/api/v1/products/'+this.props.location.state.id,
            method:'GET',
         
        }).then((data)=>{
            console.log(data.data)
            this.setState({list:data.data})
        })
    }
}
