# YAML

YAML 是 "`YAML Ain't a Markup Language`"(YAML 不是一种标记语言)。在开发的这种语言时，YAML 的意思其实是："`Yet Another Markup Language`"(是另一种标记语言)。

YAML（YAML Ain't Markup Language）是一种人类可读的数据序列化格式，它通常用于配置文件，在各种编程语言中作为一种存储或传输数据的方式。YAML的设计目标是易于阅读和编写，同时保持足够的表达能力来表示复杂的数据结构。
YAML文件的扩展名可以是.yaml或.yml。

**优点**：

- 设计目标，就是**方便读写**
- **层次分明**，更适合做配置文件

**YAML使用`.yaml`或 `.yml`作为文件后缀**。

**基本语法**：

- **大小写敏感**
- 支持多层嵌套
- 使用**缩进表示层级关系，k: v，使用空格分割k,v**
- 缩进时不允许使用Tab键，只允许**使用空格**换行
- 缩进的空格数目不重要，只要**相同层级**的元素**左侧对齐**即可
- **# 表示注释**，从这个字符一直到行尾，都会被解析器忽略。

**支持的写法**：

- **对象**：**键值对**的集合，如：映射(map)/ 哈希(hash) / 字典(dictionary)
- **数组**：一组按次序排列的值，如：序列(sequence) / 列表(list)
- **纯量**：单个的、不可再分的值，如：字符串、数字、bool、日期

**注意**：

- birthDay 推荐写为 birth-day

- 文本：
  - **单引号**不会转义 (`\n` 则为普通字符串显示)
  
    ```yaml
    name: '文字\n文字'
    ```
  
  - **双引号**会转义 (`\n`会显示为**换行符**)
  
    ```yaml
    name: "文字\n文字"
    ```
  
- **数组**：一组以区块格式(Block Format)**即"破折号+空格"**开头的数据组成一个数组

  ```yaml
  dogs:
    - name: 小黑
      age: 3
    - name: 小白
      age: 2
  ```

- 大文本：
  - `|`开头：大文本写在下层，**保留文本格式**，**换行符正确显示**
  
    ```yaml
    name: | 
        张三
        lisi
    ```
  
  - `>`开头：大文本写在下层，折叠换行符，压缩换行符变成 空格
  
    ```yaml
    name: > 
        张三
    ```
  
- 多文档合并：可以把多个yaml文档合并在一个文档中，每个文档区依然认为内容独立
  - 用`---`即**三个破折号**表示一份内容的**开始**
  - 用`...`即**三个小数点**表示一份内容的**结束**（非必需）


> demo.yaml 或 demo.yml

```yaml
# 注释
#-----
person:
  # 冒号后要空格
  name: 张三
  age: 18
  # 不推荐使用birthDay
  birth-day: 2010/01/01 12:10:12
  like: true
  child:
    name: 李四
    age: 20
    birthDay: 2018/10/10
    text: ["abc","def"]
  # 数组
  dogs:
    - name: 小黑
      age: 3
    - name: 小白
      age: 2
    # 支持多维数组(用缩进表示层级关系)
    -
      - eat: 肉
      - call: 汪汪
  cats:
    c1:
      name: 小蓝
      age: 3
    c2: {name: 小绿,age: 2} #支持流式风格(Flow style)的语法(用花括号包裹，用逗号加空格分隔，类似 JSON)
```

****

**引用**：

```yaml
defaults: &defaults
  adapter:  postgres
  host:     localhost
 
development:
  database: myapp_development
  <<: *defaults
 
test:
  database: myapp_test
  <<: *defaults
```

相当于

```yaml
defaults:
  adapter:  postgres
  host:     localhost
 
development:
  database: myapp_development
  adapter:  postgres
  host:     localhost
 
test:
  database: myapp_test
  adapter:  postgres
  host:     localhost
```

YAML的语法规则 

YAML的语法规则如下：

1. 数据结构：YAML支持多种数据类型，包括：

   - 字符串、数字、布尔值
   - 数组、list集合
   - map键值对   等。

2. YAML使用一个空格来分隔属性名和属性值，例如：

   - properties文件中这样的配置：name=jack
   - yaml文件中需要这样配置：name: jack

3. YAML用换行+空格来表示层级关系。注意不能使用tab，必须是空格，空格数量无要求，大部分建议2个或4个空格。例如：

   - properties文件中这样的配置：myapp.name=mall

   - yaml文件中就需要这样配置：

     ```yaml
     myapp:
       name: mall
     ```

4. 同级元素左对齐。例如：

   - properties文件中有这样的配置：

     ```properties
     myapp.name=mall
     
     myapp.count=10
     ```

   - yaml文件中就应该这样配置：

     ```yaml
     myapp:
       name: mall
       count: 10
     ```

5. 键必须是唯一的：在一个映射中，键必须是唯一的。
6. 注释：使用#进行注释。
7. 大小写敏感

## YAML的使用小细节 

1. 第一：普通文本也可以使用单引号或双引号括起来：（当然普通文本也可以不使用单引号和双引号括起来。）
   - 单引号括起来：单引号内所有的内容都被当做普通文本，不转义（例如字符串中有\n，则\n被当做普通的字符串）
   - 双引号括起来：双引号中有 \n 则会被转义为换行符
2. 第二：保留文本格式
   -   将文本写到这个符号的下层，会自动保留格式。
3. 第三：文档切割
   - 这个符号下面的配置可以认为是一个独立的yaml文件。便于庞大文件的阅读。
