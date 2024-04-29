import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './App';
import { Contato } from './pages/Contato';
import { Repositoriogit } from './pages/RepositorioGit';
import { createContext, useState } from 'react';
import { Tela3 } from './pages/Tela3';
import { Tela4 } from './pages/Tela4';
import { Tela5 } from './pages/Tela5';
import { Tela6 } from './pages/Tela6';
import { Tela7 } from './pages/Tela7';
import { Dadoscontato } from './pages/dadoscontato';

export const valueContext = createContext({} as any)

export function RouteApp(){
        const [value, setValue] = useState({})

    return(
        <BrowserRouter>
            <valueContext.Provider value={{value, setValue}}>
            <Routes>
                <Route path='/' element={<Menu />}/>
                <Route path='/Contato' element={<Contato/>} />
                <Route path='/RepositorioGit' element={<Repositoriogit />} />
                <Route path='/dadoscontato' element={<Dadoscontato />} />
                <Route path='/tela3' element={<Tela3 />} />
                <Route path='/tela4' element={<Tela4 />} />
                <Route path='/tela5' element={<Tela5 />} />
                <Route path='/tela6' element={<Tela6 />} />
                <Route path='/tela7' element={<Tela7 />} />
            </Routes>
            </valueContext.Provider>
        </BrowserRouter>
    );
}