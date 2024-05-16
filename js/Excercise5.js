let studentGrade = 110
let definedGrade = [100, 80, 60, 40]
var text = 'Your grade is: '

if (studentGrade >= definedGrade [1] && studentGrade <= definedGrade[0]) {
    console.log(text, 'A')
} else if (studentGrade >= definedGrade[2] && studentGrade < 80) {
    console.log(text, 'B')
} else if (studentGrade >= definedGrade[3] && studentGrade < 60) {
    console.log(text, 'C')
} else if (studentGrade < definedGrade[3] && studentGrade >= 0) {
    console.log('No grade :(')
} else {
    console.log('Enter a grade between 0 and 100')
}