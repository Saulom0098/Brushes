const botaoTalkBack = document.getElementById('modoTalkback');
        const botaoMaquiar = document.getElementById('dicasDeMaquiagem');
        const produtos = document.querySelectorAll('produtos');

        let modoAtivo = false;

        // Função para falar texto
        function falar(texto) {
            const utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR';
            window.speechSynthesis.cancel(); // Para o áudio anterior
            window.speechSynthesis.speak(utterance);
        }

        // Toggle de acessibilidade
        botaoTalkBack.addEventListener('click', () => {
            modoAtivo = !modoAtivo;
            document.body.classList.toggle('contraste');

            if (modoAtivo) {
                falar('Modo acessibilidade ativado');
            } else {
                falar('Modo acessibilidade desativado');
            }
        });

        // Ação do botão "Não sabe se maquiar"
        botaoMaquiar.addEventListener('click', () => {
            falar('Vamos começar! Escolha seu estilo de maquiagem.');
        });

        // Ação sobre os produtos
        produtos.forEach(produto => {
            produto.addEventListener('mouseenter', () => {
                if (modoAtivo) {
                    const texto = produto.dataset.desc;
                    falar(texto);
                }
            });

            produto.addEventListener('focus', () => {
                if (modoAtivo) {
                    const texto = produto.dataset.desc;
                    falar(texto);
                }
            });
        });