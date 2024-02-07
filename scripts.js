const toggleButton = document.getElementById('toggleButton');
const statusDisplay = document.getElementById('status');

let isOn = false;

toggleButton.addEventListener('click', () => {
  isOn = !isOn;
  if (isOn) {
    toggleButton.textContent = 'Desligar';
    statusDisplay.textContent = 'Status: Ligado';
    // Adicione aqui qualquer ação que você deseja realizar quando o botão está ligado
  } else {
    toggleButton.textContent = 'Ligar';
    statusDisplay.textContent = 'Status: Desligado';
    // Adicione aqui qualquer ação que você deseja realizar quando o botão está desligado
  }
});
