const db = require('./db'); 

const Veiculo = db.sequelize.define('veiculo', { 
    id_veiculo: { 
        type: db.Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true 
    }, 
    placa: { 
        type: db.Sequelize.TEXT, 
        allowNull: false  // Opcional, se você deseja que seja obrigatório 
    }, 
    ano: { 
        type: db.Sequelize.INTEGER, 
        allowNull: false  // Opcional, necessário se você quiser garantir que o ano é sempre fornecido
    }, 
    mensalidade: { 
        type: db.Sequelize.DECIMAL(10, 2), 
        allowNull: false  // Pode ser necessário para garantir que um valor seja sempre fornecido
    }, 
    fk_proprietario: { 
        type: db.Sequelize.INTEGER, 
        references: { 
            model: 'proprietarios', // Certifique-se de que o nome da tabela está correto
            key: 'id_proprietario' 
        }, 
        onDelete: 'CASCADE', 
        allowNull: false 
    } 
}, { 
    freezeTableName: true 
}); 

// Veiculo.sync({force: true}); // Descomente para forçar a criação da tabela toda vez que executar

module.exports = Veiculo;