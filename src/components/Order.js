import '../css/Order.css';
import moment from 'moment/moment';
import CheckoutProduct from './CheckoutProduct';
import CurrecnyFormat from 'react-currency-format';

function Order ({order}){
    return(
        <div className='order'>
            <h2>주문</h2>
            <p>{moment.unix(order.data.created).format()}</p>
            <p className='order_id'>
                <small>{order.id}</small>
            </p>

            {order.data.basket?.map(item => (
                <CheckoutProduct key={item} id={item.id} title={item.title} image={item.image}
                price={item.price} rating={item.rating} hideButton/>
            ))}
            <CurrecnyFormat
                renderText={(value) => (
                    <>
                        <h3>총 최종 주문 총액 : {value} 원 </h3>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}
            />
        </div>
    )
}

export default Order;