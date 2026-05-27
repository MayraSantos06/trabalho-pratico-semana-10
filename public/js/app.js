const pedidos = [
    {
        id:1,
        cliente: "Claudio",
        servico: "Portão Basculante",
        descricao:"Portão automatico residencial",
        material :"Aço galvanizado",
        cor:"breto fosco",
        medidas:"3m x 2,5m",
        dataPedido:"11/04/2023",
        dataEntrega: "01/05/2023",
        orcamento:"1.500",
        status:"Pronto",
        Endereco: "Claudio",
        imagem:"img/portao.jpg"
    },
    {
        id:2,
        cliente: "Letici Chaves",
        servico: "Corrimão",
        descricao:"Corrimão inox para escada interna",
        material :"Aço inox",
        cor:"prata",
        medidas:"5m",
        dataPedido:"20/04/2023",
        dataEntrega: "12/05/2023",
        orcamento:"1.800",
        status:"Em Produção",
        Endereco: "Av. Terra do nunca,99",
        imagem:"img/portao.jpg"
    },
    {
        id:3,
        cliente: "Maria Clara",
        servico: "Porta de Enrolar",
        descricao:"Porta automática para comércio",
        material :"Aço reforçado",
        cor:"Azul",
        medidas:"3,5m x 3m",
        dataPedido:"25/04/2023",
        dataEntrega: "18/05/2023",
        orcamento:"4.500",
        status:"Aguardando Resposta",
        Endereco: "São Luiz do Maranhão",
        imagem:"img/portao.jpg"
    },
    {
        id:4,
        cliente: "Claudio",
        servico: "Portão Basculante",
        descricao:"Portão automatico residencial",
        material :"Aço galvanizado",
        cor:"breto fosco",
        medidas:"3m x 2,5m",
        dataPedido:"11/04/2023",
        dataEntrega: "01/05/2023",
        orcamento:"1.500",
        status:"Aguardando Orçamento",
        Endereco: "Claudio",
        imagem:"img/portao.jpg"
    },
]

function resumoPedidos(){

    const totalPedidos = document.getElementById("totalPedidos");
    if(!totalPedidos) return;

    document.getElementById("totalPedidos").textContent = pedidos.length;
    document.getElementById("aguardandoOrçamento").textContent =pedidos.filter( pedidos => pedidos.status === "Aguardando Orçamento"
).length;
    document.getElementById("aguardandoResposta").textContent = pedidos.filter(pedidos => pedidos.status === "Aguardando Resposta"
).length; 
    document.getElementById("emProdução").textContent =  pedidos.filter(
    pedidos => pedidos.status === "Em Produção"
).length; 
    document.getElementById("prontos").textContent = pedidos.filter(
    pedidos => pedidos.status === "Pronto"
).length; 
}
    resumoPedidos();


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

        if(pedido.status == "Aguardando Orçamento"){
            classeStatus = "AguardandoOrçamento";
        }
        else if (pedido.status == "Aguardando Resposta"){
            classeStatus  = "AguardandoResposta"
        }
        else if (pedido.status == "Em Produção"){
            classeStatus = "producao";
        }
        else{
            classeStatus = "pronto";
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

    const id = Number(params.get("id"));

    const pedido = pedidos.find(item => item.id === id);

    if(!pedido){

        detalhesContainer.innerHTML="<p>Pedido não encontrado</p>";
    } 
    else{

    detalhesContainer.innerHTML = `
    
        <section class="detalhes">

            <h1>${pedido.servico}</h1>

            <table class="table table-dark table-bordered px-5">
                <tbody>
                    <tr>
                        <th>Cliente</th>
                        <td>${pedido.cliente}</td>
                    </tr>
                    <tr>
                        <th>Endereço</th>
                        <td>${pedido.Endereco}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>${pedido.status}</td>
                    </tr>
                    <tr>
                        <th>Descrição</th>
                        <td>${pedido.descricao}</td>
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
                        <td>${pedido.orcamento}</td>
                    </tr>
                </tbody>    
            </table>
        </section>
    
    `;
}
}