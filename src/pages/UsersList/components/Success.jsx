import React from 'react'

export const Success = ({ inviteList, users }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>
        {inviteList.length === users.length ? "Всем " : inviteList.length + ' '}
        пользователям отправлено приглашение.
      </p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};