import React, { useState } from "react";

export default function FeedbackForm() {
  return (
    <div
      className="p-8 rounded-md mx-auto h-screen"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h2 className="text-2xl mb-4 text-center">Форма обратной связи</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            className="bg-white rounded-md px-4 py-2 w-full border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="bg-white rounded-md px-4 py-2 w-full border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Сообщение:</label>
          <textarea
            id="message"
            className="bg-white rounded-md px-4 py-2 w-full border border-gray-300"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-900 text-white rounded-md px-3 py-2"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
