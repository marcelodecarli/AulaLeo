var TypeAccount;
(function (TypeAccount) {
    TypeAccount["ADMIN"] = "Administrator";
    TypeAccount["NORMAL"] = "Normal User";
})(TypeAccount || (TypeAccount = {}));
let cadastre = {
    id: 7854,
    name: "Marcelo",
    email: "sl_marcelo@hotmail.com",
    password: "marcelo123",
    role: "Developer"
};
let dataPerson = [];
dataPerson.push(cadastre);
let dataUsers = [];
let userAdmin = {
    id: 7854,
    name: "Marcelo",
    email: "sl_marcelo@hotmail.com",
    password: "marcelo123",
    role: "Developer",
    account: TypeAccount.ADMIN,
    permission: true
};
let userNormal = {
    id: 7854,
    name: "Brenda",
    email: "brenda@hotmail.com",
    password: "brenda123",
    role: "Teacher",
    account: TypeAccount.NORMAL,
    permission: true
};
dataUsers.push(userAdmin);
dataUsers.push(userNormal);
console.log(dataPerson);
console.log(dataUsers);
//# sourceMappingURL=index.js.map