const { spawn } = require("child_process");
const fs = require("fs");

// 存储当前播放的音频实例
let currentAudio = null;

// 系统音效映射
const SYSTEM_SOUNDS = {
  beep: {
    win: "Beep",
    mac: "Ping.aiff",
  },
  error: {
    win: "Asterisk",
    mac: "Basso.aiff",
  },
  warning: {
    win: "Exclamation",
    mac: "Sosumi.aiff",
  },
  notification: {
    win: "Notification",
    mac: "Glass.aiff",
  },
  complete: {
    win: "SystemAsterisk",
    mac: "Hero.aiff",
  },
  click: {
    win: "MenuCommand",
    mac: "Tink.aiff",
  },
};

/**
 * 播放音频文件
 * @param {string} file 音频文件路径
 * @param {number} volume 音量 (0-1)
 * @param {boolean} loop 是否循环播放
 * @param {boolean} autoplay 是否自动播放
 */
async function play(file, volume = 1, loop = false, autoplay = true) {
  // 停止当前音频
  stop();

  // 检查文件是否存在
  if (!fs.existsSync(file)) {
    throw new Error(`音频文件不存在: ${file}`);
  }

  // 创建新的音频实例
  const audio = new Audio();
  audio.src = `file://${file}`;
  audio.volume = parseFloat(volume) || 1;
  audio.loop = !!loop;

  // 保存当前实例
  currentAudio = audio;

  // 如果设置了自动播放
  if (autoplay !== false) {
    audio.play();
  }

  // 返回 Promise，在播放结束时 resolve
  return new Promise((resolve, reject) => {
    audio.onended = () => {
      if (!audio.loop) {
        currentAudio = null;
        resolve();
      }
    };
    audio.onerror = (error) => {
      currentAudio = null;
      reject(error);
    };
  });
}

/**
 * 播放系统音效
 * @param {string} type 音效类型
 * @param {number} volume 音量 (0-1)
 */
async function beep(type = "beep", volume = 1) {
  // 在 Windows 上使用 PowerShell 播放系统音效
  if (process.platform === "win32") {
    const soundName = SYSTEM_SOUNDS[type]?.win || SYSTEM_SOUNDS.beep.win;
    // 使用系统音效
    const script = `[System.Media.SystemSounds]::${soundName}.Play()`;

    return new Promise((resolve, reject) => {
      const ps = spawn("powershell", ["-Command", script]);
      ps.on("close", (code) => {
        if (code === 0) resolve();
        else reject(new Error(`PowerShell 命令执行失败，退出码: ${code}`));
      });
    });
  }
  // 在 macOS 上使用 afplay 播放系统音效
  else if (process.platform === "darwin") {
    const soundName = SYSTEM_SOUNDS[type]?.mac || SYSTEM_SOUNDS.beep.mac;
    volume = parseFloat(volume) || 1;
    return new Promise((resolve, reject) => {
      const afplay = spawn("afplay", [
        `/System/Library/Sounds/${soundName}`,
        "-v",
        volume,
      ]);
      afplay.on("close", (code) => {
        if (code === 0) resolve();
        else reject(new Error(`afplay 命令执行失败，退出码: ${code}`));
      });
    });
  }
  // 在其他平台上使用 utools.shellBeep
  else {
    utools.shellBeep();
    return Promise.resolve();
  }
}

/**
 * 停止音频播放
 */
function stop() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

/**
 * 分析音频文件
 * @param {string} file 音频文件路径
 * @returns {Promise<Object>} 音频信息
 */
async function analyze(file) {
  if (!fs.existsSync(file)) {
    throw new Error(`音频文件不存在: ${file}`);
  }

  const audio = new Audio();
  audio.src = `file://${file}`;

  return new Promise((resolve, reject) => {
    audio.onloadedmetadata = () => {
      resolve({
        duration: audio.duration,
        channels: audio.mozChannels || 2,
        sampleRate: audio.mozSampleRate || 44100,
      });
    };
    audio.onerror = reject;
  });
}

module.exports = {
  play,
  beep,
  stop,
  analyze,
};
