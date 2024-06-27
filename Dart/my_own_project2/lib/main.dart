import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        backgroundColor: Color.fromRGBO(89, 116, 69, 1),
        body: Column(
          children: [
            SizedBox(
              height: 70,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  '  의 림 지 ⛰️ UIRIMJI',
                  style: TextStyle(
                    color: Color.fromRGBO(231, 240, 220, 1),
                    fontSize: 25,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  'Stay at Peace with Nature',
                  style: TextStyle(
                      color: Color.fromRGBO(231, 240, 220, 1),
                      fontSize: 10,
                      fontWeight: FontWeight.normal),
                ),
              ],
            ),
            SizedBox(
              height: 23,
            ),
            SizedBox(
              height: 400,
              width: double.infinity, // 가로 폭을 화면 너비로 설정
              child: Stack(
                children: [
                  // Background Image (mountain)
                  Positioned.fill(
                    child: Image(
                      image: AssetImage('assets/images/mountain.jpg'),
                      fit: BoxFit.cover,
                    ),
                  ),
                  // Foreground Image (tree)
                  Positioned(
                    bottom: 0,
                    left: 200,
                    right: 0,
                    // height: 100,
                    child: Image(
                      image: AssetImage('assets/images/tree.png'),
                      fit: BoxFit.cover,
                    ),
                  ),
                  Positioned(
                    bottom: 100,
                    left: 0,
                    right: 150,
                    // height: 100,
                    child: Image(
                      image: AssetImage('assets/images/tree.png'),
                      fit: BoxFit.cover,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
