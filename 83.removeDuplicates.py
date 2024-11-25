class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def deleteDuplicates(head):
    dummy = head
    while head and head.next:
        if head.val == head.next.val:
            head.next = head.next.next # next to next node
        else:
            head = head.next

    return dummy
# Test code
# n1 = ListNode(1)
# n2 = ListNode(1)
# n3 = ListNode(2)
# n4 = ListNode(3)
# n5 = ListNode(3)
# n1.next = n2
# n2.next = n3
# n3.next = n4
# n4.next = n5

# deleteDuplicates(n1)
# print(n1.val, n1.next.val, n1.next.next.val, n1.next.next.next.val)