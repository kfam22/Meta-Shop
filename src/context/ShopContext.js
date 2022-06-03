import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
    storefrontAccessToken: '919e643a4505268e0f08a26decacead0',
    domain: 'almost-on-time-test.myshopify.com'
})

class ShopProvider extends Component {

    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    };

    componentDidMount() {
        this.createCheckout()
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        this.setState({ checkout: checkout });
    }

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemToAdd = [{
            variantId,
            quantity: parseInt(quantity, 10)
        }];

        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemToAdd);
        this.setState({checkout: checkout})
    }

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        this.setState({products: products});
    }

    fetchProductById = async (id) => {
        const product = await client.product.fetch(id);
        this.setState({product: product});
        return product;
    }

    closeCart = () => { this.setState({ isCartOpen: false }) }

    openCart = () => { this.setState({ isCartOpen: true }) }



  render() {
    return (
      <ShopContext.Provider value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductById: this.fetchProductById,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCart: this.addItemToCheckout
      }}>
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider;
