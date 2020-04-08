//1
let a = {
    name: "Ivan",
    surName: "Ivanov",
}
let b = {
    name: "Petr",
    surName: "Petrov",
}
let c = {
    name: "Andrey",
    surName: "Andreev",
}

//2
a["age"] = 28
b["fatherName"] = "Petrovich"
c.sex = "male"

//3
let field = []
let k = 0
if ((typeof a.age) != (typeof b.age) || (typeof b.age) != (typeof c.age) || (typeof a.age) != (typeof c.age)) {
    field[k++] = "age"
}
if ((typeof a.name) != (typeof b.name) || (typeof b.name) != (typeof c.name) || (typeof a.name) != (typeof c.name)) {
    field[k++] = "name"
}
if ((typeof a.surName) != (typeof b.surName) || (typeof b.surName) != (typeof c.surName) || (typeof a.surName) != (typeof c.surName)) {
    field[k++] = "surName"
}
if ((typeof a.fatherName) != (typeof b.fatherName) || (typeof b.fatherName) != (typeof c.fatherName) || (typeof a.fatherName) != (typeof c.fatherName)) {
    field[k++] = "fatherName"
}
if ((typeof a.sex) != (typeof b.sex) || (typeof b.sex) != (typeof c.sex) || (typeof a.sex) != (typeof c.sex)) {
    field[k] = "sex"
}
for (let j in a) {
    for (let k = 0; k < field.length; k++){
        if (j === field[k])
        alert(`Необязательное поле в массиве а: ${j}`)
    }
}
for (j in b) {
    for (let k = 0; k < field.length; k++){
        if (j === field[k])
        alert(`Необязательное поле в массиве b: ${j}`)
    }
}
for (j in c) {
    for (let k = 0; k < field.length; k++){
        if (j === field[k])
        alert(`Необязательное поле в массиве c: ${j}`)
    }
}

//4
let persons = []
persons.push(a)
persons.push(b)
persons.push(c)
persons.push({name: "Igor", surName: "Sidorov",})

//5
for (let i in persons) {
    console.log(persons[i])
}

//6
for (let i in persons) {
    console.log(persons[i]["name"], persons[i].surName)
}

//7
for (let i in persons) {
    for (let n in persons[i])
    console.log(persons[i][n])
}

//8
for (let i in persons) {
    if ((typeof persons[i].fatherName) === "undefined") {
        persons[i].fullName = `${persons[i].name} ${persons[i].surName}`
    } else {
        persons[i].fullName = `${persons[i].name} ${persons[i].fatherName} ${persons[i].surName}`
    } 
    console.log(persons[i])
}

//9
let personsJson = JSON.stringify(persons)

//10
let d = `{"name":"Fedor","surName":"Fedorov","age":25}`
d = JSON.parse(d)
persons.push(d)

//11
var str = `<table border="1">`
for (let i in persons){
    str += `<tr><td>${persons[i].name}</td><td>${persons[i].surName}</td></tr>`
}
str += `</table>`
document.write(str)

//12
let table = `<table border="1">`
for (let i in persons){
    if ((i%2) === 1) {
        table += `<tr>\n`
    } else {
        table += `<tr bgcolor="red">\n`
    }
    for (let j in persons[i]) {
        table += `<td>${persons[i][j]}</td>\n`
    } table += `</tr>\n`
} table += `</table>\n`
document.write(table)

//13
let setKey = new Set()
let key = []
for (let i in persons) {
    for (let j in persons[i]) {
        setKey.add(j)
    }
}
key = [...setKey]
let table1 = `<table border="1">`
table +=`<tr>`
for (let i in key){
    table1 += `<th>${key[i]}</th>`
}
table += `</tr>`
for (let i in persons){
    table1 += `<tr>`
    for (let j in key) {
        if ((typeof persons[i][key[j]]) === "undefined") {
            table1 += `<td></td>`
        } else {
            table1 += `<td>${persons[i][key[j]]}</td>`
        }
    } table1 += `</tr>` 
}
table1 += `</table>`
document.write(table1)

//14
let body = {
    tagName : "body",
    tagProperty : "paired",
    subTags : [
        {
            tagName : "div",
            tagProperty : "paired",
            subTags : [
                {
                    tagName : "span",
                    tagProperty : "paired",
                    text : "Enter a data please:",
                },
                {
                    tagName : "br",
                },
                {
                    tagName : "input",
                    attrs : {
                        type : "text",
                        id : "name",
                    },
                },
                {
                    tagName : "input",
                    attrs : {
                        type : "text",
                        id : "surname",
                    },
                },
            ]
        },
        {
            tagName : "div",
            tagProperty : "paired",
            subTags : [
                {
                    tagName : "button",
                    tagProperty : "paired",
                    attrs : {
                        id : "ok"
                    },
                    text : "OK",
                },
                {
                    tagName : "button",
                    tagProperty : "paired",
                    attrs : {
                        id : "cancel"
                    },
                    text : "Cancel",
                },
            ]
        }
    ]
}


let str1 = ""
str1 += `<${body["tagName"]}`
if ("attrs" in body) {
    for (let i in body["attrs"]) {
        str += `${i} = "${body["attrs"][i]}"`
    }
}
str1 += `>\n`
if ("text" in body) {
    str1 += `${body["text"]}`
}
if ("subTags" in body) {
    for (let k in body["subTags"]) {
        str1 += `<${body["subTags"][k]["tagName"]}`
        if ("attrs" in body["subTags"][k]) {
            for (let j in body["subTags"][k]["attrs"]) {
                str1 += `${j} = "${body["subTags"][k]["attrs"][j]}"`
            }
        }
        str1 += `>\n`
        if ("text" in body["subTags"][k]) {
            str1 += `${body["subTags"][k]["text"]}`
        }
        if ("subTags" in body["subTags"][k]) {
            for (let q in body["subTags"][k]["subTags"]) {
               str1 += `<${body["subTags"][k]["subTags"][q]["tagName"]}`
               if ("attrs" in body["subTags"][k]["subTags"][q]) {
                   for (let p in body["subTags"][k]["subTags"][q]["attrs"]) {
                       str1 += ` ${p} = "${body["subTags"][k]["subTags"][q]["attrs"][p]}"`
                   }

               }
               str1 += `>\n`
               if ("text" in body["subTags"][k]["subTags"][q]) {
                   str1 += `${body["subTags"][k]["subTags"][q]["text"]}\n`
               }
               if ("tagProperty" in body["subTags"][k]["subTags"][q]) {
                str1 += `</${body["subTags"][k]["subTags"][q]["tagName"]}>\n`
               }
            }
        }
        if ("tagProperty" in body["subTags"][k]) {
            str1 += `</${body["subTags"][k]["tagName"]}>\n`
        }
    }
}
if ("tagProperty" in body) {
    str1 += `</${body["tagName"]}>`
}
console.log (str1)
document.write(str1)


