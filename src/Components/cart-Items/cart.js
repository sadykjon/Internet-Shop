import React from 'react';
import { Card } from 'bootstrap-4-react';

const img_src = 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg';

const Cart = () => {
  return (
    <div className='cart'>
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Image src={img_src} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
        </Card>
       
    </div>
  );
};

export default Cart;
