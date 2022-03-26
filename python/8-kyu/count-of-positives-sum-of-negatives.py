# Count of positives / sum of negatives

def count_positives_sum_negatives(arr):
    if (len(arr) == 0):
        return []
    pos = 0
    neg = 0
    for num in arr:
        if num > 0:
            pos += 1
        elif num < 0:
            neg += num
    return [pos, neg]
