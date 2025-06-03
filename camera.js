document.getElementById('dicasDeMaquiagem').addEventListener('click', () => {
  const video = document.createElement('video');
  video.autoplay = true;
  video.style.width = '100%';
  video.style.maxWidth = '500px';
  video.style.borderRadius = '1rem';
  video.style.margin = '20px auto';
  video.style.display = 'block';

  const footer = document.querySelector('footer'); // Seleciona o footer

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      // Adiciona o vídeo antes do footer
      footer.parentNode.insertBefore(video, footer);

      // Botão para fechar a câmera
      const closeButton = document.createElement('button');
      closeButton.innerText = 'Fechar Câmera';
      closeButton.style.display = 'block';
      closeButton.style.margin = '10px auto';
      closeButton.style.padding = '10px 20px';
      closeButton.style.backgroundColor = '#be123c';
      closeButton.style.color = 'white';
      closeButton.style.border = 'none';
      closeButton.style.borderRadius = '0.75rem';
      closeButton.style.cursor = 'pointer';

      // Insere o botão antes do footer também
      footer.parentNode.insertBefore(closeButton, footer);

      closeButton.addEventListener('click', () => {
        stream.getTracks().forEach(track => track.stop());
        video.remove();
        closeButton.remove();
      });

    })
    .catch(err => {
      alert('Erro ao acessar a câmera: ' + err.message);
    });
});
