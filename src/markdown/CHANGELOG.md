# 5.0.0
## 一、界面升级
1. 代码编辑器界面、命令卡片界面优化调整，显示更多内容。
2. 命令卡片、标签支持拖拽排序。
3. 二列卡片视布局优化调整，显示更多内容。
4. 运行结果界面支持将符合条件的对象转JSON字符串或表格字符串展示。
5. 支持为整个配置页面设置背景图片，支持设置毛玻璃效果。

## 二、可视化编排
1. 新增**可视化编排**，支持拖拽编排命令，实时预览、运行，实现自动化流程处理。
2. 包含：文件操作、网络操作、系统操作、音频操作、图片操作、视频操作、uTools功能、Mac自动化、Window自动化、浏览器控制、数据处理、编码加密、流程控制、编程相关、用户交互、AI对话、模拟操作、获取状态、数学计算、用户数据、显示器、输出消息等20种以上不同类型命令，100项以上实用功能。

## 三、代码编辑器（AI功能）
1. 新增**AI**功能，可以直接告诉AI你的需求来生成对应环境的代码，并支持自动插入生成的代码到编辑器，对于`quickcommand`环境，可选择让AI学习`utools`和`quickcommand`的文档，提升ai生成代码能力。
2. 编辑器添加历史记录的功能，在首次进入编辑界面、执行运行、保存操作及应用`AI`代码时会自动保存代码，并支持恢复到指定代码。
3. 更新utools api声明文件到6.0。
4. quickcommand接口新增showSystemMessageBox等多个系统级弹窗接口，showSystemWaitButton等待操作按钮，showProcessBar进度条，askAI AI问答、clearTimeout 清除计时器

5. 新增quickcomposer接口及声明文件

> 注意quickcomposer接口主要是作为可视化编排的后端接口，虽然也可以在quickcommand环境中调用，但可能随时会更改调整，相比quickcommand接口，无法保证版本迭代后对旧版本接口的兼容性。
>

6. 现在代码编辑器没有获得焦点时，也可以通过快捷键执行保存和运行操作。

## 四、优化调整
1. 匹配模式去掉专业模式选项，现在支持图形化配置多种匹配模式，支持匹配文件夹。
2. 选择隐藏类型的输出时，不再会主动显示utools搜索框。
3. 命令卡片的选项菜单中新增“创建命令副本”功能
4. 大量代码重构、优化调整。

## 五、BUG修复
1. 修复json格式运行结果复制错误的bug，运行结果支持保存
2. 修复 Windows 下 Bash 脚本执行失败问题
