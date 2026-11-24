// Game 2: Mèo con nhanh nhẹn - Nối cặp từ / vế câu
const MatchGame = {
  render(container, sectionData, state) {
    const sectionState = state.sectionStates[state.currentSectionIndex] || {
      pairs: {}, // leftText: rightText
      checked: false,
      score: 0,
      shuffledRight: null
    };
    state.sectionStates[state.currentSectionIndex] = sectionState;

    // Shuffle right items once
    if (!sectionState.shuffledRight) {
      const rights = sectionData.pairs.map(p => p.right);
      // Fisher-Yates shuffle
      for (let i = rights.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rights[i], rights[j]] = [rights[j], rights[i]];
      }
      sectionState.shuffledRight = rights;
    }

    let selectedLeft = null;
    let selectedRight = null;

    const PAIR_COLORS = [
      { bg: 'bg-amber-100', text: 'text-amber-900', border: 'border-amber-400', badge: 'bg-amber-500' },
      { bg: 'bg-emerald-100', text: 'text-emerald-900', border: 'border-emerald-400', badge: 'bg-emerald-500' },
      { bg: 'bg-sky-100', text: 'text-sky-900', border: 'border-sky-400', badge: 'bg-sky-500' },
      { bg: 'bg-purple-100', text: 'text-purple-900', border: 'border-purple-400', badge: 'bg-purple-500' },
      { bg: 'bg-rose-100', text: 'text-rose-900', border: 'border-rose-400', badge: 'bg-rose-500' },
      { bg: 'bg-indigo-100', text: 'text-indigo-900', border: 'border-indigo-400', badge: 'bg-indigo-500' },
      { bg: 'bg-teal-100', text: 'text-teal-900', border: 'border-teal-400', badge: 'bg-teal-500' },
      { bg: 'bg-orange-100', text: 'text-orange-900', border: 'border-orange-400', badge: 'bg-orange-500' },
      { bg: 'bg-fuchsia-100', text: 'text-fuchsia-900', border: 'border-fuchsia-400', badge: 'bg-fuchsia-500' },
      { bg: 'bg-cyan-100', text: 'text-cyan-900', border: 'border-cyan-400', badge: 'bg-cyan-500' }
    ];

    function getPairColor(leftText) {
      const keys = Object.keys(sectionState.pairs);
      const idx = keys.indexOf(leftText);
      return idx >= 0 ? PAIR_COLORS[idx % PAIR_COLORS.length] : null;
    }

    function buildUI() {
      const pairsCount = Object.keys(sectionState.pairs).length;
      const totalPairs = sectionData.pairs.length;

      container.innerHTML = `
        <div class="match-game-container flex flex-col gap-6 max-w-4xl mx-auto">
          <!-- Instruction -->
          <div class="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-5 flex items-center justify-between shadow-sm">
            <div class="flex items-center gap-3">
              <span class="text-3xl">🐱</span>
              <div>
                <h3 class="text-lg font-bold text-indigo-900">${sectionData.title}</h3>
                <p class="text-sm text-indigo-800">${sectionData.instruction}</p>
              </div>
            </div>
            ${state.currentGrade === 1 ? `
              <button id="btn-read-instruction" class="tts-btn bg-indigo-500 hover:bg-indigo-600 text-white font-bold p-3 rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2">
                <span class="text-xl">🔊</span>
                <span class="hidden sm:inline text-sm">Nghe đề</span>
              </button>
            ` : ''}
          </div>

          <!-- Matching Columns -->
          <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm">
            <div class="flex justify-between items-center mb-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>Cột bên trái (Chạm chọn 1 từ)</span>
              <span class="text-indigo-600">Đã ghép: ${pairsCount}/${totalPairs} cặp</span>
              <span>Cột bên phải (Chạm để nối)</span>
            </div>

            <div class="grid grid-cols-2 gap-6 sm:gap-10">
              <!-- Left Column -->
              <div class="flex flex-col gap-3">
                ${sectionData.pairs.map((p, idx) => {
                  const isPaired = !!sectionState.pairs[p.left];
                  const isSelected = selectedLeft === p.left;
                  const pairColor = getPairColor(p.left);

                  let colorClass = 'bg-white text-slate-800 border-slate-200 hover:border-indigo-300';
                  let statusBadge = '';

                  if (isPaired && pairColor) {
                    colorClass = `${pairColor.bg} ${pairColor.text} ${pairColor.border}`;
                    statusBadge = `<span class="${pairColor.badge} text-white text-xs px-2 py-0.5 rounded-full font-bold">Cặp</span>`;
                  } else if (isSelected) {
                    colorClass = 'bg-indigo-500 text-white border-indigo-600 ring-4 ring-indigo-200 scale-102';
                  }

                  if (sectionState.checked) {
                    const matchedRight = sectionState.pairs[p.left];
                    const isCorrect = matchedRight === p.right;
                    colorClass = isCorrect
                      ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold'
                      : 'bg-rose-100 text-rose-900 border-rose-400';
                    statusBadge = isCorrect ? '<span class="text-emerald-600">✓</span>' : '<span class="text-rose-600">✗</span>';
                  }

                  return `
                    <button class="match-left-item p-4 rounded-2xl border-2 font-bold text-base shadow-sm text-left flex items-center justify-between transition-all active:scale-98 ${colorClass}"
                            data-text="${p.left}">
                      <span>${p.left}</span>
                      ${statusBadge}
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Right Column -->
              <div class="flex flex-col gap-3">
                ${sectionState.shuffledRight.map((rightText, idx) => {
                  // Find if this rightText is paired
                  const pairedLeft = Object.keys(sectionState.pairs).find(k => sectionState.pairs[k] === rightText);
                  const isSelected = selectedRight === rightText;
                  const pairColor = pairedLeft ? getPairColor(pairedLeft) : null;

                  let colorClass = 'bg-white text-slate-800 border-slate-200 hover:border-indigo-300';
                  let statusBadge = '';

                  if (pairedLeft && pairColor) {
                    colorClass = `${pairColor.bg} ${pairColor.text} ${pairColor.border}`;
                    statusBadge = `<span class="${pairColor.badge} text-white text-xs px-2 py-0.5 rounded-full font-bold">Cặp</span>`;
                  } else if (isSelected) {
                    colorClass = 'bg-indigo-500 text-white border-indigo-600 ring-4 ring-indigo-200 scale-102';
                  }

                  if (sectionState.checked) {
                    const originalPair = sectionData.pairs.find(p => p.right === rightText);
                    const isCorrect = pairedLeft && originalPair && pairedLeft === originalPair.left;
                    colorClass = isCorrect
                      ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold'
                      : 'bg-rose-100 text-rose-900 border-rose-400';
                    statusBadge = isCorrect ? '<span class="text-emerald-600">✓</span>' : '<span class="text-rose-600">✗</span>';
                  }

                  return `
                    <button class="match-right-item p-4 rounded-2xl border-2 font-bold text-base shadow-sm text-left flex items-center justify-between transition-all active:scale-98 ${colorClass}"
                            data-text="${rightText}">
                      <span>${rightText}</span>
                      ${statusBadge}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-between pt-2">
            <button id="btn-reset-match" class="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all active:scale-95">
              🔄 Ghép lại từ đầu
            </button>
            <div class="flex items-center gap-3">
              ${!sectionState.checked ? `
                <button id="btn-check-match" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-teal-200 transition-all active:scale-95">
                  Kiểm tra kết quả 🚀
                </button>
              ` : `
                <div class="flex items-center gap-3">
                  <span class="text-lg font-bold ${sectionState.score === 100 ? 'text-emerald-600' : 'text-indigo-600'}">
                    Điểm: ${sectionState.score}/100
                  </span>
                  <button id="btn-next-section" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-base shadow-lg shadow-indigo-200 transition-all active:scale-95">
                    Bài tiếp theo ➡️
                  </button>
                </div>
              `}
            </div>
          </div>
        </div>
      `;

      attachEvents();
    }

    function attachEvents() {
      // Audio TTS
      const btnTTS = container.querySelector('#btn-read-instruction');
      if (btnTTS) {
        btnTTS.addEventListener('click', () => {
          AudioEngine.tts.speak(`${sectionData.title}. ${sectionData.instruction}`, state.currentGrade);
        });
      }

      // Left Item Click
      container.querySelectorAll('.match-left-item').forEach(btn => {
        btn.addEventListener('click', () => {
          if (sectionState.checked) return;
          const text = btn.dataset.text;

          // If already paired, unpair it
          if (sectionState.pairs[text]) {
            delete sectionState.pairs[text];
            selectedLeft = null;
            AudioEngine.sfx.playPop();
            buildUI();
            return;
          }

          if (selectedLeft === text) {
            selectedLeft = null;
          } else {
            selectedLeft = text;
            AudioEngine.sfx.playPop();

            // If right was already selected, pair them!
            if (selectedRight) {
              pairItems(selectedLeft, selectedRight);
              return;
            }
          }
          buildUI();
        });
      });

      // Right Item Click
      container.querySelectorAll('.match-right-item').forEach(btn => {
        btn.addEventListener('click', () => {
          if (sectionState.checked) return;
          const text = btn.dataset.text;

          // Find if this right is already paired
          const existingLeft = Object.keys(sectionState.pairs).find(k => sectionState.pairs[k] === text);
          if (existingLeft) {
            delete sectionState.pairs[existingLeft];
            selectedRight = null;
            AudioEngine.sfx.playPop();
            buildUI();
            return;
          }

          if (selectedRight === text) {
            selectedRight = null;
          } else {
            selectedRight = text;
            AudioEngine.sfx.playPop();

            // If left was already selected, pair them!
            if (selectedLeft) {
              pairItems(selectedLeft, selectedRight);
              return;
            }
          }
          buildUI();
        });
      });

      function pairItems(left, right) {
        // Remove any other pairs with these
        delete sectionState.pairs[left];
        Object.keys(sectionState.pairs).forEach(k => {
          if (sectionState.pairs[k] === right) delete sectionState.pairs[k];
        });

        sectionState.pairs[left] = right;
        selectedLeft = null;
        selectedRight = null;
        AudioEngine.sfx.playSuccess();
        buildUI();
      }

      // Reset
      const btnReset = container.querySelector('#btn-reset-match');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          sectionState.pairs = {};
          sectionState.checked = false;
          sectionState.score = 0;
          selectedLeft = null;
          selectedRight = null;
          AudioEngine.sfx.playPop();
          buildUI();
        });
      }

      // Check Answers
      const btnCheck = container.querySelector('#btn-check-match');
      if (btnCheck) {
        btnCheck.addEventListener('click', () => {
          let correct = 0;
          sectionData.pairs.forEach(p => {
            if (sectionState.pairs[p.left] === p.right) {
              correct++;
            }
          });
          const score = Math.round((correct / sectionData.pairs.length) * 100);
          sectionState.score = score;
          sectionState.checked = true;

          if (score >= 80) {
            AudioEngine.sfx.playVictory();
          } else if (score >= 50) {
            AudioEngine.sfx.playSuccess();
          } else {
            AudioEngine.sfx.playWrong();
          }
          buildUI();
        });
      }

      // Next
      const btnNext = container.querySelector('#btn-next-section');
      if (btnNext) {
        btnNext.addEventListener('click', () => {
          state.nextSection();
        });
      }
    }

    buildUI();
  }
};

window.MatchGame = MatchGame;
