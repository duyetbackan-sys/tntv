// Game 3: Hổ con thiên tài - Sắp xếp từ thành câu hoàn chỉnh
const SortGame = {
  render(container, sectionData, state) {
    const sectionState = state.sectionStates[state.currentSectionIndex] || {
      currentQuestionIndex: 0,
      userAnswers: {}, // questionId: array of words
      checked: false,
      score: 0
    };
    state.sectionStates[state.currentSectionIndex] = sectionState;

    const qIndex = sectionState.currentQuestionIndex || 0;
    const currentQ = sectionData.questions[qIndex];

    // Ensure userAnswers array exists
    if (!sectionState.userAnswers[currentQ.id]) {
      sectionState.userAnswers[currentQ.id] = [];
    }

    const currentPlacedWords = sectionState.userAnswers[currentQ.id];
    // Remaining words available to pick
    const availableWords = [...currentQ.words];
    // For each word placed, remove one instance from availableWords
    currentPlacedWords.forEach(w => {
      const idx = availableWords.indexOf(w);
      if (idx >= 0) availableWords.splice(idx, 1);
    });

    function buildUI() {
      const isLastQuestion = qIndex === sectionData.questions.length - 1;
      const isAnsweredCorrectly = sectionState.checked && checkSingleQuestion(currentQ);

      container.innerHTML = `
        <div class="sort-game-container flex flex-col gap-6 max-w-4xl mx-auto">
          <!-- Instruction Header -->
          <div class="bg-amber-50 border-2 border-amber-200 rounded-3xl p-5 flex items-center justify-between shadow-sm">
            <div class="flex items-center gap-3">
              <span class="text-3xl">🐯</span>
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

          <!-- Question Stepper -->
          <div class="flex items-center justify-between bg-white border-2 border-slate-200 rounded-2xl px-5 py-3">
            <span class="font-bold text-slate-700">Câu số ${qIndex + 1} / ${sectionData.questions.length}</span>
            <div class="flex gap-1.5 flex-wrap">
              ${sectionData.questions.map((q, idx) => {
                const isCurrent = idx === qIndex;
                const isAnswered = (sectionState.userAnswers[q.id] || []).length === q.words.length;
                let bg = 'bg-slate-200 text-slate-600';
                if (isCurrent) bg = 'bg-amber-500 text-white ring-2 ring-amber-300 font-bold';
                else if (isAnswered) bg = 'bg-emerald-500 text-white';

                return `
                  <button class="step-btn w-8 h-8 rounded-xl text-xs font-bold transition-all ${bg}" data-step="${idx}">
                    ${idx + 1}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Main Sentence Board -->
          <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            <!-- Answer Slot Area -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Dòng câu hoàn chỉnh (Chạm từ để bỏ ra):</span>
                ${currentPlacedWords.length > 0 && state.currentGrade === 1 ? `
                  <button id="btn-speak-sentence" class="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1">
                    <span>🔊 Nghe câu vừa ghép</span>
                  </button>
                ` : ''}
              </div>
              <div class="answer-slot-line min-h-[90px] p-4 bg-amber-50/50 border-3 border-dashed border-amber-300 rounded-2xl flex flex-wrap items-center gap-3">
                ${currentPlacedWords.length === 0 ? `
                  <div class="w-full text-center text-slate-400 italic text-sm py-4">
                    👉 Hãy chạm vào các từ bên dưới theo thứ tự để xếp câu
                  </div>
                ` : ''}
                ${currentPlacedWords.map((word, idx) => `
                  <button class="placed-word-chip px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-lg shadow-md transition-all active:scale-95 flex items-center gap-2 animate-bounce-short"
                          data-idx="${idx}" title="Chạm để đưa về lại khay">
                    <span>${word}</span>
                    <span class="text-xs opacity-75">✕</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Available Words Tray -->
            <div>
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Các từ xáo trộn (Chạm để chọn):</span>
              <div class="flex flex-wrap gap-3 min-h-[70px] items-center p-3 bg-slate-50 border border-slate-200 rounded-2xl">
                ${availableWords.map((word, idx) => `
                  <button class="avail-word-chip px-5 py-3 rounded-2xl bg-white hover:bg-amber-100 hover:border-amber-400 text-slate-800 border-2 border-slate-300 font-extrabold text-lg shadow-sm transition-all active:scale-95"
                          data-word="${word}">
                    ${word}
                  </button>
                `).join('')}
                ${availableWords.length === 0 ? `
                  <span class="text-emerald-600 font-bold text-sm mx-auto">✨ Đã xếp đủ tất cả các từ!</span>
                ` : ''}
              </div>
            </div>

            <!-- Feedback / Answer display if checked -->
            ${sectionState.checked ? `
              <div class="p-4 rounded-2xl ${isAnsweredCorrectly ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-rose-50 border border-rose-200 text-rose-800'}">
                <div class="font-bold flex items-center gap-2 mb-1">
                  <span>${isAnsweredCorrectly ? '🎉 Bé làm rất chính xác!' : '💡 Đáp án đúng:'}</span>
                </div>
                <p class="text-base font-semibold">${currentQ.sentence || currentQ.answer.join(' ')}</p>
              </div>
            ` : ''}
          </div>

          <!-- Bottom Navigation -->
          <div class="flex items-center justify-between pt-2">
            <button id="btn-prev-q" class="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all active:scale-95 ${qIndex === 0 ? 'invisible' : ''}">
              ⬅️ Câu trước
            </button>
            <button id="btn-clear-sentence" class="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all active:scale-95">
              🔄 Xếp lại câu này
            </button>
            <div class="flex items-center gap-3">
              ${!isLastQuestion ? `
                <button id="btn-next-q" class="px-7 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md transition-all active:scale-95">
                  Câu tiếp theo ➡️
                </button>
              ` : (
                !sectionState.checked ? `
                  <button id="btn-check-sort" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white font-bold text-base shadow-lg transition-all active:scale-95">
                    Kiểm tra kết quả 🚀
                  </button>
                ` : `
                  <div class="flex items-center gap-3">
                    <span class="text-lg font-bold text-emerald-600">Điểm: ${sectionState.score}/100</span>
                    <button id="btn-next-section" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-base shadow-lg transition-all active:scale-95">
                      Bài tiếp theo ➡️
                    </button>
                  </div>
                `
              )}
            </div>
          </div>
        </div>
      `;

      attachEvents();
    }

    function checkSingleQuestion(q) {
      const userWords = sectionState.userAnswers[q.id] || [];
      const expected = q.answer;
      if (userWords.length !== expected.length) return false;
      return userWords.every((w, i) => w.trim() === expected[i].trim());
    }

    function attachEvents() {
      // Audio TTS
      const btnTTS = container.querySelector('#btn-read-instruction');
      if (btnTTS) {
        btnTTS.addEventListener('click', () => {
          AudioEngine.tts.speak(`${sectionData.title}. ${sectionData.instruction}`, state.currentGrade);
        });
      }

      // Speak current placed sentence (Grade 1 only)
      const btnSpeakSentence = container.querySelector('#btn-speak-sentence');
      if (btnSpeakSentence) {
        btnSpeakSentence.addEventListener('click', () => {
          const text = currentPlacedWords.join(' ');
          AudioEngine.tts.speak(text, state.currentGrade);
        });
      }

      // Step Buttons
      container.querySelectorAll('.step-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          sectionState.currentQuestionIndex = parseInt(btn.dataset.step, 10);
          AudioEngine.sfx.playPop();
          SortGame.render(container, sectionData, state);
        });
      });

      // Pick Word
      container.querySelectorAll('.avail-word-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          if (sectionState.checked) return;
          const word = btn.dataset.word;
          currentPlacedWords.push(word);
          AudioEngine.sfx.playPop();
          buildUI();
        });
      });

      // Remove Word from Answer Slot
      container.querySelectorAll('.placed-word-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          if (sectionState.checked) return;
          const idx = parseInt(btn.dataset.idx, 10);
          currentPlacedWords.splice(idx, 1);
          AudioEngine.sfx.playPop();
          buildUI();
        });
      });

      // Clear current sentence
      const btnClear = container.querySelector('#btn-clear-sentence');
      if (btnClear) {
        btnClear.addEventListener('click', () => {
          sectionState.userAnswers[currentQ.id] = [];
          AudioEngine.sfx.playPop();
          buildUI();
        });
      }

      // Prev / Next Question
      const btnPrev = container.querySelector('#btn-prev-q');
      if (btnPrev) {
        btnPrev.addEventListener('click', () => {
          if (sectionState.currentQuestionIndex > 0) {
            sectionState.currentQuestionIndex--;
            AudioEngine.sfx.playPop();
            SortGame.render(container, sectionData, state);
          }
        });
      }

      const btnNextQ = container.querySelector('#btn-next-q');
      if (btnNextQ) {
        btnNextQ.addEventListener('click', () => {
          if (sectionState.currentQuestionIndex < sectionData.questions.length - 1) {
            sectionState.currentQuestionIndex++;
            AudioEngine.sfx.playPop();
            SortGame.render(container, sectionData, state);
          }
        });
      }

      // Check Sort
      const btnCheck = container.querySelector('#btn-check-sort');
      if (btnCheck) {
        btnCheck.addEventListener('click', () => {
          let correct = 0;
          sectionData.questions.forEach(q => {
            if (checkSingleQuestion(q)) correct++;
          });
          const score = Math.round((correct / sectionData.questions.length) * 100);
          sectionState.score = score;
          sectionState.checked = true;

          if (score >= 80) AudioEngine.sfx.playVictory();
          else if (score >= 50) AudioEngine.sfx.playSuccess();
          else AudioEngine.sfx.playWrong();

          buildUI();
        });
      }

      // Next Section
      const btnNextSection = container.querySelector('#btn-next-section');
      if (btnNextSection) {
        btnNextSection.addEventListener('click', () => {
          state.nextSection();
        });
      }
    }

    buildUI();
  }
};

window.SortGame = SortGame;
