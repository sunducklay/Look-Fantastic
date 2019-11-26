
import { Card, Form, Input, Button, Icon, Checkbox } from 'antd';
import '../css/Login.css'
import React, { Component } from 'react';
import axios from 'axios';

const FormItem = Form.Item
class Login extends Component {
        constructor(props){
            super(props)
            this.state={
                list:[]
            }
        }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    tap(){
        alert("登陆成功！")
        window.location.href="./Home"
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (



            <div className='login_div' style={{ float: "left", height: 584, width: 1180 }}>
            
                <div style={{ height: 560, weight: 583, float: "left" }}>
                    <Card title="已注册顾客" bordered={true} style={{ width: 545, height: 568, margin: 15, textAlign: "center", fontSize: 31 }}>

                        <br />
                        <Form onSubmit={this.handleSubmit} className="login-form" >
                            <FormItem >
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入邮箱地址!' }],
                                })(
                                    <Input
                                      
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入邮箱地址"
                                    />,
                                )}

                            </FormItem>
                            <br />
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"

                                    />,
                                )}
                            </FormItem>
                            <br />
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" href="">
                                    忘记密码
          </a>
                                <br />
                                <Button type="primary" htmlType="submit" size="large" className="login-form-button" onClick={()=>this.tap()}>
                                    登陆我的账户
          </Button>
                                <br />
                                <br />
                                <br />
                                <Button type="danger" size="large" block > 微博登录 </Button>
                                <br />

                                <Button style={{ background: '#6FC113', color: '#ffffff', marginTop: 10 }} type="green" size="large" block > 微信登录</Button>

                            </Form.Item>

                        </Form>

                    </Card>
                </div>
                <div style={{ height: 114, weight: 583, float: "left" }}>
                    <Card title="没有账号？" bordered={true} style={{ width: 545, height: 144, margin: 15, textAlign: "center", fontSize: 31 }} >
                        <Button block href='/Register'>免费注册</Button>
                    </Card>
                </div>

            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
        axios({
            url:'http://api.cat-shop.penkuoer.com/api/v1/auth/login',
            method:'POST',
            data:{
                userName:'',
                password:''
            }
        }).then((data)=>{
           // console.log(data.data)
        })
    }
}
export default Form.create()(Login);
