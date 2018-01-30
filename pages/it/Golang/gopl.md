# golang of gopl 

Are you ready?
准备好开发环境，简单入手vim以及配置。
```vim
set nocompatible             
filetype off                  
syntax on
set nu
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()
plugins
Plugin 'gmarik/vundle'
Plugin 'fatih/vim-go'
Plugin 'Valloric/YouCompleteMe'

Plugin 'SirVer/ultisnips'
filetype plugin indent on
```
------
YCM需要可能需要特殊配置才能使用，进入到~/.vim/bundle 进入YCM根目录，执行`git submodule update --recursive --init`更新代码。之后执行`./install.py --gocode-completer` 期间可能需要cmake的支持。在macOS中执行 `brew install cmake` 安心等待即可。

完成之后即可使用vim编写Golang代码了。

第一章的课后作业
```go
package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Println("1.1")
	fmt.Println(strings.Join(os.Args, "_"))
	fmt.Println("1.2")
	for i, v := range os.Args {
		fmt.Println(i, v)
	}
	fmt.Println("1.3")
	fmt.Println(os.Args)
}
```
