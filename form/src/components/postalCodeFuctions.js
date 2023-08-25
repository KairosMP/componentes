const cepInput = document.querySelector('#postal_code');

cepInput.addEventListener('blur', () => {
  const cep = cepInput.value.replace(/\D/g, '');

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(data => {
    if (!data.erro) {
      document.querySelector('#city').value = data.localidade;
      document.querySelector('#public_place').value = data.logradouro;
      document.querySelector('#neighborhood').value = data.bairro;
      document.querySelector('#state').value = data.uf;

      const capitals = {
        'AC': 'Rio Branco',
        'AL': 'Maceió',
        'AP': 'Macapá',
        'AM': 'Manaus',
        'BA': 'Salvador',
        'CE': 'Fortaleza',
        'DF': 'Brasília',
        'ES': 'Vitória',
        'GO': 'Goiânia',
        'MA': 'São Luís',
        'MT': 'Cuiabá',
        'MS': 'Campo Grande',
        'MG': 'Belo Horizonte',
        'PA': 'Belém',
        'PB': 'João Pessoa',
        'PR': 'Curitiba',
        'PE': 'Recife',
        'PI': 'Teresina',
        'RJ': 'Rio de Janeiro',
        'RN': 'Natal',
        'RS': 'Porto Alegre',
        'RO': 'Porto Velho',
        'RR': 'Boa Vista',
        'SC': 'Florianópolis',
        'SP': 'São Paulo',
        'SE': 'Aracaju',
        'TO': 'Palmas'
      };
      const capital = capitals[data.uf];
      if (capital) {
        document.querySelector('#state').value = `${data.uf} - ${capital}`;
      } else {
        document.querySelector('#state').value = data.uf;
      }
    } else {
      alert('CEP não encontrado.');
    }
  })
  .catch(error => {
    console.error('Ocorreu um erro na consulta ao CEP:', error);
  });
});