import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import contacts from "./contacts.json";

function App() {
  const[contactNames, updateContacts] = useState(contacts)
  let fiveContacts = contactNames.slice(0,5)

  const handleAdd = () => {
     let randomIndex = Math.floor(Math.random()*contacts.length)
     let elem = contacts[randomIndex]

     updateContacts([elem,...contactNames])
  }

  const handleSortName = () =>{
    let clonedContacts = JSON.parse(JSON.stringify(fiveContacts))

    clonedContacts.sort((a,b)=>{
      if(a.name > b.name){
        return 1
      }
      else if(a.name < b.name){
        return -1
      }
      else {
        return 0
      }
    })
    updateContacts(clonedContacts)
  }

  const handleSortPopularity = () =>{
    let clonedContacts = JSON.parse(JSON.stringify(fiveContacts))

    clonedContacts.sort((a,b)=>{
      if(a.popularity > b.popularity){
        return -1
      }
      else if(a.popularity < b.popularity){
        return 1
      }
      else {
        return 0
      }
    })
    updateContacts(clonedContacts)
  }

  const handleDelete = (SomeId) => {
    console.log('Delete works', SomeId)

    let filteredContacts = fiveContacts.filter((singleContact)=>{
      return singleContact.id !== SomeId
    })

    updateContacts(filteredContacts)
  }

  


  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={handleAdd}>Add Random Contact</button>
      <button onClick={handleSortName}>Sort by name</button>
      <button onClick={handleSortPopularity}>Sort by popularity</button>
      {
        fiveContacts.map((singleContact,index)=>{
          return (
            <div className="App">
              
              <ul>
                <li key={index}>
                  <img src={singleContact.pictureUrl}/>
                  <span>{singleContact.name}</span>
                  <span>{singleContact.popularity.toFixed(2)}</span>
                  <button onClick={()=>{handleDelete(singleContact.id)}}>Delete</button>
                </li>
                
              </ul>
              
            </div> 
            
          )
        })
      }
      
    </div>
  );
}

export default App;
