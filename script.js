const events = [
    // DIA 1 - 30/10
    { day: 'dia1', stage: 'Palco Alpha', start: '10:00', end: '11:30', title: 'Grand Opening GAMERFEST', celebs: 'Hideo Kojima & Gaules', desc: 'Abertura épica com orquestra tocando temas de games clássicos e anúncios globais.' },
    { day: 'dia1', stage: 'Palco Beta', start: '14:00', end: '16:00', title: 'Showmatch Elden Ring', celebs: 'Loud Coringa & David Jones', desc: 'A primeira grande disputa influenciadora da edição.' },
    { day: 'dia1', stage: 'Indie Hub', start: '10:00', end: '15:00', title: 'ShowIndie Brasil', celebs: 'Desenvolvedores Locais', desc: 'Teste os jogos brasileiros mais promissores de 2026.' },

    // DIA 2 - 31/10 (Especial Halloween)
    { day: 'dia2', stage: 'Palco Alpha', start: '15:00', end: '17:00', title: 'Cosplay Masters: Horror Edition', celebs: 'Maul Cosplay', desc: 'Desfile temático de Halloween com premiação especial para terror.' },
    { day: 'dia2', stage: 'Palco Beta', start: '19:00', end: '21:00', title: 'Resident Evil 30 Years Talk', celebs: 'Shinji Mikami', desc: 'Uma conversa sobre o legado do survival horror nos videogames.' },
    { day: 'dia2', stage: 'Indie Hub', start: '13:00', end: '15:00', title: 'Workshop: Criando Monstros', celebs: 'Artistas da Ubisoft', desc: 'Aprenda concept art focado em criaturas de terror.' },

    // DIA 3 - 01/11
    { day: 'dia3', stage: 'Palco Alpha', start: '11:00', end: '13:00', title: 'Painel: Dublagem de Games', celebs: 'Guilherme Briggs & Wendel Bezerra', desc: 'As vozes mais icônicas do Brasil contando bastidores da tradução de jogos.' },
    { day: 'dia3', stage: 'Palco Beta', start: '16:00', end: '20:00', title: 'Final Regional Dota 2', celebs: 'BRTT & GamesEdu', desc: 'A decisão que vale vaga para o torneio internacional.' },
    { day: 'dia3', stage: 'Indie Hub', start: '14:00', end: '16:00', title: 'Pitch It! Investidores', celebs: 'Shark Tank Gaming', desc: 'Estúdios indie apresentam seus projetos para investidores reais.' },

    // DIA 4 - 02/11
    { day: 'dia4', stage: 'Palco Alpha', start: '14:00', end: '16:00', title: 'GamerFest Awards 2026', celebs: 'Geoff Keighley (Convidado Especial)', desc: 'A entrega dos troféus para os melhores do evento e do ano.' },
    { day: 'dia4', stage: 'Palco Beta', start: '17:00', end: '19:00', title: 'Grande Final: Counter-Strike 2', celebs: 'Fallen & Coldzera', desc: 'O encerramento competitivo com as lendas do CS nacional.' },
    { day: 'dia4', stage: 'Palco Alpha', start: '19:30', end: '21:00', title: 'Show de Encerramento: DJ Set', celebs: 'Steve Aoki (Gaming Remix)', desc: 'Festa final para celebrar o sucesso do GAMERFEST 2026.' }
];

function renderSchedule(dayFilter) {
    const container = document.getElementById('schedule-container');
    container.innerHTML = '';
    const filtered = events.filter(ev => ev.day === dayFilter);

    if (filtered.length === 0) {
        container.innerHTML = '<p style="color: var(--text-dim)">Nenhuma atração programada para este dia.</p>';
        return;
    }

    filtered.forEach(ev => {
        container.innerHTML += `
            <details>
                <summary>
                    <div class="summary-content">
                        <span class="stage">${ev.stage}</span>
                        <span class="time">${ev.start} - ${ev.end}</span>
                        <h3>${ev.title}</h3>
                    </div>
                </summary>
                <div class="details-body">
                    <strong>Convidados:</strong>
                    <p>${ev.celebs}</p>
                    <strong>Sobre a atração:</strong>
                    <p>${ev.desc}</p>
                </div>
            </details>
        `;
    });
}

function filterDay(day) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderSchedule(day);
}

window.onload = () => renderSchedule('dia1');