// Audio & Sound Synthesizer + Text to Speech for Trang Nguyen Tieng Viet
// Uses pure Web Audio API (no external mp3 files required) and Web Speech API

const AudioEngine = (() => {
  let audioCtx = null;
  let isMuted = false;
  let currentUtterance = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Synthesize Sound Effects
  const SFX = {
    playPop() {
      if (isMuted) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } catch (e) {
        console.warn('Audio playPop error:', e);
      }
    },

    playSuccess() {
      if (isMuted) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        // Happy chime chord: C5, E5, G5, C6
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.value = freq;
          const startTime = now + idx * 0.07;
          gain.gain.setValueAtTime(0.15, startTime);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.35);
        });
      } catch (e) {
        console.warn('Audio playSuccess error:', e);
      }
    },

    playWrong() {
      if (isMuted) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        // Gentle "uh-oh" double bump
        const freqs = [330, 260];
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.value = freq;
          const startTime = now + idx * 0.12;
          gain.gain.setValueAtTime(0.12, startTime);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.15);
        });
      } catch (e) {
        console.warn('Audio playWrong error:', e);
      }
    },

    playVictory() {
      if (isMuted) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        // Trạng Nguyên Fanfare: C5 - E5 - G5 - C6 - G5 - C6
        const fanfare = [
          { f: 523.25, d: 0.12, delay: 0 },
          { f: 523.25, d: 0.12, delay: 0.14 },
          { f: 659.25, d: 0.12, delay: 0.28 },
          { f: 783.99, d: 0.2,  delay: 0.42 },
          { f: 659.25, d: 0.15, delay: 0.65 },
          { f: 1046.5, d: 0.45, delay: 0.82 }
        ];
        fanfare.forEach(item => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = item.f;
          const st = now + item.delay;
          gain.gain.setValueAtTime(0.2, st);
          gain.gain.exponentialRampToValueAtTime(0.001, st + item.d);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(st);
          osc.stop(st + item.d);
        });
      } catch (e) {
        console.warn('Audio playVictory error:', e);
      }
    }
  };

  // Text-To-Speech (ONLY for Grade 1)
  const TTS = {
    speak(text, grade = 1, onEndCallback = null) {
      // REQUIREMENT: Grades >= 2 do NOT have audio/speaker!
      if (grade > 1) {
        return;
      }
      if (isMuted || !window.speechSynthesis) return;

      this.stop();

      try {
        // Clean text for speech (replace dots/dashes)
        const cleanText = text
          .replace(/[…_.]+/g, ' ô trống ')
          .replace(/\//g, ' hoặc ')
          .replace(/[-*]+/g, ' ');

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'vi-VN';
        utterance.rate = 0.9;  // Slightly slower, clear for 1st graders
        utterance.pitch = 1.1; // Gentle, child-friendly pitch

        // Select Vietnamese voice if available
        const voices = window.speechSynthesis.getVoices();
        const viVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VIE'));
        if (viVoice) {
          utterance.voice = viVoice;
        }

        utterance.onend = () => {
          currentUtterance = null;
          if (onEndCallback) onEndCallback();
        };

        utterance.onerror = () => {
          currentUtterance = null;
          if (onEndCallback) onEndCallback();
        };

        currentUtterance = utterance;
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('TTS speak error:', e);
      }
    },

    stop() {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      currentUtterance = null;
    },

    isSpeaking() {
      return !!currentUtterance && window.speechSynthesis && window.speechSynthesis.speaking;
    }
  };

  return {
    sfx: SFX,
    tts: TTS,
    get isMuted() { return isMuted; },
    toggleMute() {
      isMuted = !isMuted;
      if (isMuted) {
        TTS.stop();
      }
      return isMuted;
    }
  };
})();

window.AudioEngine = AudioEngine;
