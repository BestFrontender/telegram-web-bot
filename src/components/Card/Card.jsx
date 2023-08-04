import './Card.css';
import Button from "../Button/index.js";
import {useState} from "react";

const Card = ({course, onAddItem, onRemoveItem}) => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prev => prev + 1)
        onAddItem(course)
    }

    const handleDecrement = () => {
        setCount(prev => prev - 1)
        onRemoveItem(course)
    }

    return (
        <div className='card'>
            <span className={`${count !== 0 ? 'card-badge' : 'card-badge-hidden'}`}>{count}</span>
            <div className='image-container'>
                <img src={course.Image} alt={course.title} width="100%" height="240px"/>
            </div>
            <div className='card-body'>
                <h2 className='card-title'>{course.title}</h2>
                <div className='card-price'>
                    {course.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </div>
            </div>
            <div className='hr'/>
            <div className='btn-container'>
                <Button title='+' variant='add' onClick={handleIncrement}/>
                {count !== 0 && (
                    <Button title='-' variant='checkout' onClick={handleDecrement}/>
                )}
            </div>
        </div>
    );
};

export default Card;