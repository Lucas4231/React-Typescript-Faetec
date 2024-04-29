import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'
import axios from 'axios';

interface Repo{
    name:string;
    description:string;
  }

export function Repositoriogit(){
    const [ repos, setRepos ] = useState<Repo[]>([]);
    const [ search, setSearch ] = useState('');
    const [ filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
    const navi = useNavigate();
    const [nomeusuario, SetNomeUsuario] = useState(' ')
  

    const api = axios.create({
      baseURL:'https://api.github.com/users/'+nomeusuario+'/'
  });
  
    async  function listReposGit(){
        const resp = await api.get('repos');
        setRepos(resp.data);
      }
    
      useEffect(()=>{
        listReposGit();
      },[]);

      useEffect(()=>{
        listReposGit();
      },[nomeusuario]);
    
      useEffect(()=>{
        setFilteredRepos(repos.filter(repo => repo.name.includes(search)));
      },[search]);

    return(
        <>
        <body className='body-api-git'>
        <header className='header-apigit'>Lista de Repositórios Github</header>
            <div className='consulta-api'>

            <div className="input-name">
              <input onBlur={e => SetNomeUsuario(e.target.value)} className='inputname' placeholder="Nome de Usuário"/>
                <span className="icon-pesquisa"> 
                  <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </span>
            </div>

            <div className="input-repos">
              <input type="text" name='search' placeholder='Repositório'  className="inputrepos" onChange={e => setSearch(e.target.value)}/>
                <span className="icon-pesquisa"> 
                  <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </span>
            </div>

        { search.length> 0 ?(
             <ul>
             {filteredRepos.map(repo =>{
               return(
                 <li key={repo.name}>
                   {repo.name}
                 </li>
               )
             })}
           </ul>
  
        ):(
          <ul>
          {repos.map(repo =>{
            return(
              <li key={repo.name}>
                {repo.name}
              </li>
            )
          })}
        </ul>
        )}
            
            </div>   
            <button onClick={()=>{navi('/')}} >Voltar</button>
          
    <footer className="main_footer-reposgit container">
        <div className="main_footer_copy-reposgit">

            <p className="m-b-footer"> Lucas Rocha - 2024, todos os direitos reservados.</p> 
            <p className="by"><i className="icon icon-heart-3"></i> Desenvolvido por: NOME DO NOSSO SITE</p>
        
        </div>
    </footer>          
        </body>
        </>
    );
}
