const db = require('../database/db');

// 🔵 Criar produto
exports.criarProduto = async (req, res) => {
    const { nome, quantidade, preco } = req.body;

    // validação básica
    if (!nome || quantidade == null || preco == null) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }

    try {
        const result = await db.query(
            'INSERT INTO produtos (nome, quantidade, preco) VALUES ($1, $2, $3) RETURNING *',
            [nome, quantidade, preco]
        );

        return res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Erro ao criar produto:', err);
        return res.status(500).json({ erro: 'Erro ao criar produto' });
    }
};

// 🟢 Listar produtos
exports.listarProdutos = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM produtos');

        return res.status(200).json(result.rows);
    } catch (err) {
        console.error('Erro ao listar produtos:', err);
        return res.status(500).json({ erro: 'Erro ao listar produtos' });
    }
};

// 🟡 Atualizar produto
exports.atualizarProduto = async (req, res) => {
    const { id } = req.params;
    const { nome, quantidade, preco } = req.body;

    if (!nome || quantidade == null || preco == null) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }

    try {
        const result = await db.query(
            'UPDATE produtos SET nome=$1, quantidade=$2, preco=$3 WHERE id=$4 RETURNING *',
            [nome, quantidade, preco, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }

        return res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Erro ao atualizar produto:', err);
        res.status(500).json({ erro: 'Erro ao atualizar produto' });
    }
};

// 🔴 Deletar produtos
exports.deletarProduto = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(
            'DELETE FROM produtos WHERE id=$1 RETURNING *', 
            [id]
        );
        
        // Verificar se o produto foi encontrado e deletado
        if (result.rows.length === 0) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }

        return res.status(200).json({ mensagem: 'Produto deletado com sucesso' });
        } catch (err) {
        console.error('Erro ao deletar produto:', err);
        res.status(500).json({ erro: 'Erro ao deletar produto' });
    }
};

