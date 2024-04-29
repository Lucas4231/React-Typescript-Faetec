import { useNavigate } from 'react-router-dom';
import './index.css'

export function Menu() {
const navi = useNavigate();
  return (
    <>
    <body className='body-app'>
        <nav className="menu">
        <ul>
          <li><a onClick={()=>{navi('/Contato');}} >Contato</a></li>
          <li><a onClick={()=>{navi('/RepositorioGit');}} >Repositórios Github</a></li>
          <li><a onClick={()=>{navi('/tela3');}} >Tela3</a></li>
          <li><a onClick={()=>{navi('/tela4');}} >Tela4</a></li>
          <li><a onClick={()=>{navi('/tela5');}} >Tela5</a></li>
          <li><a onClick={()=>{navi('/tela6');}} >Tela6</a></li>
          <li><a onClick={()=>{navi('/tela7');}} >Tela7</a></li>

        </ul>
    </nav> 
    <footer className="main_footer-app container">
    <div className="main_footer_copy-app">

        <p className="m-b-footer"> Lucas Rocha - 2024, todos os direitos reservados.</p> 
        <p className="by"> Desenvolvido por: NOME DO NOSSO SITE</p>
    
    </div>
</footer>
    </body>
    </>
  )
}


