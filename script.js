function criarElemento(){
  const container = document.getElementById('campos');

  const novoElemento = document.createElement('div');
  novoElemento.style.marginBottom = '10px';
 

  novoElemento.innerHTML = `<input type="text" name="empresa" placeholder="Nome da empresa" required>
                            <input type="text" name="cargo" placeholder="Cargo" required>
                            <button type="button" onclick="removeelemento(this)">Remover</button>
  `;
  

  container.appendChild(novoElemento);

}
function removeelemento(botao){
  botao.parentElement.remove();
}