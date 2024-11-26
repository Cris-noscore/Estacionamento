import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateVeiculo() {
    const { id } = useParams();
    const [veiculo, setVeiculo] = useState({ placa: "", ano: "", mensalidade: "", fk_proprietario: "" });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/veiculo/${id}`)
            .then(res => {
                console.log(res);
                setVeiculo(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        setVeiculo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/veiculo/${id}`, veiculo);
            navigate("/veiculo");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h1>Atualizar Veículo</h1>
            <form onSubmit={handleClick}>
                <div className="mb-3 mt-3">
                    <label className="form-label">Placa:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite a placa do veículo"
                        name="placa"
                        value={veiculo.placa}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Ano:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite o ano do veículo"
                        name="ano"
                        value={veiculo.ano}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Mensalidade:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite a mensalidade"
                        name="mensalidade"
                        value={veiculo.mensalidade}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">ID do Proprietário:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite o ID do proprietário"
                        name="fk_proprietario"
                        value={veiculo.fk_proprietario}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Atualizar
                </button>
                <div className='container d-flex justify-content-center'>
                    <Link to="/veiculo">Veja todos os veículos</Link>
                </div>
            </form>
        </div>
    );
}

export default UpdateVeiculo;