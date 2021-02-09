var receiverNumber = document.getElementById('number_1')
var list = document.querySelector('select#list')
var numberOne = parseInt(number_1.value)
var result = document.getElementById('result')
var amount =  []

function clic(){

    if (isNumber(receiverNumber.value) && !inList(receiverNumber.value, amount)){
        amount.push(Number(receiverNumber.value))
        var item =  document.createElement('option')
        item.text =  `Valor ${receiverNumber.value} adicionado.`
        list.appendChild(item)

    } else {
        alert('Valor ja encontrado na lista')
      }
        receiverNumber.value = ''
        receiverNumber.focus()
}

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        console.log(`${n}`)
        return true
    } else{
        return false
    }
    
}

function inList(n, l){
  if(l.indexOf(Number(n)) != -1){
      return true
    }else{
        return false
    }

    
}

function finish(){
    if (amount.length == 0){
        alert('Adicione valores antes de clicar no botão finalizar')

    }else{
        var entire = amount.length
        var more = amount[0]
        var smalle = amount[0]
        for(var position in amount)
            if (amount[position] > more){
                more = amount[position]
            if (amount[position] < smalle)
                smalle = amount[position]    
            }

        result.innerHTML = ''
        result.innerHTML += `<h4>Temos ${entire} números cadastrados</h4>`
        result.innerHTML += `<h4>O maior valor informado foi ${more}</h4>`
        result.innerHTML += `<h4>O menor valor informado foi ${smalle}</h4>`   
    }

}

