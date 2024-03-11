import { useState } from 'react';
import {Button, Form, Input} from 'antd';

const AddToCartForm = ({ id, title, addToCart }) => {
  const formAction = async (formData) => {
    try {
      await addToCart(formData, title);
    } catch (e) {
      // show error notification
    }
  };
  // const formAction = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   try {
  //     await addToCart(formData, title);
  //   } catch (e) {
  //     // show error notification
  //   }
  // };
  return (
    <Form onFinish={formAction}>
      <h2>{title}</h2>
      <Input type="hidden" name="itemID" value={id} />
      <Button htmlType="submit">加入购物车</Button>
    </Form>
  );
};

type Item = {
  id: string;
  title: string;
};

const Cart = ({ cart }: { cart: Item[] }) => {
  if (cart.length == 0) {
    return null;
  }
  return (
    <>
      购物车内容:
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <hr />
    </>
  );
};

export const App = () => {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCart = async (formData, title) => {
    const id = String(formData.get('itemID'));
    // 模拟一个 AJAX 请求
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCart((cart: Item[]) => [...cart, { id, title }]);

    return { id };
  };

  return (
    <>
      <Cart cart={cart} />
      <AddToCartForm id="2" title="商品" addToCart={addToCart} />
    </>
  );
};
