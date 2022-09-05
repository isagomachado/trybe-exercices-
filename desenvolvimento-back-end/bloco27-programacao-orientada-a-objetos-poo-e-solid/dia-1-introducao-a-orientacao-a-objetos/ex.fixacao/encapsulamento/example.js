var Person = /** @class */ (function () {
    function Person(name, height, weight, age) {
        this.name = name;
        this._weight = weight;
        this._age = age;
        this.height = height;
    }
    // esta sintaxe permite acessar o valor retornado via person.getWeight()
    Person.prototype.getWeight = function () {
        return this._weight;
    };
    Object.defineProperty(Person.prototype, "age", {
        // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
        get: function () {
            return this._age;
        },
        // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
        // mesmo que esteja ocorrendo uma validação internamente
        set: function (newValue) {
            if (newValue >= 0 && newValue < 200) {
                this._age = newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.birthday = function () {
        this._age += 1;
    };
    return Person;
}());
var p1 = new Person('Maria', 171, 58, 19);
var p2 = new Person('João', 175, 66, 18);
// Alteração direta de variável pública
p1.name = 'Mariah';
// Acesso direto a variável pública
console.log(p1.name);
// Acesso a método público que manipula atributo privado
console.log(p1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age);
// Acesso a método público que manipula atributo privado
p2.birthday();
console.log(p2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age);
// Leitura de atributo readonly
console.log(p1.height);
/*
Saída:
Mariah
58
18
19
17
171
*/ 
