import React from 'react';
import Footer from '../Footer/Footer.jsx';
// import NavBar from '../Navbar/Navbar.jsx';
import s from '../Cart/Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCart } from '../../redux/actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PasarelaStripe from '../stripePayment/stripePayment.jsx';


const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    let user = window.localStorage.getItem('userId')
    useEffect(() => {
        dispatch(getCart(user))
    }, [dispatch])


    const handleDelete = async (id) => {
        let del = await axios.delete(`https://simpleservice-production.up.railway.app/shopingCart?userId=${user}&cardId=${id}`)
        dispatch(getCart(user))
        return del
    }

    return (
        <>
            {/* <NavBar /> */}
            <div className={s.container}>
                <div className={s.grid}>
                    <div className={s.cartList}>
                        <h2 className={s.title}>Shopping Cart</h2>
                        {
                            cart.length ? cart.map(e => <div key={e.id} className={s.cartItem}>
                                <Link to={`/store/${e.id}`}> <img className={s.img} src={e.image} alt={e.name} /></Link>
                                <div className={s.gridd}>
                                    <div className={s.between}>
                                        <p className={s.itemTitle}>{e.name}</p>
                                        <button className={s.close} onClick={() => handleDelete(e.id)}  >✖</button>
                                    </div>
                                    <div className={s.between}>
                                        <p className={s.amount}>Amount: {e.amount}</p>
                                        <p>${e.subtotal}</p>
                                    </div>
                                </div>
                            </div>
                            )
                                : <div className={s.empty}>Shopping Cart is empty</div>
                        }
                        <div>
                            <hr className={s.hr} />
                            <div className={s.total}>
                                <p className={s.totals}>Total</p>
                                <p className={s.totals}>${cart.length ? cart.reduce((acc, e) => {
                                    return acc + e.subtotal
                                }, 0) : undefined}</p>
                            </div>
                        </div>
                        <p className={s.info}>¿Falta un producto? <Link to='/store'> <span className={s.link}> Seguir Comprando</span></Link></p>
                    </div>
                    <div className={s.pay}>
                        <h2 className={s.title}>Payment Methods</h2>
                        <PasarelaStripe />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Cart