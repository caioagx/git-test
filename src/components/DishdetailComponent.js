import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    constructor(props) {
        super(props) ;

        this.state = {
             selectedDish : null 
        }
    }
    onDishSelect(dish){
        this.props.setState({ selectedDish: dish});
        console.log(dish)
    }
    
    renderDish(){
      const dish = this.props.selectedDish
      
      if (dish != null){ 
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">   
                <Card onClick= {() => this.props.onDishSelect(dish)}>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
        </div>
        )
    }
    else{
        return(
           <div>dish=null?</div>
        );
    }
}
render(){
    return (
        <div className="col-12 col-md-5 m-1">
            <div className="container">
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        </div>
    )
}
}
export default Dishdetail