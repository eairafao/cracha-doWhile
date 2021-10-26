// Dicionario das informações do crachá, aqui você pode substiuir para criar seu Crachá.
const linksSocialMedia = {
  github: 'eairafao',
  youtube: 'channel/UC_gmlxJ6vYcmslYpxveEvFQ',
  facebook: 'profile.php?id=100009932283431',
  instagram: 'lop1z',
  twitter: 'eairafao'
}

// Função para ajudar nas mudanças do cracha: PARA CADA "li" dentro de socialLinks.FILHOS (socialLinks = UL) PEGA OS ATRIBUTOS DAS CLASSES e "SETA" os valores de LinksSocialMedia
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    // alert(li.children[0].href) //entrando no primeiro filho da li
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

// Função para pegar API de perfil do github
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //Fetch = pega a resposta. Then = se o Fetch deu certo o retorno, ele passa pra promessa. então ele vai fazer alguma coisa
  // response = peguei oq o fetch recebeu e transformei em JSON
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('userName').textContent = data.name
      document.getElementById('userLink').href = data.html_url
      document.getElementById('userImage').src = data.avatar_url
      document.getElementById('userNick').textContent = data.login
    })
}

getGitHubProfileInfos()

//ARROW FUNCTIONS é uma função anonima
//function nomeDaFuncao(argumentos){
//code
//}

//argumento => {

//}
