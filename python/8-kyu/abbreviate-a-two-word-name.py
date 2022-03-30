# Abbreviate a Two Word Name

def abbrevName(name):
    first, last = name.upper().split(' ')
    return first[0] + '.' + last[0]
