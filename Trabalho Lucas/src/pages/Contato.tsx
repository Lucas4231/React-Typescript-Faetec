import { useNavigate } from 'react-router-dom';
import '../index.css';
import { useState, useContext } from 'react';
import { valueContext } from '../Routes';

export function Contato(){
    const navi = useNavigate();
    const [ nome, setNome ] = useState('')
    const [ email,setEmail ] = useState('')
    const [ assunto, setAssunto ] = useState('')
    const [ msg, setMsg ] = useState('')

    const { setValue } = useContext(valueContext);

    return(
        <>

        <body className='body-contato'>

        <header className='header-contato'>Fale Conosco</header>

            <div className="formularioContato">
        
        <form action="#" method="post">

            <label>
                <span>Nome</span>
                <input className='input-contato' type="text" name="nome" required
                onChange={e =>(setNome(e.target.value))}
                />
            </label>
            
            <label>
                <span>E-mail</span>
                <input className='input-contato' type="text" name="email"
                onChange={e =>(setEmail(e.target.value))}
                />
            </label>

            <label>
                <span>Assunto</span>
                <input className='input-contato' type="text" name="assunto" required
                onChange={e =>(setAssunto(e.target.value))}
                />
            </label>
            
            <label>
                <span>Mensagem</span>
                 <textarea name="mensagem" rows={3} className="input-contato"
                 onChange={e =>(setMsg(e.target.value))}
                 ></textarea> 
            </label>
           
            <input type="hidden" name="acao" value="enviar" />
            <button className='Botao-voltar-contato' onClick={()=>{navi('/')}} >Voltar</button>
            <button className="btn-envia" title="Enviar"
            onClick={()=>{navi('/dadoscontato'), setValue({
                        nome:nome,
                        email:email,
                        assunto:assunto,
                        msg:msg
            })
        }}
>Enviar</button>

        
        </form>

    </div>

    <footer className="main_footer-contato container">
    <div className="main_footer_copy-contato">

        <p className="m-b-footer"> Lucas Rocha - 2024, todos os direitos reservados.</p> 
        <p className="by"><i className="icon icon-heart-3"></i> Desenvolvido por: NOME DO NOSSO SITE</p>
    
    </div>
</footer>
            </body>

        </>
    );
}