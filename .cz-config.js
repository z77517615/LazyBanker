module.exports = {
  types: [
    {
      value: '✨ Feat',
      name: '✨    Feat:        新功能'
    },
    {
      value: '🐛 Fix',
      name: '🐛    Fix:         修正 bug'
    },
    {
      value: '🔨 Refactor',
      name: '🔨    Refactor:    重構 (既不是新增功能，也不是修補 bug 的程式碼變動)'
    },
    {
      value: '💥 Breaking',
      name: '💥    Breaking:    會影響到相依的程式碼的變動'
    },
    {
      value: '👘 CSS',
      name: '👘    CSS:         調整 CSS'
    },
    {
      value: '🌐 Wording',
      name: '🌐    Wording:     新增/修改文字 (文案, 翻譯, SEO...等)'
    },
    {
      value: '🚨 Test',
      name: '🚨    Test:        新增/修改測試'
    },
    {
      value: '🚀 Perf',
      name: '🚀    Perf:        改善效能'
    },
    {
      value: '🔧 Config',
      name: '🔧    Config:      新增/修改功能面的 config'
    },
    {
      value: '🍱 Assets',
      name: '🍱    Assets:      修改 handle / 背景圖 / 遮罩...等相關靜態設定'
    },
    {
      value: '🎨 Style',
      name: '🎨    Style:       不影響程式碼運行的變動 (white-space, formatting, missing semi colons, etc)'
    },
    {
      value: '💡 Comment',
      name: '💡    Comment:     新增/修改註解'
    },
    {
      value: '💮 Typo',
      name: '💮    Typo:        修正 typo'
    },
    {
      value: '🗑️  Remove',
      name: '🗑️     Remove:      移除未使用程式碼'
    },
    {
      value: '📎 Chore',
      name: '📎    Chore:       建構程序或輔助工具的改動'
    },
    {
      value: '⬆️  Upgrade',
      name: '⬆️     Upgrade:     升級套件'
    },
    {
      value: '⬇️  Downgrade',
      name: '⬇️     Downgrade:   降級套件 '
    },
    {
      value: '🕙 Revert',
      name: '🕙    Revert:      回復先前的 commit'
    },
    {
      value: '🚚 Move',
      name: '🚚    Move:        搬移檔案'
    },
    {
      value: '📚 Docs',
      name: '📚    Docs:        文件修改 (README...等)'
    },
    {
      value: '💪 WIP',
      name: '💪    WIP:         做到一半的事情'
    },
  ],

  // TODO: 可以選 commit 的 scope，之後再確認要不要加
  // scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberRegExp: '\\d{1,5}',
  upperCaseSubject: true,

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional).',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowCustomScopes: false,
  // allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['scope'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
