import React ,{ Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import ProductsContainer from '../SelectProducts/ProductsContainer'
import './index.css';


export default class NavBar extends Component{
    render(){
        return <Router>
            <div>
                 <ul className="header">
                     <li><Link to="/All">All</Link></li>
                     <li><Link to="/Fruits">Fruits</Link></li>
                     <li><Link to="/Vegetabels">Vegetabels</Link> </li>
                 </ul>
                    <Route exact path='/' render={()=><ProductsContainer type={'all'}/>}/>
                    <Route exact path="/All" render={()=><ProductsContainer type={'all'}/>}></Route>
                    <Route exact path="/Fruits" render={()=><ProductsContainer type={'fruits'}/>}></Route>
                    <Route exact path="/Vegetabels" render={()=><ProductsContainer type={'vegetables'}/>}></Route>  
            </div>      
        </Router>
    }
}