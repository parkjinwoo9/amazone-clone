import '../css/Home.css';
import Product from './Product';

function Home (){


    return(
        <div className='home'>
            <div className='home-container'>
                <img className='home_image' src='https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg' alt=''/>

                <div className='home_row'>
                    <Product id="1" title="제품1" price={2500000} image='https://www.techm.kr/news/photo/202206/98189_113219_4640.jpg'
                    rating={5}/>
                </div>

                <div className='home_row'>
                    <Product  id="2" title="제품1" price={400000} image='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQE53ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_KR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713635480%2C1660927566964%2C1661371890665'
                    rating={4}/>
                    <Product  id="3" title="제품1" price={800000} image='https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4326115930219951-74ff5031-dc5c-42b6-a8b2-d0603a809bfc.jpg'
                    rating={5}/>
                    <Product  id="4" title="제품1" price={1400000} image='https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?pp=002&idx=3&simg=2022112916130403343645ffc977121122668224.jpg&nmt=18'
                    rating={5}/>
                </div>

                <div className='home_row'>
                    <Product  id="5" title="제품1" price={109000} image='https://img.danawa.com/prod_img/500000/633/845/img/10845633_1.jpg?shrink=330:*&_v=20200318131617'
                    rating={3}/>
                </div>
            </div>
        </div>
    )
}

export default Home;