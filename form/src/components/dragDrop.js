document.addEventListener('DOMContentLoaded', () => {
  const dragZones = document.querySelectorAll('.drag_file_field');

  dragZones.forEach((dropZone) => {
    const dropzoneID = dropZone.getAttribute('data-dropzone');
    const fileNameElement = dropZone.querySelector('.file-name');
    const inputFile = document.querySelector(`input.file-input[data-dropzone="${dropzoneID}"]`);

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('drag_over');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('drag_over');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('drag_over');

      const files = e.dataTransfer.files;
      handleFiles(files, dropzoneID, fileNameElement);
    });

    const triggerFileInput = () => {
      inputFile.click();
    };

    dropZone.addEventListener('click', triggerFileInput);

    inputFile.addEventListener('change', () => {
      const files = inputFile.files;
      handleFiles(files, dropzoneID, fileNameElement);
    });

    function handleFiles(files, dropzoneID, fileNameElement) {
      for (const file of files) {
        if (file.type.startsWith('image/')) {
          console.log(`Arquivo para ${dropzoneID}:`);
          console.log('Nome do arquivo:', file.name);
          console.log('Tipo do arquivo:', file.type);
          console.log('Tamanho do arquivo:', file.size, 'bytes');

          fileNameElement.classList.add('active_text');
          fileNameElement.textContent = file.name;
        } else {
          return alert('Por favor, solte apenas arquivos de imagem.');
        }
      }
    }
  });
});
