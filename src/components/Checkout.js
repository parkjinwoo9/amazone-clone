import '../css/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvide';

function Checkout (){
    const [{basket, user},dispatch] = useStateValue();
    return(
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src='https://www.mediajob.co.kr/img/pay/img/company_tab_top_banner.png?20220825' alt=''/>
                
                <div>
                    <h2 className='checkout_title'>
                        {user?.email}의 장바구니입니다.
                    </h2>
                   {basket.map(item=>(
                    <CheckoutProduct key={item} id={item.id} title={item.title} image={item.image}
                    price={item.price} rating={item.rating}/>
                    ))} 
                    
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal/>
            </div>
        </div>
    )
}
export default Checkout;