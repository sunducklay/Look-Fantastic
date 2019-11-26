import React, { Component } from 'react'
import {
  Form,
  Input,
  Card,
  Select,
  Button,
  AutoComplete,
} from 'antd'
import axios from 'axios';




const FormItem = Form.Item
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
class Register extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[],
      userName:'',
      password:'',
      nickName:'',
      avatar:''
    }
  }

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleConfirmBlur = e => {
    const { value } = e.target;

    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      // console.log(value)
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    console.log(value)
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
    
  };

  tap(){
    alert("注册成功！")
    window.location.href="./Login"
 
}
handleWebsiteChange = value => {
 
  let autoCompleteResult;
  console.log(value)
  if (!value) {
    autoCompleteResult = [];
  } else {
    autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
  }
  this.setState({ autoCompleteResult });
};






  render() {
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 12,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <div className='register_div' style={{ width: 1263, height: 1058 }}>
        <div className='Register_comont' style={{ width: 1180, height: 953 }}>
          <div className='register_left' style={{ width: 600, height: 600, float: "left" }}>
            <a href='#'>
              <img src="https://s1.thcdn.com/b/Myreferral_600x600.jpg" border="0" height="600" width="600" alt="Register" />
            </a>
          </div>
          <div className='resgister_right' style={{ width: 480, height: 938, float: "right" }}>
            <Card title='免费注册'>
              <Form>
                <Form.Item
                  label={
                    <span>
                      您的姓名&nbsp;

                    </span>
                  }
                >
                  {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: '请输入您的姓名!', whitespace: true }],
                  })(<Input />)}
                </Form.Item>
                  
                <Form.Item label="用户名">
                  
                  {getFieldDecorator('text', {
                    // rules: [
                    //   {
                    //     type: 'email',
                    //     message: '输入的电子邮箱无效!',
                    //   },
                    //   {
                    //     required: true,
                    //     message: '请输入您的邮箱!',
                    //   },
                    // ],
                  })(<Input />)}
                </Form.Item>


                <Form.Item label="密码" hasFeedback>
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: '请输入你的密码！',
                      },
                      {
                        validator: this.validateToNextPassword,
                      },
                    ],
                  })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="确认密码" hasFeedback>
                  {getFieldDecorator('confirm', {
                    rules: [
                      {
                        required: true,
                        message: '请确认你的密码!',
                      },
                      {
                        validator: this.compareToFirstPassword,
                      },
                    ],
                  })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item label="手机号码">
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: '请输入你的手机号码!' }],
                  })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>


                <Button type="danger" size="large" block > 微博登录 </Button>
                <br />

                <Button style={{ background: '#6FC113', color: '#ffffff', marginTop: 10 }} type="green" size="large" block > 微信登录</Button>
                <br/>
                <br/>
                <div style={{width:322,height:40,marginLeft:107}}>
                  <p>注册账号，即表示同意我们的<a href='#'>服务条款</a>和<a href='#'>隐私条款</a></p>
                </div>
                <Form.Item {...tailFormItemLayout} style={{marginRight:102}}> 
                  <Button type="primary" htmlType="submit" 
                  onClick={()=>this.tap()}
                  size='large'className="login-form-button" block >
                    免费注册
          </Button>
                </Form.Item>



              </Form>

            </Card>

          </div>
        </div>


      </div>
    )
  }
  componentDidMount(){
    axios({
      url:'http://api.cat-shop.penkuoer.com/api/v1/auth/reg',
      method:"POST",
      data:{
        userName:'232321',
        password:'12',
        nickName:'21',
        avatar:''
      }
    }).then((data)=>{
      console.log(data.data)
      this.setState({list:data.data})
     

    })
  }
}
export default Form.create()(Register)