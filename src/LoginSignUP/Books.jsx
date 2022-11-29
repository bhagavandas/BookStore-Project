import { Card } from '@material-ui/core';
import React, { Component } from 'react';
import "./books.css";
import img from './images.jpeg';

class Books extends Component {

    // const [book, setBook] = useState([]);

    // useEffect(() => {
    //     loadBook();
    // });

  
    // const loadBook = async () => {
    //     const result = await axios.get("http://localhost:8080/User/getBooks");
    //     setBook(result.data.obj);
        
    //     console.log(book);
    // }

   
    render() {
        return (
            <div className='elements'>
                
                <div>
                <h1 className='Booktitle'>Books</h1>
            </div>
            <Card className='card'>Dont make me Think
            <img src={img}></img>
        
            </Card>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
        
            </Card>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
        
            </Card>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
        
            </Card>
            <div className='elements'>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
            </Card>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
            </Card>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
            </Card>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
            </Card>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
            </Card></div>
            {/* <div>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
            </Card></div>
            <div>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
            </Card></div>
            <div>
            <Card className='card1'>Dont make me Think
            <img src={img}></img>
            </Card></div>*/}
            </div> 
            
        );
    }
}

export default Books;