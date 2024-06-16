class Human {
  final String name;
  Human({required this.name});
  void sayhello() {
    print("Hi my name is $name");
  }
}

class Strong {
  final double strengthLevel = 1500.99;
}

// 생성자가 없는 class 만듬.
class QuickRunner {
  void runQuick() {
    print("ruuuuuuuun!");
  }
}

class Tall {
  final double height = 1.99;
}

enum Team { blue, red }

class Player with Strong, QuickRunner, Tall {
  final Team team;

  Player({
    required this.team,
  });

  @override
  void sayHello() {
    super.sayhello();
    print('and I play for ${team}');
  }
}

class Horse with Strong,QuickRunner, {}

class Kid with QuickRunner{}

void main() {
  var player = Player(team: Team.red, name: 'nico');
}
