import React, {Component} from 'react';
import './App.css';
import { CardList } from './component/CardList/cardlist.component';
import { SearchBox } from './component/Searchbox/searchbox.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters :[
      
      ],
      searchField: '',
      value:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(foo => foo.json())
      .then(foo => this.setState({monsters:foo}))

  }

  handleChange = e =>{
    this.setState({searchField: e.target.value}) 
  }

  render(){ 
    const {monsters,searchField} = this.state;
    const filteredMonster = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters</h1>
        <form onSubmit={(e)=>{console.log(this.state.value);
          e.preventDefault();
        }}>
          <input type='text' value={this.state.value} onChange={e=>this.setState({value: e.target.value})}></input>
          <input type='submit' value='Submit'></input>
        </form>
        <SearchBox placeholder='Please search' 
        handleChange ={this.handleChange  
            }/>
        <CardList monsters={filteredMonster}/>
        
      </div>
    );
  }
}


export default App;
