# Python 基础

## 推荐使用 Anaconda 安装

官网下载[安装脚本](https://www.anaconda.com/distribution/)，选择自己对应的操作系统([可以在这里](https://repo.anaconda.com/archive/)) 看到所有的版本，并且下载完成后使用 `md5sum 下载的文件.sh` 校验 MD5 值是否一致。

一致的话就可以执行脚本了

```bash
$ chmod u+x Anaconda3-5.3.1-Linux-x86_64.sh
$ bash Anaconda3-5.3.1-Linux-x86_64.sh
```

然后根据提示回车和输入 yes 就行。如果使用 `zsh`, 将 `~/.bashrc` 下自动添加的环境变量添加到 `~/.zshrc` 文件末尾， 然后 `source ~/.zshrc`

```zsh
# added by Anaconda3 5.3.1 installer
# >>> conda init >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$(CONDA_REPORT_ERRORS=false '/home/alvinmi/anaconda3/bin/conda' shell.bash hook 2> /dev/null)"
if [ $? -eq 0 ]; then
    \eval "$__conda_setup"
else
    if [ -f "/home/alvinmi/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/home/alvinmi/anaconda3/etc/profile.d/conda.sh"
        CONDA_CHANGEPS1=false conda activate base
    else
        \export PATH="/home/alvinmi/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda init <<<
```

卸载：

```bash
# 移除 Anaconda 的安装目录
$ rm -rf ~/anaconda3
# 编辑 ~/.bashrc 文件删除 Anaconda 的环境变量
# added by Anaconda3 installer
$ export PATH="/home/linuxize/anaconda3/bin:$PATH"
# 移除隐藏文件
$ rm -rf ~/.condarc ~/.conda ~/.continuum
```

## Python 开发环境

环境问题有时候很烦，开发过程中会不断的安装一些库，而一些库的更新速度快，版本不一样。所以最好用 `virtualenv` 工具。主要用 Python3

```bash
# 检查 Python 是否安装成功
$ Python3 -V
Python 3.6.7
```

再创建一个专用目录，例如 `~/.virtualenvs`，用于保存 Python 的开发环境目录。

```bash
$ mkdir ~/.virtualenvs
$ cd ~/.virtualenvs
$ sudo apt install -y python3-pip
```

接下来通过 pip 包(类似于 Ruby 中的 gem、R 中的 cran，Node 中的 npm，Python 中的包管理机制)，安装 Python 虚拟机环境库 `virtualenv`

```bash
$ sudo pip3 install virtualenv
Installing collected packages: virtualenv
Successfully installed virtualenv-16.4.3
```

需要注意的是这将会安装到 Python 所在的目录，我的目录是在：

```zsh
$ which virtualenv
/usr/local/bin/virtualenv
```

在创建自己开发虚拟环境之前，我们可以建一个放所有 `virtualenv` 的目录，前面已经创建好了

```zsh
$ mkdir ~/.virtualenvs
```

<!-- 现在就创建新的虚拟机：

```zsh
$ virtualenv
``` -->

### 使用 virtualenv 创建项目

创建一个该项目专用开发环境，假设命名为：myproject:

```bash
$ virtualenv myproject
# 激活该环境, 注意权限问题
$ source ~/.virtualenvs/myproject/bin/activate
```

就能安装其他的库了，例如 Djiango 等等...