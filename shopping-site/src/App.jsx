import React, { Component } from 'react';
import './App.css';
import PageHeader from './PageHeader';
import LoginHeader from './LoginHeader';
import ProductPanel from './ProductPanel';
import PageFooter from './PageFooter';
import LoginPage from './LoginPage';
import ProductDetailsPage from './ProductDetailsPage';
import UserCartPage from './UserCartPage';
import { getProductsRow1, getProductsRow2, getProductsRow3, getProductDetails, addProductsToCart, getProductsfromCart } from './services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: {},
      userName: '',
      isLoginPage:true,
      isProductDescriptionPage: false,
      isHomePage: false,
      isCartPage: false,
      productsRow1: [],
      productsRow2: [],
      productsRow3: [],
      selectedProductDetails: {},
      cartProductDetails: [],
      rowNumber: '',
      productImage: '',
      alertMessage: ''
    };
    this.recordUserName = this.recordUserName.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.showProductDetails = this.showProductDetails.bind(this);
    this.updateProductPanel = this.updateProductPanel.bind(this);
    this.goToHomePage = this.goToHomePage.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.goToOrdersPage = this.goToOrdersPage.bind(this);   
 }

  componentDidMount() {    
    this.updateProductPanel();
  }

  updateProductPanel() {
    getProductsRow1()
    .then( productsRow1 =>{   
        this.setState({        
          productsRow1: productsRow1
      })
    }).catch(err =>{
      this.setState({        
        alertMessage: err.error
    })});
    getProductsRow2()
    .then( productsRow2 =>{   
        this.setState({        
          productsRow2: productsRow2
      })
    }).catch(err =>{
      this.setState({        
        alertMessage: err.error
    })});
    getProductsRow3()
    .then( productsRow3 =>{   
        this.setState({        
          productsRow3: productsRow3
      })
    }).catch(err =>{
      this.setState({        
        alertMessage: err.error
    })});
  }

  recordUserName(e) {
    this.setState({
        userName: e.target.value
      });
  }

  loginUser(evt)  {
    this.setState({
      isLoginPage:false,
      isHomePage:true
      });
  }

  logoutUser(evt) {    
    this.setState({
      isLoginPage:true,
      isProductDescriptionPage:false,
      isHomePage:false,
      userName:"",
      alertMessage: ''
      });   
  }

  goToHomePage() {    
    this.setState({
      isLoginPage:false,
      isProductDescriptionPage:false,
      isHomePage:true,
      alertMessage: ''
      });   
  }
  
  goToOrdersPage(e) {  
    getProductsfromCart(e.target.id)  
    .then(productsfromCart =>{
      this.setState({
        cartProductDetails: productsfromCart,
        isCartPage:true,
        isProductDescriptionPage:false,
        isLoginPage:false,
        isHomePage:false,
        alertMessage: ''
       })
    }).catch(err =>{
      this.setState({        
        alertMessage: err.error
    })});  
  }

showProductDetails(evt)  {
  getProductDetails(evt.target.id, evt.target.name)
  .then(productDetails=>{
    this.setState({
      selectedProductDetails: productDetails,
      isProductDescriptionPage:true,
      isLoginPage:false,
      isHomePage:false,
      alertMessage: ''
     })}).catch(err =>{
      this.setState({        
        alertMessage: err.error
    })});     
}

addProductToCart(e)  {
  this.setState({    
    rowNumber: e.target.name,
    productImage: e.target.id,
    alertMessage: 'Product added to cart successfully!'
   });
    getProductDetails(e.target.id, e.target.name)
    .then(productDetails=>{
      this.setState({
        selectedProductDetails: productDetails      
       });
       addProductsToCart(this.state.userName, this.state.selectedProductDetails.image, this.state.selectedProductDetails.price, this.state.selectedProductDetails.name);
      }).catch(err =>{
        this.setState({        
          alertMessage: err.error
      })});
}

  render() {
    if(this.state.isLoginPage){
      return (        
        <div className="display-panel">
          <LoginHeader />
          <LoginPage loginUser={this.loginUser} recordUserName={this.recordUserName} userName={this.state.userName}/>
          <PageFooter/>
        </div>
      );
    }
    else if(this.state.isHomePage){
    return (
      <div className="display-panel">
        <PageHeader userName={this.state.userName} logoutUser={this.logoutUser} goToHomePage={this.goToHomePage} goToOrdersPage={ this.goToOrdersPage } alertMessage={this.state.alertMessage}/>
        <ProductPanel addProductToCart={ this.addProductToCart } showProductDetails = { this.showProductDetails } productsRow1={ this.state.productsRow1 } productsRow2={ this.state.productsRow2 } productsRow3={ this.state.productsRow3 }/>
        <PageFooter/>
      </div>
      );
    }
    else if(this.state.isProductDescriptionPage){
     return (
        <div className="display-panel">
          <PageHeader userName={this.state.userName} logoutUser={this.logoutUser} goToHomePage={this.goToHomePage} goToOrdersPage={ this.goToOrdersPage } alertMessage={this.state.alertMessage}/>
          <ProductDetailsPage productDetails ={ this.state.selectedProductDetails } addProductToCart={ this.addProductToCart } rowNumber={this.state.rowNumber} productImage={this.state.productImage}/>
          <PageFooter/>
        </div>
      );
    }
    else if(this.state.isCartPage)
    {
      return (
        <div className="display-panel">
          <PageHeader userName={this.state.userName} logoutUser={this.logoutUser} goToHomePage={this.goToHomePage} goToOrdersPage={ this.goToOrdersPage} alertMessage={this.state.alertMessage}/>
          <UserCartPage productsInCart={ this.state.cartProductDetails }/>
          <PageFooter/>
        </div>
      );
    }
  }
}

export default App;