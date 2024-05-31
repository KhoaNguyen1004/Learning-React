import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import ToDoItem from './layout/TodoList';

const App = () => {
  const toDoItem = [
    {title: 'Item 1', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.', status: 'done'},
    {title: 'Item 2', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.', status: 'pending'},
    {title: 'Item 3', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.', status: 'in-progress'},
    {title: 'Item 4', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.', status: 'in-progress'},
    {title: 'Item 5', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.', status: 'in-progress'},
    {title: 'Item 6', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.', status: 'cancel'}
  ];

  return (
    <div>
      <Header/>
      <div className='wrapper'>
        {toDoItem.map((todo, index) => (
          <ToDoItem key={index} title={todo.title} description={todo.description} status={todo.status}/>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default App;
