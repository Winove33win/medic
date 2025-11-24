import { Doctor, Service, Testimonial } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "Dr. Carlos Mendes",
    specialty: "Cardiologia",
    crm: "CRM/SP 12345",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Dr. Carlos Mendes é referência em cardiologia clínica e intervencionista com mais de 15 anos de experiência. Dedica-se à prevenção e tratamento de doenças cardiovasculares, sempre focando na qualidade de vida do paciente.",
    education: [
      "Graduação em Medicina pela USP",
      "Residência em Cardiologia no InCor",
      "Doutorado em Cardiologia pela USP",
      "Fellowship em Cardiologia Intervencionista nos EUA"
    ],
    languages: ["Português", "Inglês", "Espanhol"],
    availability: ["Segunda-feira", "Quarta-feira", "Sexta-feira"]
  },
  {
    id: 2,
    name: "Dra. Ana Silva",
    specialty: "Pediatria",
    crm: "CRM/SP 67890",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Dra. Ana Silva é apaixonada pelo cuidado infantil, acompanhando o desenvolvimento desde os primeiros dias de vida até a adolescência. Sua abordagem é acolhedora, focada em criar vínculos de confiança com as famílias.",
    education: [
      "Graduação em Medicina pela UNIFESP",
      "Residência em Pediatria no Hospital São Paulo",
      "Especialização em Neonatologia"
    ],
    languages: ["Português", "Inglês"],
    availability: ["Terça-feira", "Quinta-feira", "Sábado (manhã)"]
  },
  {
    id: 3,
    name: "Dr. Roberto Costa",
    specialty: "Ortopedia",
    crm: "CRM/SP 11223",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Especialista em medicina esportiva e cirurgia do joelho, Dr. Roberto Costa atua no tratamento de lesões complexas e reabilitação. Já atuou como médico de diversas equipes esportivas profissionais.",
    education: [
      "Graduação em Medicina pela Santa Casa",
      "Residência em Ortopedia e Traumatologia",
      "Mestrado em Ciências do Esporte",
      "Membro da Sociedade Brasileira de Ortopedia"
    ],
    languages: ["Português", "Inglês"],
    availability: ["Segunda-feira", "Quinta-feira"]
  },
  {
    id: 4,
    name: "Dra. Julia Ferreira",
    specialty: "Dermatologia",
    crm: "CRM/SP 44556",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Dra. Julia une ciência e estética para cuidar da saúde da pele. Especialista em dermatologia clínica, cirúrgica e cosmiatria, oferece tratamentos personalizados para acne, melasma e rejuvenescimento.",
    education: [
      "Graduação em Medicina pela UNICAMP",
      "Residência em Dermatologia",
      "Pós-graduação em Cosmiatria",
      "Membro da Sociedade Brasileira de Dermatologia"
    ],
    languages: ["Português", "Francês"],
    availability: ["Quarta-feira", "Sexta-feira"]
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Cardiologia",
    description: "Cuidado completo com a saúde do seu coração com exames de alta tecnologia.",
    icon: "Heart",
    fullDescription: "Nosso departamento de cardiologia oferece um check-up completo para a saúde do seu coração. Contamos com equipamentos de última geração para diagnósticos precisos e uma equipe pronta para atuar na prevenção e tratamento de doenças cardiovasculares, como hipertensão, arritmias e insuficiência cardíaca.",
    features: [
      "Eletrocardiograma Digital",
      "Ecocardiograma com Doppler",
      "Teste Ergométrico Computadorizado",
      "Monitorização de Pressão Arterial (MAPA)",
      "Holter 24h"
    ],
    duration: "45 min (Consulta)",
    preparation: "Para exames específicos, favor consultar as instruções enviadas no agendamento."
  },
  {
    id: 2,
    title: "Clínica Geral",
    description: "Atendimento primário para diagnóstico e tratamento de diversas condições.",
    icon: "Stethoscope",
    fullDescription: "O clínico geral é o médico responsável por acompanhar sua saúde como um todo. Ideal para check-ups anuais, avaliação inicial de sintomas, tratamento de doenças comuns e encaminhamento assertivo para especialistas quando necessário. Focamos na medicina preventiva.",
    features: [
      "Check-up Anual Completo",
      "Avaliação Pré-operatória",
      "Controle de Diabetes e Hipertensão",
      "Vacinação e Orientações",
      "Tratamento de infecções agudas"
    ],
    duration: "30 min (Consulta)"
  },
  {
    id: 3,
    title: "Exames Laboratoriais",
    description: "Coleta e análise rápida de exames de sangue e rotina.",
    icon: "Activity",
    fullDescription: "Realizamos uma ampla gama de exames laboratoriais com rapidez e precisão. Nosso laboratório parceiro possui certificação de qualidade, garantindo a confiabilidade dos resultados para auxiliar no diagnóstico médico.",
    features: [
      "Hemograma Completo",
      "Perfil Lipídico e Glicêmico",
      "Exames Hormonais",
      "Testes de Alergia",
      "Resultados online em até 24h (para maioria dos exames)"
    ],
    duration: "15 min (Coleta)",
    preparation: "A maioria dos exames de sangue exige jejum de 8 a 12 horas. Bebidas alcoólicas devem ser evitadas 72h antes."
  },
  {
    id: 4,
    title: "Neurologia",
    description: "Especialistas no diagnóstico e tratamento de doenças do sistema nervoso.",
    icon: "Brain",
    fullDescription: "A especialidade trata de distúrbios que afetam o cérebro, a medula espinhal e os nervos. Atendemos casos de enxaqueca, epilepsia, AVC, doenças degenerativas (como Alzheimer e Parkinson) e dores crônicas.",
    features: [
      "Avaliação de Cefaleias (Dores de cabeça)",
      "Tratamento de Distúrbios do Sono",
      "Acompanhamento de Epilepsia",
      "Eletroencefalograma",
      "Reabilitação Neurológica"
    ],
    duration: "50 min (Consulta)"
  },
  {
    id: 5,
    title: "Oftalmologia",
    description: "Cuidados essenciais para a saúde dos seus olhos e visão.",
    icon: "Eye",
    fullDescription: "Cuide da sua visão com nossos oftalmologistas. Realizamos desde a prescrição de óculos e lentes de contato até o diagnóstico e tratamento de patologias como catarata, glaucoma e conjuntivite.",
    features: [
      "Exame de Refração (Grau)",
      "Medida da Pressão Intraocular",
      "Mapeamento de Retina",
      "Teste Ortóptico",
      "Adaptação de Lentes de Contato"
    ],
    duration: "40 min (Consulta)",
    preparation: "Traga seus óculos ou lentes de contato atuais, caso utilize."
  },
  {
    id: 6,
    title: "Ortopedia",
    description: "Tratamento de traumas e doenças ósseas e musculares.",
    icon: "Bone",
    fullDescription: "Nossa equipe de ortopedia é especializada no sistema musculoesquelético. Tratamos lesões esportivas, fraturas, dores na coluna, artrose e tendinites, sempre buscando a reabilitação plena do movimento.",
    features: [
      "Tratamento de Dores na Coluna",
      "Especialistas em Joelho e Ombro",
      "Medicina Esportiva",
      "Infiltrações Articulares",
      "Acompanhamento Pós-cirúrgico"
    ],
    duration: "40 min (Consulta)",
    preparation: "Se tiver exames de imagem recentes (Raio-X, Ressonância), por favor traga-os."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Souza",
    role: "Paciente",
    content: "O atendimento foi excelente desde a recepção até a consulta. Médicos muito atenciosos.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 2,
    name: "Pedro Santos",
    role: "Paciente",
    content: "A clínica é super moderna e limpa. Fiz meus exames e o resultado saiu super rápido.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 3,
    name: "Fernanda Lima",
    role: "Mãe de Paciente",
    content: "A pediatra Dra. Ana é um amor. Tratou meu filho com muito carinho e paciência.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const CONTACT_INFO = {
  phone: "(11) 99999-8888",
  email: "contato@vidasaude.com.br",
  address: "Av. Paulista, 1000 - São Paulo, SP",
  hours: "Seg - Sex: 07:00 - 19:00"
};