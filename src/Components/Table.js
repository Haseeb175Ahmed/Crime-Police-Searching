import React, { Component } from 'react';
import '../MyStyle.css';


class TableComponent extends Component {
  

        
  
  render() {
    

    
      
    return (
   
      <div className="App">
      <header className="App-header">
       
      </header>
  

    
      <table id="customers">
  <tr>
    <th>Sno</th>
    <th>Id</th>
    <th>Name</th>
  </tr>
  <tr>
    <td>{this.props.sno}</td>
    <td>{this.props.id}</td>
    <td>{this.props.name}</td>
  </tr>
  
</table>
 </div>
 
  
    );
  }
}

export default TableComponent;
