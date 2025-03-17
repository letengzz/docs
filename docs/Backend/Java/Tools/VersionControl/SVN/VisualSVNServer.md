# VisualSVN Server 配置和使用

启动VisualSVN Server Manager

![image-20230706141833814](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092214501.png)

## 新建仓库

1. 在Repositories上右击→选择Create New Repository(或选择新建→Repository…)：

   ![image-20230706142238498](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092214651.png)

   ![image-20230706142346205](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216496.png)

2. 选择常规FSFS存储库，点击【下一步】继续：

   ![image-20230706142728726](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216258.png)

3. 填写仓库名后(仓库名可以随便取)，点击【下一步】继续：

   ![image-20230706142902568](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216001.png)

4. 第一个选择项是创建一个空的仓库，第二个选择项是创建一个仓库，并在仓库下面创建trunk、branches、tags三个文件夹。这里选择第一个选项，然后点击【下一步】继续：

   ![image-20230706142936458](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216310.png)

5. 保留默认设置，然后点击【Create】继续：

   ![image-20230706143104827](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216779.png)

6. 点击【Finish】完成仓库的创建：

   ![image-20230706143231258](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216807.png)

7. 仓库testRepo已创建成功：

   ![image-20230706143308664](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216719.png)

## 添加用户

1. 右击Users，选择Create User…(或选择新建→User…)：

   ![image-20230706144106399](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216586.png)

   ![image-20230706144144275](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216621.png)

2. 输入用户名和密码，点击【OK】继续即可：

   ![image-20230706144259006](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216649.png)

3. 新用户已创建完成：

   ![image-20230706144328200](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216534.png)

## 创建组

1. 右击Groups，选择Create Group…(或选择新建→Group…)：

   ![image-20230706144504416](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216281.png)

   ![image-20230706144606789](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216545.png)

2. 填写组名后，点击【Add】添加用户：

   ![image-20230706144702326](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216285.png)

3. 选择用户后，点击【OK】继续：

   ![image-20230706144736205](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216544.png)

4. 用户添加完成后，点击【OK】

   ![image-20230706144810928](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092216875.png)

## 设置权限

1. 在对应仓库右击，选择Properties…

   ![image-20230706144901561](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092215466.png)

2. 进行用户权限的配置。Everyone的权限为Read/Write，太高了，建议将Everyone的权限修改为No Access：

   ![image-20230706145010230](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092215394.png)

   ![image-20230706145032372](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092215418.png)

3. 其他用户权限配置，点击【Add】添加上文新建的组Rui：

   ![image-20230706145246307](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092215946.png)

4. 将组Rui的权限设置为Read/Wtite。然后点击【确定】：

   ![image-20230706145317572](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092215810.png)

5. 可以在仓库下再创建多个项目文件夹，然后对每个文件夹进行权限控制

   ![image-20230706145353536](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092215968.png)

   ![image-20230706145441382](https://fastly.jsdelivr.net/gh/LetengZzz/img/java/tools/202412092215365.png)
