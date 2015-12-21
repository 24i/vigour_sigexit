# sigexit
### add listeners to the multiple interrupts that can cause an exit:

#### Usage:
```javascript
var sigexit = require('sigexit')
sigexit.on(function(){
  // kill your stuff
})
```

#### current signals being treated:
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
  'SIGUSR1',
  'SIGSEGV',
  'SIGUSR2',
  'SIGPIPE',
  'SIGALRM',
  'SIGTERM',
  'SIGCHLD',
  'SIGSTKFLT',
  'SIGCONT',
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
