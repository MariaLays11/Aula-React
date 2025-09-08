import { BrowserRouter} from 'react-router-dom';
import './App.css'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AppRoutes from './routes';
import CardPersonalizado from './components/card';


const App = () => {
  return(
    <BrowserRouter>
    <Header/>
    <CardPersonalizado titulo="Bem-Vindo ao Meu Site" texto="Este é um exemplo de card personalizado usando props" />
    <AppRoutes/>

    <Footer />
    </BrowserRouter>
        

  )
}

export default App;