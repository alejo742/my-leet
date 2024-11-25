class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeElements(head, val):
    final = ListNode(0, head)
    dummy = final

    while dummy:
        while dummy.next and dummy.next.val == val:
            dummy.next = dummy.next.next
        dummy = dummy.next
    
    return final.next