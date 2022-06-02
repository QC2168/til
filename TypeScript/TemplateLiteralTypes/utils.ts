namespace TemplateLiteral {
    // 每个字符转为大写形式
    type Name = '_island'
    type UpperNameType = Uppercase<Name>
    // type UpperName = "_ISLAND"

    // 每个字段转为小写形式
    type Area='BEIJING'
    type LowercaseArea=Lowercase<Area>
    // type LowercaseArea = "beijing"

    // Capitalize 将字符串第一个字段转为大写
    type Phrase='hello world'
    type Greeting=Capitalize<Phrase>

    // Uncapitalize 将字符串第一个字段转为小写
    type UppPhrase='HELLO WORLD'
    type UncomfortableGreeting = Uncapitalize<UppPhrase>;   
    // type UncomfortableGreeting = "hELLO WORLD"
}