"use client";
import React, { useEffect, useState } from "react";

export default function FavoritesPageApp() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    // Здесь вы можете вызвать функцию или отправить запрос на сервер для получения списка избранных товаров
    // и установить его в состояние favoriteProducts
    const fetchFavoriteProducts = async () => {
      try {
        // Здесь выполняется запрос на сервер или другая логика для получения списка избранных товаров
        // и сохранение их в переменную response

        // Пример получения избранных товаров с сервера
        const response = await fetch("/api/favorites");
        const data = await response.json();

        // Установка полученных избранных товаров в состояние
        setFavoriteProducts(data);
      } catch (error) {
        console.error("Ошибка при получении избранных товаров:", error);
      }
    };

    fetchFavoriteProducts();
  }, []);

  return (
    <div>
      <h1>Избранные товары</h1>
      {favoriteProducts.length > 0 ? (
        <ul>
          {favoriteProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>Список избранных товаров пуст</p>
      )}
    </div>
  );
}
