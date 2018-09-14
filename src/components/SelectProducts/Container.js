import React ,{ Component } from 'react';

import './index.css';
 
export default class Container extends Component{
    constructor(props) {
       super(props);
       this.addProducts = this.addProducts.bind(this);
    }
    addProducts(item) {
         this.props.addToCartClick(item);
    }
    renderContent() {
        let products ;
       switch(this.props.type) {
           case "all" : products = this.props.products;break;
           case "fruits" :products = this.props.products.filter((item) => {
                   return item.type === "fruit"
           });break;
           case "vegetables" :products = this.props.products.filter((item) => {
            return item.type === "vegetable"
           });break;
           default:products = this.props.products;
       }
    
     return products.length > 0 ? products.map((item) => {
       
         return <div key={item.id} className="item">
               <img src={item.path} alt="暂无图案"/>
               <div className="detail">
                  <span className="price">
                     <span className="lable">价格:</span>
                     <span>{item.price}</span>
                  </span>
                  <img src="../images/add.jpg" title="加入购物车" alt="暂无图案" onClick={() => {this.addProducts(item)}}/>
                  <span className="qutantity">
                     <span className="lable">数量:</span>
                     <span>{item.quantity}</span>
                  </span>
                 
               </div>
         </div>
     }):<div>暂无相关产品！！</div>
    }
    render() {
        return <div className="itemsContainer">
             {this.renderContent()}
        </div>
    }
}

 