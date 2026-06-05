

**Projeto Vulcan SoftFactory**

_Descrição do Projeto_

Este projeto foi desenvolvido como atividade prática para aplicação dos conceitos de Git, GitHub, JavaScript e trabalho colaborativo em equipe.

O sistema simula o monitoramento de robôs industriais por meio da análise da velocidade do motor e da temperatura dos sensores, emitindo alertas quando valores críticos são detectados.

_Objetivos_

- Aplicar conceitos de programação em JavaScript.
- Utilizar Git para controle de versão.
- Utilizar GitHub para colaboração em equipe.
- Praticar resolução de conflitos (Merge Conflict).
- Simular um sistema simples de telemetria industrial.

**Integrantes da Equipe**

Ian Passos;

Lara Anjos;

Layze Barbosa;

Maria Barbosa.

**_Estrutura do Projeto_**

projeto-vulcan-softfactory/

- app.js

- motor.js

- sensores.js

- README.md

**_Funcionalidades_**

O sistema recebe a velocidade atual e a aceleração do robô, calcula a velocidade final e verifica se o equipamento está operando dentro dos limites seguros.

Monitoramento dos Sensores

O sistema recebe cinco temperaturas coletadas pelos sensores, calcula a média e verifica se há necessidade de ativação do sistema de resfriamento.

REGRAS:

Motor

- Velocidade Final = Velocidade Atual + Aceleração
- Se a velocidade final for superior a 100, o sistema exibe:
  - ALERTA DE SOBRECARGA
- Caso contrário:
  - Sistema Seguro

Sensores

- O sistema calcula a média das cinco temperaturas informadas.
- Se a média for superior a 70°C:
  - Ligar Resfriamento
- Caso contrário:
  - Temperatura Normal

Tecnologias Utilizadas

- JavaScript
- Node.js
- Git
- GitHub
- SSH

**_Como Executar_**

1. Clonar o repositório:

git clone URL_DO_REPOSITORIO

2. Acessar a pasta do projeto:

cd projeto-vulcan-softfactory

3. Executar o sistema:

node app.js

**Explicando o Código**

_Arquivo motor.js_

O arquivo motor.js é responsável pelo monitoramento da velocidade do robô industrial. Nele foi criada uma função chamada verificarMotor, que recebe as informações de velocidade atual e aceleração do equipamento. A variável velocidadeAtual armazena a velocidade em que o robô está operando no momento da verificação. A variável aceleracao representa o aumento de velocidade que será aplicado ao motor. Em seguida, a variável velocidadeFinal realiza a soma desses dois valores para determinar a velocidade que o robô atingirá após a aceleração.

Também foi utilizada a constante LIMITE_VELOCIDADE, definida com o valor 100, que representa a velocidade máxima considerada segura para o funcionamento do sistema. Caso a velocidade final ultrapasse esse limite, a função retorna a mensagem "ALERTA DE SOBRECARGA". Caso contrário, retorna "Sistema Seguro". Dessa forma, o código permite identificar situações que possam comprometer o funcionamento adequado do robô.

_Arquivo sensores.js_

O arquivo sensores.js é responsável pelo monitoramento da temperatura do sistema. A função verificarTemperatura recebe um conjunto de cinco temperaturas coletadas pelos sensores do robô. A constante LIMITE_TEMPERATURA foi definida com o valor 70 e representa a temperatura máxima considerada segura para operação.

A variável soma é utilizada para armazenar a soma de todas as temperaturas informadas. Para realizar esse cálculo foi utilizado um laço de repetição for, controlado pela variável i, que percorre todas as posições do vetor de temperaturas. Após a soma dos valores, a variável media calcula a temperatura média do sistema dividindo a soma pela quantidade de sensores analisados.

Se a média calculada for superior ao limite estabelecido, o sistema retorna a mensagem "Ligar Resfriamento". Caso contrário, retorna "Temperatura Normal". Esse procedimento permite identificar possíveis riscos de superaquecimento e auxilia na proteção dos equipamentos.

_Arquivo app.js_

O arquivo app.js funciona como o programa principal do projeto. Nele são importadas as funções criadas nos arquivos motor.js e sensores.js, permitindo que todas as funcionalidades do sistema sejam executadas em conjunto.

As variáveis velocidadeAtual e aceleracao armazenam os valores informados pelo usuário para análise do motor. Já a variável temperaturas armazena as cinco temperaturas coletadas dos sensores. Essas informações são enviadas para as funções responsáveis pelos cálculos e verificações.

Após o processamento dos dados, o programa exibe os resultados na tela utilizando comandos de saída. Dessa forma, o usuário consegue visualizar o status do motor e dos sensores, verificando se o sistema está operando normalmente ou se existe a necessidade de intervenção devido a sobrecarga ou superaquecimento. O arquivo app.js é responsável pela integração de todas as partes do projeto, garantindo o funcionamento completo da aplicação.

**_Controle de Versão_**

Durante o desenvolvimento foram utilizados:

- Branches
- Commits
- Pull Requests
- Merge
- Resolução de Conflitos

**Conclusão**

O projeto permitiu a aplicação prática dos conhecimentos de versionamento com Git, colaboração utilizando GitHub e desenvolvimento de aplicações JavaScript voltadas para automação industrial.
