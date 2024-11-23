"""
    Input: box = [["#","#","*",".","*","."],
              ["#","#","#","*",".","."],
              ["#","#","#",".","#","."]]
    Output: [[".","#","#"],
            [".","#","#"],
            ["#","#","*"],
            ["#","*","."],
            ["#",".","*"],
            ["#",".","."]]
"""
def rotateTheBox(box):
    rotatedBox = [] # what to return

    # first, reorganize the current box as if it was turned around
    for row in box:
        objects = 0 # counter of objects in the row
        for cell in range(len(row)):
            if row[cell] == "#":
                objects += 1
            elif row[cell] == ".":
                row[cell] = "#" # replace empty space with object
                row[cell-objects] = "." # replace first object cell with empty, since the object rolled down
            else: # it is an obstacle "*"
                objects = 0

    # then, rewrite the organized box as if turned around, to match output format
    for cell in range(len(box[0])): # taking a sample row for length
        row_to_add = []
        for row in range(len(box)-1, -1, -1): # backwards since the box is turned rightwards
            row_to_add.append(box[row][cell]) # same element of each row
        rotatedBox.append(row_to_add)

    return rotatedBox

print(rotateTheBox([["#","#","*",".","*","."], ["#","#","#","*",".","."], ["#","#","#",".","#","."]]))