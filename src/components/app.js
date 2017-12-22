import React, { Component } from 'react';

const products = [
  {
    id: 153,
    name: 'kurtka skórzana',
    category: 'kurtka',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },{
    id: 242,
    name: 'ciepła bluza z kapturem',
    category: 'bluza',
    sizes: ['S', 'M', 'L'],
  }, {
    id: 343,
    name: 'rurki jeansowe',
    category: 'spodnie',
    sizes: ['XS', 'L', 'XL'],
  },
];
const categories = ['kurtka', 'bluza', 'spodnie', 'bielizna'];
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

export default class App extends Component {

  state = {
    activeCat: '',
    activeSizes: [],
  }

  updateActiveCat(category) {
    this.setState({activeCat: category});
  }

  renderCategories() {
    return(
      categories.map((category, key) => {
        return(
          <div key={key}>
            <input type="radio" id={category} name="contact" value={category} onChange={(e) => this.updateActiveCat(e.target.value)}/>
            <label htmlFor={category}>{category}</label>
          </div>
        )
      })
    );
  }

  renderSizes() {
    return (
      sizes.map((size, key) =>
        <div key={key}>
          <input type="checkbox" id={size} value={size} onChange={(e)=>this.updateActiveSizes(e.target.value)}/>
          <label htmFor={size}>{size}</label>
        </div>
      )
    )
  }

  updateActiveSizes(size) {
    const activeSizes = this.state.activeSizes;

    if (activeSizes.includes(size)) {
      let i = activeSizes.indexOf(size);
      this.setState({
        activeSizes: [
          ...activeSizes.slice(0, i), 
          ...activeSizes.slice(i+1)
        ]
      })
    } else {
      this.setState({
        activeSizes: [...activeSizes, size]
      })
    }
  }

  renderProducts() {
    const filteredProducts = products.filter(
      (product) => {
        return product.category.indexOf(this.state.activeCat) !== -1
      }
    )
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
            <div className="filters__box">
              Active category is: {this.state.activeCat}
              <form>
                {this.renderCategories()}
              </form>
            </div>
            <div className="filters__box">
              Active sizes are: {this.state.activeSizes.join(', ')}
              <form>
                {this.renderSizes()}
              </form>
            </div>
          </div>
          <div className="col-sm-6">
            {this.renderProducts()}
          </div>
        </div>
      </div>
    );
  }
}

