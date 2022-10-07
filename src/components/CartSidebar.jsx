import React, { useEffect, useState } from 'react';
import { Button, ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { purchaseThunk } from '../store/slice/cart.slice';
import { getProductsThunk } from '../store/slice/Products.slice';


const CartSidebar = ({handleClose, show}) => {

  const carts = useSelector(state=>state.Cart)
  console.log(carts)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProductsThunk())
  },[])

  
  return (
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {
              carts.map(cart=>(
                <ListGroup.Item key={cart.id}>
                  <Link>
                  {cart.title}
                  </Link>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Offcanvas.Body>
        <Button className='sidebar' onClick={()=>dispatch(purchaseThunk())}>Check out</Button>
      </Offcanvas>
      
  );
};

export default CartSidebar;
