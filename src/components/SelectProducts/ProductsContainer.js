import { connect } from "react-redux"
import {addToCart} from '../../redux/actions';
import Container from './Container'

const mapStateToProps = (state) => {
    return {
       products:state.selectProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCartClick: (item) =>{
            dispatch(addToCart(item))
        }
    }
}

const  ProductsContainer = connect(mapStateToProps,mapDispatchToProps)(Container);

export default  ProductsContainer 