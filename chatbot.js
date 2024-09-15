// Define o caminho para o script do Python
const chatbotEndpoint = 'http://localhost:5001/chatbot';

// Objeto com as traduções
const translations = {
    'name-pt-BR': 'Douglas Ramos Charqueiro',
    'name-en': 'Douglas Ramos Charqueiro',
    'address-pt-BR': 'Endereço: Carvoeira - Florianópolis - SC',
    'address-en': 'Address: Carvoeira - Florianópolis - SC',
    'phone-pt-BR': 'Telefone: (55) 99189-3927',
    'phone-en': 'Phone: +55 (55) 99189-3927',
    'email-pt-BR': 'E-mail: douglas.ramos@acad.ufsm.br',
    'email-en': 'Email: douglas.ramos@acad.ufsm.br',
    'linkedin-pt-BR': 'LinkedIn',
    'linkedin-en': 'LinkedIn',
    'github-pt-BR': 'GitHub',
    'github-en': 'GitHub',
    'about-title-pt-BR': 'Sobre',
    'about-title-en': 'About',
    'about-description-pt-BR': 'Sou um profissional de tecnologia com paixão por desenvolvimento de software e aprendizado contínuo. Atualmente trabalho como Técnico em Eletrotécnica na Justiça Federal de Santa Catarina, com foco em automação industrial. Sou graduando em Ciência da Computação pela UNISUL e possuo experiência em diversos projetos de software e hardware. Sou apaixonado por aprender novas tecnologias e aprimorar minhas habilidades para entregar soluções inovadoras e eficientes.',
    'about-description-en': 'I am a technology professional with a passion for software development and continuous learning. I currently work as an Electrical Technician at the Federal Court of Santa Catarina, focusing on industrial automation. I am a Computer Science student at UNISUL and have experience in various software and hardware projects. I am passionate about learning new technologies and improving my skills to deliver innovative and efficient solutions.',
    'experience-title-pt-BR': 'Experiência Profissional',
    'experience-title-en': 'Professional Experience',
    'experience-job-title-pt-BR': 'Técnico em Eletrotécnica',
    'experience-job-title-en': 'Electrical Technician',
    'experience-company-pt-BR': 'Grupo Setup - Florianópolis, SC',
    'experience-company-en': 'Grupo Setup - Florianópolis, SC',
    'experience-date-pt-BR': 'Março de 2024 - Presente',
    'experience-date-en': 'March 2024 - Present',
    'experience-description-1-pt-BR': 'Realizo manutenção elétrica no Hospital Universitário Polydoro Ernani de São Thiago.',
    'experience-description-1-en': 'I perform electrical maintenance at the Polydoro Ernani de São Thiago University Hospital.',
    'experience-description-2-pt-BR': 'Atuei na área de Automação Industrial, realizando a gestão e controle do prédio e implementando melhorias no software Envision.',
    'experience-description-2-en': 'I worked in the area of Industrial Automation, managing and controlling the building and implementing improvements in the Envision software.',
    'experience-description-3-pt-BR': 'Experiência prática com sistemas de automação e gerenciamento de infraestrutura.',
    'experience-description-3-en': 'Practical experience with automation systems and infrastructure management.',
    'experience2-job-title-pt-BR': 'Estágio em Manutenção Predial e de Computadores',
    'experience2-job-title-en': 'Internship in Building and Computer Maintenance',
    'experience2-company-pt-BR': 'Base Aérea de Santa Maria - Santa Maria, RS',
    'experience2-company-en': 'Santa Maria Air Base - Santa Maria, RS',
    'experience2-date-pt-BR': '2023',
    'experience2-date-en': '2023',
    'experience2-description-1-pt-BR': 'Adquiri experiência prática em manutenção de infraestrutura predial, incluindo sistemas elétricos e hidráulicos, e em equipamentos de informática.',
    'experience2-description-1-en': 'I gained practical experience in building infrastructure maintenance, including electrical and hydraulic systems, and in computer equipment.',
    'education-title-pt-BR': 'Formação Acadêmica',
    'education-title-en': 'Academic Education',
    'education-course-title-pt-BR': 'Ciências da Computação',
    'education-course-title-en': 'Computer Science',
    'education-institution-pt-BR': 'Universidade do Sul de Santa Catarina (UNISUL) - Florianópolis, SC',
    'education-institution-en': 'University of Southern Santa Catarina (UNISUL) - Florianópolis, SC',
    'education-date-pt-BR': '2024 - Cursando',
    'education-date-en': '2024 - Present',
    'education2-course-title-pt-BR': 'Sistemas de Informação',
    'education2-course-title-en': 'Information Systems',
    'education2-institution-pt-BR': 'Universidade Federal de Santa Maria (UFSM) - Santa Maria, RS',
    'education2-institution-en': 'Federal University of Santa Maria (UFSM) - Santa Maria, RS',
    'education2-date-pt-BR': '2023 - Incompleto',
    'education2-date-en': '2023 - Incomplete',
    'education2-project-pt-BR': 'Desenvolvi um projeto de Iniciação Científica sobre Inteligência em Iluminação para Smart Cities, com foco em transmissão de dados e criptografia.',
    'education2-project-en': 'I developed a Scientific Initiation project on Lighting Intelligence for Smart Cities, focusing on data transmission and encryption.',
    'education3-course-title-pt-BR': 'Técnico em Eletrotécnica',
    'education3-course-title-en': 'Electrical Technician',
    'education3-institution-pt-BR': 'Colégio Técnico Industrial de Santa Maria (CTISM/UFSM) - Santa Maria, RS',
    'education3-institution-en': 'Technical Industrial College of Santa Maria (CTISM/UFSM) - Santa Maria, RS',
    'education3-date-pt-BR': '2020-2023',
    'education3-date-en': '2020-2023',
    'education4-course-title-pt-BR': 'Ensino Fundamental',
    'education4-course-title-en': 'Elementary School',
    'education4-institution-pt-BR': 'Colégio Municipal Miguel Beltrame - Santa Maria, RS',
    'education4-institution-en': 'Miguel Beltrame Municipal School - Santa Maria, RS',
    'skills-title-pt-BR': 'Habilidades',
    'skills-title-en': 'Skills',
    'skill-1-pt-BR': 'Automação Industrial',
    'skill-1-en': 'Industrial Automation',
    'skill-2-pt-BR': 'Manutenção Elétrica',
    'skill-2-en': 'Electrical Maintenance',
    'skill-3-pt-BR': 'Software Envision',
    'skill-3-en': 'Envision Software',
    'skill-4-pt-BR': 'Redes de Computadores',
    'skill-4-en': 'Computer Networks',
    'skill-5-pt-BR': 'Manutenção de Computadores',
    'skill-5-en': 'Computer Maintenance',
    'skill-6-pt-BR': 'HTML',
    'skill-6-en': 'HTML',
    'skill-7-pt-BR': 'CSS',
    'skill-7-en': 'CSS',
    'skill-8-pt-BR': 'JavaScript',
    'skill-8-en': 'JavaScript',
    'skill-9-pt-BR': 'Python',
    'skill-9-en': 'Python',
    'skill-10-pt-BR': 'C',
    'skill-10-en': 'C',
    'skill-11-pt-BR': 'Git',
    'skill-11-en': 'Git',
    'skill-12-pt-BR': 'Inglês (Intermediário)',
    'skill-12-en': 'English (Intermediate)',
    'skill-13-pt-BR': 'Espanhol (Básico)',
    'skill-13-en': 'Spanish (Basic)',
    'qualifications-title-pt-BR': 'Qualificações',
    'qualifications-title-en': 'Qualifications',
    'qualifications-item-1-pt-BR': 'Domínio em softwares: Pacote Office, Autocad, LogoSoft, FestoFluidSim, CADESIMU, Visual Studio Code, Envision for BACtalk',
    'qualifications-item-1-en': 'Proficiency in software: Microsoft Office Suite, AutoCAD, LogoSoft, Festo FluidSIM, CADESIMU, Visual Studio Code, Envision for BACtalk',
    'qualifications-item-2-pt-BR': 'Formação complementar em áreas como: Circuitos Digitais, Gestão Industrial e Segurança do Trabalho, Eletrônica, Projetos Elétricos, Desenho Técnico, Tecnologia Mecânica, Sistemas Elétricos de Potência, Circuitos Elétricos, Projetos Fotovoltaicos, Linguagem Python, Linguagem C, Linguagem Front-end (HTML e CSS), Teoria Geral da Administração, Programação I, Circuitos Digitais.',
    'qualifications-item-2-en': 'Complementary training in areas such as: Digital Circuits, Industrial Management and Occupational Safety, Electronics, Electrical Projects, Technical Drawing, Mechanical Technology, Power Systems, Electrical Circuits, Photovoltaic Projects, Python Language, C Language, Front-end Language (HTML and CSS), General Administration Theory, Programming I, Digital Circuits.',
    'projects-title-pt-BR': 'Projetos',
    'projects-title-en': 'Projects',
    'project-1-title-pt-BR': 'Projeto 1: Card-Game-dumb-play 🃏',
    'project-1-title-en': 'Project 1: Card-Game-dumb-play 🃏',
    'project-1-description-pt-BR': `
        O código em C apresenta a implementação de um jogo de cartas estratégico e tático, onde dois jogadores se enfrentam em uma série de rodadas. Cada jogador recebe uma mão de cartas de um baralho que inclui cartas de diferentes cores e valores. O <strong>objetivo</strong> é vencer as rodadas acumulando pontos, que são determinados pelo resultado de combates entre as cartas jogadas pelos jogadores.
        <br>
        <p>
        No início do jogo, o baralho é inicializado e embaralhado. As cartas são distribuídas entre os jogadores, que então alternam suas jogadas em cada rodada. Durante sua vez, um jogador pode escolher jogar uma carta da sua mão, exibir as cartas presentes na mesa ou encerrar o jogo.
        </p>
        <br>
        <p>
        Quando um jogador decide jogar uma carta, essa carta é colocada na mesa e um combate é iniciado. O combate envolve comparar o valor total das cartas pretas jogadas pelos jogadores. Certas cartas têm valores especiais que podem influenciar o resultado do combate. O jogador vencedor do combate recebe pontos e, em alguns casos, cartas adicionais são distribuídas entre os jogadores.
        </p>
        <br>
        <p>
        Ao final de cada rodada, os pontos são contabilizados com base nos resultados dos combates e na quantidade de rodadas jogadas. O jogo continua até que todas as cartas do baralho sejam utilizadas. O jogador com mais pontos ao final do jogo é declarado o vencedor.
        </p>
        <br>
        Essa implementação combina elementos de estratégia, gestão de mão e sorte, proporcionando uma experiência desafiadora e divertida para os jogadores.
    `,
    
    'project-1-description-en': `
        The C code presents the implementation of a strategic and tactical card game where two players face off in a series of rounds. Each player receives a hand of cards from a deck that includes cards of different suits and values. The goal is to win rounds by accumulating points, which are determined by the outcome of battles between cards played by the players.
        
        At the beginning of the game, the deck is initialized and shuffled. Cards are dealt to the players, who then alternate turns each round. During their turn, a player can choose to play a card from their hand, display the cards on the table, or end the game.
        
        When a player decides to play a card, that card is placed on the table and a battle is initiated. The battle involves comparing the total value of black cards played by the players. Certain cards have special values that can influence the outcome of the battle. The winning player of the battle receives points and, in some cases, additional cards are dealt to the players.
        
        At the end of each round, points are tallied based on the outcome of battles and the number of rounds played. The game continues until all cards in the deck have been used. The player with the most points at the end of the game is declared the winner.
        
        This implementation combines elements of strategy, hand management and luck, providing a challenging and fun experience for players.
    `,
    
    'project-1-technologies-pt-BR': 'Tecnologias usadas: C.',
    'project-1-technologies-en': 'Technologies used: C.',
    'project-1-github-pt-BR': 'Código-fonte no GitHub: ',
    'project-1-github-en': 'Source code on GitHub: ',
    'project-2-title-pt-BR': 'Projeto 2: Sistema de Testes para Tomada de Decisão e Consultoria 📊💡',
    'project-2-title-en': 'Project 2: Testing System for Decision Making and Consulting 📊💡',
    'project-2-description-pt-BR': `Este projeto em desenvolvimento tem como objetivo empoderar você 
        na jornada de autoconhecimento, desenvolvimento pessoal e tomada de decisão. Através de uma plataforma interativa, 
        ofereceremos testes abrangentes e consultoria personalizada, moldadas para te ajudar a alcançar seu potencial máximo. 
        <br>
    <p>
        <strong>
        **Funcionalidades em Construção:**
        </strong>
    </p>
        <br>
        * Mergulho Interior: Explore testes de personalidade, habilidades, valores e interesses para desvendar seus pontos fortes e paixões. 
        <br>
        * Bússola da Carreira: Descubra as profissões que mais se encaixam com seu perfil e receba orientação para alcançar seus objetivos profissionais.
        <br> 
        * Mapa Financeiro: Compreenda melhor seu relacionamento com o dinheiro, defina metas e trace planos para alcançar a liberdade financeira.
        <br>
        * Análises Detalhadas: Receba relatórios personalizados que traduzem seus resultados em insights acionáveis e planos de ação.
        <br> 
        * Consultoria sob Medida: Conecte-se com especialistas para aprofundar seus conhecimentos, receber orientação individualizada e traçar estratégias personalizadas.
        <br>
        <strong>
        <p>**Para Quem É?**</p>
        </strong>
        <br> 
        * Exploradores do Autoconhecimento: Indivíduos em busca de entender melhor quem são e o que realmente desejam alcançar.
        <br> 
        * Profissionais em Ascensão: Pessoas que buscam aprimorar suas habilidades, tomar decisões mais assertivas e impulsionar suas carreiras.
        <br> 
        * Empreendedores Visionários: Líderes que desejam construir times de alta performance e impulsionar o crescimento de seus negócios.
        <br>`,
    'project-2-description-en': `This project under development aims to empower you on your journey of self-knowledge, personal development, and decision-making. Through an interactive platform, we will offer comprehensive tests and personalized consulting, designed to help you reach your full potential.
    
    
        
        **Features Under Construction:**
        
    
        
        * Inner Dive: Explore personality, skills, values, and interests tests to uncover your strengths and passions.
        
        * Career Compass: Discover the professions that best fit your profile and receive guidance to achieve your career goals.
        
        * Financial Map: Better understand your relationship with money, set goals, and make plans to achieve financial freedom.
        
        * Detailed Analysis: Receive personalized reports that translate your results into actionable insights and action plans.
        
        * Customized Consulting: Connect with experts to deepen your knowledge, receive individualized guidance, and develop personalized strategies.
      
        
        **Who Is It For?**
        
        
        * Self-Knowledge Seekers: Individuals seeking to better understand who they are and what they truly want to achieve.
        
        * Rising Professionals: People looking to improve their skills, make more assertive decisions, and boost their careers.
        
        * Visionary Entrepreneurs: Leaders who want to build high-performance teams and drive the growth of their businesses.`,
    'project-2-technologies-pt-BR': 'Tecnologias usadas: Python.',
    'project-2-technologies-en': 'Technologies used: Python.',
    'project-2-github-pt-BR': 'Código-fonte no GitHub',
    'project-2-github-en': 'Source code on GitHub',
    'github-title-pt-BR': 'GitHub',
    'github-title-en': 'GitHub',
    'github-description-pt-BR': 'Para visualizar meu portfólio de projetos e código-fonte, acesse meu perfil no GitHub:',
    'github-description-en': 'To view my project portfolio and source code, access my GitHub profile:',
    'awards-title-pt-BR': 'Prêmios e Reconhecimentos',
    'awards-title-en': 'Awards and Recognition',
    'awards-description-pt-BR': 'Ainda não tenho prêmios e reconhecimentos formais, mas estou sempre buscando oportunidades para me desenvolver e contribuir para projetos relevantes.',
    'awards-description-en': 'I do not yet have formal awards and recognition, but I am always looking for opportunities to develop myself and contribute to relevant projects.',
    'chatbot-curriculo-pt-BR': 'Chatbot do Currículo',
    'chatbot-curriculo-en': 'Resume Chatbot',
    'enviar-pt-BR': 'Enviar',
    'enviar-en': 'Send'
};

function changeLanguage(lang) {
    console.log("Chamando a função changeLanguage com idioma:", lang);
    const elements = document.querySelectorAll('.language-dependent');
    console.log("Elementos encontrados:", elements);
  
    elements.forEach(element => {
      const elementId = element.id;
      console.log("ID do elemento:", elementId);
      const textKey = elementId + '-' + lang;
      console.log("Chave de tradução:", textKey);
      const translatedText = translations[textKey];
      console.log("Texto traduzido:", translatedText);
  
      if (translatedText) {
        element.innerHTML = translatedText;
        console.log("Conteúdo do elemento atualizado:", element.innerHTML);
      }
    });
  }
function toggleChatbox() {
    const chatbotContent = document.getElementById('chatbot-content');
    const icon = document.querySelector('.chatbot-header button i');

    if (chatbotContent.style.display === 'none' || chatbotContent.style.display === '') {
        chatbotContent.style.display = 'block';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        chatbotContent.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

function sendChat() {
    const userInput = document.getElementById('chatbot-input').value;
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotResponse = document.getElementById('chatbot-response');

    // Adiciona a mensagem do usuário
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.textContent = userInput;
    chatbotMessages.appendChild(userMessage);

    // Obter informações do usuário (nome, cargo, empresa, etc.)
    const userInfo = {
        nome: "Douglas Ramos Charqueiro", 
        cargo: "Técnico em Eletrotécnica",
        empresa: "Justiça Federal de Santa Catarina",
        formacao: "Ciência da Computação",
        instituicao: "UNISUL"
        // ... outras informações
    };

    // Envia a pergunta para o chatbot, incluindo userInfo
    fetch(chatbotEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'prompt': userInput, 'user_info': userInfo })
    })
    .then(response => response.text()) 
    .then(data => {
        try {
            data = JSON.parse(data); 
            chatbotResponse.innerHTML = data.response; 
        } catch (error) {
            chatbotResponse.textContent = data; 
        }
        document.getElementById('chatbot-input').value = ''; 
    })
    .catch(error => {
        console.error('Erro ao enviar a mensagem para o chatbot:', error);
        chatbotResponse.textContent = `Erro: ${error.message}`; 
    });
}

function toggleProjectDetails(projectId) {
    const details = document.getElementById(projectId + '-details');
    const button = document.getElementById(projectId + '-button');
    const icon = button.querySelector('i');

    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
    } else {
        details.style.display = 'none';
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    }
}

function sendContactForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    const contactForm = {
        name: name,
        email: email,
        message: message
    };

    console.log('Enviando formulário de contato:', contactForm);

    // Simula o envio do formulário
    alert('Formulário de contato enviado com sucesso!');

    // Limpa os campos do formulário
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-message').value = '';
}
