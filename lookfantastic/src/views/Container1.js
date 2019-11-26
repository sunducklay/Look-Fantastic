import React, { Component } from 'react';
import '../css/Container1.css';
import axios from 'axios';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import Detail from './Detail';


export default class Container1 extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <div>
              
                <div className="container" style={{marginTop:850}}>
                    <div className="container1-title">
                        <h2>美妆好物，年度盘点。</h2>
                        <p>收获与化妆大师和美妆达人的同款爱用品，一起为美丽加分</p>
                    </div>
                    {
                        this.state.list.map((item,i)=>{
                            return(
                                <div key={i}>
                                <ul className="products" key={item._id}>
                                 <NavLink to={{pathname:"/detail",state:{id:item._id}}}> 
                                  <li>
                                     <img src={item.coverImg} style={{width:'200px'}}/>
                                     <h3>名字:{item.name}</h3>
                                     <h4>数量:{item.quantity}</h4>
                                     <h3>价格:{item.price}</h3>
                                  </li>
                                  </NavLink>
                                </ul>
                                </div>
                            )
                           
                        })
                    }
                  </div>
                   
            </div>
        )
    }
    componentDidMount(){
        axios({
            url:'http://api.cat-shop.penkuoer.com/api/v1/products',
            method:'GET',
            params:{per:20,page:1,name:''}
           
        }).then((data)=>{
            console.log(data.data.products)
            this.setState({list:data.data.products})
        })
    }
}
