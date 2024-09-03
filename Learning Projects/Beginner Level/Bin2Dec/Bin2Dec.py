#checking for only 0 and 1
def bin_check(bin):
    for digit in bin:
        if digit != "0" and digit != "1":
            return print("This is not a binary number")
        #print(digit)
    bin_dec(bin)

#converting binary to decimal (base 10)
def bin_dec(number):
    length = len(number)
    if length > 8:
        return print("This is longer than 8 digits")
    x = length - 1
    total = 0

    for val in number:
        if val == "1":
            dec_cal = 2 ** x
            #print("val : " + val)
            #print(dec_cal)
            x = x - 1
            total = total + int(dec_cal)
        else:
            dec_cal = 0
            x = x - 1
            total = total + int(dec_cal)
    return print(total)

binary = input("Give a binary number")
bin_check(binary)
