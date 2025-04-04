list1=[]
list2=[]
n=int(input("\n Enter no of elements for list1: "))
x=int(input("\n Enter no of elements for list2: "))
for i in range (0,n):
    a=int(input("\n enter the elements"))
    list1.append(a)
for i in range(0,x):
    b=int(input("\n enter the elements: "))
    list2.append(b)
    common = False
for i in list1:
    if i in list2:
        common = True
        break
print("True" if common else "false")

