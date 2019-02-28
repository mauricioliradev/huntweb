import React, {Component} from 'react';
import api from '../../services/api';
import "./styles.css";
export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount(){
        //pegar o id da rota
        const { id } = this.props.match.params;
        //pegar o product id
        const response = await api.get(`/products/${id}`);
        //armazenar ou atualizar o product dentro de state
        this.setState({ product: response.data });
    }

    render() {
        // pegando o product do state 
        const {product} = this.state;
        return (
            <div className="product-info"> 
                <h1>{product.title}</h1> 
                <p>{product.description}</p> 
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p> 
            </div>
        );
    }
}