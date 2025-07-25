# 자료형 

# 숫자형 
print(5) #여기서 print 라는 함수를 사용함. 
print(-10) #음수
print(3.14) #실수
print(5+3) #연산
print(2*3) #곱셈
print(2+(3*4)) #좀 더 복잡한 연산 


# 문자열 자료형 
print('풍선') # 작은 따옴표나 큰 따옴표 모두 사용 가능. 
print("나비") 
print('ㅋㅋㅋㅋㅋㅋㅋ')
print('ㅋ'*9) # 이렇게도 표현 가능. 


# Boolean 자료형 : 참 / 거짓 
print(5 > 10)
print(5 < 10)
print(True)
print(False)
print(not True)


# 변수 
animal = "강아지"

station = "신도림"
print( station + "행 열차가 들어오고 있습니다.")

# 연산 
print(1+1) # 2
print(3-2) # 1
print(5*2) # 10 
print(6/3) # 2

print(2**3) # 2ˆ3 = 8
print(5%3) # 나머지 구하기 
print(10%3) # 1
print(5//3) # 1
print(10//3) # 3

print(10 > 3) # True 
print(4 >= 7) # False 
print(10 <3) # False 
print(5 <= 5) # True

print(1 != 3) # True 
print(not(1 != 3)) # False 

print((3>0) and (3 < 5)) # True 
print((3 >0) & (3 <5)) # True 

print(5 > 4 > 3) # True 
print(5 > 4 > 7) # False 

# About +=, *=, /=, -= 
print(2 + 3 * 4) #14
print((2+3)* 4) #20 
number = 2 + 3 * 4
print(number)
number +=2 
print(number)
number *=2 
print(number)
number /=2
print(number)
number -=2 
print(number)

number %= 2 #나머지 구하는것
print(number)


# abs 는 절대값을 구하는 것. 
print(abs(-5)) #5
# pow (4,2) 는 4를 2번 곱한 값이 나옴. 
print(pow(4,2)) #16
# max 최대값을 나타냄 
print(max(5,12)) #12 
# min 최소값을 나타냄
print(min(5,12)) #5 
# round 반올림
print(round(3.14)) #3
print(round(4.99)) #5 
#floor 내림 ceil 올림 sqrt 제곱근 


# python 에서 제공하는 math 라이브러리 
from math import * # python 에서 이용하는 math 라이브러리를 이용하겠다는 이야기. 
print(floor(4.99)) # 내림, 4 
print(ceil(3.14)) # 올림, 4
print(sqrt(16)) # 제곱근, 4 


#랜덤 함수 - 즉 난수 무작위로 숫자를 뽑아주는 것. 
from random import * 

print(random())

#	random() → 0.0 이상 1.0 미만의 실수
#	random() * 10 → 0.0 이상 10.0 미만의 실수
#	int(...) → 소수점 버리고 0 ~ 9 사이의 정수가 나와
 
print(random()) # 0.0 ~1.0 미만의 임의의 값 생성 
print(random() * 10) # 0.0 ~ 10.0  미만의 임의의 값 생성 
print(int(random() * 10)) # 0 ~ 10 미만의 임의의 값 생성 (정수)
print(int(random() * 10) +1) # 1 ~ 10 미만의 임의의 값 생성 (정수)

print(randrange(1,46)) # 1 ˜45 미만의 임의의 값 생성 
print(randint(1,45)) # 1˜45 이하의 임의의 값 생성

#quiz 
from random import * 
date = randint(4,28)
print("오프라인 스터디 모임 날짜는 매월 " + str(date) + " 일로 선정되었습니다." )
# 정리 
# int(random() * 10)  /  0 ~ 9 / 10 미만 (0 포함, 10 제외)
# int(random() * 10) + 1 / 1 ~ 10 / 1 이상 11 미만 (10 포함)
# randint(1, 10) / 1 ~ 10 / 1 이상 10 이하 (정수만)
# int(random() * 10) +1  이경우에는 앞의 숫자가 0이 아니면 뒷자리 숫자까지 영향을 주기 때문에 실수하기 쉽다. 그래서 randint 를 쓰는게 더 안전. 

# + 추가 정보 
# uniform(1,5) -> float 실수 로서 1.0 이상 5.0 이하의  실수중 무작위로 하나를 골라줌. 
print(uniform(1,5))
# 실수 = float / 정수 = int



# 문자열 
sentence = '나는 소년입니다.'
print(sentence)
sentence2 = "나는 소년입니다."
print(sentence2)
sentence3 = """
나는 소년이고, 
파이썬은 쉬워요
"""
print(sentence3) #4줄이 찍히는걸 볼 수 있음


# 슬라이싱 - 
jumin = "990120-1234567"

print("성별 :" + jumin[7]) # 7번째 있는 숫자? 를 표시 
print("연 :" + jumin[0:2]) # 0 부터 2 직전까지 (0,1)
print("월 :" + jumin[2:4]) 
print("일 :" + jumin[4:6]) # 다시 쉽게 말하면 4번째 숫자 부터 5번 숫자까지. 

print("생년월일 :" + jumin[:6]) # 처음부터 6 직전까지
print("뒤 7자리 :" + jumin[7:]) # 7 부터 끝까지 
print("뒤 7자리 (뒤에서부터)" + jumin[-7:]) # 맨 뒤에서 7번째부터 끝까지. 
