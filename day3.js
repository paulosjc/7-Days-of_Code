function aparecePrompt(){
    let area = prompt("Você deseja seguir para a área de front-end ou back-end? Digite 1 para front-end ou 2 para back-end.")
    if (area === "1") {
        alert("Front-End? Legal!")
    } else if (area === "2") {
        alert("Back-End é super bacana!")
    } else {
        alert("Você não escolheu uma opção válida. Digite novamente!")
    }

    if (area === "1") {
        let techFront = prompt("Você quer aprender React ou Vue? Digite 1 para React ou 2 para Vue.")
        if (techFront === "1") {
            alert("React? Você pode encontrar boas informações em https://react.dev/...")
        } else if (techFront === "2"){
            alert("Ótima opção! O site oficial é https://vuejs.org/...")
        } else {
            alert("Opção inválida. Digite novamente!")
        }
    } else if (area === "2") {
        let techBack = prompt("Você quer aprender C# ou Java? Digite 1 para C# ou 2 para Java.")
        if (techBack === "1") {
            alert("Puxa! C# é muito interessante! Dê uma olhada no site oficial: https://learn.microsoft.com/pt-br/dotnet/csharp/...")
        } else if (techBack === "2") {
            alert("Java? Uma das melhores e mais usadas linguagens no mundo, junto com JavaScript e Python! O site principal é https://www.java.com/pt-BR/...")
        }
    } else {
        alert("Você não respondeu uma opção válida. Digite novamente!")
    }

    let listaTechs = []
    let fullstack = prompt("Você prefere seguir na área escolhida ou deseja continuar se especializando para se tornar full-stack? Digite 1 para seguir na área ou 2 para full-stack.")
    let aprenderMais = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 para sim e 2 para não.")
    while (aprenderMais === "1") {
        let novaTech = prompt("Qual tecnologia você quer aprender?")
        listaTechs.push(novaTech)
        aprenderMais = prompt(`Que bom que você quer aprender ${novaTech}! Agora a sua trilha de aprendizado está assim: ${listaTechs}. Tem mais alguma?`)
    } 
    alert(`Ótimo! Então sua trilha ficou assim: ${listaTechs}. Bons estudos para você e sucesso na carreira escolhida!`)
}