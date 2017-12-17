import React, { Component } from 'react';

const products = [
  {
    id: 153,
    name: 'kurtka skórzana',
    category: 'kurtka'
  },{
    id: 242,
    name: 'ciepła bluza z kapturem',
    category: 'bluza'
  }, {
    id: 343,
    name: 'rurki jeansowe',
    category: 'spodnie'
  },
];
const categories = ['kurtka', 'bluza', 'spodnie', 'bielizna'];

export default class App extends Component {

  state = {
    activeCat: '',
  }

  updateActiveCat(event) {
    this.setState({activeCat: event.target.value});
  }

  renderCategories() {
    return(
      categories.map((category, key) => {
        return(
          <div key={key}>
            <input type="radio" id={category} name="contact" value={category} onChange={(e) => this.updateActiveCat(e)}/>
            <label htmlFor={category}>{category}</label>
          </div>
        )
      })
    );
  }

  renderProducts() {
    const filteredProducts = products.filter(
      (product) => {
        return product.category.indexOf(this.state.activeCat) !== -1
      }
    )

    console.log(filteredProducts)

    return (
      filteredProducts.map((product)=> {
        return <div key={product.id}>{product.name}</div>
      })
    )
  }

  render() {



    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            Active cat state is: {this.state.activeCat}
            <form>
              {this.renderCategories()}
            </form>
          </div>
          <div className="col-sm-6">
            {this.renderProducts()}
          </div>
        </div>
      </div>
    );
  }
}

