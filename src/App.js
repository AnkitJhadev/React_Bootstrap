// App.js
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/Navbar'; // Rename imported Navbar component
import Counter from './Components/Counter';
function App() {
  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },{

      title: 'Black and white Colors',
      
      price: 50,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      
      },{

        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },{

          title: 'Blue Color',
          
          price: 100,
          
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          
          }
          
          ]
  return (
    <div className="App">
       <CustomNavbar/> {/* Use the renamed component here */}
       {
        productsArr.map((item) => {
         return <ul>
            <li>{item.title}</li>
            <li>{item.price}</li>
            <li>{item.imageUrl}</li>


          </ul>
        })
       }
    </div>
  );
}

export default App;
