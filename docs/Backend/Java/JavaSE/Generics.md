# 泛型

> 自定义泛型

```java
class A<T>{
	private ArrayList<T> records;
}

interface B<T1,T2>{}

//泛型类不能是静态的
```

```java
//<T> 声明泛型
public <T> void method(T t){}

//泛型方法可以是静态的
```

```java
<? extends Person> ==> ? <= Person 
<? super Person> ==> ? >= Person
```

```java
实现Comparable<T>接口，重写compareTo(T t)方法  默认从小到大
Comparator<T>对象，重写compare(T o1,T o2)方法  默认从小到大
```

