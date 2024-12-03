// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Offers from './offers/Offers';
import Marketplace from './marketplace/Marketplace';
import Recrutement from './recrutement/Recrutement';
import Panier from './panier/Panier';
import Cartafterdone from './cartafterdone/Cartafterdone';
import Profiles from './adimnComponents/profiles/Profiles';
import Products from './adimnComponents/products/Products';
import Home from './home/Home'
import { Profils } from './profils/profils';
import { My_Profils } from './my_profils/my_profils';
import { Demmande } from './admin/demmande/demande';
import { Marketowner } from './admin/Marketowner/Marketowner';
import { ConstructersProfil } from './admin/ConstructersProfil/ConstructersProfil';
import { ProffesionalProfils } from './admin/Proffesional_profils/ProffesionalProfils';
import { OrderInfoValidate } from './admin/components/OrderInfoValidate/OrderInfoValidate';
import { Validate } from './admin/components/validate/validate';
import HireInfo from './hireInfor/hireInfor';
import Command from './adimnComponents/commands/Command';
import Addproduct from './adimnComponents/addProduct/Addproduct';
import Displayorder from './adimnComponents/displayorder/Displayorder';
import Demands from './adimnComponents/demands/Demands';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/recrutement" element={<Recrutement />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/Cartdone" element={<Cartafterdone />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/products" element={<Products />} />
          <Route path='/' exact element={<Home/>} />
          <Route path='/profils' exact element={<Profils/>} />
          <Route path="/my_profils" exact element={<My_Profils />}/>
          <Route path="/admin_demmande" exact element={<Demmande />}/>
          <Route path="/Marketowner" exact element={<Marketowner />}/>
          <Route path="/ConstructersProfil" exact element={<ConstructersProfil />}/>
          <Route path="/ProffesionalProfils" exact element={<ProffesionalProfils />}/>
          <Route path="/OrderInfoValidate" exact element={<OrderInfoValidate />}/>
          <Route path="/Validate" exact element={<Validate />}/>
          <Route path="/hireInfo" exact element={<HireInfo />}/>
          <Route path="/commands" exact element={<Command />}/>
          <Route path="/addProduct" exact element={<Addproduct/>}/>
          <Route path="/displayOrder" exact element={<Displayorder/>}/>
          <Route path="/demands" exact element={<Demands/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
