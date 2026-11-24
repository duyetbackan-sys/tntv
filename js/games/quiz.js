// Game 4: Chuột con nhanh trí - Trắc nghiệm & Điền từ
const QuizGame = {
  render(container, sectionData, state) {
    const sectionState = state.sectionStates[state.currentSectionIndex] || {
      currentQuestionIndex: 0,
      userAnswers: {}, // questionId: selectedOption
      checked: false,
      score: 0
    };
    state.sectionStates[state.currentSectionIndex] = sectionState;

    const qIndex = sectionState.currentQuestionIndex || 0;
    const currentQ = sectionData.questions[qIndex];
    const selectedAnswer = sectionState.userAnswers[currentQ.id];

    function buildUI() {
      const isLastQuestion = qIndex === sectionData.questions.length - 1;
      const isAnswered = selectedAnswer !== undefined;

      const OPTION_COLORS = [
        { letter: 'A', bg: 'bg-emerald-50 hover:bg-emerald-100', border: 'border-emerald-300', text: 'text-emerald-950', badge: 'bg-emerald-500' },
        { letter: 'B', bg: 'bg-sky-50 hover:bg-sky-100', border: 'border-sky-300', text: 'text-sky-950', badge: 'bg-sky-500' },
        { letter: 'C', bg: 'bg-amber-50 hover:bg-amber-100', border: 'border-amber-300', text: 'text-amber-950', badge: 'bg-amber-500' },
        { letter: 'D', bg: 'bg-rose-50 hover:bg-rose-100', border: 'border-rose-300', text: 'text-rose-950', badge: 'bg-rose-500' }
      ];

      container.innerHTML = `
        <div class="quiz-game-container flex flex-col gap-6 max-w-4xl mx-auto">
          <!-- Header -->
          <div class="bg-teal-50 border-2 border-teal-200 rounded-3xl p-5 flex items-center justify-between shadow-sm">
            <div class="flex items-center gap-3">
              <span class="text-3xl">🐭</span>
              <div>
                <h3 class="text-lg font-bold text-teal-900">${sectionData.title}</h3>
                <p class="text-sm text-teal-800">${sectionData.instruction}</p>
              </div>
            </div>
            ${state.currentGrade === 1 ? `
              <button id="btn-read-q" class="tts-btn bg-teal-500 hover:bg-teal-600 text-white font-bold p-3 rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2">
                <span class="text-xl">🔊</span>
                <span class="hidden sm:inline text-sm">Đọc câu hỏi</span>
              </button>
            ` : ''}
          </div>

          <!-- Question Stepper -->
          <div class="flex items-center justify-between bg-white border-2 border-slate-200 rounded-2xl px-5 py-3">
            <span class="font-bold text-slate-700">Câu ${qIndex + 1} / ${sectionData.questions.length}</span>
            <div class="flex gap-1.5 flex-wrap">
              ${sectionData.questions.map((q, idx) => {
                const isCurrent = idx === qIndex;
                const hasAnswer = sectionState.userAnswers[q.id] !== undefined;
                let bg = 'bg-slate-200 text-slate-600';

                if (sectionState.checked) {
                  const isCorrect = sectionState.userAnswers[q.id] === q.answer;
                  bg = isCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white';
                } else {
                  if (isCurrent) bg = 'bg-teal-500 text-white ring-2 ring-teal-300 font-bold';
                  else if (hasAnswer) bg = 'bg-teal-200 text-teal-800';
                }

                return `
                  <button class="step-btn w-8 h-8 rounded-xl text-xs font-bold transition-all ${bg}" data-step="${idx}">
                    ${idx + 1}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Question Card -->
          <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            <!-- Question text -->
            <div class="flex items-start gap-4">
              <span class="w-10 h-10 rounded-2xl bg-teal-500 text-white font-black flex items-center justify-center shrink-0 text-lg shadow-sm">
                ${qIndex + 1}
              </span>
              <div class="flex-1">
                <p class="text-xl font-bold text-slate-800 leading-relaxed">${currentQ.question}</p>
              </div>
            </div>

            <!-- Optional Image -->
            ${currentQ.image ? `
              <div class="flex justify-center my-2">
                <div class="p-2 border-2 border-slate-200 rounded-2xl bg-slate-50 max-w-sm overflow-hidden shadow-sm">
                  <img src="${currentQ.image}" alt="Hình minh họa câu ${qIndex + 1}" class="max-h-56 object-contain rounded-xl mx-auto" onerror="this.parentElement.style.display='none'"/>
                </div>
              </div>
            ` : ''}

            <!-- Options Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              ${currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswer === opt;
                const colorInfo = OPTION_COLORS[idx % OPTION_COLORS.length];

                let cardClass = `${colorInfo.bg} ${colorInfo.border} ${colorInfo.text} border-2`;
                let badgeClass = colorInfo.badge;

                if (isSelected) {
                  cardClass = 'bg-teal-500 text-white border-teal-600 ring-4 ring-teal-200 shadow-lg scale-101';
                  badgeClass = 'bg-white text-teal-700';
                }

                if (sectionState.checked) {
                  const isAnswer = opt === currentQ.answer;
                  if (isAnswer) {
                    cardClass = 'bg-emerald-500 text-white border-emerald-600 ring-4 ring-emerald-200 font-bold';
                    badgeClass = 'bg-white text-emerald-700';
                  } else if (isSelected && !isAnswer) {
                    cardClass = 'bg-rose-100 text-rose-900 border-rose-400 opacity-70 line-through';
                    badgeClass = 'bg-rose-500 text-white';
                  } else {
                    cardClass = 'bg-slate-50 text-slate-400 border-slate-200 opacity-50';
                  }
                }

                return `
                  <button class="option-card p-4 rounded-2xl font-bold text-base shadow-sm text-left flex items-center gap-3 transition-all active:scale-98 ${cardClass}"
                          data-option="${opt}">
                    <span class="w-8 h-8 rounded-xl ${badgeClass} text-sm font-black flex items-center justify-center shrink-0 shadow-sm">
                      ${colorInfo.letter}
                    </span>
                    <span class="flex-1 text-lg">${opt}</span>
                    ${sectionState.checked && opt === currentQ.answer ? '<span class="text-xl">✅</span>' : ''}
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Explanation when checked -->
            ${sectionState.checked && currentQ.explanation ? `
              <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 mt-2">
                <div class="font-bold text-sm flex items-center gap-2 mb-1">
                  <span>💡 Giải thích:</span>
                </div>
                <p class="text-sm font-medium">${currentQ.explanation}</p>
              </div>
            ` : ''}
          </div>

          <!-- Bottom Navigation -->
          <div class="flex items-center justify-between pt-2">
            <button id="btn-prev-q" class="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all active:scale-95 ${qIndex === 0 ? 'invisible' : ''}">
              ⬅️ Câu trước
            </button>
            <div class="flex items-center gap-3">
              ${!isLastQuestion ? `
                <button id="btn-next-q" class="px-7 py-3 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm shadow-md transition-all active:scale-95">
                  Câu tiếp theo ➡️
                </button>
              ` : (
                !sectionState.checked ? `
                  <button id="btn-check-quiz" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white font-bold text-base shadow-lg transition-all active:scale-95">
                    Kiểm tra kết quả 🚀
                  </button>
                ` : `
                  <div class="flex items-center gap-3">
                    <span class="text-lg font-bold text-emerald-600">Điểm: ${sectionState.score}/100</span>
                    <button id="btn-next-section" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-base shadow-lg transition-all active:scale-95">
                      ${state.isLastSection ? 'Xem tổng kết bảng vàng 🏆' : 'Bài tiếp theo ➡️'}
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

    function attachEvents() {
      // Audio TTS: ONLY for Grade 1!
      const btnTTS = container.querySelector('#btn-read-q');
      if (btnTTS) {
        btnTTS.addEventListener('click', () => {
          let text = currentQ.question;
          if (currentQ.options && currentQ.options.length <= 4) {
            text += '. Các đáp án: ' + currentQ.options.join(', ');
          }
          AudioEngine.tts.speak(text, state.currentGrade);
        });
      }

      // Step Buttons
      container.querySelectorAll('.step-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          sectionState.currentQuestionIndex = parseInt(btn.dataset.step, 10);
          AudioEngine.sfx.playPop();
          QuizGame.render(container, sectionData, state);
        });
      });

      // Select Option
      container.querySelectorAll('.option-card').forEach(btn => {
        btn.addEventListener('click', () => {
          if (sectionState.checked) return;
          const opt = btn.dataset.option;
          sectionState.userAnswers[currentQ.id] = opt;
          AudioEngine.sfx.playPop();

          // Auto speak option for grade 1 if selected
          if (state.currentGrade === 1) {
            AudioEngine.tts.speak(opt, state.currentGrade);
          }

          buildUI();
        });
      });

      // Prev / Next Question
      const btnPrev = container.querySelector('#btn-prev-q');
      if (btnPrev) {
        btnPrev.addEventListener('click', () => {
          if (sectionState.currentQuestionIndex > 0) {
            sectionState.currentQuestionIndex--;
            AudioEngine.sfx.playPop();
            QuizGame.render(container, sectionData, state);
          }
        });
      }

      const btnNextQ = container.querySelector('#btn-next-q');
      if (btnNextQ) {
        btnNextQ.addEventListener('click', () => {
          if (sectionState.currentQuestionIndex < sectionData.questions.length - 1) {
            sectionState.currentQuestionIndex++;
            AudioEngine.sfx.playPop();
            QuizGame.render(container, sectionData, state);
          }
        });
      }

      // Check Answers
      const btnCheck = container.querySelector('#btn-check-quiz');
      if (btnCheck) {
        btnCheck.addEventListener('click', () => {
          let correct = 0;
          sectionData.questions.forEach(q => {
            if (sectionState.userAnswers[q.id] === q.answer) {
              correct++;
            }
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

window.QuizGame = QuizGame;
