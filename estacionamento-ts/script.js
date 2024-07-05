(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcularTempo(miliseg) {
        const min = Math.floor(miliseg / 60000);
        const seg = Math.floor((miliseg % 60000) / 1000);
        return `${min}minutos e ${seg}segundos`;
    }
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        ;
        function salvar(veiculos) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }
        ;
        function adicionar(veiculo, gravar) {
            var _a, _b;
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
            <button class="delete" data-placa="${veiculo.placa}">X</button>
            </td>
            `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remover(this.dataset.placa);
            });
            (_b = $("#patio")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (gravar) {
                salvar([...ler(), veiculo]);
            }
        }
        ;
        function remover(placa) {
            const { entrada, nome } = ler().find(veiculo => veiculo.placa === placa);
            const tempoEstacionado = calcularTempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O veiculo ${nome} ficou estacionado por ${tempoEstacionado}. Deseja encerrar?`))
                return;
            salvar(ler().filter(veiculo => veiculo.placa !== placa));
            renderizar();
        }
        ;
        function renderizar() {
            $("#patio").innerHTML = "";
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }
        ;
        return { ler, salvar, adicionar, remover, renderizar };
    }
    patio().renderizar();
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert("Todos os campos são obrigatórios.");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date }, true);
    });
})();
