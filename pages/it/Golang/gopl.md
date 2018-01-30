# golang review 

Are you ready?
准备好开发环境，简单入手vim以及配置。
`
  set nocompatible              " be iMproved, required
  filetype off                  " required
  syntax on
  set nu
  " set the runtime path to include Vundle and initialize
    set rtp+=~/.vim/bundle/vundle/
  call vundle#rc()
    " alternatively, pass a path where Vundle should install plugins
    "let path = '~/some/path/here'
    "call vundle#rc(path)

    " let Vundle manage Vundle, required
    Plugin 'gmarik/vundle'
    Plugin 'fatih/vim-go'
    Plugin 'Valloric/YouCompleteMe'

    Plugin 'SirVer/ultisnips'
  filetype plugin indent on     " required
    " To ignore plugin indent changes, instead use:
    "filetype plugin on
    "
    " Brief help
    " :PluginList          - list configured plugins
    " :PluginInstall(!)    - install (update) plugins
    " :PluginSearch(!) foo - search (or refresh cache first) for foo
    " :PluginClean(!)      - confirm (or auto-approve) removal of unused plugins
    "
    " see :h vundle for more details or wiki for FAQ
    " NOTE: comments after Plugin commands are not allowed.
    " Put your stuff after this line
`

------
YCM需要可能需要特殊配置才能使用，进入到~/.vim/bundle 进入YCM根目录，执行`git submodule update --recursive --init`更新代码。之后执行`./install.py --gocode-completer` 期间可能需要cmake的支持。在macOS中执行 `brew install cmake` 安心等待即可。

完成之后即可使用vim编写Golang代码了。