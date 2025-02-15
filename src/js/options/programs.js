/**
 * 所有支持的编程语言
 */

const programs = {
  quickcommand: {
    name: "quickcommand",
    bin: "",
    argv: "",
    ext: "",
    color: "primary",
    icon: "logo/quickcommand.png",
    shortName: "qc",
  },
  html: {
    name: "html",
    bin: "",
    argv: "",
    ext: "",
    color: "deep-orange",
    icon: "logo/html.png",
  },
  shell: {
    name: "shell",
    bin: "bash",
    argv: "",
    ext: "sh",
    color: "green-6",
    icon: "logo/shell.png",
  },
  applescript: {
    name: "applescript",
    bin: "osascript",
    argv: "",
    ext: "scpt",
    color: "cyan-10",
    icon: "logo/applescript.png",
    shortName: "ascpt",
  },
  cmd: {
    name: "cmd",
    bin: "",
    argv: "",
    ext: "bat",
    color: "orange-10",
    icon: "logo/cmd.png",
  },
  powershell: {
    name: "powershell",
    bin: "powershell",
    argv: "-NoProfile -File",
    ext: "ps1",
    color: "amber-14",
    icon: "logo/powershell.png",
    shortName: "ps",
  },
  python: {
    name: "python",
    bin: "python",
    argv: "-u",
    ext: "py",
    color: "light-blue-10",
    icon: "logo/python.png",
    shortName: "py",
  },
  javascript: {
    name: "javascript",
    bin: "node",
    argv: "",
    ext: "js",
    color: "teal",
    icon: "logo/javascript.png",
    shortName: "js",
  },
  ruby: {
    name: "ruby",
    bin: "ruby",
    argv: "",
    ext: "rb",
    color: "red-10",
    icon: "logo/ruby.png",
  },
  php: {
    name: "php",
    bin: "php",
    argv: "",
    ext: "php",
    color: "deep-purple",
    icon: "logo/php.png",
  },
  c: {
    name: "c",
    bin: "gcc",
    argv: "-o",
    ext: "c",
    color: "blue-7",
    icon: "logo/c.png",
  },
  csharp: {
    name: "csharp",
    bin: "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\csc.exe",
    argv: "/Nologo",
    ext: "cs",
    color: "light-blue-13",
    icon: "logo/csharp.png",
    shortName: "c#",
  },
  lua: {
    name: "lua",
    bin: "lua",
    argv: "",
    ext: "lua",
    color: "light-green-8",
    icon: "logo/lua.png",
  },
  perl: {
    name: "perl",
    bin: "perl",
    argv: "",
    ext: "pl",
    color: "purple",
    icon: "logo/perl.png",
  },
  custom: {
    name: "custom",
    bin: "",
    argv: "",
    ext: "",
    color: "indigo-6",
    icon: "logo/custom.png",
  },
};
export default programs;
