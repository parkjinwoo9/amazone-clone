import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './Firebase';
function Login (){

    const [email, setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            }).catch(error => alert(error.message()))

    }       
    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                if(auth){
                    navigate('/')
                }
            })
            .catch(error => alert(error.message()))
    }
    return(
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='https://ojsfile.ohmynews.com/PHT_IMG_FILE/2019/1018/IE002560528_PHT.jpg' alt=''/>
            </Link>

            <div className='login_container'>
                <h1>로그인</h1>
                <form>
                    <h5>이메일</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>비밀번호</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button onClick={signIn} className='login_signInButton'>로그인하기</button>
                </form>
                <p>이용 약관 동의하십니까?</p>
                <button onClick={register} className='login_registerButton'>회원가입</button>
            </div>

        </div>
    )
}

export default Login;