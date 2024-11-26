// AddVeiculo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AddVeiculo = () => {
    const [veiculo, setVeiculo] = useState({ placa: "", ano: "", mensalidade: "", fk_proprietario: "" });
    const [proprietarios, setProprietarios] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProprietarios = async () => {
            try {
                const res = await axios.get("http://localhost:8081/proprietario");
                setProprietarios(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProprietarios();
    }, []);

    const handleChange = (e) => {
        setVeiculo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            veiculo.mensalidade = veiculo.mensalidade.replace(',', '.'); // formatação se necessário
            await axios.post("http://localhost:8081/veiculo", veiculo);
            navigate("/veiculo");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h1>Adicionar Veículo</h1>
            <form onSubmit={handleClick}>
                <div className="mb-3 mt-3">
                    <label className="form-label">Placa:</label>
                    <input type="text" className="form-control" placeholder="Digite a placa do veículo" name="placa" value={veiculo.placa} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Ano:</label>
                    <input type="text" className="form-control" placeholder="Digite o ano do veículo" name="ano" value={veiculo.ano} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Mensalidade:</label>
                    <input type="text" className="form-control" placeholder="Digite a mensalidade" name="mensalidade" value={veiculo.mensalidade} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Proprietário:</label>
                    <select name="fk_proprietario" className="form-control" onChange={handleChange}>
                        <option value="">Selecione um Proprietário</option>
                        {proprietarios.map((prop) => (
                            <option key={prop.id_proprietario} value={prop.id_proprietario}>
                                {prop.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Adicionar</button>
                <Link to="/veiculo">Veja todos os veículos</Link>
            </form>
        </div>
    );
};

export default AddVeiculo;