
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
    'contato-titulo-pt-BR': 'Me Envie uma Mensagem!',
    'contato-titulo-en': 'Send Me a Message!',
    'nomecontato-pt-BR': 'Seu Nome:',
    'nomecontato-en': 'Your Name:',
    'emailcontato-pt-BR': 'Seu E-mail:',
    'emailcontato-en': 'Your Email:',
    'mensagemcontato-pt-BR': 'Sua Mensagem:',
    'mensagemcontato-en': 'Your Message:',
    'enviarcontato-pt-BR': 'Enviar Mensagem',
    'enviarcontato-en': 'Send Message',
    'about-title-pt-BR': 'Sobre',
    'about-title-en': 'About',
    'about-description-pt-BR': 'Meu nome é Douglas Ramos Charqueiro, formado pelo Colégio Técnico Industrial de Santa Maria em Eletrotécnica (2023). Durante meu estágio na Base Aérea de Santa Maria, obtive experiência em manutenção predial e de computadores. Minha trajetória acadêmica começou em 2023, com uma graduação em Sistemas de Informação, onde atuei em um projeto de iniciação científica sobre Inteligência em Iluminação para Smart Cities, focando na transmissão de dados e criptografia. Posteriormente, me mudei para Florianópolis/SC e atualmente estou cursando Ciências da Computação na Unisul. Em março de 2024, iniciei no Grupo Setup, com manutenção elétrica no Hospital Universitário Polydoro Ernani de São Thiago. Posteriormente, fui transferido para a Justiça Federal de Santa Catarina, onde atuo na área de Automação Industrial, gerenciando o controle do prédio e realizando modificações no software Envision que permaneci até 30 de Setembro de 2024.',
    'about-description-en': 'My name is Douglas Ramos Charqueiro, graduated from the Technical Industrial College of Santa Maria in Electrotechnics (2023). During my internship at the Santa Maria Air Base, I gained experience in building and computer maintenance. My academic journey began in 2023, with a degree in Information Systems, where I worked on a scientific initiation project on Lighting Intelligence for Smart Cities, focusing on data transmission and encryption. Later, I moved to Florianópolis/SC and I am currently studying Computer Science at Unisul. In March 2024, I started at Grupo Setup, with electrical maintenance at the Polydoro Ernani de São Thiago University Hospital. Later, I was transferred to the Federal Justice of Santa Catarina, where I work in the area of Industrial Automation, managing the building control and making modifications to the Envision software that I remained until September 30, 2024.',
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
    'project-1-des1-pt-BR': 'Eu desenvolvi código em C apresenta a implementação de um jogo de cartas estratégico e tático, onde dois jogadores se enfrentam em uma série de rodadas. Cada jogador recebe uma mão de cartas de um baralho que inclui cartas de diferentes cores e valores. O <strong>objetivo</strong> é vencer as rodadas acumulando pontos, que são determinados pelo resultado de combates entre as cartas jogadas pelos jogadores.',
    'project-1-des1-en': 'I developed code in C that implements a strategic and tactical card game, where two players face each other in a series of rounds. Each player receives a hand of cards from a deck that includes cards of different colors and values. The <strong>goal</strong> is to win the rounds by accumulating points, which are determined by the result of battles between the cards played by the players.',
    'project-1-des2-pt-BR': '<p>Este projeto foi desenvolvido como parte do curso de Algoritmos e Estruturas de Dados da UFSM em Sistemas de Informação, com o objetivo de aplicar conceitos de programação e lógica de programação em um projeto prático e divertido. O jogo foi implementado em C, uma linguagem de programação de baixo nível que permite um controle preciso dos recursos do sistema.</p>',
    'project-1-des2-en': '<p>This project was developed as part of the Algorithms and Data Structures course at UFSM in Information Systems, with the goal of applying programming concepts and logic to a practical and fun project. The game was implemented in C, a low-level programming language that allows precise control of system resources.</p>',
    'project-1-technologies-pt-BR': 'Tecnologias usadas: C.',
    'project-1-technologies-en': 'Technologies used: C.',
    'project-1-github-text-pt-BR': 'Para saber mais acesse o link para o Código-fonte no GitHub',
    'project-1-github-text-en': 'To learn more access the link to the Source code on GitHub',
    'project-2-technologies-pt-BR': 'Tecnologias usadas: Python.',
    'project-2-technologies-en': 'Technologies used: Python.',
    'project-2-title-pt-BR': 'Projeto 2: Sistema de Serviços e Consultorias',
    'project-2-title-en': 'Project 2: Services and Consulting System',
    'project-2-description-pt-BR': 'Este projeto foi um estudo em python que desenvolvi junto ao curso Alura, que apresenta um desenvolvimento por meio de graficos e comparações, fazendo ciencia de dados de uma empresa que presta um serviço de consultoria para pessoas que querem imigrar do Brasil para o Canadá. O projeto é para uma empresa fictícia que otimizei os serviços de aconselhamento e consultoria para essas pessoas que desejam fazer imigração.',
    'project-2-description-en': 'This project was a study in python that I developed with the Alura course, which presents a development through graphics and comparisons, making data science of a company that provides a consulting service for people who want to immigrate from Brazil to Canada. The project is for a fictitious company that I optimized the counseling and consulting services for these people who wish to immigrate.',
    'project-2-technologies-pt-BR': 'Tecnologias usadas: Python.',
    'project-2-technologies-en': 'Technologies used: Python.',
    'project-2-github-text-pt-BR': 'Para saber mais acesse o link para o Código-fonte no GitHub',
    'project-2-github-text-en': 'To learn more access the link to the Source code on GitHub',
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

    var projectTitles = document.querySelectorAll('.project .project-title');
    projectTitles.forEach(title => {
        const titleId = title.id + '-' + lang;
        const translatedTitle = translations[titleId];
        if (translatedTitle) {
            title.innerHTML = translatedTitle; //  <-- Correção: Substituir com =
        }
    });

    var projectDescriptions = document.querySelectorAll('.project .project-description');
    projectDescriptions.forEach(description => {
        const descriptionId = description.id + '-' + lang;
        const translatedDescription = translations[descriptionId];
        if (translatedDescription) {
            description.innerHTML = translatedDescription; //  <-- Correção: Substituir com =
        }
    });
}


// ... (resto do seu código) ... 
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


darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Salva a preferência no localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});
