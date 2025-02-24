function calculo(val1, val2) {
  valor_compra = parseInt(val1);
  valor_entrada = val2;

  var taxas = [4.132,4.888, 6.497, 7.504, 8.485, 9.788, 10.831, 12.696, 12.797, 14.08, 14.873, 15.584, 16.961, 18.818, 19.16, 18.928, 19.765, 21.878];  ;

  let taxa_debito = 1.112;
  var valor_parcelas = [];
  var valor_total = [];

  var valor = valor_compra - valor_entrada;

  //parte da taxa de débito
  let percentual_debito = (taxa_debito * valor) / 100;
  let debito_total = valor + percentual_debito;
  
  var i = 0;
  while (taxas[i]) {
    
    let percentual = (taxas[i] * valor) / 100
    valor_total.push(valor + percentual); //Populando os valores totais
    valor_parcelas.push((valor + percentual) / (i+1)); //Populando os valores das parcelas
    i++;
  }

  var table = "";
  for(var i in valor_parcelas){
    let parcelas = (parseInt(i) + 1);
    table += "<tr>" + "<td>" + parcelas + " x" + "</td>" + "<td>" + valor_parcelas[i].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td>" + "<td>" + 
    valor_total[i].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td></tr>";
  }

  debito_linha = "<tr>" + "<td>" + "Débito " + "</td>" + "<td>" + debito_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td>" + "<td>" + 
  debito_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td></tr>";

  document.getElementById("exibir").innerHTML = debito_linha + table;

}

var text = document.getElementById("val_compra");
var entrada = document.getElementById("val_entrada");

text.addEventListener("keyup", function () {
  var val_compra = this.value;
  var val_entrada = document.getElementById("val_entrada").innerHTML
  calculo(val_compra, val_entrada);
})

entrada.addEventListener("keyup", function () {
  var val_compra = text.value
  val_entrada = this.value;
  calculo(val_compra, val_entrada);
})

function keyPressed(evt){
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
  var str = keyPressed(evt);
  
  if(str == ',' | str == '.')
      alert("Por favor apague e digite apenas números");
};