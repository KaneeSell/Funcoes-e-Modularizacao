export interface UpdatesInterface {
    name: string;
    description: string;
} 

export const updates: UpdatesInterface[] = [
    {
        name: "Movimento Estoque",
        description: "Podemos movimentar o estoque a partir dos produtos clicando na ação de movimentar o estoque."
    },
    {
        name: "MVP",
        description: "Está disponível. Contém funções básicas de Produto, Estoque e Movimento de Estoque, podendo tirar relatório de estoque tanto pela ação no estoque quanto a ação no produto."
    },
    {
        name: "Integração com PostgreSQL",
        description: "Agora o sistema se comunica diretamente com banco de dados PostgreSQL, garantindo maior segurança e escalabilidade."
    },
    {
        name: "API REST",
        description: "Implantada API REST para comunicação entre frontend e backend, permitindo integração com diferentes plataformas."
    },
    {
        name: "Autenticação",
        description: "Implementado sistema de login com autenticação segura, controlando acesso às funcionalidades principais."
    },
    {
        name: "Interface Responsiva",
        description: "Ajustes na UI e UX garantem melhor experiência em diferentes dispositivos e tamanhos de tela."
    }
]