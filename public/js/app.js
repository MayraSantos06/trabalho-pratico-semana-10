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
        cliente: "Letici Chaves",
        serviço: "Corrimão",
        descriçao:"Corrimão inox para escada interna",
        material :"Aço inox",
        cor:"prata",
        medidas:"5m",
        dataPedido:"20/04/2023",
        dataEntrega: "12/05/2023",
        orçamento:"1.800",
        status:"Em Produção",
        Endereço: "Av. Terra do nunca,99",
        imagem:"img/portao.jpg"
    },
    {
        id:3,
        cliente: "Maria Clara",
        serviço: "Porta de Enrolar",
        descriçao:"Porta automática para comércio",
        material :"Aço reforçado",
        cor:"Azul",
        medidas:"3,5m x 3m",
        dataPedido:"25/04/2023",
        dataEntrega: "18/05/2023",
        orçamento:"4.500",
        status:"pronto",
        Endereço: "São Luiz do Maranhão",
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

        container.innerHTML = `
            <table class="tabela-pedidos">    
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Status</th>
                        <th>Data do Pedido</th>
                        <th>Data de Entrega</th>
                    </tr>
                </thead> 

                <tbody id="tbody-pedidos"></tbody>   

            </table>    
        `;

        const tbody = document.getElementById("tbody-pedidos");
        function renderPedidos(lista){

    tbody.innerHTML = "";

    lista.forEach(pedido => {

        let classeStatus = "";

        if(pedido.status == "Aberto"){
            classeStatus = "aberto";
        }
        else if (pedido.status == "Em Produção"){
            classeStatus = "producao";
        }
        else{
            classeStatus = "concluido";
        }

        tbody.innerHTML +=`

        <tr>

            <td>${pedido.cliente}</td>

            <td>
                <span class="status ${classeStatus}">
                    ${pedido.status}
                </span>        
            </td>

            <td>${pedido.dataPedido}</td>

            <td>${pedido.dataEntrega}</td>

            <td class="acoes">

                <a href="detalhes.html?id=${pedido.id}">
                    Detalhes
                </a>

            </td>

        </tr>
        `;
    });
}
renderPedidos(pedidos);
const buscarPedido = document.getElementById("buscarPedido");

buscarPedido.addEventListener("input", () => {

    const valor = buscarPedido.value.toLowerCase();

    const filtrados = pedidos.filter(pedido =>
        pedido.cliente.toLowerCase().includes(valor)
    );
    renderPedidos(filtrados)
});

const filtroStatus = document.getElementById("filtroStatus");

filtroStatus.addEventListener("change", () => {
    const valor =filtroStatus.value;

    if(valor == "Todos"){
        renderPedidos(pedidos);
    } else{
        const filtrados = pedidos.filter(pedido => 
            pedido.status == valor
        );
        renderPedidos(filtrados);
    }
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

            <table class="table table-dark table-bordered">
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
            </table>
        </section>
    
    `;
}