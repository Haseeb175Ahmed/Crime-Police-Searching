import React, { Component } from 'react';

import './MyStyle.css';


class App extends Component {
  
  constructor() {
    super();

    this.state = {
      Policelist: [],   //For Storing Police data
      Crimelist: [],      //For Storing Crime data
      Policename: [],   //For Storing Police data name
      Crimename: [],    //For Storing Crime data name
      result: [],
      text: '',
      Policecondition : false,
      CrimeCondition : false,
      category : 0,
  }
  
  }

  componentDidMount(){
    

    //For Fetching Police data 
    fetch("https://data.police.uk/api/forces")
        .then(response => response.json())
        .then(response => {
            
          
            this.setState({
              Policelist: response
            }) 
        })
           //For Fetching Crime data
        fetch(" https://data.police.uk/api/crime-categories")
        .then(response => response.json())
        .then(response => {
         
           
            
           
            this.setState({
              Crimelist: response
             
            }) 
           
        })
       
        
    }

    PoliceData()
    {
      
      this.setState({
        //Setting the state and condition
        text: '',
        Policecondition : true, //for displaying Police data  on true 
        CrimeCondition : false    //for removing Crime data from broswer on false 
        
      })
        
      } 


      CrimeData()
    {
      
     
      // console.log(Crimelist); 
        
  
      

      this.setState({
         //Setting the state and condition
        
        text: '',
        Policecondition : false,   //Setting the state and condition
        CrimeCondition : true      //Setting the state and condition
        
        
      })
        
      } 

      DashBoard()
      {
       
       //For loop
       
  
        this.setState({
           //Setting the state and condition
          text: '',
          Policecondition : false,   //Setting the state and condition
          CrimeCondition : false      //Setting the state and condition
          
          
        })
          
        } 



        search(e) {
          
          
          const {Crimelist,Policelist ,Policecondition,CrimeCondition} = this.state;
          const text = e.target.value;
           //For Sorting Police data name
           
           // Searching dynamicallly on click event 
           if (Policecondition === true && CrimeCondition === false) {
             
            //Filtering data from police
             let policeFilter = Policelist.filter((elem) => {
               return elem.name.substr(0, text.length).toLowerCase().match(text.toLowerCase())
             })
     
             this.setState({Policename :policeFilter , text});
    
         }

          else if (Policecondition === false && CrimeCondition === true) {

            let crimeFilter = Crimelist.filter((elem) => {
           
              return elem.name.substr(0, text.length).toLowerCase().match(text.toLowerCase())
            })
    
            this.setState({Crimename:crimeFilter, text});
          }
          // console.log(result);
      }
    
 
        
  
  render() {
    const {Crimelist,Policelist,Policecondition,CrimeCondition,text,Crimename,Policename} = this.state;
    const crimeResult = text.length ? Crimename : Crimelist;
    const ForcesResult = text.length ? Policename : Policelist;

   
     //Rendering the \police name in const variable
    const policeMap = ForcesResult.map((value,index) => {
      return   (
        <tr>
          <td>{index}</td>
          <td>{value.id}</td>
          <td>{value.name}</td>
        </tr>
        
      )

             
  });
  //Rendering the \Criem name in const variable to display on browser
  const CrimeMap = crimeResult.map((value,index) => {
    return (
    <tr>
      <td>{index}</td>
      <td>{value.url}</td>
      <td>{value.name}</td>
    </tr>
    
  )
    
    
    
           
});





    return (
   
      <div className="App">
      <header className="App-header">
      
      </header>
      <div className="sidenav">
    {/* <a href="javascript:this.GetData.bind(this,'on');" >DashBoard</a>
    <a href="#services">FORCES</a>
    <a href="#clients">CRIME</a> */}

    <h2 onClick={ _ => this.DashBoard()}>Dashboard</h2>
    
    {/* Call The PoliceData Function on click Of Tab */}
    <h2 onClick={ _ => this.PoliceData()}>FORCES</h2> 
    {/* /* Call The CrimeData Function on click Of Tab */} 
    <h2 onClick={ _ => this.CrimeData()}>CRIME</h2>
  
    </div>

      <div className="main">
      
      <div className="md-form active-pink active-pink-2 mb-3 mt-0">
      <br/>
       <span><label className = "searchLabel"><b>Search</b></label><input placeholder="Search..." className = "search" value = {this.state.text} onChange={this.search.bind(this)}/></span>
      
      </div>
      <br/>
      
      

      <table id="customers">
  <tbody>
<tr>
  <th>Sno</th>
  <th>Id</th>
  <th>Name</th>
</tr>

{CrimeCondition && CrimeMap }
{Policecondition && policeMap }
</tbody>
</table>
     
      </div>
 
    </div>
    );
  }
}

export default App;


















