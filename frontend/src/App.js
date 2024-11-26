import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListProprietario from './components/Proprietario/ListProprietario';
import AddProprietario from './components/Proprietario/AddProprietario';
import ReadProprietario from './components/Proprietario/ReadProprietario';
import UpdateProprietario from './components/Proprietario/UpdateProprietario';
import ListVeiculo from './components/Veiculo/ListVeiculo';
import AddVeiculo from './components/Veiculo/AddVeiculo';
import UpdateVeiculo from './components/Veiculo/UpdateVeiculo';
import ReadVeiculo from './components/Veiculo/ReadVeiculo'; // Importação do novo componente

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                <nav>
    <Link to="/proprietario" className="btn btn-primary mx-2">Gerenciar Proprietários</Link>
    <Link to="/veiculo" className="btn btn-purple mx-2">Gerenciar Veículos</Link>
</nav>
                    <Routes>
                        <Route path="/proprietario" element={<ListProprietario />} />
                        <Route path="/addProprietario" element={<AddProprietario />} />
                        <Route path="/readProprietario/:id" element={<ReadProprietario />} />
                        <Route path="/updateProprietario/:id" element={<UpdateProprietario />} />
                        
                        {/* Rotas para Veículos */}
                        <Route path="/veiculo" element={<ListVeiculo />} />
                        <Route path="/addVeiculo" element={<AddVeiculo />} />
                        <Route path="/updateVeiculo/:id" element={<UpdateVeiculo />} />
                        <Route path="/readVeiculo/:id" element={<ReadVeiculo />} /> {/* Nova rota para leitura de veículo */}
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;