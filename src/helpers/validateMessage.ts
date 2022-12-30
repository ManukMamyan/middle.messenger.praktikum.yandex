const validateMessage = (login?: string) => {
  if (!login) {
    return 'Вы не можете отправить пустое сообщение';
  }

  return '';
};

export default validateMessage;
