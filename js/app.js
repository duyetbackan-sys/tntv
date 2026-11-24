// Main Application Controller for Trang Nguyen Tieng Viet
document.addEventListener('DOMContentLoaded', () => {
  const AppState = {
    currentGrade: 1,
    currentRoundId: null,
    currentExamId: null,
    currentExamData: null,
    currentSectionIndex: 0,
    sectionStates: {},
    timerInterval: null,
    timeLeft: 1200, // 20 minutes
    isTimerRunning: false,

    get isLastSection() {
      if (!this.currentExamData) return true;
      return this.currentSectionIndex >= this.currentExamData.sections.length - 1;
    },

    nextSection() {
      if (!this.isLastSection) {
        this.currentSectionIndex++;
        AudioEngine.sfx.playPop();
        renderCurrentSection();
      } else {
        showFinalResults();
      }
    }
  };

  // DOM Elements
  const gradeTabsContainer = document.getElementById('grade-tabs-container');
  const viewHome = document.getElementById('view-home');
  const viewComingSoon = document.getElementById('view-coming-soon');
  const viewExam = document.getElementById('view-exam');
  const viewSummaryModal = document.getElementById('summary-modal');
  const examContainer = document.getElementById('exam-game-container');
  const btnToggleMute = document.getElementById('btn-toggle-mute');

  // Load Data
  const gradesData = window.TNTV_DATA ? window.TNTV_DATA.grades : [];

  // Initialize
  initGradeTabs();
  renderHome();
  initSoundToggle();

  function initSoundToggle() {
    if (!btnToggleMute) return;
    btnToggleMute.addEventListener('click', () => {
      const muted = AudioEngine.toggleMute();
      btnToggleMute.innerHTML = muted ? '🔇' : '🔔';
      btnToggleMute.title = muted ? 'Bật âm thanh' : 'Tắt âm thanh';
    });
  }

  // 1. Render Grade Tabs (Lớp 1 to Lớp 9)
  function initGradeTabs() {
    if (!gradeTabsContainer) return;
    gradeTabsContainer.innerHTML = gradesData.map(g => {
      const isActive = g.grade === AppState.currentGrade;
      const isLop1 = g.grade === 1;

      return `
        <button class="grade-tab-btn px-4 py-2.5 rounded-2xl font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-200 flex items-center gap-2 shadow-sm
                       ${isActive
                         ? 'bg-amber-500 text-white shadow-amber-200 ring-2 ring-amber-300 scale-102'
                         : 'bg-white hover:bg-amber-50 text-slate-700 border border-slate-200'}"
                data-grade="${g.grade}">
          <span>${g.icon}</span>
          <span>${g.title}</span>
          ${isLop1 ? '<span class="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-black animate-pulse">HOT</span>' : ''}
        </button>
      `;
    }).join('');

    gradeTabsContainer.querySelectorAll('.grade-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const grade = parseInt(btn.dataset.grade, 10);
        selectGrade(grade);
      });
    });
  }

  function selectGrade(grade) {
    AppState.currentGrade = grade;
    AudioEngine.tts.stop();
    AudioEngine.sfx.playPop();

    // Re-render tabs
    initGradeTabs();

    // Hide any running exam
    stopTimer();
    viewExam.classList.add('hidden');

    if (grade === 1) {
      viewComingSoon.classList.add('hidden');
      viewHome.classList.remove('hidden');
      renderHome();
    } else {
      // Grade >= 2: Coming soon, NO audio speaker
      viewHome.classList.add('hidden');
      viewComingSoon.classList.remove('hidden');
      renderComingSoon(grade);
    }
  }

  // 2. Render Coming Soon Screen for Grades >= 2
  function renderComingSoon(grade) {
    const gradeInfo = gradesData.find(g => g.grade === grade) || { title: `Lớp ${grade}`, icon: '📚' };
    const content = document.getElementById('coming-soon-content');
    if (!content) return;

    content.innerHTML = `
      <div class="text-center max-w-lg mx-auto p-8 bg-white border-2 border-slate-200 rounded-3xl shadow-sm flex flex-col items-center gap-4">
        <span class="text-6xl animate-bounce">${gradeInfo.icon}</span>
        <h2 class="text-2xl font-extrabold text-slate-800">Đề thi ${gradeInfo.title}</h2>
        <div class="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-sm font-semibold">
          ⏳ Nội dung đề thi ${gradeInfo.title} đang được ban biên tập tổng hợp và cập nhật!
        </div>
        <p class="text-slate-600 text-sm">
          Các lớp từ lớp 2 trở lên sẽ tự đọc đề bài mà không cần loa trợ giảng. Bạn có thể quay lại luyện tập bộ đề <strong>Lớp 1</strong> ngay bây giờ nhé!
        </p>
        <button id="btn-back-lop1" class="mt-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2">
          <span>🌱 Quay lại luyện thi Lớp 1</span>
        </button>
      </div>
    `;

    document.getElementById('btn-back-lop1')?.addEventListener('click', () => {
      selectGrade(1);
    });
  }

  // 3. Render Home Screen (Rounds & Exams of Lớp 1)
  function renderHome() {
    const roundListContainer = document.getElementById('round-list-container');
    if (!roundListContainer) return;

    const lop1Info = gradesData.find(g => g.grade === 1);
    if (!lop1Info) return;

    roundListContainer.innerHTML = lop1Info.rounds.map(round => {
      // Get exam list from bundled dataset
      const roundData = window.TNTV_DATA.lop1[round.id];
      const exams = roundData ? roundData.exams : [];

      return `
        <div class="round-card bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col gap-5">
          <!-- Round Header -->
          <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <div class="flex items-center gap-3">
              <span class="text-3xl">${round.id === 'vong-5' ? '🏫' : '🏛️'}</span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl font-black text-slate-800">${round.name}</h3>
                  <span class="bg-amber-100 text-amber-800 text-xs px-2.5 py-0.5 rounded-full font-bold">${round.badge}</span>
                </div>
                <p class="text-sm text-slate-500">${round.description}</p>
              </div>
            </div>
            <span class="text-sm font-bold text-slate-400 hidden sm:block">${exams.length} Đề thi</span>
          </div>

          <!-- Exam Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${exams.map((exam, idx) => `
              <div class="exam-card bg-gradient-to-b from-amber-50/50 to-orange-50/30 border-2 border-amber-200 hover:border-amber-400 rounded-2xl p-4 flex flex-col justify-between shadow-sm cursor-pointer transition-all"
                   data-round-id="${round.id}" data-exam-id="${exam.id}">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-lg">Đề số ${idx + 1}</span>
                    <span class="text-xs text-slate-400 font-semibold">⏱️ 20 phút</span>
                  </div>
                  <h4 class="font-extrabold text-slate-800 text-base mb-1">${exam.title}</h4>
                  <p class="text-xs text-slate-500 mb-3">${exam.sections.length} bài thi tương tác</p>
                </div>
                <button class="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 transition-all">
                  <span>Bắt đầu thi</span>
                  <span>🚀</span>
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    // Attach click handlers to exams
    roundListContainer.querySelectorAll('.exam-card').forEach(card => {
      card.addEventListener('click', () => {
        const roundId = card.dataset.roundId;
        const examId = card.dataset.examId;
        startExam(roundId, examId);
      });
    });
  }

  // 4. Start Exam
  function startExam(roundId, examId) {
    AppState.currentRoundId = roundId;
    AppState.currentExamId = examId;

    const roundData = window.TNTV_DATA.lop1[roundId];
    if (!roundData) return;

    const examData = roundData.exams.find(e => e.id === examId);
    if (!examData) return;

    AppState.currentExamData = examData;
    AppState.currentSectionIndex = 0;
    AppState.sectionStates = {};
    AppState.timeLeft = examData.duration || 1200;

    // Switch view
    viewHome.classList.add('hidden');
    viewComingSoon.classList.add('hidden');
    viewExam.classList.remove('hidden');

    startTimer();
    renderCurrentSection();
    AudioEngine.sfx.playVictory();
  }

  // 5. Timer
  function startTimer() {
    stopTimer();
    AppState.isTimerRunning = true;
    updateTimerDisplay();

    AppState.timerInterval = setInterval(() => {
      if (AppState.timeLeft > 0) {
        AppState.timeLeft--;
        updateTimerDisplay();
      } else {
        stopTimer();
        AudioEngine.sfx.playWrong();
        alert('Đã hết giờ làm bài! Cùng xem kết quả bảng vàng nhé!');
        showFinalResults();
      }
    }, 1000);
  }

  function stopTimer() {
    if (AppState.timerInterval) {
      clearInterval(AppState.timerInterval);
      AppState.timerInterval = null;
    }
    AppState.isTimerRunning = false;
  }

  function updateTimerDisplay() {
    const timerEl = document.getElementById('exam-timer');
    if (!timerEl) return;
    const mins = Math.floor(AppState.timeLeft / 60);
    const secs = AppState.timeLeft % 60;
    timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (AppState.timeLeft <= 180) {
      timerEl.className = 'font-black text-rose-600 animate-pulse';
    } else {
      timerEl.className = 'font-black text-amber-700';
    }
  }

  // 6. Render Current Section
  function renderCurrentSection() {
    const examData = AppState.currentExamData;
    if (!examData || !examContainer) return;

    // Update Header Info
    const examTitleEl = document.getElementById('exam-header-title');
    if (examTitleEl) {
      const roundInfo = gradesData.find(g => g.grade === 1).rounds.find(r => r.id === AppState.currentRoundId);
      examTitleEl.textContent = `${roundInfo ? roundInfo.name : ''} - ${examData.title}`;
    }

    // Render Section Navigation Tabs
    const secTabsEl = document.getElementById('exam-section-tabs');
    if (secTabsEl) {
      secTabsEl.innerHTML = examData.sections.map((sec, idx) => {
        const isCurrent = idx === AppState.currentSectionIndex;
        const state = AppState.sectionStates[idx];
        const isDone = state && state.checked;

        let badge = 'bg-slate-100 text-slate-600 border border-slate-200';
        if (isCurrent) {
          badge = 'bg-amber-500 text-white font-bold ring-2 ring-amber-300 shadow-sm';
        } else if (isDone) {
          badge = 'bg-emerald-100 text-emerald-800 font-bold border border-emerald-300';
        }

        return `
          <button class="px-4 py-2 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-1.5 ${badge}"
                  data-sec-idx="${idx}">
            <span>Bài ${idx + 1}</span>
            ${isDone ? '<span class="text-xs">✓</span>' : ''}
          </button>
        `;
      }).join('');

      secTabsEl.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          AppState.currentSectionIndex = parseInt(btn.dataset.secIdx, 10);
          AudioEngine.sfx.playPop();
          renderCurrentSection();
        });
      });
    }

    // Render Game Component
    const section = examData.sections[AppState.currentSectionIndex];
    examContainer.innerHTML = '';

    if (section.type === 'basket') {
      BasketGame.render(examContainer, section, AppState);
    } else if (section.type === 'match') {
      MatchGame.render(examContainer, section, AppState);
    } else if (section.type === 'sort') {
      SortGame.render(examContainer, section, AppState);
    } else if (section.type === 'quiz') {
      QuizGame.render(examContainer, section, AppState);
    }
  }

  // 7. Show Final Results Modal (Bảng Vàng Danh Dự)
  function showFinalResults() {
    stopTimer();
    AudioEngine.tts.stop();

    const examData = AppState.currentExamData;
    const totalSections = examData.sections.length;
    let totalScore = 0;

    examData.sections.forEach((sec, idx) => {
      const s = AppState.sectionStates[idx];
      if (s && s.score) totalScore += s.score;
    });

    const scaledScore = Math.round((totalScore / (totalSections * 100)) * 300);

    let rankTitle = '👑 Trạng Nguyên';
    let rankDesc = 'Bé thật xuất sắc! Toàn bộ kiến thức đều nắm rất vững vàng!';
    let medalEmoji = '🥇';
    let stars = '⭐⭐⭐';

    if (scaledScore < 180) {
      rankTitle = '📜 Cử Nhân';
      rankDesc = 'Bé đã rất cố gắng! Hãy chăm chỉ luyện tập thêm để đỗ Trạng Nguyên nhé!';
      medalEmoji = '🎖️';
      stars = '⭐';
    } else if (scaledScore < 240) {
      rankTitle = '🥉 Thám Hoa';
      rankDesc = 'Kết quả rất tốt! Chỉ còn một chút nữa là đạt điểm tối đa rồi!';
      medalEmoji = '🥉';
      stars = '⭐⭐';
    } else if (scaledScore < 280) {
      rankTitle = '🥈 Bảng Nhãn';
      rankDesc = 'Chúc mừng bé đã đạt danh hiệu Bảng Nhãn rạng danh bảng vàng!';
      medalEmoji = '🥈';
      stars = '⭐⭐⭐';
    }

    const modalContent = document.getElementById('summary-modal-content');
    if (modalContent) {
      modalContent.innerHTML = `
        <div class="text-center flex flex-col items-center gap-4">
          <div class="relative">
            <span class="text-7xl block animate-bounce">${medalEmoji}</span>
            <span class="text-2xl absolute -bottom-2 -right-2">${stars}</span>
          </div>

          <div>
            <span class="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">Bảng Vàng Danh Dự</span>
            <h2 class="text-3xl font-black text-slate-800 mt-2">${rankTitle}</h2>
            <p class="text-slate-600 text-sm mt-1 max-w-sm">${rankDesc}</p>
          </div>

          <!-- Score Card -->
          <div class="w-full bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-5 my-2">
            <div class="text-4xl font-black text-amber-600">${scaledScore} <span class="text-lg text-slate-500 font-bold">/ 300 điểm</span></div>
            <div class="text-xs text-slate-500 mt-1 font-semibold">Thời gian còn lại: ${document.getElementById('exam-timer')?.textContent || '00:00'}</div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-3 w-full mt-2">
            <button id="btn-modal-retry" class="flex-1 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all active:scale-95">
              🔄 Thi lại đề này
            </button>
            <button id="btn-modal-home" class="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-md transition-all active:scale-95">
              📚 Chọn đề khác
            </button>
          </div>
        </div>
      `;
    }

    viewSummaryModal.classList.remove('hidden');

    // Launch Confetti & Audio
    if (scaledScore >= 200) {
      ConfettiEffect.launch(150);
      AudioEngine.sfx.playVictory();
    } else {
      AudioEngine.sfx.playSuccess();
    }

    document.getElementById('btn-modal-retry')?.addEventListener('click', () => {
      viewSummaryModal.classList.add('hidden');
      startExam(AppState.currentRoundId, AppState.currentExamId);
    });

    document.getElementById('btn-modal-home')?.addEventListener('click', () => {
      viewSummaryModal.classList.add('hidden');
      viewExam.classList.add('hidden');
      viewHome.classList.remove('hidden');
      renderHome();
    });
  }

  // Header "Back to Exam List" Button
  document.getElementById('btn-exit-exam')?.addEventListener('click', () => {
    if (confirm('Bé có chắc muốn dừng bài thi này để quay lại danh sách đề không?')) {
      stopTimer();
      AudioEngine.tts.stop();
      viewExam.classList.add('hidden');
      viewHome.classList.remove('hidden');
      renderHome();
    }
  });
});
