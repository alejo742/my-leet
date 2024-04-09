var countStudents = function(students, sandwiches) {
    let stuckCounter = 0
    while(stuckCounter < students.length) {
        if(students[0] !== undefined) {
            if(students[0] === sandwiches[0]) {
                sandwiches.shift()
                students.shift()
                stuckCounter = 0
            }
            else {
                students.push(students[0])
                students.shift()
                stuckCounter++
            }
        }
        else {
            return 0
        }
    }
    return students.length
};