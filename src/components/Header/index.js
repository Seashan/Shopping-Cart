import React,{Component} from 'react';
import {connect} from 'react-redux';

import './index.css'
import { search } from '../../redux/actions';

 class Head extends Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }
    search(){
      let text = this.textInput.value;
      this.props.searchClick(text);
    }

    render(){
        return <div className="content">
                    <span className="title">Welcome To My Fruite And Vegetables Shop</span>
                    <div className="search">
                        <input type="text" className="form-control" id="name" placeholder="请输入名称"  ref={(input) => { this.textInput = input; }}/>
                        <button className="btn" onClick={this.search}>search</button>
                    </div>
                    <div className="base-line"></div>
            </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        searchClick:(text) => {
            dispatch(search(text))
        }
    }
}

const  Header = connect(null,mapDispatchToProps)(Head)

export default Header