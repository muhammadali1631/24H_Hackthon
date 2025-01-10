"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { TbShoppingBagCheck } from "react-icons/tb";
const CartIcon = ({ id, add,}: { id: string; add?: string; }) => {
  const [cart, setCart] = useState<string[]>([]);
  useEffect(() => {
    const Cart = localStorage.getItem("cartItem");
    if (Cart) {
      setCart(JSON.parse(Cart));
    }
  }, []);
  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cartItem", JSON.stringify(cart));
    }
  }, [cart]);

  const addCart = (id: string) => {
    setCart([...cart, id ]);
  };

   const delCart = (id: string) => {
    const cartItem = cart.filter((faID: string) => id !== faID);
    setCart(cartItem);
    if (cartItem.length === 0) {
      localStorage.setItem("cartItem", JSON.stringify([]));
    }
  };
  return (
    <div>
      {add ? (
        <button
          type="button"
          className="px-4 rounded-full py-2 border-[1px] border-black text-white bg-black font-bold hover:text-black hover:bg-white duration-300"
          onClick={() => addCart(id)}
        >
          Add to cart
        </button>
      ) : (
        <div className="p-2 bg-white rounded-full cursor-pointer">
          {cart.includes(id) ? (
            <TbShoppingBagCheck
              onClick={() => delCart(id)}
              className="text-2xl"
            />
          ) : (
            <AiOutlineShopping
              onClick={() => addCart(id)}
              className="text-2xl"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
