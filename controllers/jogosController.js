import * as jogosModel from '../models/jogosModel.js';

// GET /jogos
export const getJogos = (req, res) => {
    const jogos = jogosModel.listarTodos();
    res.status(200).json(jogos);
};

// GET /jogos/fabricante/:fabricante
export const getJogosPorFabricante = (req, res) => {
    const fabricante = req.params.fabricante.trim();
    const jogosFabricante = jogosModel.listarPorFabricante(fabricante);

    if (jogosFabricante.length > 0) {
        res.status(200).json(jogosFabricante);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado para o fabricante ${fabricante}`
        });
    }
};

// GET /jogos/:id
export const getJogoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = jogosModel.buscarPorId(id);

    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({
            mensagem: `Jogo ${id} não encontrado`
        });
    }
};

// POST /jogos
export const postJogo = (req, res) => {
    const { nomejogo, fabricante, idademin, anolanc } = req.body;

    if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) são obrigatórios.'
        });
    }

    const novoJogo = jogosModel.criar({ nomejogo, fabricante, idademin, anolanc });
    res.status(201).json(novoJogo);
};

// PUT /jogos/:id
export const putJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const { nomejogo, fabricante, idademin, anolanc } = req.body;

    if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) devem ser informados.'
        });
    }

    const jogoAtualizado = jogosModel.atualizar(id, { nomejogo, fabricante, idademin, anolanc });

    if (!jogoAtualizado) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para atualização.`
        });
    }

    res.status(200).json(jogoAtualizado);
};

// DELETE /jogos/:id
export const deleteJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const jogoRemovido = jogosModel.remover(id);

    if (!jogoRemovido) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para exclusão.`
        });
    }

    res.status(200).json({
        mensagem: `Jogo com ID ${id} removido com sucesso.`,
        jogo: jogoRemovido
    });
};

// GET /jogos/anolanc/:anolanc
export const getJogoPorAno = (req, res) => {
    const anolanc = parseInt(req.params.anolanc);
    const jogosAno = jogosModel.buscarPorAno(anolanc);


    if (jogosAno.length > 0) {
        res.status(200).json(jogosAno);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado para o ano ${anolanc}`
        });
    }
};
// Filtra produtos por ano
export const buscarPorAno = (anolanc) => {
    return jogos.filter(
        j => j.anolanc === anolanc
    );
};