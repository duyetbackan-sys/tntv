// Game 1: Trâu vàng uyên bác - Phân loại từ vào giỏ chủ đề
const BasketGame = {
  render(container, sectionData, state) {
    const sectionState = state.sectionStates[state.currentSectionIndex] || {
      assignments: {}, // itemId: basketId
      checked: false,
      score: 0
    };
    state.sectionStates[state.currentSectionIndex] = sectionState;

    let selectedItemId = null;

    function buildUI() {
      container.innerHTML = `
        <div class="basket-game-container flex flex-col gap-6 max-w-4xl mx-auto">
          <!-- Instruction Header -->
          <div class="bg-amber-50 border-2 border-amber-200 rounded-3xl p-5 flex items-center justify-between shadow-sm">
            <div class="flex items-center gap-3">
              <span class="text-3xl">🧺</span>
              <div>
                <h3 class="text-lg font-bold text-amber-900">${sectionData.title}</h3>
                <p class="text-sm text-amber-800">${sectionData.instruction}</p>
              </div>
            </div>
            ${state.currentGrade === 1 ? `
              <button id="btn-read-instruction" class="tts-btn bg-amber-500 hover:bg-amber-600 text-white font-bold p-3 rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2">
                <span class="text-xl">🔊</span>
                <span class="hidden sm:inline text-sm">Nghe đề</span>
              </button>
            ` : ''}
          </div>

          <!-- Baskets Area -->
          <div class="grid grid-cols-1 sm:grid-cols-${Math.min(sectionData.baskets.length, 3)} gap-4">
            ${sectionData.baskets.map(basket => {
              const basketItems = sectionData.items.filter((it, idx) => {
                const itKey = 'item_' + idx;
                return sectionState.assignments[itKey] === basket.id;
              });

              return `
                <div class="basket-box bg-white border-3 border-dashed border-slate-300 rounded-3xl p-4 flex flex-col min-h-[220px] transition-all duration-200 shadow-md hover:border-amber-400"
                     data-basket-id="${basket.id}">
                  <div class="basket-header bg-gradient-to-r ${basket.color} text-white font-bold py-2 px-4 rounded-2xl text-center shadow-sm mb-3 flex items-center justify-center gap-2">
                    <span class="text-xl">🧺</span>
                    <span>${basket.label}</span>
                  </div>
                  <div class="basket-slot flex-1 flex flex-wrap gap-2 content-start p-2 bg-amber-50/40 rounded-2xl" data-basket-id="${basket.id}">
                    ${basketItems.length === 0 ? `
                      <div class="w-full h-full flex items-center justify-center text-slate-400 text-xs italic py-6">
                        Chạm vào từ rồi chạm vào đây
                      </div>
                    ` : ''}
                    ${basketItems.map((it, idx) => {
                      const origIndex = sectionData.items.indexOf(it);
                      const itKey = 'item_' + origIndex;
                      const isCorrect = it.basketId === basket.id;
                      let statusClass = 'bg-amber-100 text-amber-900 border-amber-300';
                      if (sectionState.checked) {
                        statusClass = isCorrect
                          ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold'
                          : 'bg-rose-100 text-rose-900 border-rose-400 line-through';
                      }

                      return `
                        <button class="basket-item px-4 py-2 rounded-2xl border-2 text-sm font-semibold shadow-sm transition-transform active:scale-95 flex items-center gap-1 ${statusClass}"
                                data-item-id="${itKey}" title="Chạm để đưa về lại khay">
                          <span>${it.text}</span>
                          ${sectionState.checked ? (isCorrect ? '✓' : '✗') : '<span class="text-xs text-slate-400 ml-1">✕</span>'}
                        </button>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Unassigned Word Tray -->
          <div class="bg-white border-2 border-slate-200 rounded-3xl p-5 shadow-sm">
            <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Khay từ cần xếp (Chạm vào từ):</span>
              <span class="text-amber-600 font-medium">Còn ${sectionData.items.filter((_, idx) => !sectionState.assignments['item_' + idx]).length} từ</span>
            </div>
            <div class="flex flex-wrap gap-3 min-h-[60px] items-center">
              ${sectionData.items.map((it, idx) => {
                const itKey = 'item_' + idx;
                const isAssigned = !!sectionState.assignments[itKey];
                if (isAssigned) return '';

                const isSelected = selectedItemId === itKey;
                return `
                  <button class="word-chip px-5 py-3 rounded-2xl border-2 text-base font-bold shadow-md transition-all active:scale-95 flex items-center gap-2
                                 ${isSelected
                                   ? 'bg-amber-500 text-white border-amber-600 scale-105 shadow-amber-200 ring-4 ring-amber-300'
                                   : 'bg-white text-slate-800 border-slate-200 hover:border-amber-400 hover:bg-amber-50'}"
                          data-item-id="${itKey}">
                    <span>${it.text}</span>
                    ${isSelected ? '<span class="text-xs animate-bounce">👇</span>' : ''}
                  </button>
                `;
              }).join('')}
              ${sectionData.items.every((_, idx) => !!sectionState.assignments['item_' + idx]) ? `
                <div class="w-full text-center py-2 text-emerald-600 font-bold flex items-center justify-center gap-2">
                  <span>🎉 Bé đã xếp hết các từ vào giỏ rồi! Hãy bấm "Kiểm tra" nhé!</span>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-between pt-2">
            <button id="btn-reset-basket" class="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all active:scale-95">
              🔄 Xếp lại
            </button>
            <div class="flex items-center gap-3">
              ${!sectionState.checked ? `
                <button id="btn-check-basket" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-teal-200 transition-all active:scale-95">
                  Kiểm tra kết quả 🚀
                </button>
              ` : `
                <div class="flex items-center gap-3">
                  <span class="text-lg font-bold ${sectionState.score === 100 ? 'text-emerald-600' : 'text-amber-600'}">
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

      // Word Chip Click
      container.querySelectorAll('.word-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          if (sectionState.checked) return;
          const itemId = btn.dataset.itemId;
          if (selectedItemId === itemId) {
            selectedItemId = null;
          } else {
            selectedItemId = itemId;
            AudioEngine.sfx.playPop();
          }
          buildUI();
        });
      });

      // Basket Click to Drop
      container.querySelectorAll('.basket-box, .basket-slot').forEach(box => {
        box.addEventListener('click', (e) => {
          if (sectionState.checked) return;
          const basketId = box.dataset.basketId;
          if (selectedItemId && basketId) {
            sectionState.assignments[selectedItemId] = basketId;
            selectedItemId = null;
            AudioEngine.sfx.playPop();
            buildUI();
          }
        });
      });

      // Unassign Item Click
      container.querySelectorAll('.basket-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (sectionState.checked) return;
          const itemId = btn.dataset.itemId;
          delete sectionState.assignments[itemId];
          AudioEngine.sfx.playPop();
          buildUI();
        });
      });

      // Reset
      const btnReset = container.querySelector('#btn-reset-basket');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          sectionState.assignments = {};
          sectionState.checked = false;
          sectionState.score = 0;
          selectedItemId = null;
          AudioEngine.sfx.playPop();
          buildUI();
        });
      }

      // Check Answers
      const btnCheck = container.querySelector('#btn-check-basket');
      if (btnCheck) {
        btnCheck.addEventListener('click', () => {
          let correctCount = 0;
          sectionData.items.forEach((it, idx) => {
            const itKey = 'item_' + idx;
            if (sectionState.assignments[itKey] === it.basketId) {
              correctCount++;
            }
          });
          const score = Math.round((correctCount / sectionData.items.length) * 100);
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

window.BasketGame = BasketGame;
