import React, {Component} from 'react';

import Header from '../Header/index';
import NavBar from '../NavBar/index';
import Cart from '../Cart/index';
import './index.css'

 class Shop extends Component{

    render(){
        return <div className="container" >
                 <Header/>
                 <div className="row cont">
                    <div className="col-sm-9"><NavBar/></div>
                    <div className="col-sm-3"><Cart/></div>
                 </div>
                
               </div>
    }
}



export default Shop;