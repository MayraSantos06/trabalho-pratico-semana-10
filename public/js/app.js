let pedidos = [];

async function carregarPedidos() {

    const resposta = await fetch("http://localhost:3000/pedidos");

    pedidos = await resposta.json();

    renderPedidos(pedidos);
    resumoPedidos();
    
}

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
            classeStatus = "status-orcamento";
        }
        else if (pedido.status == "Aguardando Resposta"){
            classeStatus  = "status-resposta"
        }
        else if (pedido.status == "Em Produção"){
            classeStatus = "status-producao";
        }
        else{
            classeStatus = "status-pronto";
        }

        console.log(classeStatus);
        tbody.innerHTML +=`

        <tr>

            <td>${pedido.cliente}</td>
            <td>
                <select class="form-select mt-2 ${classeStatus}" onchange="alterarStatus(${pedido.id}, this.value)">
                
                <option value="Aguardando Orçamento" ${pedido.status === "Aguardando Orçamento" ? "selected" : ""}>
                Aguardando Orçamento
                </option>

                <option value="Aguardando Resposta" ${pedido.status === "Aguardando Resposta" ? "selected" : ""}>
                Aguardando Resposta
                </option>

                <option value="Em Produção" ${pedido.status === "Em Produção" ? "selected" : ""}>
                Em Produção
                </option>

                <option value="Pronto" ${pedido.status === "Pronto" ? "selected" : ""}>
                Pronto
                </option>
                </select>

            </td>

            <td>${pedido.dataPedido}</td>

            <td>${pedido.dataEntrega}</td>

            <td class="acoes">
                    <a class="btn btn-outline-warning" href="detalhes.html?id=${pedido.id}">
                        Detalhes
                    </a>
            </td>

        </tr>
        `;
    });
}

carregarPedidos();

renderPedidos(pedidos);

async function alterarStatus(id, novoStatus){
    const pedido = pedidos.find(p => p.id === id);

    if(pedido){
        pedido.status = novoStatus;

        await fetch(`http://localhost:3000/pedidos/${id}`,{

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedido)
        });

        carregarPedidos();
    }

}

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

    async function carregarPedidos() {

        const resposta = await fetch("http://localhost:3000/pedidos");

        const pedidos = await resposta.json();
        
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
                        <th>Telefone</th>
                        <td>${pedido.telefone}</td>
                    </tr>
                    <tr>
                        <th>Serviço</th>
                        <td>${pedido.servico}</td>
                    </tr>
                    <tr>
                        <th>Material</th>
                        <td>${pedido.material}</td>
                    </tr>
                    <tr>
                        <th>Cor</th>
                        <td>${pedido.cor}</td>
                    </tr>
                    <tr>
                        <th>Medidas</th>
                        <td>${pedido.medidas}</td>
                    </tr>
                    <tr>
                        <th>Quantidade</th>
                        <td>${pedido.quantidade}</td>
                    </tr>
                    <tr>
                        <th>Data de Entrega</th>
                        <td>${pedido.dataEntrega}</td>
                    </tr>
                    <tr>
                        <th>Data do Pedido</th>
                        <td>${pedido.dataPedido}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>${pedido.status}</td>
                    </tr>
                    <tr>
                        <th>Observações</th>
                        <td>${pedido.observacoes}</td>
                    </tr>
                    <tr>
                        <th>Responsável</th>
                        <td>${pedido.responsavel}</td>
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
    carregarPedidos();
}
    

    

    