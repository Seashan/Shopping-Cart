import React,{Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart,addToCart} from '../../redux/actions'
import './index.css';

class CartCon extends Component{
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.showOrHide = this.showOrHide.bind(this);
        this.state = {
            show:this.props.cartShow
        }
    }
    add(item) {
      this.props.addToCart(item);
    }
    remove(item) {
       this.props.removeFormCart(item);
    }
    showOrHide() {
        this.setState((preState) => {
               return {
                   show:!preState.show
                }
        })
    }
    renderContent() {
        let carts = JSON.parse(JSON.stringify(this.props.contentInCart));
        let content = [];
        for(let item in carts){
            if(JSON.stringify(carts[item]) === "{}")continue;
            content.push(
                            <li className="listItem" key={carts[item].id}>                                 
                                <img src={carts[item].path} title="加入购物车" alt="暂无图案" />
                                <div className="detailText">
                                    <span className="textContent">title: {carts[item].name}</span>
                                    <span className="textContent">price: {carts[item].price}</span>
                                    <span className="textContent">quantity: {carts[item].quantity}</span>
                                    <span className="picText">
                                        <span className="add" title="加入购物车" onClick={() => { this.add(carts[item])}}></span>
                                        <span className="remove" title="移出购物车" onClick={() => { this.remove(carts[item])}}></span>
                                    </span>
                                </div>
                            </li>
                        )
        }
        return content.length ? content :<li key="no">购物车是空的哦！！</li>
    }
    render() {
        return <div className="cartContent">
                   <div className="pickProduct"><button className="btn-success" onClick={this.showOrHide}>我的购物车</button></div> 
                    {this.state.show ? <ul>{this.renderContent()}</ul> :null }
             </div>
    }
    }

    const mapStateToProps = (state) => {

    return{
        cartShow: state.cartShow,
        contentInCart: state.carts
    }
    }
    const mapDispatchToProps = (dispatch) => {
    return{
        removeFormCart: (item) =>{
            dispatch(removeFromCart(item))
        },
        addToCart: (item) => {
           dispatch(addToCart(item))
        }
    }
    }

    const Cart = connect(mapStateToProps,mapDispatchToProps)(CartCon)

    export default Cart