// Validação simples e simulação de envio
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('projectForm');
  const msg = document.getElementById('formMessage');
  const submitBtn = form.querySelector('.submit');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    msg.textContent = '';

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      type: form.type.value,
      description: form.description.value.trim()
    };

    // Validações simples
    if(!data.name || !data.email || !data.type || !data.description){
      msg.textContent = 'Por favor, preencha todos os campos.';
      msg.style.color = '#FFB4C6';
      return;
    }
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)){
      msg.textContent = 'Insira um e-mail válido.';
      msg.style.color = '#FFB4C6';
      return;
    }

    // Feedback de envio (simulado)
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';

    setTimeout(()=>{
      submitBtn.textContent = 'Pronto!';
      msg.textContent = 'Obrigado! Recebemos seu pedido. Em breve entraremos em contato.';
      msg.style.color = '#A6FF4D';
      form.reset();
      setTimeout(()=>{
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        msg.textContent = '';
      },3200);
    },1400);
  });
});
