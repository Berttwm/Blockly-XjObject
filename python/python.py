def xj_op1(xjobject) :
 if(xjobject[1] < 100):
     print("score too low, adding 10 to score...")
     xjobject[1] += 10
 else:
     print("score is good")
 return xjobject;

def xj_op2(xjobject) :
 if(xjobject[0] == "a"):
     xjobject[1] *= 2
 return xjobject;


print(xj_op2((xj_op1((['a',34,['b']])))))