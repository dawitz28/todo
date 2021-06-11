import React, {useEffect, useState} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAxios from 'axios-hooks';

import './todo.scss';
import axios from 'axios';

function Todo(props) {

  const [list, setList] = useState([]);
  
  // const [{data: getData}] = useAxios ({url: "https://api-js401.herokuapp.com/api/v1/todo", method: "GET"});
  const [{data, loading, error }, refetch] = useAxios ({url: "https://api-js401.herokuapp.com/api/v1/todo", method: "GET"});

  const addItem = (item) => {
    console.log(item);
    item._id = Math.random();
    item.complete = false;
    setList([ list, item]);
  };

  //complete 
  const _toggleComplete = async id => {

    let item = list.filter(i => i._id === id)[0] || {};
    
    if (item._id) {

      item.complete = !item.complete;

      let url = `${Todo}/${id}`;
      let input = {
        text: item.text,
        assignee: item.assignee,
        difficulty: item.difficulty,
        id: item.id,
        complete: item.complete,
        delete: item.delete
      }
      //update
      let updateItem = await requestAnimationFrame(url, 'put', input);
      setList(list.map(listItem => listItem._id === item._id ? updateItem : listItem));

    }
  }
  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newlist = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newlist);
    }

  };
 
  //remove 
   const removeItem = id => {
     let item = list.filter(i =>i._id ===id)[0] || {};
     if (item._id) {
       let url = `${todoapi}/${id}`;

       axios.delete(url, item)
       .then(removeditem => {

        let temp = [ ...list];

        for (let i = temp.length -1; i>= 0; i--){
          if(removeItem.data._id === temp[i]._id){
            temp.splice(i, 1);
          }
        }
        setList(temp);
       })
       .catch(console.error);
     }
   };



  useEffect( () => {
    console.log(data);
    // const [data] = useGetData("https://api-js401.herokuapp.com/api/v1/todo",
    if(data && data.results) {
    setList(data.result);
    }
  }, [data]);

    useEffect(() => {
      _getTodoItems()
    }, []);

    return (
      <>
        <header>
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
      </>
    );
}

export default ToDo;
