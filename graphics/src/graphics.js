// Função para criar o dataset comum
function createDataset(data) {
  return {
    label: 'Vendas',
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    borderWidth: 2,
    data: data,
  };
}

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
const salesData = [65, 59, 80, 81, 56, 55];

// Configurações e objetos de gráfico
const chartConfigs = [
  {
    type: 'pie',
    data: {
      labels: months,
      datasets: [createDataset(salesData)],
    },
  },
  {
    type: 'bar',
    data: {
      labels: months,
      datasets: [createDataset(salesData)],
    },
  },
  {
    type: 'polarArea',
    data: {
      labels: months,
      datasets: [createDataset(salesData)]
    },  
  },
  {
    type: 'doughnut',
    data: {
      labels: months,
      datasets: [createDataset(salesData)],
    },
  },
  {
    type: 'line',
    data: {
      labels: months,
      datasets: [createDataset(salesData)],
    },
  },
  {
    type: 'bar',
    data: {
      labels: months,
      datasets: [createDataset(salesData)],
    },
    options: {
      indexAxis: 'y',
    },
  },
];

// Criar os gráficos
const chartElements = [
  'chart_pie',
  'chart_bar',
  'chart_polar_area',
  'chart_doughnut',
  'chart_line',
  'chart_bar_horizontal',
];

chartElements.forEach((elementId, index) => {
  new Chart(document.getElementById(elementId), chartConfigs[index]);
});