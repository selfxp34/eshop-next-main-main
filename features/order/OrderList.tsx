"use client";

import React from "react";
import { useGetOrder, useRemoveFromOrder } from "./use-order";
import ClearDialog from "../clearDialog/ClearDialog";
import { Button } from "@/components/ui/button";

export default function OrderList() {
  const { orders, isLoading, isError } = useGetOrder();
  const { mutate: removeFromOrder } = useRemoveFromOrder();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while loading orders.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Список заказов</h1>
      {orders &&
        orders.map((orderItem) => (
          <div
            key={orderItem.id}
            className="border border-gray-300 rounded p-4 mb-4"
          >
            <p className="font-bold">Order ID: {orderItem.id}</p>
            <p>User ID: {orderItem.userId}</p>
            <p>
              Дата: {new Date(orderItem.createdAt).toLocaleDateString()}{" "}
              {new Date(orderItem.createdAt).toLocaleTimeString()}
            </p>
            <p>Общая сумма: {orderItem.total} $</p>
            <p>Адрес: {orderItem.address}</p>
            <div>
              <ClearDialog
                dialogDescription="order list"
                onClear={() => {
                  removeFromOrder({ orderId: orderItem.id });
                }}
              >
                <Button size={"default"} variant={"destructive"}>
                  Очистить
                </Button>
              </ClearDialog>
            </div>
            <h2 className="text-lg font-bold mt-4 mb-2">Список:</h2>
            {orderItem.items.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded p-2 mb-2"
              >
                <p className="font-bold">Item ID: {item.id}</p>
                <p>Количество: {item.quantity}</p>
                <p>Сумма: {item.price} $</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
