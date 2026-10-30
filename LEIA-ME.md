# Site da LastroHub (lastrohub.app.br)

Página institucional estática: não tem banco de dados, formulário, rastreamento nem login.

## O que tem nesta pasta

| Arquivo | Para que serve |
|---|---|
| `index.html` | A página principal (todo o texto do site) |
| `privacidade.html` | Política de Privacidade (rascunho para a advogada) |
| `termos.html` | Termos de Uso (rascunho para a advogada) |
| `404.html` | Página de "endereço não encontrado" |
| `assets/js/site.js` | **E-mail de contato e link da agenda (único lugar para editar)** |
| `assets/css/site.css` | Cores, fontes e layout |
| `assets/img/` | Logo, ícones, mapa e imagem de compartilhamento |
| `assets/fonts/` | Fonte Inter (servida pelo próprio site, sem Google Fonts) |
| `CNAME` | Diz ao GitHub que o endereço do site é lastrohub.app.br. Não apague. |
| `robots.txt`, `sitemap.xml` | Ajudam o Google a encontrar as páginas |
| `.nojekyll` | Arquivo técnico do GitHub Pages. Não apague. |

## Como trocar o e-mail ou colocar o link da agenda

1. Abra `assets/js/site.js`.
2. No topo, altere apenas o que está entre as aspas:
   - `EMAIL: "contato@lastrohub.app.br"`
   - `AGENDA: ""`. Cole aqui o link da página de agendamento do Google Agenda.
3. Salve. Em cerca de 1 minuto o site está atualizado.

Enquanto `AGENDA` estiver vazio, todos os botões "Agendar demonstração" abrem um e-mail já preenchido.

**Ao ativar a agenda do Google**, peça à advogada para incluir na Política de Privacidade que o agendamento é feito pelo Google Agenda.

## Como trocar um texto

Abra `index.html` e use a busca (Ctrl+F) com um trecho da frase que você quer mudar. Troque apenas o texto entre as marcações, sem apagar os símbolos `<` e `>`. Salve.

## Antes de publicar

- [ ] Criar o e-mail `contato@lastrohub.app.br` no Google Workspace (pode ser um "alias" do seu e-mail, sem custo extra).
- [ ] Advogada revisar: `privacidade.html`, `termos.html`, o aviso legal no rodapé e a seção de segurança.
- [ ] Confirmar a razão social exata (Ltda. ou Ltda. SLU), que aparece no rodapé e nas páginas legais.
