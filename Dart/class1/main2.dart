abstract class Human {
  void walk();
}

enum Team { red, blue }

enum XPLevel { beginner, medium, pro }

class Player extends Human { 
  String name;
  XPLevel xp;
  Team team;

  Player({required this.name, required this.xp, required this.team});

  void walk () {
    print('Im walking')
  }


  void sayHello() {
      print("Hi my name is $name");
    }
  }

class Coach extends Human {
  void walk() {
    print('the coach is walking');
  }
}


void main() {
  var nico = Player(name: 'nico', XPLevel.medium, team: Team.red)
    ..name = 'las'
    ..xp = XPLevel.pro
    ..team = Team.blue;
}
// 여기서 nico 를 반복하는 것을 피하기 위해 Cascade operator 를 사용할 수 있음. 
// ; 을 없애고 nico 자리에 .. 을 넣어주면 이전과 같은 작동을 하게 됨. 

