function adotar() {
    const continuar = confirm("Deseja iniciar a adoção?");

    if (continuar) {
        window.location.href = "login.html";
    }
}
const form = document.getElementById("form");

const cpfsCadastrados = ["12345678900", "11111111111"];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const idade = Number(document.getElementById("idade").value);
    const cidade = document.getElementById("cidade").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("numero").value;
    const moradia = document.getElementById("moradia").value;
    const horas = Number(document.getElementById("horas").value);
    const motivo = document.getElementById("motivo").value;
    const quintal = document.querySelector('input[name="quintal"]:checked')?.value;
    const pet = document.querySelector('input[name="pet"]:checked')?.value;
    const termos = document.querySelector('input[name="termos"]')?.checked;

    if (!nome || nome.length < 3) {
        alert("Nome inválido");
        return;
    }
    if (!email.includes("@")) {
        alert("Email inválido");
        return;
    }
    if (!telefone || telefone.length < 8) {
        alert("Telefone inválido");
        return;
    }
    if (!cpf) {
        alert("CPF obrigatório");
        return;
    }
    if (cpfsCadastrados.includes(cpf)) {
        alert("CPF já cadastrado");
        return;
    }
    if (idade < 18) {
        alert("Você precisa ter 18 anos ou mais");
        return;
    }
    if (!cidade) {
        alert("Cidade obrigatória");
        return;
    }
    if (!moradia) {
        alert("Selecione o tipo de moradia");
        return;
    }
    if (!quintal) {
        alert("Informe se possui quintal");
        return;
    }
    if (!pet) {
        alert("Informe se já teve pet");
        return;
    }
    if (isNaN(horas)) {
        alert("Horas inválidas");
        return;
    }
    if (!motivo || motivo.length < 10) {
        alert("Motivo muito curto");
        return;
    }
    const motivoLower = motivo.toLowerCase();
    if (motivoLower === "quero" || motivoLower === "porque sim") {
        alert("Motivo muito genérico");
        return;
    }
    if (!termos) {
        alert("Você deve aceitar os termos");
        return;
    }
    if (moradia === "Apartamento" && quintal === "sim") {
        alert("Apartamento não pode ter quintal");
        return;
    }
    if (moradia === "Casa" && quintal === "nao") {
        alert("Verifique a segurança do ambiente para o animal");
    }
    if (moradia === "Apartamento") {
        alert("Verifique se o local permite animais");
    }
    if (horas > 8) {
        const continuar = confirm("O animal ficará muito tempo sozinho. Deseja continuar?");
        if (!continuar) return;
    }
    if (pet === "nao") {
        alert("Você poderá receber acompanhamento da ONG");
    }
    alert("Formulário enviado com sucesso 🐶");

    cpfsCadastrados.push(cpf);

    form.reset();
    alert("Parabéns! 🎉 Você adotou um doguinho 🐶❤️");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 500);
});
