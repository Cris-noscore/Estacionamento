import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListVeiculo = () => {
    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        const fetchAllVeiculos = async () => {
            try {
                const res = await axios.get("http://localhost:8081/veiculo");
                setVeiculos(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllVeiculos();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/veiculo/${id}`);
            setVeiculos(veiculos.filter(veiculo => veiculo.id_veiculo !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h2>Listando Veículos</h2>
            <Link to="/addVeiculo" className="btn btn-success">Adicionar novo Veículo</Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Placa</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {veiculos.map((veiculo) => (
                        <tr key={veiculo.id_veiculo}>
                            <td>{veiculo.id_veiculo}</td>
                            <td>{veiculo.placa}</td>
                            <td>
                                <Link to={`/readVeiculo/${veiculo.id_veiculo}`} className="btn btn-success mx-2">Ler</Link>
                                <Link to={`/updateVeiculo/${veiculo.id_veiculo}`} className="btn btn-info mx-2">Editar</Link>
                                <button onClick={() => handleDelete(veiculo.id_veiculo)} className="btn btn-danger">Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListVeiculo;