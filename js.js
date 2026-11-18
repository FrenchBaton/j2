const euro = 0.91 
const mb = 1024 

ex(parseInt(prompt("Введите задание\n№: ")))

function ex(n){
    switch(n){
        case 1:
            do{
                num = parseInt(prompt("Введите длину стороны квадрата: "));
            } while(!(num > 0))
            alert("P = " +(num*4))
            break
            
        case 2:
            do{
                num = parseInt(prompt("Введите r окружности: "));
            } while(!(num > 0))
            alert("S = " + (+3.14*(num*num)))
            break
        
        case 3:
            do{
                num1 = parseInt(prompt("расстояние в км между двумя городами: "));
                num2 = parseInt(prompt("за сколько часов хотите добраться: "));
            } while(!(num1 > 0 && num2 > 0))
            alert("V = " + (num1/num2))
            break
        
        case 4:
            do{
                num = parseInt(prompt("Введите \$: "));
            } while(!(num > 0))
            alert("EURO = " + (num*euro))
            break

        case 5:
            do{
                num = parseInt(prompt("Введите объем флешки в Гб: "));
            } while(!(num > 0))
            alert("Столько файлов размером в 820 Мб помещается на флешку = " + ((num*mb)/820) + "mb")
            break
        
        case 6:
            do{
                num = parseInt(prompt("Введите пятизначное число: "));
            } while(!(num > 9999 && num2 < 100000))
            num = String(num)
            num1 = num[0]
            num2 = num.slice(1)
            alert(num1 + num2)
            break
        
        case 7:
            do{
                num = parseInt(prompt("$250 + 10%\nОбщая сумма продаж за месяц: "));
            } while(!(num > 0))
            alert("Зарплата = " + (250+((num/100)*10)))
            break

        default:
            break
    }
    


}