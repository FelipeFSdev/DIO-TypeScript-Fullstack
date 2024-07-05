interface Veiculo {
    nome: string,
    placa: string,
    entrada: Date | string,
}

(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function calcularTempo(miliseg: number) {
        const min = Math.floor(miliseg / 60000);
        const seg = Math.floor((miliseg % 60000) / 1000);

        return `${min}minutos e ${seg}segundos`;
    }

    function patio() {
        function ler(): Veiculo[] {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        };

        function salvar(veiculos: Veiculo[]) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        };

        function adicionar(veiculo: Veiculo, gravar?: boolean) {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
            <button class="delete" data-placa="${veiculo.placa}">X</button>
            </td>
            `;

            row.querySelector(".delete")?.addEventListener("click", function () {
                remover(this.dataset.placa);
            });

            $("#patio")?.appendChild(row);

            if (gravar) {
                salvar([...ler(), veiculo]);
            }
        };

        function remover(placa: string) {
            const { entrada, nome } = ler().find(veiculo => veiculo.placa === placa);

            const tempoEstacionado = calcularTempo(new Date().getTime() - new Date(entrada).getTime());

            if (!confirm(`O veiculo ${nome} ficou estacionado por ${tempoEstacionado}. Deseja encerrar?`)) return;
            salvar(ler().filter(veiculo => veiculo.placa !== placa));
            renderizar();
        };

        function renderizar() {
            $("#patio")!.innerHTML = "";
            const patio = ler();

            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        };

        return { ler, salvar, adicionar, remover, renderizar };
    }

    patio().renderizar();
    $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if (!nome || !placa) {
            alert("Todos os campos são obrigatórios.");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date }, true);
    });

})();