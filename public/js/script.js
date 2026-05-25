const pedidos = [
    {
        id:1,
        cliente: "Claudio",
        serviço: "Portão Basculante",
        descriçao:"Portão automatico residencial",
        material :"Aço galvanizado",
        cor:"breto fosco",
        medidas:"3m x 2,5m",
        dataPedido:"11/04/2023",
        dataEntrega: "01/05/2023",
        orçamento:"1.500",
        status:"pronto",
        Endereço: "Claudio",
        imagem:"img/portao.jpg"
    },
    {
        id:2,
        cliente: "Claudio",
        serviço: "Portão Basculante",
        descriçao:"Portão automatico residencial",
        material :"Aço galvanizado",
        cor:"breto fosco",
        medidas:"3m x 2,5m",
        dataPedido:"11/04/2023",
        dataEntrega: "01/05/2023",
        orçamento:"1.500",
        status:"pronto",
        Endereço: "Claudio",
        imagem:"img/portao.jpg"
    },
    {
        id:3,
        cliente: "Claudio",
        serviço: "Portão Basculante",
        descriçao:"Portão automatico residencial",
        material :"Aço galvanizado",
        cor:"breto fosco",
        medidas:"3m x 2,5m",
        dataPedido:"11/04/2023",
        dataEntrega: "01/05/2023",
        orçamento:"1.500",
        status:"pronto",
        Endereço: "Claudio",
        imagem:"img/portao.jpg"
    },
    {
        id:4,
        cliente: "Claudio",
        serviço: "Portão Basculante",
        descriçao:"Portão automatico residencial",
        material :"Aço galvanizado",
        cor:"breto fosco",
        medidas:"3m x 2,5m",
        dataPedido:"11/04/2023",
        dataEntrega: "01/05/2023",
        orçamento:"1.500",
        status:"pronto",
        Endereço: "Claudio",
        imagem:"img/portao.jpg"
    },
]

const container = document.getElementById("cards-container");

if(container){

    pedidos.forEach(pedido => {

        container.innerHTML += `
        
        <article class="card">

            <img src="${pedido.imagem}" alt="${pedido.serviço}">

            <h2>${pedido.serviço}</h2>

            <p>${pedido.cliente}</p>

            <p>${pedido.status}</p>

            <a href="detalhes.html?id=${pedido.id}" class="btn btn-warning">Ver detalhes</a>

        </article>
        
        `;
    });

}

const detalhesContainer = document.getElementById("detalhes-container");

if(detalhesContainer){

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    const pedido = pedidos.find(item => item.id == id);

    detalhesContainer.innerHTML = `
    
        <section class="detalhes">

            <img src="${pedido.imagem}" alt="${pedido.serviço}" width= "50px">

            <h1>${pedido.serviço}</h1>

            <table class="table table-dark table-bordered"
                <tbody>
                    <tr>
                        <th>Cliente</th>
                        <td>${pedido.cliente}</td>
                    </tr>
                    <tr>
                        <th>Endereço</th>
                        <td>${pedido.Endereço}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>${pedido.status}</td>
                    </tr>
                    <tr>
                        <th>Descrição</th>
                        <td>${pedido.descriçao}</td>
                    </tr>
                    <tr>
                        <th>Material</th>
                        <td>${pedido.material}</td>
                    </tr>
                    <tr>
                        <th>Cor</th>
                        <td>${pedido.cor}</td>
                    </tr><tr>
                        <th>Medidas</th>
                        <td>${pedido.medidas}</td>
                    </tr>
                    <tr>
                        <th>Data do Pedido</th>
                        <td>${pedido.dataPedido}</td>
                    </tr>
                    <tr>
                        <th>Data de Entrega</th>
                        <td>${pedido.dataEntrega}</td>
                    </tr>
                    <tr>
                        <th>Orçamento</th>
                        <td>${pedido.orçamento}</td>
                    </tr>

        </section>
    
    `;
}