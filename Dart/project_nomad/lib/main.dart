import 'dart:io';

import 'package:flutter/material.dart';

void main() {
  runApp(App());
}

class Player {
  String name = 'nico';

  Player({required this.name});
}

void main() {
  var nico = Player(name: "potato"); // constructor 종류 2) named parameter
  reunApp(App());
}

// flutter SDK 에 있는 3개의 core widget 중에 하나를 상속 extend 받아야함.
// 상속을 받게 된 이후로는 이 class 는 widget 이 됨.
// StatelessWidget (오직 화면에 띄워주는 역할만 하는 것) 을 상속받으면 우리는 build 라고 불리는 메소드를 구현해야만함.
// ( 모든 Widget 은 build 메소드를 구현해야함. )
// ( 이 build 메소드는 flutter 가 실행하게 될건데, build 메소드가 뭘 return 하던지 그걸 화면에서 보여주게 될 것임.)
// (build 메소드는 우리의 Widget 의 UI 를 만드는 것. )
class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    // 이 annotation 은  flutter에 관한 건 아니고 dart 프로그래밍 언어에 관한 것.
    // 이것이 의미하는 건 부모 class 에 이미 있는 메소드를 override 한다는 것.
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text(
              'Hello flutter!'), // constructor 종류 1 ) positional parameter constructor (argument 의 위치가 중요.)
        ),
        body: Center(
          child: Text('Hello World!'),
        ),
      ),
    );
    // 우리가 어떤 family 스타일을 사용할지를 flutter 한테 말해주는 것.
  }
}
// 이 앱은 runApp 에 들어가는 widget 으로 즉 이 것이 우리 앱의 root 이라는 것.
// 모든 화면과 버튼 등등의 모든 것들이 App Widget 으로부터 올 것임.
// 앱의 root Widget 은 두개의 옵션 중 하나를 return 해야함.
// 하나는 material 앱을 return 하는 것. 다른 하나는 cupertino 앱을 return 하는 것.
// material 과 cupertino 는 각각 구글과 애플의 디자인 시스템임.
// Flutter 은 google 이 만든것이라. 기본적으로 material 스타일이 더 좋음.



// Flutter 의 규칙 중 하나 = 화면이 scaffold 라고 하는 걸 가져야 함. 
// 모바일 앱의 모든 화면은 scaffold 가 필요함. scaffold 는 navigation bar 를 구현할 수 있게 해주고 
// bottom tab bar 나 상단 버튼, 화면 중앙 정렬 등 이런것들을 해줌. 
// ⭐️모든 class 가 끝날때마다 , 를 찍어줘야함. 그럼으로서 VSC 가 정렬및 설명을 도와줌. 