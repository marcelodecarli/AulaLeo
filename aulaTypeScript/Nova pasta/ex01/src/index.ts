type Person = {
    id: number,
    name: string,
    email: string,
    password: string,
    role: string
}

enum TypeAccount {
    ADMIN = 'Administrator',
    NORMAL = 'Normal User'
}
type AdminAccount = {
    account: TypeAccount.ADMIN,
    permission: boolean
}
type NormalAccount = {
    account: TypeAccount.NORMAL,
    permission: boolean
}

let cadastre: Person = {
    id: 7854,
    name: "Marcelo",
    email: "sl_marcelo@hotmail.com",
    password: "marcelo123",
    role: "Developer"
}

let dataPerson: Person[] = []

dataPerson.push(cadastre)

type UserInfoAdmin = Person & AdminAccount
type UserInfoNormal = Person & NormalAccount


let dataUsers: UserInfoAdmin[] & UserInfoNormal[] = []

let userAdmin: UserInfoAdmin = {
    id: 7854,
    name: "Marcelo",
    email: "sl_marcelo@hotmail.com",
    password: "marcelo123",
    role: "Developer",
    account: TypeAccount.ADMIN,
    permission: true
}

let userNormal: UserInfoNormal = {
    id: 7854,
    name: "Brenda",
    email: "brenda@hotmail.com",
    password: "brenda123",
    role: "Teacher",
    account: TypeAccount.NORMAL,
    permission: true
}

dataUsers.push(userAdmin)
dataUsers.push(userNormal)



console.log(dataPerson)
console.log(dataUsers)




// let admin: AdminAccount = {
//     account: TypeAccount.ADMIN,
//     permission: true
// }

// let userAccount: NormalAccount = {
//     permission: false
// }

// let cadastre: Person = {
//     id: 7854,
//     name: "Marcelo",
//     email: "sl_marcelo@hotmail.com",
//     password: "marcelo123",
//     role: "Developer"
// }

// console.log(`
// ================== Administrator ==================

//     Number account: ${admin.account}
//     Permission this account: ${admin.permission}

// ===================================================

// ==================== Employee =====================

//     Number account: ${userAccount.account}
//     Permission this account: ${userAccount.permission}

// ===================================================

// ================= User Cadastrate =================

//     Id User: ${cadastre.id}
//     Name User: ${cadastre.name}
//     Email User: ${cadastre.email}
//     Password User: ${cadastre.password}
//     Role User: ${cadastre.role}

// ===================================================

// `)