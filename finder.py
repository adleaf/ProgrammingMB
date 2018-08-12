# Prgram to find a character in a string
    
look = "abcdefghijklmno"
find = "a"

found = False

for i in range(len(look)):
    if (find == look[i]):
        found = True
        
if (found):
    print "Found it"
else:
    print "Doesn't exist"