'use strict'

var sEXITs = [
  'exit',
  'SIGHUP',
  'SIGINT',
  'SIGQUIT',
  'SIGILL',
  'SIGTRAP',
  'SIGABRT',
  'SIGIOT',
  'SIGBUS',
  'SIGFPE',
  'SIGKILL',
  'SIGUSR1',
  'SIGSEGV',
  'SIGUSR2',
  'SIGPIPE',
  'SIGALRM',
  'SIGTERM',
  'SIGCHLD',
  'SIGSTKFLT',
  'SIGCONT',
  'SIGSTOP',
  'SIGTSTP',
  'SIGBREAK',
  'SIGTTIN',
  'SIGTTOU',
  'SIGURG',
  'SIGXCPU',
  'SIGXFSZ',
  'SIGVTALRM',
  'SIGPROF',
  'SIGWINCH',
  'SIGIO',
  'SIGPOLL',
  'SIGLOST',
  'SIGPWR',
  'SIGSYS',
  'SIGUNUSED'
]

module.exports = {
  on: (cb) => {
    for (var i = 0, l = sEXITs.length; i < l; i++) {
      process.on(sEXITs[i], cb)
    }
  }
}
