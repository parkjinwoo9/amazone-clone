import '../css/Header.css';
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvide';
import { auth } from './Firebase';


function Header (){
    const [{basket,user},dispatch] = useStateValue();
    
    const handleAuthentication = () => {
        if (user){
            auth.signOut();
        }   
    }
    return(
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazone'/>
            </Link>
            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                <SearchIcon className='header_searchIcon'/>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>{!user? "게스트" : user.email}</span>
                    <Link to={!user && '/login'} className='homelogin'>
                        <span onClick={handleAuthentication} className='header_optionLineTwo'>{user ? '로그아웃':'로그인'}</span>
                    </Link>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>돌아가기</span>
                    <Link className='orderlist' to='/orders'>
                        <span className='header_optionLineTwo'>주문내역</span>
                    </Link>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>반가워요</span>
                    <span className='header_optionLineTwo'>{user?.email}</span>
                </div>
                <Link to='/checkout'>
                    <div className='header_optionBasket'>
                        <ShoppingBasket className=''/>
                        <span className='header_optionLineTwoHeader_basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;