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
    return(`Class name: ${obj.name}`)
}
console.log( nameOfA(classObj))

// #2
function nameOfTeacher() {
    // const name = nameOfA()
    return(`Name of the teacher: ${classObj.teacherName}`)
}
console.log(nameOfTeacher())

// #3
function nameOfStudents(obj){
    return obj.students.map(student => (student.name))
}
console.log("names are" ,nameOfStudents(classObj))

// #4
function idOfStudent() {
   return classObj.students.map(student => console.log(student.id))
}
idOfStudent()

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
    console.log("pg8",sum)
}
totalOfStudent("Binu")

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
        console.log(`Top student in ${sub} : ${topper} ${maxScore}`)
    }
}
topperOfSubject("Computer")

// 12
function lowerofSubject(sub) {
    let lower 
    let minScore = 100

    classObj.students.forEach(student => {
        let markObj = student.marks.find(mark => mark.subject === sub)

        if(markObj && markObj.mark < minScore) {
            minScore = markObj.mark
            lower = student.name
        }
    })
    if(lower) {
        console.log(`Lowest student in ${sub} : ${lower} ${minScore}`)
    }
}
lowerofSubject("Computer")

// 13
function totalTopper() {
    let topper
    let highestScore = 0

    classObj.students.forEach(student => {
        let total = student.marks.reduce((sum, curr) => sum + curr.mark, 0)
       

        if(total>highestScore){
            highestScore = total
            topper = student.name
        }
    })
    console.log(`Topper of the year ${topper} with ${highestScore} scores`)
}
totalTopper()

// 14
function lowerOftheYr() {
    let lower
    let lowerScore = Infinity

    classObj.students.forEach(student => {
        let total = student.marks.reduce((sum, curr) => sum + curr.mark, 0)

        if(total < lowerScore) {
            lowerScore = total
            lower = student.name
        }

    })
    console.log(`Lowest score of the year ${lowerScore} ${lower}`)
}
lowerOftheYr()

// 15
function AvgofSub(){
    let subjects = {} 

   classObj.students.forEach(student => {
        student.marks.forEach(({subject, mark}) => {
            if(!subjects[subject]) {
                subjects[subject] = {total: 0, count: 0}
            }
            subjects[subject].total += mark
            subjects[subject].count += 1
        })
   })
   
   let topSubject = ""
   let highestAvg = -1

   for(let subject in subjects) {
    let avg = subjects[subject].total / subjects[subject].count
    if(avg > highestAvg) {
        highestAvg = avg
        topSubject = subject
    }
   }
   console.log(`Subject with highest average: ${topSubject}, Average: ${highestAvg.toFixed(2)}`)

}
AvgofSub()

// 16
// function lowerOfAvgSub() {
//     let subjects = {}

//     classObj.students.forEach(student => {
//         student.marks.forEach(({subject, mark}) => {
//             if(!subjects[subject]) {
//                 subject[subject] = {total:0, count:0}
//             }
//             subjects[subject].total += mark
//             subjects[subject].count += 1
//         })
//     })

//     let topSubject = ""
//     let highestAvg = -1

//     for(let subject in subjects) {
//         let avg = subjects[subject].total / subjects[subjects].count
//         if(avg > highestAvg) {
//             highestAvg = avg
//             topSubject = subject
//         }
//     }
//     console.log(`Subject with highest average: ${topSubject}, Average: ${highestAvg.toFixed(2)}`)
// }
// lowerOfAvgSub()



