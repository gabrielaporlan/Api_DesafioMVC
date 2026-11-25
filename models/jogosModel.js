const jogos = [
    {idjogo:1,nomejogo:"GTA VI",fabricante:"RockStar",idademin:18,anolanc:2026},
    {idjogo:2,nomejogo:"FIFA 24",fabricante:"EA Sports",idademin:3,anolanc:2023},
    {idjogo:3,nomejogo:"The Last of Us Part II",fabricante:"Naughty Dog",idademin:18,anolanc:2020},
    {idjogo:4,nomejogo:"Cyberpunk 2077",fabricante:"CD Projekt",idademin:18,anolanc:2020},
    {idjogo:5,nomejogo:"Minecraft",fabricante:"Mojang Studios",idademin:7,anolanc:2011}
];

export const listarTodos =() =>{
    return jogos;
};

export const listarPorFabricante = (fabricante)=>{
    return jogos.filter(
        j =>j.fabricante.toLocaleLowerCase() === fabricante.toLocaleLowerCase()
    );
};

export const buscarPorId = (idjogo)=>{
    return jogos.find( j =>j.idjogo === idjogo);
};

export const buscarPorAno = (anolanc)=>{
    return jogos.filter( j =>j.anolanc === anolanc);
};

// funçoes para adicionar, atualizar e deletar jogos

export const criar = ({idjogo,nomejogo,fabricante,idademin,anolanc})=>{
    const novoJogo ={
        idjogo: jogos.length +1,
        nomejogo,
        fabricante: parseFloat(fabricante),
        idademin: parseFloat(idademin),
        anolanc: parseInt(anolanc)
    };

    jogos.push(novoJogo);
    return novoJogo;
};

export const atualizar = (idjogo, {nomejogo,fabricante,idademin,anolanc})=>{
    const index = jogos.findIndex(j => j.idjogo === idjogo);
    if(index === -1) return null;
    
    jogos[index] = {
        idjogo,
        nomejogo,
        fabricante: parseFloat(fabricante),
        idademin: parseFloat(idademin),
        anolanc: parseInt(anolanc)
    };
    return jogos[index];
};

export const remover = (idjogo)=>{
    const index = jogos.findIndex(j => j.idjogo === idjogo);
    if(index === -1) return null;

    const [produtoRemovido] = jogos.splice(index, 1);
    return produtoRemovido;
};

