let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
       
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}


// #1
function nameOfA (obj) {
    console.log(`Class name: ${obj.name}`)
}
// nameOfA(classObj)

// #2
function nameOfTeacher() {
    console.log(`Name of the teacher: ${classObj.teacherName}`)
}
// nameOfTeacher()

// #3
function nameOfStudents(obj){
    obj.students.map(student => {
        console.log(student.name)
    })
}
// nameOfStudents(classObj)

// #4
function idOfStudent() {
    classObj.students.map(student => {
        console.log(student.id)
    })
}
// idOfStudent()

// #5
function subOfStudent(std){
   let student = classObj.students.find(student => student.name === std)
//    console.log(student)

   if(student){
    student.marks.map(mark => (
       console.log( mark.subject)
    ))
   }
   else{
    console.log("Student not found")
   }
}
// subOfStudent("Ravi")

// #6 
function markOfStudent(std){
    let student = classObj.students.find(student =>student.name === std)
    console.log(student)
    if(student){
      return  student.marks.map(score => (
            (score.mark)
        ))
    }
}
// console.log(markOfStudent("Ravi"))

// #7 
function avgOfStudent(std) {
    let name = markOfStudent(std)
    let sum = name.reduce((acc,curr) => acc+curr, 0)
   
    let avg = sum / name.length
    console.log(avg)

}
// avgOfStudent("Aju")

// #8
function totalOfStudent(std) {
    let name = markOfStudent(std)
    console.log(name)
    let sum = name.reduce((acc, curr) => acc + curr, 0)
    console.log(sum)
}
// totalOfStudent("Binu")

// #9
function subMark(sub) {
    // let score =  classObj.students.map(student => {
    //     let markOver = student.marks.find(mark => mark.subject == sub)
        
    //     return markOver.mark
    // })
    // let total = score.reduce((acc, curr) => acc + curr, 0)

    let total = totalScoreOfSubject("Computer")
    

    let avg = total/ 3
    console.log("Average of Score", avg)
}
subMark("Computer")


// 10
function totalScoreOfSubject(sub) {
    let score = classObj.students.map(student => {
      let markOver =  student.marks.find(subj => subj.subject == sub)
      return markOver.mark
    })
    let total = score.reduce((acc, curr) => acc + curr, 0)
    
    // console.log("Total Score :", total)
    return total
}
console.log("total score : ",totalScoreOfSubject("Computer"))

// 11
function topperOfSubject(sub) {

    let topper
    let maxScore = 0

    classObj.students.forEach(student => {
        let markObj = student.marks.find(mark => mark.subject === sub)

        // console.log(markObj)
        // console.log(student.name)

        if(markObj && markObj.mark > maxScore) {
            maxScore = markObj.mark
            topper = student.name
        }
    })
    if(topper) {
        console.log(`Top student in ${sub} : ${topper}`)
    }
}
topperOfSubject("Computer")